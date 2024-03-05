import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import { remarkCodeHike } from '@code-hike/mdx';
import rehypePrism from '@mapbox/rehype-prism';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: 'file-loader',
    });
    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [remarkCodeHike, { theme: 'one-dark-pro', lineNumbers: false }],
      remarkGfm,
    ],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
