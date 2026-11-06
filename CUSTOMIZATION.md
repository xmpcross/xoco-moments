# Customization

Everything a publisher is expected to change, and where it lives. Nothing here needs a component edited.

## Site settings

[`src/config/site.ts`](./src/config/site.ts) holds the studio's identity and every switch the theme has.

| Setting                                   | What it does                                                                                                                                                                   |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`, `tagline`, `title`, `description` | The wordmark, the `<title>` fallback, and the default meta description.                                                                                                        |
| `siteUrl`                                 | The origin every canonical URL, sitemap entry and social card is built from. Set it before you publish: a wrong value here is the one mistake that reaches every page at once. |
| `authorName`, `email`, `bio`              | The person behind the studio, the address the enquiry page prints, and the line under the wordmark in the footer.                                                              |
| `language`, `locale`, `dateLocale`        | `lang` on `<html>`, `og:locale`, and the locale every date is formatted in.                                                                                                    |
| `socialImage`, `publisherLogo`            | Fallback share card and the logo in structured data. Both must be raster files in `public/`.                                                                                   |
| `fetchBookmarkPreviews`                   | Whether bookmark cards fetch the linked page Open Graph tags at build time. Set it false for an offline or sealed build.                                                       |
| `studioImageAlt`, `themeColor`            | Alt text for `src/assets/studio.webp`, and the page background in each mode for the browser chrome and the web manifest.                                                       |
| `defaultColorMode`                        | What a first-time visitor gets: `"light"`, `"dark"`, or `"system"`. Anyone who uses the toggle overrides it, and their choice is remembered.                                   |

## Collections

[`src/config/collections.ts`](./src/config/collections.ts) defines the bodies of work. The list is short on purpose: two or three names a visitor can hold in their head.

```ts
export const collections = ["Weddings", "Portraits"] as const;
```

Adding a name updates the frontmatter enum, the footer, the archive pills and the routes at once. `collectionMeta` carries the one line each collection's page opens with.

Renaming one means updating the `collection` field in every story filed under it — the schema will refuse the build until you do, which is the point.

## The front page

| Setting              | Values                             | What it does                                                                                                                                                                                                                                                                                 |
| -------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heroStyle`          | `"full-bleed"`, `"split"`, `"off"` | `full-bleed` plays the featured stories as cross-fading slides at the height of the window, with the header floating over them. `split` puts one photograph beside the words, in the flow. `off` drops the opening and lets the featured stories into the wall instead of holding them back. |
| `heroInterval`       | seconds                            | How long a slide holds. The progress bar under it is driven by the same number.                                                                                                                                                                                                              |
| `gridStyle`          | `"masonry"`, `"uniform"`           | `masonry` keeps every photograph at its own height. `uniform` crops every tile to the same shape.                                                                                                                                                                                            |
| `gridColumns`        | `2`, `3`, `4`                      | Columns on the widest screens. Narrower screens step down on their own.                                                                                                                                                                                                                      |
| `homeLimit`          | number                             | Stories on the front-page wall before the Show more link.                                                                                                                                                                                                                                    |
| `showMarquee`        | boolean                            | The drifting band of collection names between the wall and the studio panel. Off by default: with two collections it is a lot of motion for two words.                                                                                                                                       |
| `showStudioPanel`    | boolean                            | The dark panel carrying the studio's photograph, its words, and a row of figures counted from the archive.                                                                                                                                                                                   |
| `featuredCollection` | a collection name, or `null`       | The strip under the wall: the newest three from one collection with its description beside them. `null` drops the section.                                                                                                                                                                   |
| `showTestimonials`   | boolean                            | Kind words from past couples, one at a time, between the studio panel and the closing call.                                                                                                                                                                                                  |

The studio panel's photograph is [`src/assets/studio.webp`](./src/assets/studio.webp). Replace the file and the panel and the studio page both follow.

### Testimonials

The quotes live in [`src/config/testimonials.ts`](./src/config/testimonials.ts): what was said, who said it, a line or two under the names, and a photograph of them in [`src/assets/testimonials`](./src/assets/testimonials). The slider is a scroll-snap track, so it swipes and scrolls with no JavaScript; the script adds the arrows, the dots and the arrow keys. Nothing advances on its own.

Portraits are cropped to 4:5 at around 960 pixels wide. The demo portraits are from Pexels and, like the rest of the demo photography, do not travel with the theme.

## Stories

| Setting            | What it does                                                           |
| ------------------ | ---------------------------------------------------------------------- |
| `post.showMeta`    | The collection, place and date over the opening photograph.            |
| `post.showShare`   | The share sheet at the end of a story.                                 |
| `post.showRelated` | More work from the same collection, under the story.                   |
| `post.showNext`    | The full-bleed link to the next story at the foot of the page.         |
| `postsPerPage`     | Stories per page on the Work wall and the collection and tag archives. |

## Newsletter

```ts
newsletter: {
  enabled: true,
  action: "https://your-provider.example/subscribe",
  method: "post",
  emailFieldName: "email",
  title: "New work, a few times a year",
  description: "No newsletter about newsletters. Just the pictures.",
  terms: "Unsubscribe whenever you like.",
}
```

