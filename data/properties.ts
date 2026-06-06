export type Property = {
  slug: string;
  title: string;
  price: string;
  location: string;
  province: string;
  squareMeters: number;
  rooms: number;
  bathrooms: number;
  badge: string;
  category: string;
  description: string;
  features: string[];
  galleryTone: "sea" | "sand" | "city";
};

export const properties: Property[] = [];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}
