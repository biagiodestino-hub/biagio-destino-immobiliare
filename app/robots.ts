import type { MetadataRoute } from "next";
import { getSiteSettings } from "@/lib/sanity.queries";

export const revalidate = 60;

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getSiteSettings();
  const siteUrl = settings.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
