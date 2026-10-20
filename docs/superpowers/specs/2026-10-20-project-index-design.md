# Portfolio redesign: The project index

## Approved direction

The user chose **B, The project index**, on 2026-10-20, following interactive browser mockups. Reference: `.impeccable/mocks/decision/project-index.html`; captured desktop reference: `/tmp/portfolio-index-verified.png`. This is a code-led redesign, not an image-comp reproduction.

The user wants a solid and direct portfolio for their projects, with some animation and a clear personality. They explicitly confirmed preserving identity, factual content, routes and GitHub integration. The existing Portuguese copy stays.

## Visitor experience

The first screen identifies Pedro and immediately exposes the selected projects. A short introduction sits beside a compact project list. A wide preview below the list changes when a project is hovered, focused with the keyboard, or tapped. The work, not animation or a giant introduction, leads the page.

On a narrow screen, the introduction, list and preview stack in that order. Each project remains selectable without hover. The selected project's real name, description, topics, source link and available demo link remain readable and actionable. Source/demo navigation is separate from selection, so selecting a project never unexpectedly leaves the page.

## Visual system

- Archivo variable sans-serif, self-hosted, for the display and body voice; retain a mono face only for actual code or data where already needed.
- Approved light canvas approximately `#f7f7f3`, foreground `#202324`, secondary ink `#62665e`, separators `#dedfd7`, cobalt accent `#3554d8`.
- Provide a matching dark theme, approximately `#222623` with light foreground and accessible blue accents. Preserve saved theme preferences; use the approved light rendition for new visitors.
- Desktop content width approximately 1200px plus fluid side gutters; compact shared masthead, text wordmark `pedro rbc.`, clean navigation, visible theme control.
- Large but bounded introductory heading, around 70px on desktop and 48–52px on phones; tracking no tighter than -0.04em. No decorative section numbers, technical-costume labels, or eyebrow headings.
- Project rows use dividers and generous hit areas rather than rounded cards. Preview image and project metadata form one clear composition. Use real repository banners when available; a legible name-led colour field is the honest fallback, not a fabricated UI screenshot.
- Supporting about/skills content and the contact/footer retain the original information in a quieter, compact treatment. Apply the same visual language to `/projects` and `/about`.

## Motion and accessibility

One main authored moment: selection updates the preview with a short, subtle transition (roughly 250–450ms), a small row/arrow movement, and no autoplay. Content is visible before animation. Avoid looping effects, scroll trapping, elaborate cursor effects and animation dependencies.

Respect `prefers-reduced-motion`. Use native buttons for selection, explicit selected state, meaningful accessible names, visible focus, and a labelled preview region. Native links remain links. Do not hijack arrow keys or add tab semantics without implementing the full tab pattern. Maintain accessible mobile navigation, escape-to-close and focus return, skip link, colour contrast, and theme persistence.

## Data and state constraints

Keep the existing `github-automated-repos` feed, `portfolio` topic, normalization, configured ordering and retry behavior. Home should show up to four available selected repositories, not invent missing projects. Preserve the server-side public repository fetching and its cache/timeout semantics.

The introduction remains visible during loading, errors and an empty feed. Use loading placeholders with a stable footprint and accessible status. Failures show the existing recovery copy, retry, and GitHub link. A broken or absent banner falls back to typographic artwork; a failure for one repository must not suppress a different repository's banner. If refreshed data no longer contains the selected id, display the first remaining project. Long names/descriptions/topics must wrap without horizontal overflow.

Preserve repository search, topic filtering, sort, reset, counts, and no-results recovery on `/projects`. Do not add project metrics, invented commercial claims or synthetic product screenshots.

## Technical boundaries

Next.js 16.4 / React 19.3 / Tailwind CSS 4.3 / TypeScript 6 / Bun as already declared. Read the installed Next.js guides before changing framework code. No animation library or framework replacement. Prefer small client boundaries for the index and keep page content server-rendered where possible. No fetcher rewrites or new API.

Preserve `/`, `/projects`, `/about`, `/maintenance`, `/homecare/privacy`, and `/homecare/data-deletion`, metadata/canonical behavior, and maintenance access exceptions for the HomeCare legal pages. Legal document text is outside the redesign scope; shared typography and colours may naturally apply.

## Verification and finish

Run existing tests, new selection/rendering tests, lint, typecheck and production build. Browser-check 390px, 768px and 1440px layouts, both themes, project hover/focus/tap, missing images, loading/error/empty states, mobile menu, filters and reduced motion. Compare the homepage with the approved mockup, allowing real GitHub content to replace the mockup's labelled placeholders.

A fresh reviewer checks the rendered design and a fresh code review checks correctness. Finish by documenting the shipped system in `DESIGN.md` and `.impeccable/design.json`. Report failed or unverified checks plainly. No commits, pushes or pull requests unless requested.
