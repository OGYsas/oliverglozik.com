import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { problems } from './src/data/problems.ts';

// The compact keyword pages and their /help/ hub are not ready yet. Their sources
// are kept as src/pages/_*.astro (not built) and each URL redirects to the home page.
// To bring one back, drop the leading underscore and remove its redirect here and in
// public/.htaccess.
const hidden = ['help', ...problems.map((p) => p.slug)];
const hiddenUrls = new Set(hidden.map((s) => `https://oliverglozik.com/${s}/`));

export default defineConfig({
  site: 'https://oliverglozik.com',
  trailingSlash: 'always',
  redirects: Object.fromEntries(hidden.map((s) => [`/${s}`, { status: 301, destination: '/' }])),
  integrations: [sitemap({ filter: (page) => !hiddenUrls.has(page) })],
});
