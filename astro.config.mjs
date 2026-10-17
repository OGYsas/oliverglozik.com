import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { problems } from './src/data/problems.ts';

// The compact keyword pages, their /help/ hub and /about/ are built but kept out
// of the sitemap until each one is ready to be linked from the site again.
const hidden = new Set(['help', 'about', ...problems.map((p) => p.slug)].map((s) => `https://oliverglozik.com/${s}/`));

export default defineConfig({
  site: 'https://oliverglozik.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !hidden.has(page) })],
});
