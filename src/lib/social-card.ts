import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/**
 * The share card cut from a photograph, at the 1200x630 every network crops
 * to anyway. Used by the layout for the meta tags and by the story page for
 * its structured data, so both point at the same file.
 *
 * Both dimensions are clamped to the source, because Astro will not enlarge
 * an image: asking for 1200x630 from something smaller returns whatever it
 * could produce, and a declared size would then be one no scraper could
 * verify.
 */
export const getSocialCard = async (image: ImageMetadata) => {
  const width = Math.min(1200, image.width);
  const height = Math.min(Math.round(width / (1200 / 630)), image.height);
  const card = await getImage({
    src: image,
    width,
    height,
    fit: "cover",
    position: "center",
    format: "jpeg",
    quality: 82,
  });

  return { src: card.src, width, height };
};
