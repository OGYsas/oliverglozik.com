# oliverglozik.com — working rules

## 1. The live site

This repo is Oliver Glozik's personal website, **https://oliverglozik.com**. It is a static
[Astro](https://astro.build) site hosted on **Hostinger**, which rebuilds and deploys on every
push to `main`. **Pushing to main updates the live site, so confirm in chat before pushing.**

- GitHub: `OGYsas/oliverglozik.com` (public repo, so never commit secrets or API keys).
- Build: `npm run build` → `dist/`. Node 20+.

## 2. Not Harmonica

This is a separate project from the Harmonica retreat site (ayahuasca-retreat.com,
`~/Desktop/new-harmonica-website`). None of the Harmonica rules, routines, tools or deploy
steps apply here, and the two sites share no code. Only link to Harmonica on purpose.

## 3. Workflow

```bash
npm install
npm run dev        # local check at http://localhost:4321
npm run build      # must pass before pushing
```

## 4. Where things live

- Contact email, city, stats: `src/data/site.ts`
- Problem pages ("hypnosis for X"): add an entry to `src/data/problems.ts`. The page, menus
  and footer update automatically through `src/pages/[slug].astro`.
- Other pages: `src/pages/` (about, breathwork, coaching, contact, help, hypnosis, retreats)
- Shared layout: `src/layouts/Base.astro`; styles: `src/styles/global.css`
