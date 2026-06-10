import {
  getPropertyBySlug as getLocalPropertyBySlug,
  getPublishedLocalProperties,
  type Property
} from "@/data/properties";
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
*[
  _type == "property" &&
  published == true &&
  !(_id in path("drafts.**"))
] | order(_createdAt desc) {
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

function normalizeMatchValue(value?: string) {
  return (value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function findLocalFallback(item: SanityProperty) {
  const localProperties = getPublishedLocalProperties();

  if (item.slug) {
    const slugMatch = localProperties.find((property) => property.slug === item.slug);

    if (slugMatch) {
      return slugMatch;
    }
  }

  const location = normalizeMatchValue(item.location);

  if (!location) {
    return undefined;
  }

  const exactMatch = localProperties.find(
    (property) => normalizeMatchValue(property.location) === location
  );

  if (exactMatch) {
    return exactMatch;
  }

  const partialMatches = localProperties.filter((property) => {
    const localLocation = normalizeMatchValue(property.location);
    return localLocation.startsWith(location) || location.startsWith(localLocation);
  });

  return partialMatches.length === 1 ? partialMatches[0] : undefined;
}

function toProperty(item: SanityProperty): Property | null {
  const fallback = findLocalFallback(item);
  const title = item.title || fallback?.title;
  const slug = item.slug || fallback?.slug;

  if (!title || !slug) {
    return null;
  }

  const surface = item.surface ?? fallback?.squareMeters ?? 0;
  const rooms = item.rooms ?? fallback?.rooms ?? 0;
  const bathrooms = item.bathrooms ?? fallback?.bathrooms ?? 0;
  const location = item.location || fallback?.location || "Localita da definire";
  const sanityImages = (item.images ?? [])
    .map((image) => urlForImage(image))
    .filter((image): image is string => Boolean(image));
  const images = sanityImages.length > 0 ? sanityImages : fallback?.images ?? [];
  const description = item.description || fallback?.description || "";

  return {
    slug,
    title,
    price: item.price || fallback?.price || "Prezzo su richiesta",
    location,
    province: fallback?.province || "",
    type: item.propertyType || fallback?.type || "Immobile",
    floor: item.floor || fallback?.floor,
    squareMeters: surface,
    squareMetersLabel:
      item.surface !== undefined
        ? `${surface} mq`
        : fallback?.squareMetersLabel || "Superficie da definire",
    rooms,
    roomsLabel:
      item.rooms !== undefined
        ? `${rooms} vani`
        : fallback?.roomsLabel || "Vani da definire",
    bathrooms,
    bathroomsLabel:
      item.bathrooms !== undefined
        ? bathrooms === 1
          ? "1 bagno"
          : `${bathrooms} bagni`
        : fallback?.bathroomsLabel || "Bagni da definire",
    badges: item.badges?.length ? item.badges : fallback?.badges ?? [],
    category: item.propertyType || fallback?.category || "Immobile",
    description,
    seoDescription:
      description.slice(0, 155) ||
      fallback?.seoDescription ||
      `${title} a ${location}, immobile gestito da Biagio Destino Immobiliare.`,
    features: item.features?.length ? item.features : fallback?.features ?? [],
    images,
    isFeatured: item.isFeatured ?? fallback?.isFeatured ?? false,
    sourceUrl: item.sourceUrl || fallback?.sourceUrl,
    published: true,
    galleryTone: fallback?.galleryTone || "sea"
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

  if (sanityProperties && sanityProperties.length > 0) {
    return sanityProperties;
  }

  return getPublishedLocalProperties();
}

export async function getFeaturedProperties() {
  const sanityProperties = await getSanityProperties();
  const localFeatured = getPublishedLocalProperties().filter(
    (property) => property.isFeatured === true
  );

  if (!sanityProperties || sanityProperties.length === 0) {
    return localFeatured.slice(0, 3);
  }

  const sanityFeatured = sanityProperties.filter(
    (property) => property.isFeatured === true
  );
  const featuredSlugs = new Set(sanityFeatured.map((property) => property.slug));
  const localSupplements = localFeatured.filter(
    (property) => !featuredSlugs.has(property.slug)
  );

  return [...sanityFeatured, ...localSupplements].slice(0, 3);
}

export async function getPropertyBySlug(slug: string) {
  const sanityProperties = await getSanityProperties();
  const sanityProperty = sanityProperties?.find((property) => property.slug === slug);

  return sanityProperty || getLocalPropertyBySlug(slug);
}
