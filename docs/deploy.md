# Deploy GitHub + Vercel

## Prerequisiti locali

Installa:

- Git: https://git-scm.com/download/win
- GitHub CLI: https://cli.github.com/
- Node.js LTS: https://nodejs.org/

Poi riapri il terminale nella cartella del progetto.

## Collegare il progetto a GitHub

```bash
git init
git add .
git commit -m "Initial real estate website"
gh auth login
gh repo create biagio-destino-immobiliare --private --source=. --remote=origin --push
```

Se vuoi il repository pubblico:

```bash
gh repo create biagio-destino-immobiliare --public --source=. --remote=origin --push
```

## Verifica prima del deploy

```bash
npm install
npm run typecheck
npm run build
```

## Deploy su Vercel

Metodo consigliato:

1. Vai su https://vercel.com/new
2. Importa il repository GitHub `biagio-destino-immobiliare`
3. Framework preset: Next.js
4. Install command: `npm install`
5. Build command: `npm run build`
6. Output directory: lascia vuoto
7. Aggiungi le variabili ambiente da `.env.example`
8. Clicca Deploy

## Variabili ambiente Vercel

```text
NEXT_PUBLIC_SITE_URL=https://www.destinobiagioimmobiliare.it
NEXT_PUBLIC_WHATSAPP_NUMBER=393204423418
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
```

Quando colleghi il dominio reale, aggiorna `NEXT_PUBLIC_SITE_URL` e ridistribuisci.

## Sanity CMS

1. Installa le dipendenze con `npm install`.
2. Configura un progetto Sanity e copia il project ID in `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. Usa il dataset `production` oppure aggiorna `NEXT_PUBLIC_SANITY_DATASET`.
4. Crea un token di lettura Sanity e inseriscilo in `SANITY_API_READ_TOKEN` se il dataset non è pubblico.
5. Apri `/studio` per gestire gli immobili.

Il sito legge solo immobili con `published = true` e mostra in homepage solo quelli con `isFeatured = true`.
Se Sanity non è configurato, resta attivo il fallback locale in `data/properties.ts`.
