import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import { remarkCodeHike } from '@code-hike/mdx';
import rehypePrism from '@mapbox/rehype-prism';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
      remarkFrontmatter,
      remarkMdxFrontmatter,
      remarkToc,
    ],
    rehypePlugins: [rehypePrism, rehypeSlug, rehypeAutolinkHeadings],
  },
});

export default withMDX(nextConfig);
