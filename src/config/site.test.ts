import { describe, expect, test } from "bun:test";
import { siteConfig } from "./site";
import { getFeaturedRepositories, normalizeRepository, type Repository } from "@/lib/projects";

function repository(id: number, name: string): Repository {
  return normalizeRepository({
    id,
    name,
    html_url: `https://github.com/PedroRBC/${name}`,
    topics: ["portfolio"],
  })!;
}

describe("featured project configuration", () => {
  test("makes HomeCare the first selected project even when the feed arrives in a different order", () => {
    const feed = [
      repository(1, "habits"),
      repository(2, "PalDex"),
      repository(3, "paldex-api"),
      repository(4, "ValorantDex"),
      repository(5, "HomeCare"),
    ];
    const visible = getFeaturedRepositories(feed, siteConfig.github.featured).slice(0, 4);
    expect(visible.map(({ name }) => name)).toEqual(["HomeCare", "habits", "PalDex", "paldex-api"]);
    expect(visible[0].htmlUrl).toBe("https://github.com/PedroRBC/HomeCare");
  });

  test("retains existing projects when HomeCare is temporarily absent from GitHub", () => {
    const visible = getFeaturedRepositories([
      repository(2, "PalDex"),
      repository(1, "habits"),
    ], siteConfig.github.featured);
    expect(visible.map(({ name }) => name)).toEqual(["habits", "PalDex"]);
  });
});
