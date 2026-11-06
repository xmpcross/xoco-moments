/**
 * The packages on the pricing page. Three is the number a visitor can compare
 * at a glance; the middle one is usually the one most people book, and
 * `featured` gives it the darker card.
 *
 * Prices are plain strings so they can carry a currency, a "from", or a
 * range without the theme having to know about any of them.
 */
export interface Package {
  name: string;
  price: string;
  /** Printed small beside the price: "from", "per session". */
  priceNote?: string;
  summary: string;
  includes: string[];
  featured?: boolean;
}

export const pricing = {
  title: "Pricing",
  lede: "Three ways to work together. Every one ends with an online gallery that stays up for good and print files that are yours to keep.",
  /** Small print under the cards. Leave empty to drop it. */
  note: "Travel within the EU is included in every full-day commission. Further afield is quoted at cost, and a second photographer can be added to any day.",
  packages: [
    {
      name: "The sitting",
      price: "€450",
      priceNote: "per session",
      summary: "Two hours, one place, and a photograph of yourself you do not mind looking at.",
      includes: [
        "Two hours at a place of your choosing",
        "Forty edited frames",
        "Online gallery for a year",
        "Print files included",
      ],
    },
    {
      name: "The day",
      price: "€3,200",
      priceNote: "from",
      summary: "From the quiet of the morning to whenever the music stops.",
      includes: [
        "Up to ten hours on the day",
        "Four to six hundred edited frames",
        "Delivered within ten weeks",
        "Online gallery that stays up for good",
        "Print files included",
        "Travel within the EU",
      ],
      featured: true,
    },
    {
      name: "The weekend",
      price: "€5,800",
      priceNote: "from",
      summary: "The dinner the night before, the day itself, and the slow morning after.",
      includes: [
        "Two days, up to sixteen hours",
        "A second photographer from the ceremony onwards",
        "Eight hundred or more edited frames",
        "A linen-bound album of sixty pages",
        "Online gallery that stays up for good",
        "Travel within the EU",
      ],
    },
  ] satisfies Package[],
};
