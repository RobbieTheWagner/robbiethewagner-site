import type { AstroIntegration } from 'astro';
import { generateRssFeed } from '../lib/generateRssFeed';

/**
 * Creates an Astro integration that generates RSS feeds during build
 */
export default function rssIntegration(): AstroIntegration {
  return {
    name: 'rss-feed-generator',
    hooks: {
      'astro:build:done': async ({ logger }) => {
        try {
          logger.info('Generating RSS feed...');
          await generateRssFeed();
          logger.info('RSS feed generation complete!');
        } catch (error) {
          logger.error('Failed to generate RSS feed');
          if (error instanceof Error) {
            logger.error(error.message);
            if (error.stack) {
              logger.error(error.stack);
            }
          } else {
            logger.error(String(error));
          }
        }
      }
    }
  };
}

