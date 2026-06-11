# Biagio Destino Immobiliare

Sito immobiliare sviluppato con Next.js, Tailwind CSS, TypeScript e Sanity CMS.

## Pagine

- Home
- Immobili
- Scheda immobile
- Chi sono
- Contatti
- Studio CMS: `/studio`

## Sanity CMS

Il sito legge da Sanity:

- immobili
- homepage
- chi sono
- contatti
- impostazioni sito e SEO
- servizi
- zone servite

Variabili richieste:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
```

I documenti `siteSettings`, `homePage`, `aboutPage` e `contactPage` sono
singleton. Prima della loro compilazione, il sito usa fallback testuali
temporanei.

Gli immobili arrivano esclusivamente da Sanity:

- la homepage mostra solo immobili con `isFeatured = true`
- la pagina immobili mostra solo immobili con `published = true`
- `data/properties.ts` resta come archivio e non viene usato dal frontend
- se non ci sono immobili pubblicati, viene mostrato uno stato vuoto

## Avvio locale

```bash
npm install
npm run dev
```

## Verifica

```bash
npm run typecheck
npm run build
```

## Deploy Vercel

1. Carica il progetto su GitHub.
2. Importa il repository su Vercel.
3. Seleziona il preset Next.js.
4. Configura le variabili ambiente.
5. Collega il dominio `www.destinobiagioimmobiliare.it`.

Guida completa: [docs/deploy.md](docs/deploy.md).
