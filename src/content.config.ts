import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

export const collections = {
  articles: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/articles' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      author: z.string().default('Robbie Wagner'),
    }),
  }),
};
