import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { problems } from './src/data/problems.ts';

// The compact keyword pages and their /help/ hub are built but kept out of the
// sitemap until each one is ready to be linked from the site again.
const hidden = new Set(['help', ...problems.map((p) => p.slug)].map((s) => `https://oliverglozik.com/${s}/`));

export default defineConfig({
  site: 'https://oliverglozik.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !hidden.has(page) })],
});
