import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
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
