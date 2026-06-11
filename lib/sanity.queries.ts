import { fetchSanity } from "./sanity.client";
import { urlForImage } from "./sanity.image";

type SanityImage = {
  url?: string;
  asset?: {
    _ref?: string;
    url?: string;
  };
};

export type Property = {
  title: string;
  slug: string;
  price: string;
  location: string;
  city: string;
  propertyType: string;
  floor?: string;
  surface: number;
  rooms: number;
  bathrooms: number;
  description: string;
  badges: string[];
  features: string[];
  images: string[];
  isFeatured: boolean;
  sourceUrl?: string;
  published: boolean;
};

export type SiteSettings = {
  brandName: string;
  siteUrl: string;
  whatsappNumber: string;
  phone: string;
  email: string;
  officeAddress: string;
  facebookUrl: string;
  instagramUrl: string;
  logoUrl: string;
  emotionalQuote: string;
  defaultSeoTitle: string;
  defaultSeoDescription: string;
};

export type HomePageContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  servicesTitle: string;
  servicesSubtitle: string;
  valuationCtaTitle: string;
  valuationCtaText: string;
  featuredSectionTitle: string;
  featuredSectionSubtitle: string;
};

export type AboutPageContent = {
  title: string;
  subtitle: string;
  biography: string;
  profileImageUrl: string;
  experienceText: string;
  licenseText: string;
  territoryText: string;
  values: string[];
  timeline: Array<{
    year: string;
    title: string;
    text: string;
  }>;
};

export type ContactPageContent = {
  title: string;
  subtitle: string;
  contactText: string;
  mapUrl: string;
  formTitle: string;
  formSubtitle: string;
};

export type Service = {
  title: string;
  description: string;
  iconName: string;
  order: number;
};

export type ServiceArea = {
  name: string;
  slug: string;
  province: string;
  order: number;
  active: boolean;
};

type SanityProperty = Omit<Property, "slug" | "images"> & {
  slug?: string;
  images?: SanityImage[];
};

export const fallbackSiteSettings: SiteSettings = {
  brandName: "Biagio Destino Immobiliare",
  siteUrl: "https://www.destinobiagioimmobiliare.it",
  whatsappNumber: "+39 320 442 3418",
  phone: "+39 320 442 3418",
  email: "biagiodestino76@gmail.com",
  officeAddress: "Via Roma 37, Cefalù",
  facebookUrl: "https://www.facebook.com/biagiodestinogabetticefalu",
  instagramUrl: "",
  logoUrl: "",
  emotionalQuote:
    "Ogni casa venduta è la soddisfazione di contribuire ai nuovi inizi e a sogni realizzati.",
  defaultSeoTitle:
    "Biagio Destino Immobiliare | Agente immobiliare tra Cefalù e Capo d'Orlando",
  defaultSeoDescription:
    "Compravendite, valutazioni e consulenza immobiliare tra Cefalù e Capo d'Orlando."
};

export const fallbackHomePage: HomePageContent = {
  heroEyebrow: "Biagio Destino Immobiliare",
  heroTitle: "Vendere e acquistare casa con una guida locale.",
  heroSubtitle:
    "Dal 2011 accompagno venditori e acquirenti tra Cefalù e Capo d'Orlando, con valutazioni attente, strategia e presenza fino al rogito.",
  heroImageUrl: "",
  primaryButtonText: "Immobili disponibili",
  secondaryButtonText: "Contattami su WhatsApp",
  servicesTitle: "Un percorso chiaro per vendere, acquistare e decidere con serenità.",
  servicesSubtitle:
    "Ogni incarico viene seguito con conoscenza del territorio, comunicazione trasparente e un piano marketing costruito sulle caratteristiche reali dell'immobile.",
  valuationCtaTitle: "Vuoi vendere casa tra Cefalù e Capo d'Orlando?",
  valuationCtaText:
    "Richiedi una valutazione immobiliare e costruisci un piano marketing personalizzato per valorizzare il tuo immobile.",
  featuredSectionTitle: "Opportunità selezionate tra costa e territorio",
  featuredSectionSubtitle:
    "Soluzioni reali per abitare, investire o trovare una casa vacanze nelle zone seguite da Biagio Destino Immobiliare."
};

