import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import rss from './src/integrations/rss';
import tailwindcss from '@tailwindcss/vite';
// https://astro.build/config
export default defineConfig({
  site: 'https://robbiethewagner.dev',
  integrations: [react(), mdx(), rss()],

  vite: {
    plugins: [tailwindcss()],
  },
});