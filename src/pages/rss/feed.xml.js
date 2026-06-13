import rss from '@astrojs/rss';

import { FEED_AUTHOR, FEED_DESCRIPTION, FEED_TITLE } from '@/lib/feed';
import { getAllArticles } from '@/lib/getAllArticles';

export async function GET(context) {
  const articles = await getAllArticles();

  return rss({
    title: FEED_TITLE,
    description: FEED_DESCRIPTION,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      link: `/articles/${article.id}`,
      pubDate: new Date(article.data.date),
      author: `${FEED_AUTHOR.email} (${FEED_AUTHOR.name})`,
    })),
  });
}