export const fallbackAboutPage: AboutPageContent = {
  title: "Conoscenza del territorio, ascolto e presenza in ogni fase.",
  subtitle: "Agente immobiliare tra Cefalù e Capo d'Orlando",
  biography:
    "Mi chiamo Biagio Destino e dal 2011 lavoro nel settore immobiliare con passione e dedizione. Sono di Sant'Agata di Militello e opero tra Cefalù e Capo d'Orlando, accompagnando venditori e acquirenti in ogni fase della compravendita. Dal 2021 sono abilitato alla professione di Agente d'Affari in Mediazione.",
  profileImageUrl: "/images/biagio-destino.jpg",
  experienceText:
    "Dal 2011 seguo venditori e acquirenti con attenzione, metodo e comunicazione trasparente.",
  licenseText:
    "Dal 2021 sono abilitato alla professione di Agente d'Affari in Mediazione.",
  territoryText:
    "Opero tra Cefalù e Capo d'Orlando con una conoscenza diretta della costa tirrenica siciliana.",
  values: ["Fiducia", "Trasparenza", "Dedizione", "Conoscenza locale"],
  timeline: [
    {
      year: "2011",
      title: "Ingresso nel settore immobiliare",
      text: "Inizio del percorso professionale con venditori e acquirenti."
    },
    {
      year: "2021",
      title: "Abilitazione professionale",
      text: "Abilitazione alla professione di Agente d'Affari in Mediazione."
    },
    {
      year: "Oggi",
      title: "Cefalù e Capo d'Orlando",
      text: "Consulenza immobiliare locale con accompagnamento fino al rogito."
    }
  ]
};

export const fallbackContactPage: ContactPageContent = {
  title: "Parliamo del tuo progetto immobiliare.",
  subtitle:
    "Compila il modulo o scrivimi direttamente su WhatsApp per acquistare, vendere o richiedere una valutazione immobiliare.",
  contactText:
    "Sono a disposizione per informazioni, visite e valutazioni immobiliari personalizzate.",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Via%20Roma%2037%2C%20Cefal%C3%B9",
  formTitle: "Richiedi informazioni",
  formSubtitle: "Raccontami brevemente come posso aiutarti."
};

export const fallbackServices: Service[] = [
  {
    title: "Compravendite immobiliari",
    description: "Assistenza completa per vendere e acquistare immobili.",
    iconName: "home",
    order: 1
  },
  {
    title: "Valutazioni immobiliari",
    description: "Analisi del valore dell'immobile e del mercato locale.",
    iconName: "chart",
    order: 2
  },
  {
    title: "Piano marketing personalizzato",
    description: "Una strategia costruita sulle caratteristiche reali dell'immobile.",
    iconName: "megaphone",
    order: 3
  },
  {
    title: "Accompagnamento fino al rogito",
    description: "Presenza e supporto in ogni fase della compravendita.",
    iconName: "key",
    order: 4
  }
];

const fallbackAreaNames = [
  "Capo d'Orlando",
  "Sant'Agata di Militello",
  "Acquedolci",
  "Tusa",
  "Pollina",
  "Cefalù",
  "Campofelice di Roccella"
];

export const fallbackServiceAreas: ServiceArea[] = fallbackAreaNames.map(
  (name, index) => ({
    name,
    slug: name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
    province: "",
    order: index + 1,
    active: true
  })
);

const propertyProjection = `
  title,
  "slug": slug.current,
  price,
  location,
  city,
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
`;

const publishedPropertiesQuery = `
*[
  _type == "property" &&
  published == true &&
  !(_id in path("drafts.**"))
] | order(_createdAt desc) {
  ${propertyProjection}
}
`;

const siteSettingsQuery = `
*[_type == "siteSettings"][0] {
  brandName,
  siteUrl,
  whatsappNumber,
  phone,
  email,
  officeAddress,
  facebookUrl,
  instagramUrl,
  "logoUrl": logo.asset->url,
  emotionalQuote,
  defaultSeoTitle,
  defaultSeoDescription
}
`;

