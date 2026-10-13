import {
  getSafeHttpUrl,
  normalizeRepository,
  type Repository,
} from "@/lib/projects";

const PER_PAGE = 100;
const MAX_PAGES = 10;
const REQUEST_TIMEOUT_MS = 10_000;

export type PublicRepositoriesResult = {
  repositories: Repository[];
  error: string | null;
};

type CachedRequestInit = RequestInit & { next: { revalidate: number } };
export type GitHubFetch = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.name === "TimeoutError") {
    return "GitHub request timed out.";
  }
  if (error instanceof Error && error.name === "AbortError") {
    return "GitHub request was aborted after timing out.";
  }
  return "Unable to load repositories from GitHub.";
}

function httpError(response: Response): string {
  if (response.status === 403 || response.status === 429) {
    const remaining = response.headers.get("x-ratelimit-remaining");
    if (response.status === 429 || remaining === "0") {
      return "GitHub API rate limit exceeded. Try again later.";
    }
  }
  return `GitHub API request failed (${response.status}).`;
}

function isFullGitHubRepository(value: unknown): boolean {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const record = value as Record<string, unknown>;
  const requiredFields = [
    "id",
    "name",
    "html_url",
    "description",
    "homepage",
    "topics",
    "language",
    "stargazers_count",
    "forks_count",
    "updated_at",
  ];
  if (!requiredFields.every((field) => Object.hasOwn(record, field))) return false;
  if (record.description !== null && typeof record.description !== "string") return false;
  if (record.homepage !== null && typeof record.homepage !== "string") return false;
  if (
    typeof record.homepage === "string" &&
    record.homepage !== "" &&
    getSafeHttpUrl(record.homepage) === null
  ) {
    return false;
  }
  if (!Array.isArray(record.topics) || !record.topics.every((topic) => typeof topic === "string")) {
    return false;
  }
  return record.language === null || typeof record.language === "string";
}

/** Fetch all public repositories. The optional fetcher keeps the paging layer easy to test. */
export async function fetchPublicRepositories(
  username: string,
  fetcher: GitHubFetch = fetch,
): Promise<PublicRepositoriesResult> {
  const account = username.trim();
  if (!account) {
    return { repositories: [], error: "A GitHub username is required." };
  }

  const repositories: Repository[] = [];
  try {
    for (let page = 1; page <= MAX_PAGES; page += 1) {
      const url = new URL(`https://api.github.com/users/${encodeURIComponent(account)}/repos`);
      url.searchParams.set("per_page", String(PER_PAGE));
      url.searchParams.set("page", String(page));

      const init: CachedRequestInit = {
        headers: { Accept: "application/vnd.github+json" },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
        next: { revalidate: 3600 },
      };
      const response = await fetcher(url, init);
      if (!response.ok) {
        return { repositories: [], error: httpError(response) };
      }

      const payload: unknown = await response.json();
      if (!Array.isArray(payload)) {
        return { repositories: [], error: "GitHub returned an invalid repository list." };
      }

      const pageRepositories: Repository[] = [];
      for (const item of payload) {
        const repository = isFullGitHubRepository(item) ? normalizeRepository(item) : null;
        if (!repository) {
          return { repositories: [], error: "GitHub returned invalid repository data." };
        }
        pageRepositories.push(repository);
      }

      repositories.push(...pageRepositories);
      if (pageRepositories.length < PER_PAGE) {
        return { repositories, error: null };
      }
    }

    return {
      repositories: [],
      error: `GitHub repository pagination exceeded the safety limit of ${MAX_PAGES} pages.`,
    };
  } catch (error) {
    return { repositories: [], error: errorMessage(error) };
  }
}

export async function getPublicRepositories(
  username: string,
): Promise<PublicRepositoriesResult> {
  return fetchPublicRepositories(username);
}
