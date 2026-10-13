export type Repository = {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  banners: string[];
};

export type RepositorySort = "updated" | "name" | "stars";

export function getSafeHttpUrl(value: unknown): string | null {
  if (typeof value !== "string" || value.trim() === "") return null;

  try {
    const url = new URL(value.trim());
    if (
      (url.protocol !== "http:" && url.protocol !== "https:") ||
      url.username !== "" ||
      url.password !== ""
    ) {
      return null;
    }
    return url.href;
  } catch {
    return null;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function nonNegativeInteger(value: unknown): number | null {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0
    ? value
    : null;
}

function readField(
  record: Record<string, unknown>,
  apiName: string,
  libraryName: string,
): { present: boolean; value: unknown } {
  if (Object.hasOwn(record, apiName)) return { present: true, value: record[apiName] };
  if (Object.hasOwn(record, libraryName)) return { present: true, value: record[libraryName] };
  return { present: false, value: undefined };
}

function optionalString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function stringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((entry): entry is string => typeof entry === "string");
}

export function normalizeRepository(value: unknown): Repository | null {
  if (!isRecord(value)) return null;

  const id = nonNegativeInteger(value.id);
  const name = typeof value.name === "string" ? value.name.trim() : "";
  const htmlUrl = getSafeHttpUrl(value.html_url ?? value.htmlUrl);
  const updatedAtField = readField(value, "updated_at", "updatedAt");
  const starsField = readField(value, "stargazers_count", "stars");
  const forksField = readField(value, "forks_count", "forks");
  const updatedAt = updatedAtField.present
    ? updatedAtField.value
    : "1970-01-01T00:00:00.000Z";
  const stars = starsField.present ? nonNegativeInteger(starsField.value) : 0;
  const forks = forksField.present ? nonNegativeInteger(forksField.value) : 0;

  if (
    id === null ||
    name.length === 0 ||
    htmlUrl === null ||
    typeof updatedAt !== "string" ||
    updatedAt.length === 0 ||
    !Number.isFinite(Date.parse(updatedAt)) ||
    stars === null ||
    forks === null
  ) {
    return null;
  }

  const rawBanners = value.banners ?? value.banner;
  const banners = Array.isArray(rawBanners)
    ? rawBanners
        .map(getSafeHttpUrl)
        .filter((banner): banner is string => banner !== null)
    : [];

  return {
    id,
    name,
    description: optionalString(value.description),
    htmlUrl,
    homepage: getSafeHttpUrl(value.homepage),
    topics: stringArray(value.topics),
    language: optionalString(value.language),
    stars,
    forks,
    updatedAt,
    banners,
  };
}

function compareText(left: string, right: string): number {
  const leftFolded = left.toLocaleLowerCase("en");
  const rightFolded = right.toLocaleLowerCase("en");
  if (leftFolded < rightFolded) return -1;
  if (leftFolded > rightFolded) return 1;
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
}

export function getFeaturedRepositories(
  repositories: Repository[],
  names: readonly string[],
): Repository[] {
  const byName = new Map(
    repositories.map((repository) => [repository.name.toLocaleLowerCase("en"), repository]),
  );
  const featured: Repository[] = [];
  const used = new Set<number>();

  for (const name of names) {
    const repository = byName.get(name.trim().toLocaleLowerCase("en"));
    if (repository && !used.has(repository.id)) {
      featured.push(repository);
      used.add(repository.id);
    }
  }

  return featured.concat(
    repositories
      .filter((repository) => !used.has(repository.id))
      .sort((left, right) => compareText(left.name, right.name) || left.id - right.id),
  );
}

export function filterRepositories(
  repositories: Repository[],
  options: { query: string; topic: string; sort: RepositorySort },
): Repository[] {
  const query = options.query.trim().toLocaleLowerCase("en");
  const topic = options.topic.trim().toLocaleLowerCase("en");
  const filtered = repositories.filter((repository) => {
    if (
      topic !== "all" &&
      !repository.topics.some((repositoryTopic) => repositoryTopic.toLocaleLowerCase("en") === topic)
    ) {
      return false;
    }

    if (!query) return true;
    const searchable = [repository.name, repository.description ?? "", repository.language ?? "", ...repository.topics]
      .join("\n")
      .toLocaleLowerCase("en");
    return searchable.includes(query);
  });

  return filtered.sort((left, right) => {
    if (options.sort === "name") {
      return compareText(left.name, right.name) || left.id - right.id;
    }
    if (options.sort === "stars") {
      return right.stars - left.stars || compareText(left.name, right.name) || left.id - right.id;
    }
    const updated = Date.parse(right.updatedAt) - Date.parse(left.updatedAt);
    return (Number.isNaN(updated) ? 0 : updated) || compareText(left.name, right.name) || left.id - right.id;
  });
}

export function getRepositoryTopics(repositories: Repository[]): string[] {
  return [...new Set(repositories.flatMap((repository) => repository.topics))]
    .filter((topic) => topic.toLocaleLowerCase("en") !== "portfolio")
    .sort(compareText);
}
