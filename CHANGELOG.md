# Changelog

All notable changes to Moments are documented here.

## 1.0.1 - 2026-10-21

- Updated Astro to 7.4.1 and other dependencies.
- Updated `AGENTS.md` for Astro 7.

## 1.0.0 - 2026-09-19

- Initial commercial release.
- Content collections with a validated frontmatter schema: title, excerpt, collection, place, date, optional updated date, tags, cover image with alt text and optional credit, story layout, featured flag, and a draft flag.
- Story galleries packed into justified rows by dynamic programming over the frames in the writer's order, so every frame keeps its proportions, rows fill the width at one height, and no photograph is cropped to fit a grid.
- Galleries limited to three slots per row on a desktop and two below 64rem, stacked frames included.
- A masonry wall that deals tiles shortest-column-first and scales each column's ratios so the wall ends on one line, with a plain responsive grid as the no-JavaScript fallback.
- A lightbox scoped to the gallery that opened it, with arrows, keyboard, swipe and a counter, built on a native `<dialog>`.
- Two story layouts set per post: `standard` opens on the photograph at the height of the window, `editorial` puts the title on the page.
- Three front-page openings set in one config value: full-bleed slides, a split hero, or none.
- Hero slides with a visible progress bar and a pause control, held only while the tab is hidden.
- An optional collection strip, an optional drifting band of collection names, and a dark studio panel whose figures are counted from the archive.
- Story, Work wall, collection, tag, studio, pricing, enquiry, styleguide, privacy and 404 pages.
- A pricing page with three packages, what each includes, and a button to the enquiry page, all set in `src/config/pricing.ts`.
- A testimonials slider on the front page, each quote beside a photograph of the couple, set in `src/config/testimonials.ts`.
- A styleguide page carrying every block a story can use: figures at three widths, galleries, pull quotes in two styles, callouts in eight tones, toggles, bookmarks, audio, file downloads, buttons, product cards, calls to action, embeds, and full-width signup and header bands.
- Bookmark cards that read the linked page's Open Graph tags at build time, cached on disk, timed out, and degrading to a plain card.
- A full-bleed link to the next story at the foot of every story.
- A share sheet with brand-coloured targets, the page link and a copy button, handing over to the browser's own sheet where there is one.
- An inlined SVG logo used by the header, drawer and footer, replaceable by swapping one file at any aspect ratio.
- A focus-trapped drawer carrying every route below the desktop breakpoint.
- Site identity, hero style, grid style and columns, page sizes, studio panel, marquee, story furniture, newsletter and enquiry endpoints in `src/config/site.ts`; collections defined once in `src/config/collections.ts`.
- Provider-neutral newsletter and enquiry forms that still render without an endpoint, with the submit disabled and the reason stated.
- Canonical URLs, sitemap, `robots.txt`, Open Graph, Twitter/X cards and JSON-LD from one module.
- `article:*` Open Graph tags on every story.
- A web manifest, touch icon and `theme-color` that follows the active colour mode.
- Every label the theme prints in `src/config/strings.ts`.
- Per-story share cards cropped from each cover at build time to 1.91:1 with declared dimensions and alt text.
- A monochrome palette: light and dark modes with a saved preference, resolved before the first paint.
- Reveal-on-scroll behind a `js` class set before paint, with full `prefers-reduced-motion` support.
- Self-hosted fonts with no external requests at runtime: Marcellus for titles, Inter for the rest, Cormorant Garamond shipped as a drop-in alternative.
- Static output with responsive Astro images through Sharp.
- Long-lived cache headers for hashed build assets.
