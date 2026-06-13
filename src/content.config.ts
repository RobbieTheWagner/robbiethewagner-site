import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  loader: glob({
    pattern: '*/index.{md,mdx}',
    base: './src/content/articles',
    generateId: ({ entry }) => entry.replace(/\/index\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    author: z.string(),
    date: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { articles };
