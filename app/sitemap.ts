import type { MetadataRoute } from "next";
import {
  getPublishedProperties,
  getSiteSettings
} from "@/lib/sanity.queries";

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [properties, settings] = await Promise.all([
    getPublishedProperties(),
    getSiteSettings()
  ]);
  const siteUrl = settings.siteUrl.replace(/\/$/, "");
  const staticRoutes = ["", "/immobili", "/chi-sono", "/contatti"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date()
    })
  );
  const propertyRoutes = properties.map((property) => ({
    url: `${siteUrl}/immobili/${property.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...propertyRoutes];
}
