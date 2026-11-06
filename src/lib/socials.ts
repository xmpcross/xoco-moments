const socialIconByLabel = {
  Bluesky: "bluesky",
  Email: "envelope",
  Facebook: "facebook",
  Instagram: "instagram",
  LinkedIn: "linkedin",
  Mastodon: "mastodon",
  Pinterest: "pinterest",
  Threads: "threads",
  TikTok: "tiktok",
  X: "twitter-x",
  Twitter: "twitter-x",
  WhatsApp: "whatsapp",
  YouTube: "youtube",
} as const;

type SocialIconName = (typeof socialIconByLabel)[keyof typeof socialIconByLabel] | "link-45deg";

/** Falls back to a generic link glyph for labels the theme has no mark for. */
export const socialIconFor = (label: string): SocialIconName =>
  socialIconByLabel[label as keyof typeof socialIconByLabel] ?? "link-45deg";
