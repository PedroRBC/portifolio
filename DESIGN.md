---
name: Pedro Rbc
description: Direct project portfolio with an independent-studio index character.
colors:
  background: "hsl(60 20% 96%)"
  foreground: "hsl(195 6% 13%)"
  primary: "hsl(229 68% 53%)"
  primary-foreground: "hsl(0 0% 100%)"
  secondary: "hsl(69 12% 89%)"
  muted: "hsl(69 10% 90%)"
  muted-foreground: "hsl(90 4% 38%)"
  accent: "hsl(229 54% 93%)"
  accent-foreground: "hsl(229 68% 42%)"
  border: "hsl(69 10% 84%)"
  input: "hsl(69 8% 73%)"
  ring: "hsl(229 68% 53%)"
  dark-background: "hsl(135 6% 14%)"
  dark-foreground: "hsl(80 20% 95%)"
  dark-primary: "hsl(229 100% 79%)"
  dark-primary-foreground: "hsl(229 45% 15%)"
  dark-secondary: "hsl(105 10% 21%)"
  dark-muted: "hsl(110 5% 24%)"
  dark-muted-foreground: "hsl(100 8% 72%)"
  dark-accent: "hsl(229 25% 24%)"
  dark-accent-foreground: "hsl(229 100% 84%)"
  dark-border: "hsl(105 7% 29%)"
  dark-input: "hsl(105 6% 42%)"
  dark-ring: "hsl(229 100% 79%)"
  artwork-sage: "#dfe5d5"
  artwork-sage-ink: "#3d4e32"
  artwork-blue: "#dce4f5"
  artwork-blue-ink: "#344d9b"
  artwork-mint: "#dbe8e5"
  artwork-mint-ink: "#28574c"
  artwork-clay: "#eadbd7"
  artwork-clay-ink: "#813d3b"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(3rem, 5.2vw, 4.5rem)"
    fontWeight: 550
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.75rem, 5.2vw, 4.5rem)"
    fontWeight: 550
    lineHeight: 1.07
    letterSpacing: "-0.04em"
  section:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 550
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  index-name:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.9375rem"
    lineHeight: 1.85
  description:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.875rem"
    lineHeight: 1.75
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: "1.25rem"
  metadata:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.75rem"
    lineHeight: "1rem"
rounded:
  none: "0"
  md: "calc(0.5rem - 2px)"
  lg: "0.5rem"
  full: "9999px"
spacing:
  '2': "0.5rem"
  '3': "0.75rem"
  '4': "1rem"
  '5': "1.25rem"
  '6': "1.5rem"
  '8': "2rem"
  '10': "2.5rem"
  '12': "3rem"
  '14': "3.5rem"
  '16': "4rem"
  '20': "5rem"
components:
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.5rem 1rem"
    height: "2.5rem"
  button-outline-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
  button-ghost:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    size: "2.5rem"
  button-ghost-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
  field:
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "0 0.75rem"
  topic:
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
    padding: "0.375rem 0.625rem"
  project-row:
    textColor: "{colors.foreground}"
    typography: "{typography.index-name}"
    rounded: "{rounded.none}"
    padding: "1rem 0.5rem"
  project-row-selected:
    textColor: "{colors.primary}"
  project-preview:
    backgroundColor: "{colors.secondary}"
    rounded: "{rounded.none}"
  text-link:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
  text-link-hover:
    textColor: "{colors.primary}"
---

# Design System: Pedro Rbc

## Overview

**Creative North Star: "The Project Index"**

A direct, independent-studio portfolio: Archivo lettering, a warm paper canvas, charcoal ink, cobalt actions, thin separators, and rectangular project artwork. The work supplies the personality; presentation stays concise rather than competing with it.

Density comes from unboxed rows and compact metadata, balanced by generous section gaps. Dark mode preserves the hierarchy with green-charcoal neutrals and a lighter cobalt. Restrained motion acknowledges selection and navigation, without autoplay or looping decoration.

