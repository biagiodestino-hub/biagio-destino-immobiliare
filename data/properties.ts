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

export const properties: Property[] = [
  {
    slug: "villa-panoramica-cefalu",
    title: "Villa panoramica con terrazza",
    price: "620.000 euro",
    location: "Cefalu",
    province: "Palermo",
    squareMeters: 160,
    rooms: 4,
    bathrooms: 3,
    badge: "Vista mare",
    category: "Residenziale premium",
    galleryTone: "sea",
    description:
      "Villa luminosa con terrazza panoramica, spazi generosi e ottimo potenziale come abitazione principale o casa vacanze di livello.",
    features: ["Terrazza vista mare", "Zona living aperta", "Posto auto", "Potenziale turistico"]
  },
  {
    slug: "appartamento-storico-ortigia",
    title: "Appartamento storico sul mare",
    price: "285.000 euro",
    location: "Ortigia",
    province: "Siracusa",
    squareMeters: 92,
    rooms: 2,
    bathrooms: 2,
    badge: "Occasione",
    category: "Seconda casa",
    galleryTone: "city",
    description:
      "Soluzione elegante nel cuore storico di Ortigia, ideale per chi cerca una seconda casa o un investimento immobiliare in Sicilia.",
    features: ["Centro storico", "Balcone", "Pronto da vivere", "Alta richiesta turistica"]
  },
  {
    slug: "casale-da-ristrutturare-noto",
    title: "Casale da ristrutturare",
    price: "145.000 euro",
    location: "Noto",
    province: "Siracusa",
    squareMeters: 210,
    rooms: 5,
    bathrooms: 2,
    badge: "Da ristrutturare",
    category: "Investimento",
    galleryTone: "sand",
    description:
      "Casale con grande potenziale di valorizzazione, perfetto per un progetto ricettivo, una residenza mediterranea o una seconda casa.",
    features: ["Ampia metratura", "Terreno", "Progetto turistico", "Valore da sviluppare"]
  },
  {
    slug: "casa-vacanze-taormina",
    title: "Seconda casa con giardino",
    price: "390.000 euro",
    location: "Taormina",
    province: "Messina",
    squareMeters: 130,
    rooms: 3,
    bathrooms: 2,
    badge: "Turistica",
    category: "Casa vacanze",
    galleryTone: "sea",
    description:
      "Casa curata e luminosa con giardino, pensata per vivere la Sicilia e generare rendimento nei periodi di alta stagione.",
    features: ["Giardino privato", "Zona richiesta", "Arredi su misura", "Rendimento turistico"]
  },
  {
    slug: "attico-palermo-centro",
    title: "Attico luminoso in centro",
    price: "510.000 euro",
    location: "Palermo",
    province: "Palermo",
    squareMeters: 145,
    rooms: 3,
    bathrooms: 2,
    badge: "Premium",
    category: "Residenziale",
    galleryTone: "city",
    description:
      "Attico elegante in zona servita, con ambienti luminosi, finiture moderne e spazi esterni per vivere la citta con comfort.",
    features: ["Terrazza", "Ascensore", "Finiture moderne", "Servizi vicini"]
  },
  {
    slug: "investimento-san-vito-lo-capo",
    title: "Investimento vicino spiaggia",
    price: "198.000 euro",
    location: "San Vito Lo Capo",
    province: "Trapani",
    squareMeters: 78,
    rooms: 2,
    bathrooms: 1,
    badge: "Investimento",
    category: "Turistico",
    galleryTone: "sea",
    description:
      "Immobile compatto vicino al mare, adatto a locazioni brevi e a chi cerca una base semplice in una destinazione molto richiesta.",
    features: ["Vicino spiaggia", "Bassi costi", "Alta domanda", "Gestione semplice"]
  }
];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}
