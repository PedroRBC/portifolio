import { describe, expect, test } from "bun:test";
import {
  filterRepositories,
  getFeaturedRepositories,
  getRepositoryTopics,
  getSafeHttpUrl,
  normalizeRepository,
  type Repository,
} from "./projects";

function repo(overrides: Partial<Repository> = {}): Repository {
  return {
    id: 1,
    name: "Alpha",
    description: "A sample project",
    htmlUrl: "https://github.com/example/alpha",
    homepage: null,
    topics: ["typescript"],
    language: "TypeScript",
    stars: 0,
    forks: 0,
    updatedAt: "2025-01-01T00:00:00Z",
    banners: [],
    ...overrides,
  };
}

describe("getSafeHttpUrl", () => {
  test("accepts normalized HTTP(S) URLs only", () => {
    expect(getSafeHttpUrl(" https://example.com/path ")).toBe("https://example.com/path");
    expect(getSafeHttpUrl("http://example.com")).toBe("http://example.com/");
    expect(getSafeHttpUrl("javascript:alert(1)")).toBeNull();
    expect(getSafeHttpUrl("data:text/html,hello")).toBeNull();
    expect(getSafeHttpUrl("//example.com")).toBeNull();
    expect(getSafeHttpUrl("https://user:password@example.com/path")).toBeNull();
    expect(getSafeHttpUrl("not a url")).toBeNull();
    expect(getSafeHttpUrl(null)).toBeNull();
  });
});

describe("normalizeRepository", () => {
  test("normalizes GitHub API fields and filters unsafe banners", () => {
    expect(
      normalizeRepository({
        id: 42,
        name: " demo ",
        description: null,
        html_url: "https://github.com/example/demo",
        homepage: "javascript:alert(1)",
        topics: ["web", 2, "design"],
        language: "TypeScript",
        stargazers_count: 5,
        forks_count: 3,
        updated_at: "2025-04-03T12:00:00Z",
        banner: ["https://cdn.example/banner.png", "data:image/png,unsafe"],
      }),
    ).toEqual({
      id: 42,
      name: "demo",
      description: null,
      htmlUrl: "https://github.com/example/demo",
      homepage: null,
      topics: ["web", "design"],
      language: "TypeScript",
      stars: 5,
      forks: 3,
      updatedAt: "2025-04-03T12:00:00Z",
      banners: ["https://cdn.example/banner.png"],
    });
  });

  test("accepts the upstream library lean shape with safe metadata defaults", () => {
    expect(
      normalizeRepository({
        id: 7,
        name: "lean-project",
        html_url: "https://github.com/example/lean-project",
        description: "A lean library record",
        homepage: "https://example.com/lean-project",
        topics: ["portfolio", "web"],
        banner: ["https://cdn.example/lean-project.png"],
      }),
    ).toEqual({
      id: 7,
      name: "lean-project",
      description: "A lean library record",
      htmlUrl: "https://github.com/example/lean-project",
      homepage: "https://example.com/lean-project",
      topics: ["portfolio", "web"],
      language: null,
      stars: 0,
      forks: 0,
      updatedAt: "1970-01-01T00:00:00.000Z",
      banners: ["https://cdn.example/lean-project.png"],
    });
  });

  test("accepts the normalized library shape and returns null for malformed required data", () => {
    expect(
      normalizeRepository({
        ...repo({ banners: ["https://images.example/banner.jpg"] }),
        htmlUrl: "https://github.com/example/alpha",
      }),
    ).toEqual(repo({ banners: ["https://images.example/banner.jpg"] }));
    expect(normalizeRepository(null)).toBeNull();
    expect(normalizeRepository([])).toBeNull();
    expect(normalizeRepository({ ...repo(), id: "1" })).toBeNull();
    expect(normalizeRepository({ ...repo(), html_url: "file:///tmp/repo" })).toBeNull();
    expect(normalizeRepository({ ...repo(), updated_at: 3 })).toBeNull();
    expect(normalizeRepository({ ...repo(), updatedAt: "not a date" })).toBeNull();
    expect(normalizeRepository({ ...repo(), stargazers_count: -1 })).toBeNull();
  });
});

describe("repository helpers", () => {
  const repositories = [
    repo({ id: 1, name: "zeta", description: "A graphics tool", topics: ["TypeScript", "graphics"], stars: 4, updatedAt: "2024-01-01T00:00:00Z" }),
    repo({ id: 2, name: "Beta", description: null, topics: ["web"], stars: 12, updatedAt: "2025-01-01T00:00:00Z" }),
    repo({ id: 3, name: "alpha", description: "A web app", topics: ["web", "portfolio"], stars: 12, updatedAt: "2025-01-01T00:00:00Z" }),
  ];

  test("features requested matches in requested order, then remaining alphabetically", () => {
    expect(getFeaturedRepositories(repositories, ["ALPHA", "missing", "beta", "alpha"]).map((item) => item.name)).toEqual([
      "alpha",
      "Beta",
      "zeta",
    ]);
    expect(getFeaturedRepositories(repositories, []).map((item) => item.name)).toEqual([
      "alpha",
      "Beta",
      "zeta",
    ]);
  });

  test("filters by query and topic case-insensitively and sorts deterministically", () => {
    expect(filterRepositories(repositories, { query: "GRAPHICS", topic: "all", sort: "name" }).map((item) => item.name)).toEqual(["zeta"]);
    expect(filterRepositories(repositories, { query: "web", topic: "WEB", sort: "updated" }).map((item) => item.name)).toEqual([
      "alpha",
      "Beta",
    ]);
    expect(filterRepositories(repositories, { query: "", topic: "all", sort: "stars" }).map((item) => item.name)).toEqual([
      "alpha",
      "Beta",
      "zeta",
    ]);
    expect(filterRepositories(repositories, { query: "nothing", topic: "all", sort: "updated" })).toEqual([]);
  });

  test("searches the primary language even without a matching topic or description", () => {
    const repositories = [
      repo({ id: 1, name: "web-app", description: null, topics: [], language: "TypeScript" }),
      repo({ id: 2, name: "api", description: null, topics: [], language: "Go" }),
      repo({ id: 3, name: "notes", description: null, topics: [], language: null }),
    ];

    expect(filterRepositories(repositories, { query: " TYPESCRIPT ", topic: "all", sort: "name" }).map((item) => item.name)).toEqual(["web-app"]);
    expect(filterRepositories(repositories, { query: "typescript", topic: "web", sort: "name" })).toEqual([]);
    expect(filterRepositories(repositories, { query: "notes", topic: "all", sort: "name" }).map((item) => item.name)).toEqual(["notes"]);
  });

  test("returns sorted unique topics without the portfolio marker", () => {
    expect(getRepositoryTopics(repositories)).toEqual(["graphics", "TypeScript", "web"]);
  });
});
