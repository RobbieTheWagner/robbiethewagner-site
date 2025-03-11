import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type ArticleEntry = CollectionEntry<'articles'>;

/**
 * Fetches all articles from the content collection and sorts them by date in descending order
 * @param includeHidden Whether to include draft articles (defaults to false)
 * @returns A Promise resolving to a sorted array of article entries
 */
export async function getAllArticles(includeHidden: boolean = false): Promise<ArticleEntry[]> {
  try {
    // Fetch all articles from the collection
    const articles = await getCollection('articles');
    
    // Filter out draft articles if includeHidden is false
    const filteredArticles = includeHidden 
      ? articles 
      : articles.filter(article => !article.data.draft);
    
    // Sort articles by publishDate in descending order (newest first)
    return filteredArticles.sort((a, b) => {
      const dateA = new Date(a.data.publishDate).getTime();
      const dateB = new Date(b.data.publishDate).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    // Return an empty array in case of error
    return [];
  }
}

/**
 * Fetches a specific number of articles, sorted by date
 * @param limit Maximum number of articles to return
 * @param includeHidden Whether to include draft articles (defaults to false)
 * @returns A Promise resolving to a limited array of article entries
 */
export async function getRecentArticles(limit: number, includeHidden: boolean = false): Promise<ArticleEntry[]> {
  const allArticles = await getAllArticles(includeHidden);
  return allArticles.slice(0, limit);
}

