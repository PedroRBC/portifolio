import { describe, expect, test } from "bun:test";
import { fetchPublicRepositories, type GitHubFetch } from "./github";

function apiRepository(id: number) {
  return {
    id,
    name: `project-${id}`,
    description: null,
    html_url: `https://github.com/example/project-${id}`,
    homepage: null,
    topics: ["portfolio"],
    language: "TypeScript",
    stargazers_count: id,
    forks_count: 0,
    updated_at: "2025-02-01T00:00:00Z",
  };
}

function jsonResponse(payload: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: { "content-type": "application/json", ...init?.headers },
    ...init,
  });
}

describe("fetchPublicRepositories", () => {
  test("fetches all public pages with cache and timeout options", async () => {
    const calls: { url: URL; init?: RequestInit }[] = [];
    const fetcher: GitHubFetch = async (input, init) => {
      const url = new URL(input.toString());
      calls.push({ url, init });
      return jsonResponse(
        url.searchParams.get("page") === "1"
          ? Array.from({ length: 100 }, (_, index) => apiRepository(index + 1))
          : [apiRepository(101)],
      );
    };

    const result = await fetchPublicRepositories(" example-user ", fetcher);

    expect(result.error).toBeNull();
    expect(result.repositories).toHaveLength(101);
    expect(result.repositories[0]?.id).toBe(1);
    expect(result.repositories[100]?.id).toBe(101);
    expect(calls.map(({ url }) => url.href)).toEqual([
      "https://api.github.com/users/example-user/repos?per_page=100&page=1",
      "https://api.github.com/users/example-user/repos?per_page=100&page=2",
    ]);
    expect(calls[0]?.init?.headers).toEqual({ Accept: "application/vnd.github+json" });
    expect(calls[0]?.init?.signal).toBeInstanceOf(AbortSignal);
    expect((calls[0]?.init as RequestInit & { next: { revalidate: number } }).next).toEqual({ revalidate: 3600 });
  });

  test("stops after an empty page and handles usernames safely", async () => {
    const requested: string[] = [];
    const fetcher: GitHubFetch = async (input) => {
      requested.push(new URL(input.toString()).href);
      return jsonResponse([]);
    };
    const result = await fetchPublicRepositories("user/name", fetcher);

    expect(result).toEqual({ repositories: [], error: null });
    expect(requested).toEqual(["https://api.github.com/users/user%2Fname/repos?per_page=100&page=1"]);
    expect(await fetchPublicRepositories("  ", fetcher)).toEqual({
      repositories: [],
      error: "A GitHub username is required.",
    });
    expect(requested).toHaveLength(1);
  });

  test("returns no partial data when a later page fails", async () => {
    let callCount = 0;
    const fetcher: GitHubFetch = async () => {
      callCount += 1;
      return callCount === 1
        ? jsonResponse(Array.from({ length: 100 }, (_, index) => apiRepository(index + 1)))
        : new Response("rate limited", {
            status: 403,
            headers: { "x-ratelimit-remaining": "0" },
          });
    };

    expect(await fetchPublicRepositories("user", fetcher)).toEqual({
      repositories: [],
      error: "GitHub API rate limit exceeded. Try again later.",
    });
    expect(callCount).toBe(2);
  });

  test("reports HTTP errors, malformed payloads, invalid items, and timeouts", async () => {
    expect(
      await fetchPublicRepositories("user", async () => new Response("missing", { status: 404 })),
    ).toEqual({ repositories: [], error: "GitHub API request failed (404)." });
    expect(await fetchPublicRepositories("user", async () => jsonResponse({ message: "not a list" }))).toEqual({
      repositories: [],
      error: "GitHub returned an invalid repository list.",
    });
    expect(await fetchPublicRepositories("user", async () => jsonResponse([apiRepository(1), {}]))).toEqual({
      repositories: [],
      error: "GitHub returned invalid repository data.",
    });
    const fullRepository = apiRepository(2);
    const lean = {
      id: fullRepository.id,
      name: fullRepository.name,
      html_url: fullRepository.html_url,
      description: fullRepository.description,
      homepage: fullRepository.homepage,
      topics: fullRepository.topics,
      language: fullRepository.language,
    };
    expect(await fetchPublicRepositories("user", async () => jsonResponse([lean]))).toEqual({
      repositories: [],
      error: "GitHub returned invalid repository data.",
    });
    expect(
      await fetchPublicRepositories("user", async () => {
        throw new DOMException("timed out", "TimeoutError");
      }),
    ).toEqual({ repositories: [], error: "GitHub request timed out." });
  });

  test("fails explicitly when pagination reaches its safety cap", async () => {
    let callCount = 0;
    const fetcher: GitHubFetch = async () => {
      callCount += 1;
      const start = (callCount - 1) * 100 + 1;
      return jsonResponse(Array.from({ length: 100 }, (_, index) => apiRepository(start + index)));
    };

    const result = await fetchPublicRepositories("user", fetcher);
    expect(result.repositories).toEqual([]);
    expect(result.error).toContain("exceeded the safety limit of 10 pages");
    expect(callCount).toBe(10);
  });
});
