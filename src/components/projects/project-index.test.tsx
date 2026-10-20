import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { ProjectIndex } from "./project-index";
import { ProjectArtwork } from "./project-artwork";
import { getSelectedRepository, type Repository } from "@/lib/projects";

const habits: Repository = {
  id: 1,
  name: "habits",
  description: "Uma descrição real do projeto.",
  htmlUrl: "https://github.com/PedroRBC/habits",
  homepage: "https://example.com/habits",
  topics: ["portfolio", "typescript", "react"],
  language: "TypeScript",
  stars: 0,
  forks: 0,
  updatedAt: "2026-01-01T00:00:00Z",
  banners: [],
};
const paldex: Repository = {
  ...habits,
  id: 2,
  name: "PalDex",
  htmlUrl: "https://github.com/PedroRBC/PalDex",
  homepage: null,
};

describe("ProjectIndex", () => {
  test("selects the first project with native buttons connected to the preview", () => {
    const html = renderToStaticMarkup(<ProjectIndex repositories={[habits, paldex]} />);
    expect(html.match(/aria-pressed="true"/g)).toHaveLength(1);
    expect(html.match(/aria-pressed="false"/g)).toHaveLength(1);
    expect(html).toContain('type="button"');
    expect(html).toContain('aria-controls=');
    expect(html).toContain('aria-label="Selecionar habits"');
    expect(html).toContain('aria-label="Selecionar PalDex"');
    expect(html).toContain('aria-label="Prévia do projeto selecionado"');
    expect(html).toContain("Uma descrição real do projeto.");
  });

  test("keeps source and demo navigation separate from selection", () => {
    const html = renderToStaticMarkup(<ProjectIndex repositories={[habits]} />);
    expect(html).toContain('href="https://github.com/PedroRBC/habits"');
    expect(html).toContain('href="https://example.com/habits"');
    expect(html).toContain('rel="noopener noreferrer"');
    expect(html).toContain("typescript");
    expect(html).not.toContain(">portfolio<");
  });

  test("places each project's source and demo before the next selection button in keyboard order", () => {
    const html = renderToStaticMarkup(<ProjectIndex repositories={[habits, paldex]} />);
    const firstRow = html.slice(html.indexOf('aria-label="Selecionar habits"'), html.indexOf('aria-label="Selecionar PalDex"'));
    expect(firstRow).toContain('href="https://github.com/PedroRBC/habits"');
    expect(firstRow).toContain('href="https://example.com/habits"');
    expect(firstRow).not.toContain('tabindex="-1"');
  });

  test("handles missing metadata and long names without inventing a demo", () => {
    const name = "a-long-repository-name-that-must-remain-readable-on-a-phone";
    const html = renderToStaticMarkup(<ProjectIndex repositories={[{ ...habits, name, description: null, homepage: null, topics: [] }]} />);
    expect(html).toContain(name);
    expect(html).toContain("Explore o código e os detalhes no GitHub.");
    expect(html).not.toContain('href="https://example.com/habits"');
    expect(html).not.toContain("undefined");
  });

  test("renders a recovery path instead of a broken preview for an empty list", () => {
    const html = renderToStaticMarkup(<ProjectIndex repositories={[]} />);
    expect(html).toContain("Explorar no GitHub");
    expect(html).not.toContain('aria-pressed="true"');
    expect(html).not.toContain("undefined");
  });
});

describe("getSelectedRepository", () => {
  test("keeps the selected id when order changes and falls back when it disappears", () => {
    expect(getSelectedRepository([paldex, habits], 1)?.name).toBe("habits");
    expect(getSelectedRepository([paldex], 1)?.name).toBe("PalDex");
    expect(getSelectedRepository([habits], null)?.name).toBe("habits");
    expect(getSelectedRepository([], 1)).toBeNull();
  });
});

describe("ProjectArtwork", () => {
  test("uses a real banner with meaningful alternative text", () => {
    const html = renderToStaticMarkup(<ProjectArtwork repository={{ ...habits, banners: ["https://example.com/banner.png"] }} />);
    expect(html).toContain('src="https://example.com/banner.png"');
    expect(html).toContain('alt="Prévia do projeto habits"');
  });

  test("uses HomeCare's official feature graphic when the feed has no public banner", () => {
    const html = renderToStaticMarkup(<ProjectArtwork repository={{ ...habits, name: "HomeCare" }} />);
    expect(html).toContain('src="https://raw.githubusercontent.com/PedroRBC/HomeCare/master/docs/google-play/assets/feature-graphic-1024x500.png"');
    expect(html).toContain('alt="Prévia do projeto HomeCare"');
  });

  test("prefers a discovered HomeCare banner over the configured fallback", () => {
    const html = renderToStaticMarkup(<ProjectArtwork repository={{ ...habits, name: "HomeCare", banners: ["https://example.com/new-homecare-banner.png"] }} />);
    expect(html).toContain('src="https://example.com/new-homecare-banner.png"');
    expect(html).not.toContain("feature-graphic-1024x500.png");
  });

  test("uses the project name rather than a fabricated screenshot when no banner exists", () => {
    const html = renderToStaticMarkup(<ProjectArtwork repository={habits} />);
    expect(html).toContain("habits");
    expect(html).not.toContain("<img");
  });
});