**Key Characteristics:**
- Name-led project discovery and factual GitHub content.
- Flat rectangular surfaces and fine structural rules.
- One sans-serif voice with tightly tracked headings.
- Pointer, touch, keyboard, theme, and reduced-motion support.

## Colors

The normative HSL palette comes from `src/app/globals.css`; artwork pairs retain their shipped hex values. Frontmatter records reused, visible roles rather than every unused library variable.

### Primary
- **Cobalt / light cobalt:** actions, selected project names, focus, text selection, and punctuation in headings and wordmark. Primary foreground supplies readable contrast on filled selections and the skip link.
- **Cobalt wash / cobalt ink:** accent surface and text for control hover states.

### Neutral
- **Warm paper / charcoal ink:** page canvas and main text; dark mode uses green charcoal and pale warm ink.
- **Soft olive gray:** secondary preview panel and filled repository tags.
- **Muted surface / muted ink:** loading surfaces, supporting descriptions, metadata, and inactive navigation.
- **Rule gray / field gray:** structural separators and the stronger input stroke. Ring tracks the primary action color in each theme.
- **Sage, blue, mint, clay:** four project-artwork background/ink pairs selected by repository ID modulo four. They remain unchanged in dark mode; these are local illustration colors, not extra interface action palettes.

### Named Rules
**The Action Cobalt Rule.** Use the interface primary for actions and selection; keep project-artwork colors local to artwork.

## Typography

**Display Font:** Archivo, sans-serif, self-hosted through Next font loading.
**Body Font:** Archivo, sans-serif.
**Label/Mono Font:** labels and metadata remain Archivo; Geist Mono is retained for code/data, not display copy.

### Hierarchy
- **Display:** home heading; on phones its clamp becomes (2.75rem, 9vw, 3.5rem).
- **Headline:** related-page titles, balanced wrapping.
- **Section:** section headings grow to (2.25rem) at the small breakpoint.
- **Title:** preview heading; phones use (1.5rem). Supporting home headings use weight (500), with (1.625rem) on phones.
- **Index name:** project row names; index section heading is smaller (1.125rem, weight 550).
- **Body:** introductory prose, constrained to (25rem); on phones (0.875rem) with a (30rem) cap. Related-page prose also uses (1rem/1.625), growing to (1.125rem) on the about page.
- **Description / label / metadata:** preview summaries, links, and compact project data. Topic labels use (0.75rem/1.4); skill tags use (0.8125rem).
- **Artwork name:** name-led fallback, weight (650), tracking (-0.04em), line height (1.1); desktop clamp (2rem, 5.8vw, 5.5rem), phone clamp (2rem, 10vw, 4rem).

### Named Rules
**The One Sans Voice Rule.** Use Archivo for headings, prose, controls, and metadata; retain mono for code/data rather than introducing a second display voice.

## Layout

The shared container is centered and full-width, capped at (1300px), including horizontal padding: (20px) initially, (32px) at (640px), and (50px) at (1024px). Header height is at least (80px), then (104px) from (640px). Desktop navigation appears at (768px); below that, an in-flow expandable menu follows the header rule.

The homepage uses intro/index columns (1.1fr / 1fr), separated by `clamp(3rem, 7vw, 6.25rem)`. Its preview spans both columns, with flexible artwork and an information column constrained between (16rem) and (19rem). Artwork has a (20rem) minimum height; information padding is (2rem). Below (768px), the intro, index, and preview stack; artwork minimum becomes (15rem) and panel padding (1.5rem).

Shared spacing is predominantly a quarter-rem rhythm, with fine optical adjustments for compact rows and labels. Main section spacing ranges from (2.5rem) on phones to (3.5–5rem) on larger pages. Repository filters use three columns from (768px), and repository results become two-column rows there. The about introduction changes to two columns at (1024px). Text and tags wrap; repository names permit long unbroken strings.

