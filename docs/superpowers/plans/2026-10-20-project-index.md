# Project Index Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio around the approved B mockup: direct project browsing, a changing preview, restrained motion and consistent supporting pages.

**Architecture:** Keep the existing GitHub feed and server repository fetcher. Add an index variant to `FeaturedProjects`, rendering project rows and a full-width preview as grid children beside the server-rendered homepage introduction. Shared presentation tokens, navigation, footer and supporting page treatments carry the new visual language throughout the site.

**Tech Stack:** Next.js 16.4, React 19.3, Tailwind CSS 4.3, TypeScript 6, Bun, Lucide, next-themes. No new animation or UI dependencies.

**Spec:** `docs/superpowers/specs/2026-10-20-project-index-design.md`

## Global Constraints

- Preserve existing Portuguese copy, project facts, identity, routes and GitHub integration.
- No animation library or framework replacement. No fetcher rewrites or new API.
- Keep legal documents unchanged; preserve theme persistence, reduced motion and accessible navigation.
- Use real repository banners or an honest typographic fallback, never fabricated screenshots.
- No commits, pushes or pull requests unless requested.

## Review Focus

- Empty, loading or failed GitHub feed: introduction stays visible, recovery remains accessible.
- Selected id missing after refresh: first available repository becomes the preview; no stale link.
- Broken banner followed by a different project: fallback is isolated to the failed URL/project.
- Long repository names and topics at 390px: no horizontal overflow or clipped links.
- Keyboard/touch and reduced motion: project selection works without hover and never unexpectedly navigates.

---

### Task 1: Accessible project index and preview

**Files:**
- Create: `src/components/projects/project-index.tsx`
- Create: `src/components/projects/project-artwork.tsx`
- Create: `src/components/projects/project-index.test.tsx`
- Modify: `src/components/projects/featured-projects.tsx`
- Modify: `src/components/projects/project-state.tsx`

**Interfaces:**
- Consumes: normalized `Repository[]`, `siteConfig.github.featured`, existing loading/error/retry behavior.
- Produces: `ProjectIndex({ repositories }: { repositories: Repository[] })`, `ProjectArtwork({ repository, className? }: { repository: Repository; className?: string })`, and `FeaturedProjects({ limit?, variant? }: { limit?: number; variant?: "grid" | "index" })`.
- `ProjectIndex` renders two sibling grid children: labelled native selection buttons with `aria-pressed`, then a full-span preview region with description/topics/source/demo links. Selection stores repository id and falls back to the first available item if that id disappears.

- [ ] Write Bun tests using React server rendering for initial index markup, selected state, source/demo URLs, missing descriptions and images, long names, and the empty list. Add a small pure selection helper in `src/lib/projects.ts` only if needed to test refreshed-list behavior; otherwise verify refresh using the browser harness.
- [ ] Run `bun test src/components/projects/project-index.test.tsx`; confirm failure before implementation.
- [ ] Implement index and artwork. Native mouse enter/focus/click select a repository. Use the current id or first available item. Key artwork by repository id so failed-image state cannot leak. Use `next/image` with `unoptimized` consistently with the existing banners.
- [ ] Add `variant="index"` handling to the existing feed, including index-shaped skeleton and preserved error/empty/retry behavior. Keep the default grid behavior for `/projects`.
- [ ] Run the new tests and all existing `bun test` tests.

### Task 2: Approved visual system and homepage

**Files:**
- Modify: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`
- Modify: `src/components/header.tsx`, `src/components/footer.tsx`, `src/providers/index.tsx`
- Modify: `.gitignore` for development-only generated previews/review captures

**Interfaces:**
- Consumes: Task 1 index variant placed as siblings of `.home-intro` in `.home-layout`.
- Produces: the B composition, shared Archivo font, accessible light/dark palette, coherent masthead and footer, responsive and reduced-motion styles.

- [ ] Read installed Next.js server/client, font and CSS guides. Install locked dependencies; keep the lockfile unchanged.
- [ ] Baseline `bun test`, `bun run lint`, `bun run typecheck` before production edits.
- [ ] Apply the mockup's neutral canvas, ink, cobalt and divider tokens; self-host Archivo with `next/font`. Keep existing semantic tokens compatible with other routes.
- [ ] Build the homepage intro/index/preview composition and compact about/skills section. Preserve original content and contact destination. Default new visitors to light while keeping saved preferences.
- [ ] Rebuild the wordmark/navigation/footer in the approved language, preserving active state, mobile menu close/focus behavior, skip link and legal links.
- [ ] Add selection transition, focus/hover treatment, name-led artwork fallback, mobile grid rules, browser selection/scrollbar/caret theming and reduced-motion overrides. Ensure default content is visible without entrance animation.
- [ ] Run lint/typecheck/tests and inspect real page at desktop and mobile widths.

### Task 3: Supporting pages, regression checks and finish

**Files:**
- Modify: `src/app/projects/page.tsx`, `src/app/about/page.tsx`
- Modify: `src/components/projects/project-card.tsx`, `src/components/projects/repository-explorer.tsx`
- Modify: `src/components/profile-card.tsx`, `src/components/contact-section.tsx`
- Create: `DESIGN.md`, `.impeccable/design.json` via finished-build documentation

**Interfaces:**
- Consumes: shared tokens/artwork and unchanged repository explorer state/data interfaces.
- Produces: consistent `/projects` and `/about`, preserved legal routes, verified build and documented design.

- [ ] Restyle selected project cards, repository list, filter controls, about/profile/skills and contact section to match B. Remove decorative numbering/eyebrows and undersized mono labels; do not alter factual/legal copy.
- [ ] Browser-check selection by hover/focus/tap, theme toggle and persistence, mobile menu/escape/focus, navigation, filters/sort/reset, long text, absent/broken banner, loading/error/empty and reduced motion at 390px, 768px and 1440px. Use controlled local fixtures where GitHub cannot supply a state; do not ship fixtures.
- [ ] Run `bun test`, `bun run lint`, `bun run typecheck`, `bun run build` and retain actual output. Record any environment limitations, including the installed Node version differing from the declared `24.x` (scripts execute through Bun).
- [ ] Capture desktop/mobile/screenshots for a fresh finish reviewer. Apply material review findings in a batch and recapture as necessary. Obtain a fresh correctness review of the diff.
- [ ] Document the finished system in `DESIGN.md` and `.impeccable/design.json`; preserve provenance for existing assets. Check git diff/status and report the result without committing.
