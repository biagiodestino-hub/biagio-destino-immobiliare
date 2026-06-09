import { properties as localProperties, type Property } from "@/data/properties";
import { fetchSanity, isSanityConfigured } from "./sanity.client";
import { urlForImage } from "./sanity.image";

type SanityProperty = {
  title?: string;
  slug?: string;
  price?: string;
  location?: string;
  propertyType?: string;
  floor?: string;
  surface?: number;
  rooms?: number;
  bathrooms?: number;
  description?: string;
  badges?: string[];
  features?: string[];
  images?: Array<{ url?: string; asset?: { _ref?: string; url?: string } }>;
  isFeatured?: boolean;
  sourceUrl?: string;
  published?: boolean;
};

export const publishedPropertiesQuery = `
*[_type == "property" && published == true] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  price,
  location,
  propertyType,
  floor,
  surface,
  rooms,
  bathrooms,
  description,
  badges,
  features,
  images[]{
    "url": asset->url,
    asset
  },
  isFeatured,
  sourceUrl,
  published
}
`;

function toDisplayLocation(value?: string) {
  return value || "Località da definire";
}

function toProperty(item: SanityProperty): Property | null {
  if (!item.title || !item.slug) {
    return null;
  }

  const surface = item.surface ?? 0;
  const rooms = item.rooms ?? 0;
  const bathrooms = item.bathrooms ?? 0;
  const location = toDisplayLocation(item.location);
  const images = (item.images ?? []).map((image) => urlForImage(image)).filter(Boolean);

  return {
    slug: item.slug,
    title: item.title,
    price: item.price || "Prezzo su richiesta",
    location,
    province: "",
    type: item.propertyType || "Immobile",
    floor: item.floor,
    squareMeters: surface,
    squareMetersLabel: surface > 0 ? `${surface} mq` : "Superficie da definire",
    rooms,
    roomsLabel: rooms > 0 ? `${rooms} vani` : "Vani da definire",
    bathrooms,
    bathroomsLabel:
      bathrooms === 1 ? "1 bagno" : bathrooms > 1 ? `${bathrooms} bagni` : "Bagni da definire",
    badges: item.badges ?? [],
    category: item.propertyType || "Immobile",
    description: item.description || "",
    seoDescription:
      item.description?.slice(0, 155) ||
      `${item.title} a ${location}, immobile gestito da Biagio Destino Immobiliare.`,
    features: item.features ?? [],
    images,
    isFeatured: Boolean(item.isFeatured),
    sourceUrl: item.sourceUrl,
    published: item.published !== false,
    galleryTone: "sea"
  };
}

async function getSanityProperties() {
  if (!isSanityConfigured()) {
    return null;
  }

  const result = await fetchSanity<SanityProperty[]>(publishedPropertiesQuery);

  if (!result) {
    return null;
  }

  return result.map(toProperty).filter((property): property is Property => Boolean(property));
}

export async function getPublishedProperties() {
  const sanityProperties = await getSanityProperties();

  if (sanityProperties) {
    return sanityProperties;
  }

  return localProperties.filter((property) => property.published !== false);
}

export async function getFeaturedProperties() {
  const properties = await getPublishedProperties();
  return properties.filter((property) => property.isFeatured === true);
}

export async function getPropertyBySlug(slug: string) {
  const properties = await getPublishedProperties();
  return properties.find((property) => property.slug === slug);
}
