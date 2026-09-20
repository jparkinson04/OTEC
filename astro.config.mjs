// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output, deployed on Vercel (no adapter needed until we add server code).
export default defineConfig({
  site: 'https://otecltd.com',
  integrations: [sitemap()],
});
