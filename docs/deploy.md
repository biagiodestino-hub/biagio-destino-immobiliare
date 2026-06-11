# Deploy GitHub + Vercel

## Verifica locale

```bash
npm install
npm run typecheck
npm run build
```

## Deploy su Vercel

1. Importa il repository GitHub su Vercel.
2. Framework preset: Next.js.
3. Install command: `npm install`.
4. Build command: `npm run build`.
5. Output directory: lascia vuoto.
6. Configura le variabili ambiente.

## Variabili ambiente

```text
NEXT_PUBLIC_SITE_URL=https://www.destinobiagioimmobiliare.it
NEXT_PUBLIC_WHATSAPP_NUMBER=393204423418
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
```

## Configurazione Sanity

Apri `/studio` e compila i singleton:

- Impostazioni sito
- Homepage
- Chi sono
- Contatti

Poi crea:

- servizi
- zone servite
- immobili

Il sito mostra esclusivamente immobili Sanity con `published = true`. La
homepage mostra soltanto quelli con `isFeatured = true`.

Le pagine usano una rigenerazione di 60 secondi, quindi le modifiche pubblicate
nel CMS diventano visibili senza un nuovo deploy manuale.

`data/properties.ts` resta un archivio storico e non viene utilizzato dal
frontend.
