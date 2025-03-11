import { defineCollection, z } from 'astro:content';

// Define the schema for the article collection
const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Samuel Braithwaite'),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Export collections to register them
export const collections = {
  'articles': articlesCollection,
};

