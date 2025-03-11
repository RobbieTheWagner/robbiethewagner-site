import { Feed } from 'feed';
import { marked } from 'marked';
import { mkdir, writeFile } from 'node:fs/promises';

export async function generateRssFeed({ sortedArticles, siteUrl, siteTitle, siteDescription, author }) {
  try {
    const feedOptions = {
      title: siteTitle,
      description: siteDescription,
      id: siteUrl,
      link: siteUrl,
      language: 'en',
      image: `${siteUrl}/favicon.png`,
      favicon: `${siteUrl}/favicon.png`,
      copyright: `All rights reserved ${new Date().getFullYear()}`,
      feedLinks: {
        rss2: `${siteUrl}/rss/feed.xml`,
        json: `${siteUrl}/rss/feed.json`,
      },
      author: author
    };
    
    const feed = new Feed(feedOptions);

    console.log('\U0001F4DD Adding articles to feed...');
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
    } catch (fileError) {
      console.error('❌ Error writing feed files:', fileError);
      throw new Error(`Failed to write feed files: ${fileError.message}`);
    }
  } catch (error) {
    console.error('❌ RSS feed generation failed:', error);
    throw error; // Re-throw to allow calling code to handle the error
  }
}
