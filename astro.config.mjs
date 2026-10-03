import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oliverglozik.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