Any endpoint that accepts a POST works. With `action` empty the field still works, so the band can be seen as it will look, but the submit is disabled and says why. `enabled: false` removes the band from the footer entirely.

## Enquiry form

```ts
contact: {
  enabled: true,
  action: "https://formspree.io/f/your-id",
  method: "post",
  office: ["Lisbon, Portugal", "Travelling across Europe"],
  prompt: "Tell me the date, the place, and roughly how many people.",
  responseTime: "Every enquiry answered within three days.",
}
```

With no `action` the form still renders, so the page can be seen as it will look, but the submit is disabled and points at the email address instead. A form that silently goes nowhere is worse than no form.

## Pricing

[`src/config/pricing.ts`](./src/config/pricing.ts) holds the page title and lede, the small print under the cards, and the packages: a name, a price written as a string so it can carry a currency or a `from`, a summary, the list of what is included, and `featured` for the one that gets the darker card and the filled button. Every card ends in a button to the enquiry page. Three packages fit the grid; two or four also work.

## Story frontmatter

```yaml
---
title: "Elena & Marc"
excerpt: "A pine ridge, a borrowed chapel, and the last hour of light over the Balearic Sea."
collection: "Weddings"
place: "Cap de Formentor, Mallorca"
date: 2026-08-29
updatedDate: 2026-09-02 # optional
featured: true # optional, leads the hero
tags: ["Destination"] # optional
storyLayout: "standard" # "standard" | "editorial"
draft: false # optional
cover:
  src: "./cover.jpg"
  alt: "Bride and groom embracing beneath sunlit stone arches."
  credit: "Ana Ferreira" # optional, only when it is not your own
  creditUrl: "https://example.com" # optional
---
```

`cover` is required: it is the tile on every wall, the share card, and the opening of the story, so a story without one has nothing to show anywhere.

`storyLayout: "standard"` opens on the photograph at the height of the window with the title over it. `"editorial"` puts the title on the page with the photograph under it, for a studio note or an advice piece where the words are the reason for the page.

## Story cards

Every block a story can carry lives in [`src/components/content/`](./src/components/content/), and every one of them is demonstrated at `/styleguide/`.

**Nothing is imported.** The cards are handed to MDX by the story page, so writing the tag is enough:

```mdx
---
title: "Elena & Marc"
# ...the rest of the frontmatter
---

They wanted the sea in every frame and almost nothing else.

<Figure folder="elena-and-marc-cap-de-formentor" src="g1.webp" alt="..." width="wide" />

<Gallery
  folder="elena-and-marc-cap-de-formentor"
  images={[
    ["g2.webp", "Bride in a lace gown at sunset."],
    ["g3.webp", "Guests on the cliff path."],
  ]}
/>
```

`folder` is the story's own directory under `src/content/posts/`, and each frame is named by filename — so a nine-photograph story opens with its first sentence instead of a wall of `import` lines. Passing an imported image to `src` still works if you prefer that.

Adding a card to [`src/lib/story-components.ts`](./src/lib/story-components.ts) makes it available in every story at once.

