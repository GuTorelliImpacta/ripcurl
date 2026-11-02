import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PUBLIC_SITE_URL: domínio final [CONFIRMAR]. Usado em canonical, sitemap e JSON-LD.
const site = process.env.PUBLIC_SITE_URL || 'https://ripcurl-brasil.example';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});
