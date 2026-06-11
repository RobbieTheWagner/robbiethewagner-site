import { FEED_AUTHOR, FEED_DESCRIPTION, FEED_TITLE } from '@/lib/feed';
import { getAllArticles } from '@/lib/getAllArticles';

export async function GET(context) {
  const articles = await getAllArticles();

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: FEED_TITLE,
    home_page_url: String(context.site),
    feed_url: String(new URL('/rss/feed.json', context.site)),
    description: FEED_DESCRIPTION,
    favicon: String(new URL('/favicon.ico', context.site)),
    authors: [FEED_AUTHOR],
    items: articles.map((article) => {
      const url = String(new URL(`/articles/${article.id}`, context.site));

      return {
        id: url,
        url,
        title: article.data.title,
        summary: article.data.description,
        content_text: article.data.description,
        date_published: new Date(article.data.date).toISOString(),
        authors: [FEED_AUTHOR],
      };
    }),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      'Content-Type': 'application/feed+json; charset=utf-8',
    },
  });
}
