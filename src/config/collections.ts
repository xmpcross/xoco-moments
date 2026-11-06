/**
 * The collections a story can be filed under. A photographer's site is
 * organised by the kind of work, not by subject matter, so this list is short
 * on purpose: two or three names a visitor can hold in their head.
 *
 * Renaming one here renames it everywhere — navigation, archive pills, tiles
 * and the story kicker — as long as every post's `collection` frontmatter is
 * updated to match.
 */
export const collections = ["Weddings", "Portraits"] as const;

export type Collection = (typeof collections)[number];

export const collectionSlug = (collection: string) =>
  collection
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const collectionMeta: Record<Collection, { description: string }> = {
  Weddings: {
    description:
      "Whole days, photographed from the quiet of the morning through to whenever the music stops.",
  },
  Portraits: {
    description: "Two hours, one place, and a photograph of yourself you do not mind looking at.",
  },
};
