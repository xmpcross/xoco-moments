import type { ImageMetadata } from "astro";
import amaraAndTheo from "@/assets/testimonials/amara-and-theo.webp";
import claraAndJonas from "@/assets/testimonials/clara-and-jonas.webp";
import elenaAndMarc from "@/assets/testimonials/elena-and-marc.webp";
import rosalind from "@/assets/testimonials/rosalind.webp";
import sofiaAndJames from "@/assets/testimonials/sofia-and-james.webp";

/**
 * Kind words on the front page. Each one is a short quote, the people it came
 * from, and a photograph of them, kept in `src/assets/testimonials/`.
 *
 * Keep the quotes short: they are set at display size, and one long paragraph
 * turns the slider into a wall of text.
 */
export interface Testimonial {
  quote: string;
  names: string;
  /** Printed under the names: the collection, then the place or the occasion. */
  detail: string[];
  image: ImageMetadata;
  imageAlt: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We forgot you were there, which I think was the point. Then the photographs arrived and we cried at the kitchen table.",
    names: "Elena & Marc",
    detail: ["Weddings", "Cap de Formentor, Mallorca"],
    image: elenaAndMarc,
    imageAlt: "A bride and groom close together, her arm around his neck, looking at the camera.",
  },
  {
    quote:
      "Two of us, a registrar and a dog. Somehow it looks like the biggest day of our lives, because it was.",
    names: "Sofia & James",
    detail: ["Weddings", "A January elopement"],
    image: sofiaAndJames,
    imageAlt: "A groom kisses his bride on the forehead, her veil lifted by the wind.",
  },
  {
    quote: "Nothing posed, nothing missed. Our parents have the same three frames on their walls.",
    names: "Clara & Jonas",
    detail: ["Weddings", "On the water"],
    image: claraAndJonas,
    imageAlt: "A couple in white, foreheads almost touching, laughing.",
  },
  {
    quote:
      "A hundred people ate dinner and not one of them noticed the camera. Every face we love is in there.",
    names: "Amara & Theo",
    detail: ["Weddings", "The long table"],
    image: amaraAndTheo,
    imageAlt: "A groom kisses his bride on the forehead under green trees.",
  },
  {
    quote: "I dreaded it. Two hours later I had a photograph of myself I do not mind looking at.",
    names: "Rosalind",
    detail: ["Portraits", "A studio sitting"],
    image: rosalind,
    imageAlt: "A woman smiling beside a window in soft light.",
  },
];
