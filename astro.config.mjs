import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import expressiveCode from 'astro-expressive-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

// https://astro.build/config
export default defineConfig({
  site: 'https://robbiethewagner.dev',
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
  integrations: [
    expressiveCode({
      themes: ['one-dark-pro'],
      defaultProps: {
        showLineNumbers: false,
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