## Elevation & Depth

The visible portfolio is flat: no decorative box shadows. Depth comes from paper/secondary tonal contrast, hairline separators, and content hierarchy. Focus is explicit rather than shadow-based on links and fields: a primary-colored outline (2px) with offset (5px). The button primitive replaces that with a (2px) ring and (2px) background-colored offset.

Selection changes settle vertically by (5px), with blur falling from (2px) to zero over (340ms). Row padding and arrows transition over (320ms); link arrows over (240ms), using `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced-motion mode removes animations, transitions, and smooth scrolling.

## Shapes

Artwork, previews, topic chips, project cards, and rules are square-edged. Fields and library buttons use the medium corner token; the skip link uses the larger corner token. The theme control is circular (36px). Borders are thin (1px), used for structure rather than enclosing every content block. Profile imagery is square; featured project imagery uses (16:9).

## Components

### Buttons
Quiet functional controls. Shipped explorer retry/reset actions use the outline variant: background canvas, input stroke, accent hover, medium corners. Small retry is (36px) high with (12px) horizontal padding. Ghost icon controls support navigation and theme switching; theme adds a circular border. Disabled buttons suppress pointer events and use (50%) opacity. Unused library variants are not promoted into this portfolio's visual vocabulary.

### Links
Text-led actions with inline SVG arrows and an (8px) gap. Hover changes to primary; up-right arrows shift (2px, -2px). Index links additionally carry a current-color underline and (4px) bottom padding. Ordinary text links are medium weight; index links retain regular weight.

### Chips
Static wrapping labels, not buttons. Preview topics have a thin border and square corners; repository topics use secondary fill and muted text. Home skill tags use a border with (8px 12px) padding. Do not imply selection behavior on these labels.

### Cards / Containers
Project cards are unboxed vertical compositions: artwork, title, description, topics, then a ruled action footer. The signature preview combines artwork and a secondary-colored information panel, without rounded corners or a shadow. Real remote GitHub banners use contain fitting and internal padding; absent or failed images fall back to the repository name, not fabricated screenshots. The existing external profile avatar remains a separate identity image.

### Inputs / Fields
Transparent canvas, input-colored border, medium corners, minimum height (44px), horizontal padding (12px), and small text. Search makes room for a leading SVG icon. Labels remain visible above search and native selects. Focus changes the border to primary while retaining the global focus outline. No bespoke validation/error field treatment is established.

### Navigation
Compact wordmark and quiet links over a bottom rule. Desktop current-page links use foreground ink and a fine underline; hover reveals that underline. Mobile links become larger stacked targets in the expanded in-flow navigation. Escape closes the menu and restores focus to its trigger. The skip link appears on focus.

### Project index
Unboxed button rows with top rules and a final list rule, minimum height (3.875rem). Hover/selection changes name color and nudges left padding from (0.5rem) to (0.875rem); the selected arrow rotates (45deg). Pointer entry, button activation, and row focus select the corresponding preview. Buttons expose pressed state and preview association; a polite status announces the selected name.

Each row's own source/demo anchors reveal on focus within their action group and target that row's repository. They remain independent of the preview links, preventing a stale preview target during keyboard navigation. No hover-only prerequisite or automatic cycling is used.

## Do's and Don'ts

### Do:
- **Do** keep project content factual and name-led, with real GitHub banners or the shipped name fallback.
- **Do** preserve the same content hierarchy and interaction states across light and dark themes.
- **Do** keep project links directly reachable by keyboard and honor reduced motion.
- **Do** use tonal panels and structural rules for separation rather than decorative elevation.

### Don't:
- **Don't** turn artwork colors into competing global action colors.
- **Don't** require hover to reach project selection or source/demo links.
- **Don't** replace static topic labels with controls unless filtering behavior is actually provided.
- **Don't** add autoplay or looping decoration to the restrained project-discovery interaction.
