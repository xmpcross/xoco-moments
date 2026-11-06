import { collections, collectionSlug } from "./collections";

export const siteConfig = {
  name: "Moments",
  tagline: "Wedding and portrait photography, quietly observed",
  title: "Moments - A photography Astro theme for weddings and portraits",
  description:
    "An image-led Astro theme for a solo wedding and portrait photographer: full-bleed openings, a masonry wall of work, and galleries packed into justified rows so no photograph is cropped to fit a grid.",
  siteUrl: "https://moments.xocoweb.workers.dev",
  authorName: "Andrei Alba",
  email: "hello@example.com",
  language: "en",
  dateLocale: "en-GB",
  locale: "en_GB",
  /** The fallback share card. A story hands over its own cover instead. */
  socialImage: "/og-image.jpg",
  /**
   * The studio's logo in structured data. It has to be a raster file in
   * `public/`, so `src/assets/logo.svg` cannot stand in for it — point this
   * at a PNG of your mark before launch. The share card is the default only
   * because it is the one raster file the theme ships.
   */
  publisherLogo: "/og-image.jpg",
  /** Short line under the wordmark in the footer. */
  bio: "One photographer, weddings and portraits across Europe, mostly on film. Twelve to fifteen days a year, and the sessions in between.",
  /** Alt text for `src/assets/studio.webp`, on the front-page panel and the studio page. */
  studioImageAlt: "A couple photographed against a plain wall in north light.",
  /**
   * The page background in each mode, for the browser chrome and the web
   * manifest. Keep in step with `--background` in `global.css`.
   */
  themeColor: { light: "#f9f9f9", dark: "#0a0a0a" },
  /**
   * The mode a first-time visitor gets. "system" follows the operating system;
   * "light" or "dark" pins it. A reader who uses the toggle overrides this, and
   * their choice is remembered.
   */
  defaultColorMode: "light" as "light" | "dark" | "system",

  /**
   * How the front page opens.
   *
   * - "full-bleed" plays the featured stories as cross-fading slides at the
   *   height of the window, with the header floating over them.
   * - "split" is the quieter opening: the studio's own words beside one
   *   photograph, both in the flow of the page.
   * - "off" drops the opening entirely and leads with the wall, which then
   *   includes the featured stories rather than holding them back.
   */
  heroStyle: "full-bleed" as "full-bleed" | "split" | "off",
  /** Seconds a hero slide holds before the next one cross-fades in. */
  heroInterval: 6,

  /**
   * The wall of work.
   *
   * "masonry" keeps every photograph at its own height, dealing tiles into
   * columns shortest-first and then scaling each column so the wall ends on
   * one line. "uniform" crops every tile to the same shape instead.
   */
  gridStyle: "masonry" as "masonry" | "uniform",
  /** Columns on the widest screens. Narrow screens step down on their own. */
  gridColumns: 3 as 2 | 3 | 4,
  /** Stories on the front page wall before the Show More link. */
  homeLimit: 12,
  /** Stories per page on the Work wall and the collection archives. */
  postsPerPage: 12,

  /**
   * The drifting band of collection names between the wall and the studio
   * panel. Off by default: with two collections it is a lot of motion for two
   * words.
   */
  showMarquee: false,
  /** The dark panel carrying the studio's photograph and its own words. */
  showStudioPanel: true,
  /** Kind words from past couples, in `src/config/testimonials.ts`, before the closing call. */
  showTestimonials: true,
  /**
   * The collection strip under the wall: the newest three from one collection,
   * with its description beside them. Null drops the section.
   */
  featuredCollection: null as string | null,

  /**
   * Bookmark cards read the linked page's Open Graph tags at build time, so a
   * bookmark only needs a URL. Results are cached in `.astro/`, every request
   * times out, and a failure falls back to a plain card — but it is still a
   * network call per new link, so set this false for offline or sealed builds
   * and pass `image` to the card by hand instead.
   */
  fetchBookmarkPreviews: true,

  /** Post page furniture. */
  post: {
    /** The collection and date over the opening photograph. */
    showMeta: true,
    /** The share sheet at the end of a story. */
    showShare: true,
    /** More work from the same collection, under the story. */
    showRelated: true,
    /** The full-bleed link to the next story at the foot of the page. */
    showNext: true,
  },

  newsletter: {
    enabled: true,
    /** Where the form posts. Empty leaves the band out rather than nowhere. */
    action: "",
    method: "post",
    emailFieldName: "email",
    title: "New work, a few times a year",
    description: "No newsletter about newsletters. Just the pictures.",
    terms: "Unsubscribe whenever you like.",
  },

  contact: {
    enabled: true,
    /**
     * The URL the enquiry form posts to — a Formspree endpoint, a Netlify
     * function, anything that takes a POST. With nothing here the form is left
     * out entirely, because a form that silently goes nowhere is worse than no
     * form.
     */
    action: "",
    method: "post",
    office: ["Lisbon, Portugal", "Travelling across Europe"],
    /** The one line asking for an enquiry, on the front page and at the head of the enquiry page. */
    prompt: "Tell me the date, the place, and roughly how many people.",
    responseTime: "Every enquiry answered within three days.",
  },

  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://www.pinterest.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
};

const collectionNavigation = collections.map((collection) => ({
  label: collection,
  href: `/collection/${collectionSlug(collection)}/`,
}));

/**
 * The bar across the top on a wide screen, and the large type at the head of
 * the drawer everywhere else.
 *
 * Collections are deliberately not in here: Work is the wall over all of
 * them, and the pills on it switch between them. They are still listed in the
 * footer for anyone who wants to go straight to one.
 */
export const primaryNavigation = [
  { label: "Work", href: "/work/" },
  { label: "Studio", href: "/studio/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Say hello", href: "/contact/" },
];

/** The smaller list under it in the drawer. */
export const secondaryNavigation = [
  { label: "Styleguide", href: "/styleguide/" },
  { label: "Privacy", href: "/privacy/" },
];

export const footerNavigation = [
  {
    title: "Work",
    links: [{ label: "Everything", href: "/work/" }, ...collectionNavigation],
  },
  {
    title: "Studio",
    links: [
      { label: "About", href: "/studio/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Say hello", href: "/contact/" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Styleguide", href: "/styleguide/" },
      { label: "Privacy", href: "/privacy/" },
    ],
  },
];
