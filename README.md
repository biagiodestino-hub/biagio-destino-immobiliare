# Biagio Destino Immobiliare

Sito immobiliare sviluppato con Next.js, Tailwind CSS e TypeScript, pronto per Vercel.

## Pagine

- Home
- Immobili
- Scheda immobile
- Chi sono
- Contatti
- Studio CMS: `/studio`

## Sanity CMS

Gli immobili vengono letti da Sanity quando sono configurate le variabili:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
```

Se Sanity non è configurato o non risponde, il sito usa il fallback locale in `data/properties.ts`.

Nel CMS il documento `property` supporta:
titolo, slug, prezzo, località, tipologia, piano, superficie, vani, bagni, descrizione, badge, caratteristiche, immagini multiple, evidenza homepage, link origine e pubblicazione.

La homepage mostra solo immobili `isFeatured = true`; la pagina immobili mostra solo `published = true`.

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy su Vercel

1. Crea un repository GitHub con questi file.
2. Importa il repository su Vercel.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output: automatico per Next.js.
6. Aggiungi il dominio finale `www.destinobiagioimmobiliare.it` e verifica le variabili ambiente.

Guida completa: [docs/deploy.md](docs/deploy.md).
