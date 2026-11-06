import { collectionSlug } from "@/config/collections";
import { siteConfig } from "@/config/site";
import { postHref, type Post } from "@/lib/posts";

/**
 * Every piece of structured data the site emits, in one place.
 *
 * Two rules hold the file together. Nothing is asserted here that a visitor
 * cannot also see on the page — markup that claims more than the page shows
 * is the fastest way to lose a rich result, and deservedly so. And every URL
 * is absolute, built from `siteConfig.siteUrl`, because a crawler has no page
 * to resolve a relative path against.
 */

export type Schema = Record<string, unknown>;

export const absoluteUrl = (path: string) => new URL(path, siteConfig.siteUrl).toString();

/** The studio. Referenced by `@id` so it is described once per page. */
const publisherId = absoluteUrl("/#studio");

/**
 * A photographer is a business, and `ProfessionalService` is what a search
 * engine expects for one that is booked rather than walked into.
 */
const organizationSchema = (): Schema => ({
  "@type": ["Organization", "ProfessionalService"],
  "@id": publisherId,
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  founder: { "@type": "Person", name: siteConfig.authorName },
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl(siteConfig.publisherLogo),
  },
  sameAs: siteConfig.socials
    .filter((social) => /^https?:\/\//.test(social.href))
    .map((social) => social.href),
});

/** The site itself, on any page that is not a story. */
export const websiteSchema = (): Schema => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: siteConfig.name,
  alternateName: siteConfig.tagline,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  inLanguage: siteConfig.language,
  publisher: organizationSchema(),
});

/**
 * The trail a visitor can actually retrace: every crumb below is a link the
 * page itself renders — the wordmark, and the collection in the kicker.
 */
export const breadcrumbSchema = (trail: { name: string; href: string }[]): Schema => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.href),
  })),
});

export const postBreadcrumbSchema = (post: Post): Schema =>
  breadcrumbSchema([
    { name: siteConfig.name, href: "/" },
    {
      name: post.data.collection,
      href: `/collection/${collectionSlug(post.data.collection)}/`,
    },
    { name: post.data.title, href: postHref(post) },
  ]);

/**
 * A story. `ImageGallery` rather than `Article`: the body is a set of
 * photographs with words between them, which is what the type is for, and it
 * is still an `Article` so nothing that reads the more general type is lost.
 */
export const postSchema = (post: Post, imageUrl: string): Schema => {
  const data = post.data;
  const url = absoluteUrl(postHref(post));

  return {
    "@context": "https://schema.org",
    "@type": ["Article", "ImageGallery"],
    headline: data.title,
    description: data.excerpt,
    image: imageUrl,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: data.date.toISOString(),
    dateModified: (data.updatedDate ?? data.date).toISOString(),
    author: { "@type": "Person", name: siteConfig.authorName },
    publisher: organizationSchema(),
    articleSection: data.collection,
    keywords: data.tags,
    inLanguage: siteConfig.language,
    isAccessibleForFree: true,
    ...(data.place ? { contentLocation: { "@type": "Place", name: data.place } } : {}),
  };
};
