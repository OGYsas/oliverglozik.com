# oliverglozik.com

Oliver Glozik's website, built with [Astro](https://astro.build) as a static site.
Hosted on Hostinger, which rebuilds and deploys on every push to `main`.

## Hostinger build settings

- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node: 20 or newer

## Editing

- Contact email, city, stats: `src/data/site.ts`
- Problem pages ("hypnosis for X"): add an entry to `src/data/problems.ts`; the page, menus and footer update automatically.
- Other pages: `src/pages/`

## Local development

```
npm install
npm run dev
```