| Component                  | Notes                                                                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Figure`                   | One photograph. `width="regular" \| "wide" \| "full"`. Opens the lightbox.                                                                                   |
| `Gallery`                  | A set of photographs packed into justified rows. Every photograph on a story shares one lightbox by default; `group` names a set that should stay to itself. |
| `Quote`                    | A pull quote. `variant="alt"` swaps the accent mark for real quotation marks.                                                                                |
| `Callout`                  | `tone` in grey, blue, green, yellow, red, pink, purple or accent, with an optional `emoji`.                                                                  |
| `Toggle`                   | `<details>`, so it works with no JavaScript and the browser's find-in-page reaches inside it.                                                                |
| `Bookmark`                 | A link given the weight of a card. Pass a URL and the title, description and picture are read from the page at build time; anything you write by hand wins.  |
| `Audio`, `FileCard`        | Point at a file in `public/`.                                                                                                                                |
| `ButtonCard`               | One call to action, centred.                                                                                                                                 |
| `Product`                  | A collection or package, with an optional whole-star `rating`.                                                                                               |
| `CTA`                      | A note and a button. Handing it an `image` stacks the picture beside the words.                                                                              |
| `Embed`                    | A third-party iframe. `title` is required: an iframe with no accessible name is announced as "frame".                                                        |
| `SignupCard`, `HeaderCard` | Full-width bands. The signup reads the same provider as the footer.                                                                                          |

Markdown tables and plain Markdown images need no component either: [`ProseRuntime`](./src/components/content/ProseRuntime.astro) gives each table a frame to scroll in and wires every loose image to the lightbox.

### Galleries

A gallery decides its rows for the whole set at once, by dynamic programming over the frames in the order you wrote them. Each candidate row costs the square of how far its height lands from a target; stacks and lonely full-width rows cost a little extra; the cheapest set of rows wins. Reading order is never rearranged.

Rows hold at most three slots on a desktop and two below 64rem, stacked frames included. Nine frames in one gallery is a comfortable number; more than about twelve is worth splitting into two.

Without JavaScript the frames fall back to a plain responsive grid, which crops nothing either — it simply does not justify the rows.

## The wall

The masonry wall is one component, [`Wall.astro`](./src/components/Wall.astro), used by the front page, the Work page and every archive. Tiles are dealt into columns shortest-first and each column is then scaled a few percent so all of them end flush.

The ratio pattern is a repeating cycle of seven in [`src/styles/global.css`](./src/styles/global.css), so no two neighbours in a three or four column layout share a shape:

```css
.grid-masonry .tile:nth-child(7n + 2) .tile-media {
  --tile-ratio: 1 / 1;
}
.grid-masonry .tile:nth-child(7n + 3) .tile-media {
  --tile-ratio: 3 / 4;
}
```

It lives in the stylesheet rather than the script so the pattern is defined once and still applies when the script does not run.

## Words

Every label, button and empty state the theme itself prints — the skip link, the menu, the archive counts, the lightbox and share sheet, the form notes, the 404 — is one object in [`src/config/strings.ts`](./src/config/strings.ts). Translate that file and the furniture follows. The studio's own words stay in the pages: the studio page, the enquiry page and the privacy notice are copy, not chrome.

## Pages

Static pages are ordinary `.astro` files in [`src/pages`](./src/pages) and can carry any of the story cards. `prose-page` on the body holds its words in a column that starts where the title does rather than centring, and pins every card to that column width — right for a price list, wrong for a page that leads with photographs. Drop it for the story's centred column and cards will break out again.

Adding a page means adding the file and a line in `primaryNavigation`, `secondaryNavigation` or `footerNavigation` in `src/config/site.ts`. Collections are deliberately not in the main menu: Work is the wall over all of them, and the pills on it switch between them.

A photograph on a page goes in a `media` box with one of `media-portrait`, `media-tall`, `media-square`, `media-landscape`, `media-wide` or `media-panorama`, which fixes its shape so nothing reflows as it loads. A section can take `section-wash` or `section-inverted` for the two darker surfaces.

## Images

Story images are imported, so Astro processes them at build time and a missing file fails the build rather than reaching a visitor as a broken frame. Keep covers at 2000px on the long edge or larger; gallery frames are fine at 1400px.

Files in `public/` are copied as-is and are the right place for audio, PDFs, the favicon and the share card.

## The logo

The mark in the header, the drawer and the footer is one file: [`src/assets/logo.svg`](./src/assets/logo.svg). Replace it and all three follow. Any aspect ratio works, because the mark is sized by height and takes whatever width it needs.

It is inlined rather than served as an `<img>`, so it can take the ink of whatever it sits on: the page, the inverted footer, or a photograph under the floating header. A flat black or white fill in your file is stripped so that inheritance works in both colour modes; any other colour is left alone, so a logo with real brand colours keeps them.

Two custom properties set the size — `--wordmark-height` for the header and drawer, and `.wordmark-lg` for the footer.

## Fonts

Marcellus sets every title; Inter carries prose and every label. Both are self-hosted `woff2` files in [`public/fonts`](./public/fonts), declared at the top of [`src/styles/global.css`](./src/styles/global.css) and preloaded in [`BaseLayout.astro`](./src/layouts/BaseLayout.astro).

Cormorant Garamond ships alongside as a drop-in alternative: name it in `--font-display` and change the matching `<link rel="preload">`. It sets lighter and optically smaller than Marcellus, so the heading steps want a nudge up if you switch.

To use a different face entirely, add the files, write the `@font-face` blocks, and point `--font-display` or `--font-sans` at it. There are no external font requests at runtime; keep it that way.

## Theme tokens

The whole palette is custom properties on `:root` in [`src/styles/global.css`](./src/styles/global.css), redefined under `:root[data-theme="dark"]`.

The theme is monochrome by default: the mark is the page's own ink, and its inverse in dark mode, so the only colour on a page comes from the photographs.

```css
:root {
  --brand: oklch(0.19 0 0);
}

:root[data-theme="dark"] {
  --brand: oklch(0.97 0 0);
}
```

Set a real colour in both and everything else derives from it. `--accent` paints fills and rules and gets the colour untouched; `--accent-text` is the same colour held to whatever the surface behind it can carry, and it is what every `color:` rule uses; `--accent-on-dark` is the version lifted to clear a photograph. A pale brand colour is capped for text and a dark one is lifted over pictures, so any value stays readable without a second setting.

The share sheet is the one place the monochrome rule is suspended: each service keeps its own colour, which is how someone finds the one they want without reading the labels. `--radius` is 2px and belongs to controls only — photographs are never rounded.

## Motion

Reveal-on-scroll is driven by `data-reveal` attributes and an IntersectionObserver in `BaseLayout.astro`. Every rule sits behind a `js` class added inline before the first paint, so a visitor whose JavaScript never arrives gets the page in full rather than blank.

`data-reveal-group="40"` on a container staggers its children by that many milliseconds each.

Everything is disabled under `prefers-reduced-motion`, including the hero autoplay and the marquee.
