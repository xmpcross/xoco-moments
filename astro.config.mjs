// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/config/site.ts";
import { codeThemes, codeDefaultColor } from "./src/config/code.ts";

const shikiConfig = /** @type {const} */ ({
  themes: codeThemes,
  defaultColor: codeDefaultColor,
});

export default defineConfig({
  site: siteConfig.siteUrl,
  integrations: [
    mdx(),
    sitemap({
      /* The styleguide is noindex: it is a reference for whoever runs the
         site, not a page a visitor should land on from a search engine. */
      filter: (page) => page !== new URL("/styleguide/", siteConfig.siteUrl).toString(),
    }),
  ],
  markdown: {
    shikiConfig,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
