import { getCollection } from 'astro:content';

export async function getAllArticles() {
  const articles = await getCollection('articles');

  return articles.sort((a, z) => new Date(z.data.date) - new Date(a.data.date));
}
