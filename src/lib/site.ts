export const siteConfig = {
  name: "Xperience",
  shortName: "Xperience",
  description:
    "Discover the best websites for learning, curated for an amazing learning experience.",
  /**
   * Base URL of the deployed site.
   * Set NEXT_PUBLIC_SITE_URL in your environment for production.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  creator: "Xperience",
  localeDefault: "ar",
  locales: ["en", "ar"] as const,
};

export type SiteLocale = (typeof siteConfig.locales)[number];

