import type { MetadataRoute } from "next";
import { getPublishedProperties } from "@/lib/sanity.queries";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const properties = await getPublishedProperties();

  const staticRoutes = ["", "/immobili", "/chi-sono", "/contatti"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));

  const propertyRoutes = properties.map((property) => ({
    url: `${siteUrl}/immobili/${property.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...propertyRoutes];
}
