import type { CollectionEntry } from "astro:content";
import { collections, collectionSlug, type Collection } from "@/config/collections";
import { siteConfig } from "@/config/site";

export type Post = CollectionEntry<"posts">;

export const tagSlug = (tag: string) =>
  tag
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const postSlug = (post: Post) => post.id.replace(/\/index$/, "");

export const postHref = (post: Post) => `/story/${postSlug(post)}/`;

const byNewest = (a: Post, b: Post) => b.data.date.getTime() - a.data.date.getTime();

export const visiblePosts = (posts: Post[]) =>
  posts.filter((post) => !post.data.draft).sort(byNewest);

export const excludePosts = (posts: Post[], excluded: Post[]) => {
  const excludedIds = new Set(excluded.map((post) => post.id));
  return posts.filter((post) => !excludedIds.has(post.id));
};

/**
 * The hero slides: the stories marked `featured`, always newest first and
 * never more than `limit` of them — marking a fourth does not lengthen the
 * show, it pushes the oldest one out.
 *
 * Nothing curated yet falls back to the newest story, so the front page is
 * never blank on a site nobody has picked favourites for.
 */
export const getFeatured = (posts: Post[], limit = 3) => {
  /* `visiblePosts` has already sorted by date, newest first. */
  const visible = visiblePosts(posts);
  const featured = visible.filter((post) => post.data.featured).slice(0, limit);
  return featured.length ? featured : visible.slice(0, 1);
};

export const getByCollection = (posts: Post[], collection: Collection, limit?: number) => {
  const list = visiblePosts(posts).filter((post) => post.data.collection === collection);
  return typeof limit === "number" ? list.slice(0, limit) : list;
};

export const getByTag = (posts: Post[], slug: string) =>
  visiblePosts(posts).filter((post) => post.data.tags.some((tag) => tagSlug(tag) === slug));

/** More from the same collection, newest first, the current story excluded. */
export const getRelated = (posts: Post[], current: Post, limit = 3) =>
  visiblePosts(posts)
    .filter((post) => post.id !== current.id)
    .sort((a, b) => {
      const sameCollection =
        Number(b.data.collection === current.data.collection) -
        Number(a.data.collection === current.data.collection);
      return sameCollection || byNewest(a, b);
    })
    .slice(0, limit);

/**
 * The story the full-bleed panel at the foot of a page links to: the next one
 * down the archive, wrapping round at the end so the last story leads back to
 * the newest rather than to nothing.
 */
export const getNext = (posts: Post[], current: Post) => {
  const visible = visiblePosts(posts);
  const at = visible.findIndex((post) => post.id === current.id);
  if (at === -1 || visible.length < 2) return undefined;
  return visible[(at + 1) % visible.length];
};

export const getAllTags = (posts: Post[]) =>
  Array.from(new Set(visiblePosts(posts).flatMap((post) => post.data.tags))).sort((a, b) =>
    a.localeCompare(b),
  );

/** Collections that actually hold something, in the order they are configured. */
export const usedCollections = (posts: Post[]) => {
  const visible = visiblePosts(posts);
  return collections
    .map((collection) => ({
      name: collection,
      slug: collectionSlug(collection),
      href: `/collection/${collectionSlug(collection)}/`,
      count: visible.filter((post) => post.data.collection === collection).length,
    }))
    .filter((entry) => entry.count > 0);
};

/** The year of the oldest story, for the studio panel's "since" figure. */
export const firstYear = (posts: Post[]) => {
  const visible = visiblePosts(posts);
  const oldest = visible.at(-1);
  return oldest ? oldest.data.date.getFullYear() : new Date().getFullYear();
};

/** "month" for a tile or kicker, "long" for the full date on a story. */
export const formatDate = (date: Date, style: "long" | "month") =>
  new Intl.DateTimeFormat(
    siteConfig.dateLocale,
    style === "month"
      ? { month: "long", year: "numeric" }
      : { day: "numeric", month: "long", year: "numeric" },
  ).format(date);
