import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/**
 * Every photograph that lives beside a story, keyed by its path.
 *
 * This is what lets a story name its frames as plain strings —
 * `<Gallery folder="a-garden-in-late-june" images={[["g1.webp", "..."]]} />`
 * — instead of opening with a wall of `import` lines. The glob is eager and
 * static, so each one still goes through Astro's image pipeline exactly as
 * an import would; nothing is resolved at runtime.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/content/posts/**/*.{jpg,jpeg,png,webp,avif,gif}",
  { eager: true },
);

const lookup = new Map<string, ImageMetadata>(
  Object.entries(files).map(([path, module]) => [
    path.replace("/src/content/posts/", ""),
    module.default,
  ]),
);

/**
 * `sizes` for a photograph covering the full window width and `vh` of its
 * height. When the window is taller than the photograph's own shape the
 * height governs the scale, and the rendition needed is wider than the
 * window; the media query switches to that case.
 */
export const coverSizes = (image: ImageMetadata, vh = 100) => {
  const aspect = image.width / image.height;
  return `(max-aspect-ratio: ${image.width * vh}/${image.height * 100}) ${Math.round(vh * aspect * 100) / 100}vh, 100vw`;
};

/**
 * The renditions the lightbox steps through: a few widths up to 2400px, so a
 * phone is not handed a desktop-sized file, and a 6000px original does not
 * become a 6000px download on a click.
 */
export const lightboxRendition = (image: ImageMetadata) => {
  const cap = Math.min(image.width, 2400);
  const widths = [...[1200, 1600].filter((width) => width < cap), cap];
  return getImage({ src: image, width: cap, widths, sizes: "100vw", format: "webp" });
};

/**
 * Resolves `folder` + `file` to the processed image.
 *
 * Throws rather than rendering nothing: a typo in a filename should stop the
 * build the way a bad import would, not ship a story with a hole in it.
 */
export const postImage = (file: string, folder?: string): ImageMetadata => {
  const key = (folder ? `${folder.replace(/^\/+|\/+$/g, "")}/${file}` : file).replace(/^\.\//, "");
  const found = lookup.get(key);

  if (!found) {
    throw new Error(
      `No image at src/content/posts/${key}. Available in that folder: ` +
        ([...lookup.keys()].filter((path) => path.startsWith(`${key.split("/")[0]}/`)).join(", ") ||
          "none"),
    );
  }

  return found;
};