const homePageQuery = `
*[_type == "homePage"][0] {
  heroEyebrow,
  heroTitle,
  heroSubtitle,
  "heroImageUrl": heroImage.asset->url,
  primaryButtonText,
  secondaryButtonText,
  servicesTitle,
  servicesSubtitle,
  valuationCtaTitle,
  valuationCtaText,
  featuredSectionTitle,
  featuredSectionSubtitle
}
`;

const aboutPageQuery = `
*[_type == "aboutPage"][0] {
  title,
  subtitle,
  biography,
  "profileImageUrl": profileImage.asset->url,
  experienceText,
  licenseText,
  territoryText,
  values,
  timeline[]{
    year,
    title,
    text
  }
}
`;

const contactPageQuery = `
*[_type == "contactPage"][0] {
  title,
  subtitle,
  contactText,
  mapUrl,
  formTitle,
  formSubtitle
}
`;

const servicesQuery = `
*[_type == "service"] | order(order asc, title asc) {
  title,
  description,
  iconName,
  order
}
`;

const serviceAreasQuery = `
*[_type == "serviceArea" && active == true] | order(order asc, name asc) {
  name,
  "slug": slug.current,
  province,
  order,
  active
}
`;

function mergeWithFallback<T extends object>(fallback: T, value: Partial<T> | null) {
  if (!value) {
    return fallback;
  }

  const definedEntries = Object.entries(value).filter(
    ([, fieldValue]) => fieldValue !== null && fieldValue !== undefined
  );

  return { ...fallback, ...Object.fromEntries(definedEntries) } as T;
}

function toProperty(item: SanityProperty): Property | null {
  if (!item.title || !item.slug) {
    return null;
  }

  const images = (item.images ?? [])
    .map((image) => urlForImage(image))
    .filter((image): image is string => Boolean(image));

  return {
    title: item.title,
    slug: item.slug,
    price: item.price || "Prezzo su richiesta",
    location: item.location || item.city || "Località da definire",
    city: item.city || item.location?.split(" - ")[0] || "Altra località",
    propertyType: item.propertyType || "Immobile",
    floor: item.floor,
    surface: item.surface ?? 0,
    rooms: item.rooms ?? 0,
    bathrooms: item.bathrooms ?? 0,
    description: item.description || "",
    badges: item.badges ?? [],
    features: item.features ?? [],
    images,
    isFeatured: item.isFeatured === true,
    sourceUrl: item.sourceUrl,
    published: true
  };
}

export function createWhatsappUrl(number: string) {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}

export async function getSiteSettings() {
  const settings = await fetchSanity<Partial<SiteSettings>>(siteSettingsQuery);
  return mergeWithFallback(fallbackSiteSettings, settings);
}

export async function getHomePage() {
  const page = await fetchSanity<Partial<HomePageContent>>(homePageQuery);
  return mergeWithFallback(fallbackHomePage, page);
}

export async function getAboutPage() {
  const page = await fetchSanity<Partial<AboutPageContent>>(aboutPageQuery);
  return mergeWithFallback(fallbackAboutPage, page);
}

export async function getContactPage() {
  const page = await fetchSanity<Partial<ContactPageContent>>(contactPageQuery);
  return mergeWithFallback(fallbackContactPage, page);
}

export async function getServices() {
  const services = await fetchSanity<Service[]>(servicesQuery);
  return services && services.length > 0 ? services : fallbackServices;
}

export async function getServiceAreas() {
  const areas = await fetchSanity<ServiceArea[]>(serviceAreasQuery);
  return areas && areas.length > 0 ? areas : fallbackServiceAreas;
}

export async function getPublishedProperties() {
  const properties = await fetchSanity<SanityProperty[]>(publishedPropertiesQuery);

  if (!properties) {
    return [];
  }

  return properties
    .map(toProperty)
    .filter((property): property is Property => Boolean(property));
}

export async function getFeaturedProperties() {
  const properties = await getPublishedProperties();
  return properties.filter((property) => property.isFeatured);
}

export async function getPropertyBySlug(slug: string) {
  const query = `
  *[
    _type == "property" &&
    published == true &&
    slug.current == ${JSON.stringify(slug)} &&
    !(_id in path("drafts.**"))
  ][0] {
    ${propertyProjection}
  }
  `;
  const property = await fetchSanity<SanityProperty>(query);

  return property ? toProperty(property) : null;
}
