import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { collections as collectionNames } from "@/config/collections";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One line under the title, and the lede on the story itself. */
      excerpt: z.string(),
      /** Which body of work this belongs to. Printed in every kicker. */
      collection: z.enum(collectionNames),
      /** "Cap de Formentor, Mallorca". Printed under the title on the story. */
      place: z.string().optional(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      /**
       * Extra names beside the collection. They get their own archive pages
       * and are the only taxonomy a story can carry more than one of.
       */
      tags: z.array(z.string()).default([]),
      /**
       * The opening photograph. It is the tile on every wall, the share card,
       * and the full-window opening of the story, so a post without one is
       * left out of the walls entirely.
       */
      cover: z.object({
        src: image(),
        alt: z.string(),
        /** Only set these when the photograph is not the studio's own work. */
        credit: z.string().optional(),
        creditUrl: z.url().optional(),
      }),
      /**
       * How the story opens.
       *
       * - "standard" puts the title over the photograph at the height of the
       *   window, which is the house style.
       * - "editorial" puts the title on the page with the photograph under it,
       *   for a studio note or an advice piece where the words are the reason
       *   for the page.
       */
      storyLayout: z.enum(["standard", "editorial"]).default("standard"),
      /**
       * Leads the front page. Up to three featured stories play as the hero
       * slides; with the hero off they simply carry a mark on the wall.
       */
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
