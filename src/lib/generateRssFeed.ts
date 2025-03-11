import { Feed } from 'feed';
import { mkdir, writeFile } from 'fs/promises';
import { getCollection, type CollectionEntry } from 'astro:content';
import { marked } from 'marked';

// Define types
interface Author {
  name: string;
  email: string;
}

interface FeedOptions {
  title: string;
  description: string;
  author: Author;
  id: string;
  link: string;
  image: string;
  favicon: string;
  copyright: string;
  feedLinks: {
    rss2: string;
    json: string;
  };
}

/**
 * Generates RSS feed for the site in XML and JSON formats
 * @returns {Promise<void>}
 */
export async function generateRssFeed(): Promise<void> {
  console.log('📢 Starting RSS feed generation...');
  try {
    // Get all articles from the content collection
    console.log('🔍 Fetching articles from content collection...');
    const articles: CollectionEntry<'articles'>[] = await getCollection('articles');
    
    // Sort articles by date in descending order (newest first)
    const sortedArticles = articles.sort(
      (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );
    console.log(`✅ Fetched ${sortedArticles.length} articles`);
    
    const siteUrl: string = import.meta.env.SITE;
    if (!siteUrl) {
      throw new Error('SITE environment variable is not defined.');
    }
    
    // Define the author
    const author: Author = {
      name: 'Robbie Wagner',
      email: 'rwwagner90@gmail.com',
    };
    
    // Define feed options
    const feedOptions: FeedOptions = {
      title: author.name,
      description: 'My thoughtful ramblings about Ember.js, Nuxt.js, JavaScript, life, liberty and the pursuit of happiness.',
      author,
      id: siteUrl,
      link: siteUrl,
      image: `${siteUrl}/favicon.ico`,
      favicon: `${siteUrl}/favicon.ico`,
      copyright: `All rights reserved ${new Date().getFullYear()}`,
      feedLinks: {
        rss2: `${siteUrl}/rss/feed.xml`,
        json: `${siteUrl}/rss/feed.json`,
      },
    };
    
    const feed = new Feed(feedOptions);

    console.log('📝 Adding articles to feed...');
    let processedCount = 0;
    
    for (const article of sortedArticles) {
      try {
        // Get the slug from the article file path
        const slug = article.slug;
        const url = `${siteUrl}/articles/${slug}`;
        
        // Convert article body to HTML using marked
        let content = '';
        
        try {
          const { Content } = await article.render();
          
          // This is a workaround since we can't directly render Astro components to string
          // Use the markdown content instead
          if (article.body) {
            content = marked.parse(article.body);
          }
        } catch (renderError) {
          console.error(`⚠️ Error rendering article ${slug}:`, renderError);
          // Use a fallback content with just the description if rendering fails
          content = article.data.description || 'Article content unavailable';
        }
        
        feed.addItem({
          title: article.data.title,
          id: url,
          link: url,
          description: article.data.description,
          content: content,
          author: [author],
          contributor: [author],
          date: new Date(article.data.date),
        });
        
        processedCount++;
        if (processedCount % 5 === 0 || processedCount === sortedArticles.length) {
          console.log(`✅ Processed ${processedCount}/${sortedArticles.length} articles`);
        }
      } catch (articleError) {
        console.error(`❌ Error processing article ${article.slug}:`, articleError);
        // Continue with the next article even if this one fails
      }
    }

    console.log('💾 Writing feed files to disk...');
    try {
      await mkdir('./public/rss', { recursive: true });
      
      await Promise.all([
        writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8').then(() => {
          console.log('✅ Successfully wrote RSS XML feed to ./public/rss/feed.xml');
        }),
        writeFile('./public/rss/feed.json', feed.json1(), 'utf8').then(() => {
          console.log('✅ Successfully wrote RSS JSON feed to ./public/rss/feed.json');
        }),
      ]);
      
      console.log('🎉 RSS feed generation completed successfully!');
    } catch (fileError: any) {
      console.error('❌ Error writing feed files:', fileError);
      throw new Error(`Failed to write feed files: ${fileError.message}`);
    }
  } catch (error: any) {
    console.error('❌ RSS feed generation failed:', error);
    throw error; // Re-throw to allow calling code to handle the error
  }
}

