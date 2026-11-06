/**
 * Every word the theme's own furniture says: labels, buttons, empty states,
 * the text screen readers hear. Translate this file and the site follows.
 *
 * Page copy — the studio's story, the enquiry page, the privacy notice —
 * stays in the pages themselves. Those are the studio's words, not the
 * theme's.
 */
export const strings = {
  skipToContent: "Skip to content",
  readMore: "Read more",
  seeAll: "See all",

  nav: {
    main: "Main",
    home: (siteName: string) => `${siteName} home`,
    menu: "Site menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    more: "More",
    colourMode: "Switch colour mode",
    toLight: "Switch to light mode",
    toDark: "Switch to dark mode",
    browseCollections: "Browse by collection",
  },

  home: {
    recentWork: "Recent work",
    showMore: "Show more",
    seeTheDay: "See the day",
    studio: "The studio",
    stories: "Stories",
    since: "Since",
    kindWords: "Kind words",
    sayHello: "Say hello",
    getInTouch: "Get in touch",
  },

  hero: {
    showStory: (position: number, title: string) => `Show story ${position}: ${title}`,
    pause: "Pause slideshow",
    play: "Play slideshow",
  },

  pricing: {
    mostBooked: "Most booked",
    enquire: "Enquire",
    includes: "What is included",
  },

  testimonials: {
    previous: "Previous testimonial",
    next: "Next testimonial",
    show: (position: number, names: string) => `Show testimonial ${position}: ${names}`,
  },

  archive: {
    work: "Work",
    workLede: "A wall of pictures. Every frame opens the day it came from.",
    workDescription: "Every story, in one wall of photographs.",
    collections: "Collections",
    everything: "Everything",
    count: (total: number) => (total === 1 ? "1 story" : `${total} stories`),
    pageOf: (current: number, last: number) => `page ${current} of ${last}`,
    pageTitle: (title: string, page: number) => `${title} — page ${page}`,
    tagged: (tag: string) => `Tagged ${tag}`,
    taggedLede: (tag: string) => `Everything filed under ${tag}.`,
    taggedDescription: (tag: string) => `Stories tagged ${tag}.`,
    empty: "No stories yet.",
    emptyWork: "No photographs yet.",
  },

  pagination: {
    label: (subject: string) => `${subject} pagination`,
    previous: "Previous",
    next: "Next",
    page: (page: number) => `Page ${page}`,
  },

  story: {
    more: (collection: string) => `More ${collection.toLowerCase()}`,
    next: "Next",
    share: "Share",
  },

  share: {
    title: "Share this story",
    close: "Close sharing options",
    more: "More",
    pageLink: "Page link",
    copy: "Copy",
    copied: "Copied",
    copyFallback: "Press Ctrl+C",
  },

  lightbox: {
    viewer: "Photograph viewer",
    close: "Close",
    previous: "Previous photograph",
    next: "Next photograph",
    gallery: "Gallery",
    enlarge: (alt: string) => `Enlarge photograph: ${alt}`,
    enlargeOf: (position: number, total: number, alt: string) =>
      `Enlarge photograph ${position} of ${total}: ${alt}`,
  },

  cards: {
    downloadAudio: "Download the audio",
    opensInNewTab: "(opens in a new tab)",
    table: "Table",
    rating: (stars: number) => `${stars} out of 5`,
  },

  forms: {
    email: "Email address",
    emailPlaceholder: "you@example.com",
    signUp: "Sign up",
    newsletterUnset: "Set a newsletter provider in src/config/site.ts to start collecting these.",
    contact: {
      names: "Your names",
      email: "Email address",
      date: "The date",
      place: "Where",
      message: "Tell me about the day",
      send: "Send enquiry",
      unset:
        "Set a form endpoint in src/config/site.ts to start receiving these. Until then the address above is the way in.",
      based: "Based",
      follow: "Follow",
    },
  },

  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Astro",
  },

  notFound: {
    title: "Page not found",
    description: "The page you asked for could not be found.",
    message: "This page has moved on.",
    back: "Back to the work",
  },
};
