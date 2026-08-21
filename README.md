# Trellis

The source for [jerryleemelton.com](https://jerryleemelton.com) — the personal
portfolio site of Jerry Lee Melton. Built with Next.js 16 (App Router) and
React 19.

## Stack

| Concern     | Choice                                              |
| ----------- | --------------------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack)                  |
| UI          | React 19                                            |
| Styling     | Plain CSS (`app/styles.css`) with CSS custom properties |
| Animation   | [Motion](https://motion.dev)                        |
| Email       | [Resend](https://resend.com) via `/api/contact`     |
| Map         | Leaflet + react-leaflet (CARTO basemap tiles)       |

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build
npm start            # serve the production build
npm run lint         # eslint
npx tsc --noEmit     # type check
```

## Environment variables

| Variable         | Required            | Purpose                                  |
| ---------------- | ------------------- | ---------------------------------------- |
| `RESEND_API_KEY` | For the contact form | Server-side API key used by `/api/contact` to send mail |

Create a `.env.local` for local development (it is gitignored):

```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

The build does **not** require this key — the Resend client is constructed per
request. Without it, `/api/contact` returns a 500 and logs a warning; the rest
of the site works normally.

`app/api/contact/route.ts` currently sends from `onboarding@resend.dev`, which
Resend only delivers to the address that owns the API key. To send from your own
domain, verify it in Resend and change the `from:` address.

## Project layout

```
app/                      routes (App Router)
  api/contact/            contact form endpoint (Resend + per-IP rate limit)
  api/asteroids/scores/   leaderboard endpoint — see note below
  projects/[projectName]/ case study pages, prerendered via generateStaticParams
  opengraph-image.tsx     social share card, generated at build time by next/og
  styles.css              all site styles
components/               shared UI (nav, footer, cards, SVG icons, map)
content/projects/         per-project case study content, keyed in index.ts
game/                     Reacteroids engine, renderer, CRT filter, audio
public/                   images, resume PDF
```

### Adding a project

1. Add an entry to `projectCardData` in
   `components/cards/projectCardData/ProjectCardData.ts`.
2. Add a content component in `content/projects/` and register it in
   `content/projects/index.ts` under the same key.

The key becomes the URL slug (`/projects/<key>`) and is picked up automatically
by `generateStaticParams`.

### Reacteroids leaderboard

`game/scores.ts` stores high scores in `localStorage` by default. The
`/api/asteroids/scores` route exists for a shared leaderboard but is not wired
up — nothing passes the `scoresApiUrl` prop to `<ReacteroidsGame />`. It also
writes to the local filesystem, which does not persist on serverless hosts;
it would need a database before being enabled.

## Deployment

The site needs a Node.js runtime because `/api/contact` is a server route.
Vercel's free Hobby tier covers this and supports a custom domain at no cost.

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — the Next.js preset is
   detected automatically; no build settings need changing.
3. Add `RESEND_API_KEY` under Project Settings → Environment Variables.
4. Add the custom domain under Project Settings → Domains, then point the
   registrar's DNS at the records Vercel provides.
