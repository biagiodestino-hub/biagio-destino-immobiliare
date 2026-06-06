export type Property = {
  slug: string;
  title: string;
  price: string;
  location: string;
  province: string;
  type: string;
  floor?: string;
  squareMeters: number;
  squareMetersLabel: string;
  rooms: number;
  roomsLabel: string;
  bathrooms: number;
  bathroomsLabel: string;
  badges: string[];
  category: string;
  description: string;
  seoDescription: string;
  features: string[];
  image: string;
  sourceUrl?: string;
  galleryTone: "sea" | "sand" | "city";
};

export const properties: Property[] = [
  {
    slug: "appartamento-da-ristrutturare-capo-dorlando-san-gregorio",
    title: "Appartamento da ristrutturare a Capo d'Orlando",
    price: "€ 265.000",
    location: "Capo d'Orlando - Contrada San Gregorio",
    province: "Messina",
    type: "Appartamento",
    floor: "2° piano",
    squareMeters: 110,
    squareMetersLabel: "110 mq",
    rooms: 3,
    roomsLabel: "3 vani",
    bathrooms: 2,
    bathroomsLabel: "2 bagni",
    badges: ["Da ristrutturare", "Vista mare", "Investimento"],
    category: "Appartamento da personalizzare",
    galleryTone: "sea",
    image: "/images/immobili/capo-dorlando-san-gregorio-1.jpg",
    sourceUrl: "https://www.gabetti.it/vendita/capo-d-orlando/appartamento/3296546",
    description:
      "A Capo d'Orlando, in Contrada San Gregorio, proponiamo appartamento da ristrutturare posto al secondo piano, con superficie di circa 110 mq. L'immobile è composto da 3 vani e doppi servizi ed è ideale per chi desidera personalizzare gli ambienti secondo il proprio gusto. Soluzione interessante sia come abitazione principale sia come investimento, in una zona apprezzata del territorio orlandino.",
    seoDescription:
      "Appartamento da ristrutturare a Capo d'Orlando, Contrada San Gregorio: 110 mq, 3 vani, 2 bagni, vista mare e ottimo potenziale di investimento.",
    features: [
      "Contrada San Gregorio",
      "Secondo piano",
      "Da ristrutturare",
      "Vista mare",
      "Doppi servizi",
      "Ideale come abitazione o investimento"
    ]
  },
  {
    slug: "nuova-costruzione-lungomare-andrea-doria-capo-dorlando",
    title: "Nuova costruzione sul Lungomare Andrea Doria",
    price: "€ 385.000",
    location: "Capo d'Orlando - Lungomare Andrea Doria",
    province: "Messina",
    type: "Appartamento nuova costruzione",
    floor: "Piano terra",
    squareMeters: 110,
    squareMetersLabel: "110 mq",
    rooms: 3,
    roomsLabel: "3 vani",
    bathrooms: 2,
    bathroomsLabel: "2 bagni",
    badges: ["Nuova costruzione", "Lungomare", "Terrazze"],
    category: "Appartamento sul lungomare",
    galleryTone: "sea",
    image: "/images/immobili/lungomare-andrea-doria-1.jpg",
    sourceUrl: "https://www.gabetti.it/vendita/capo-d-orlando/appartamento/3305016",
    description:
      "Sul Lungomare Andrea Doria di Capo d'Orlando, proponiamo appartamento di nuova costruzione al piano terra, con superficie di circa 110 mq. L'immobile dispone di 3 vani, doppi servizi, due terrazze e posto auto scoperto. Una soluzione moderna e funzionale, ideale per chi cerca comfort, posizione strategica e spazi esterni vicino al mare.",
    seoDescription:
      "Appartamento nuova costruzione sul Lungomare Andrea Doria a Capo d'Orlando: 110 mq, 3 vani, 2 bagni, due terrazze e posto auto.",
    features: [
      "Lungomare Andrea Doria",
      "Nuova costruzione",
      "Piano terra",
      "Due terrazze",
      "Posto auto scoperto",
      "Posizione vicino al mare"
    ]
  },
  {
    slug: "casa-indipendente-con-terreno-sant-agata-di-militello-fiorita",
    title: "Casa indipendente con terreno a Sant'Agata di Militello",
    price: "€ 330.000",
    location: "Sant'Agata di Militello - Contrada Fiorita",
    province: "Messina",
    type: "Casa indipendente",
    floor: "S1-T",
    squareMeters: 200,
    squareMetersLabel: "200 mq",
    rooms: 5,
    roomsLabel: "5 vani",
    bathrooms: 2,
    bathroomsLabel: "2 bagni",
    badges: ["Indipendente", "Terreno", "Vista panoramica"],
    category: "Casa indipendente con terreno",
    galleryTone: "sand",
    image: "/images/immobili/santagata-fiorita-1.jpg",
    sourceUrl:
      "https://www.gabetti.it/vendita/sant-agata-di-militello/casa-indipendente/3267539",
    description:
      "In Contrada Fiorita, a Sant'Agata di Militello, proponiamo casa indipendente con terreno di circa 5.000 mq e lastrico solare. L'immobile si sviluppa tra piano seminterrato e piano terra, con superficie di circa 200 mq, 5 vani e 2 bagni. Soluzione ideale per chi desidera indipendenza, ampi spazi esterni e potenziale di valorizzazione.",
    seoDescription:
      "Casa indipendente con terreno a Sant'Agata di Militello, Contrada Fiorita: 200 mq, 5 vani, 2 bagni, 5.000 mq di terreno e lastrico solare.",
    features: [
      "Contrada Fiorita",
      "Casa indipendente",
      "Terreno di circa 5.000 mq",
      "Lastrico solare",
      "Piano seminterrato e piano terra",
      "Potenziale di valorizzazione"
    ]
  },
  {
    slug: "villetta-a-schiera-residence-acquedolci-buffone",
    title: "Villetta a schiera in residence esclusivo ad Acquedolci",
    price: "€ 135.000",
    location: "Acquedolci - Contrada Buffone",
    province: "Messina",
    type: "Villetta a schiera",
    squareMeters: 82,
    squareMetersLabel: "82 mq",
    rooms: 3,
    roomsLabel: "3 vani",
    bathrooms: 1,
    bathroomsLabel: "1 bagno",
    badges: ["Residence", "Piscina", "Spazi esterni"],
    category: "Villetta in residence",
    galleryTone: "city",
    image: "/images/immobili/acquedolci-buffone-1.jpg",
    description:
      "Ad Acquedolci, in Contrada Buffone, proponiamo villetta a schiera di circa 82 mq all'interno di un residence esclusivo con piscina e ampie aree verdi. L'immobile dispone di 3 vani, un bagno, terrazzi, cantina e posto auto. Soluzione ideale come casa vacanze, abitazione estiva o investimento immobiliare in contesto riservato.",
    seoDescription:
      "Villetta a schiera ad Acquedolci in Contrada Buffone: 82 mq, 3 vani, terrazzi, cantina, posto auto e residence con piscina.",
    features: [
      "Residence esclusivo",
      "Piscina condominiale",
      "Aree verdi",
      "Terrazzi",
      "Cantina",
      "Posto auto"
    ]
  },
  {
    slug: "due-villette-a-schiera-finale-di-pollina-rais-gerbi",
    title: "Due villette a schiera a Finale di Pollina",
    price: "Trattativa riservata",
    location: "Finale di Pollina - Contrada Rais Gerbi",
    province: "Palermo",
    type: "Villette a schiera",
    squareMeters: 80,
    squareMetersLabel: "circa 40 mq ciascuna",
    rooms: 4,
    roomsLabel: "2 vani ciascuna",
    bathrooms: 2,
    bathroomsLabel: "1 bagno ciascuna",
    badges: ["Due unità", "Corte esterna", "Mare vicino"],
    category: "Soluzione doppia vicino al mare",
    galleryTone: "sea",
    image: "/images/immobili/pollina-rais-gerbi-1.jpg",
    description:
      "A Finale di Pollina, in Contrada Rais Gerbi, proponiamo due villette a schiera di circa 40 mq ciascuna, entrambe composte da 2 vani, un bagno e corte esterna. Soluzione interessante per chi cerca due unità vicine, ideali per uso familiare, investimento turistico o casa vacanze.",
    seoDescription:
      "Due villette a schiera a Finale di Pollina, Contrada Rais Gerbi: circa 40 mq ciascuna, corte esterna e mare vicino.",
    features: [
      "Due unità vicine",
      "Circa 40 mq ciascuna",
      "Corte esterna",
      "Mare vicino",
      "Ideali per uso familiare",
      "Interessanti per investimento turistico"
    ]
  }
];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}
