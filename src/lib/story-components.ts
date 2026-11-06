import Audio from "@/components/content/Audio.astro";
import Bookmark from "@/components/content/Bookmark.astro";
import ButtonCard from "@/components/content/ButtonCard.astro";
import CTA from "@/components/content/CTA.astro";
import Callout from "@/components/content/Callout.astro";
import Embed from "@/components/content/Embed.astro";
import Figure from "@/components/content/Figure.astro";
import FileCard from "@/components/content/FileCard.astro";
import Gallery from "@/components/content/Gallery.astro";
import HeaderCard from "@/components/content/HeaderCard.astro";
import Product from "@/components/content/Product.astro";
import Quote from "@/components/content/Quote.astro";
import SignupCard from "@/components/content/SignupCard.astro";
import Toggle from "@/components/content/Toggle.astro";

/**
 * Every card a story can use, handed to MDX through `<Content components />`.
 *
 * This is why a story file has no imports at the top: MDX resolves a
 * capitalised tag against this map, so writing `<Gallery ... />` in a post
 * just works. Adding a card here makes it available in every story at once.
 *
 * See `/styleguide/` for what each one looks like and the props it takes.
 */
export const storyComponents = {
  Audio,
  Bookmark,
  ButtonCard,
  Callout,
  CTA,
  Embed,
  Figure,
  FileCard,
  Gallery,
  HeaderCard,
  Product,
  Quote,
  SignupCard,
  Toggle,
};
