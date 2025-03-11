import type { MarkdownHeading, MarkdownInstance } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';

// Define types for markdown content and metadata
export interface MarkdownContent {
  content: string;
  excerpt?: string;
  frontmatter: MarkdownFrontmatter;
  headings: MarkdownHeading[];
  file: string;
  slug: string;
}

export interface MarkdownFrontmatter {
  title: string;
  description?: string;
  date: string | Date;
  author?: string;
  tags?: string[];
  image?: {
    src: string;
    alt?: string;
  };
  draft?: boolean;
  [key: string]: unknown;
}

export interface CodeBlock {
  code: string;
  language: string;
  meta?: string;
  title?: string;
}

export interface MarkdownRenderOptions {
  /**
   * Whether to include custom components
   * @default true
   */
  components?: boolean;
  /**
   * Whether to enable syntax highlighting for code blocks
   * @default true
   */
  syntaxHighlighting?: boolean;
  /**
   * Custom rehype plugins to use
   */
  rehypePlugins?: any[];
  /**
   * Custom remark plugins to use
   */
  remarkPlugins?: any[];
}

/**
 * Get all markdown content from a specific collection
 * @param collection The collection name to fetch content from
 * @param filterDrafts Whether to filter out draft posts
 * @returns A promise that resolves to an array of content entries
 */
export async function getMarkdownCollection(
  collection: string,
  filterDrafts = true
): Promise<CollectionEntry<any>[]> {
  const allContent = await getCollection(collection);
  
  if (filterDrafts) {
    return allContent.filter(post => !post.data.draft);
  }
  
  return allContent;
}

/**
 * Sort an array of markdown content entries by date
 * @param entries The entries to sort
 * @param direction The sort direction ('asc' or 'desc')
 * @returns The sorted entries
 */
export function sortContentByDate<T extends { data: { date: Date | string }}>(
  entries: T[],
  direction: 'asc' | 'desc' = 'desc'
): T[] {
  return [...entries].sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    
    return direction === 'asc' ? dateA - dateB : dateB - dateA;
  });
}

/**
 * Filter content by tags
 * @param entries The content entries to filter
 * @param tags The tags to filter by
 * @returns Filtered content entries
 */
export function filterContentByTags<T extends { data: { tags?: string[] }}>(
  entries: T[],
  tags: string[]
): T[] {
  if (!tags.length) return entries;
  
  return entries.filter(entry => {
    const entryTags = entry.data.tags || [];
    return tags.some(tag => entryTags.includes(tag));
  });
}

/**
 * Extract excerpt from markdown content
 * @param content The markdown content
 * @param length The max length of the excerpt
 * @returns The excerpt
 */
export function extractExcerpt(content: string, length = 160): string {
  // Remove HTML tags and markdown syntax
  const text = content
    .replace(/<[^>]*>/g, '')
    .replace(/[#*_~`]/g, '')
    .replace(/\n/g, ' ')
    .trim();
  
  if (text.length <= length) return text;
  
  // Truncate and add ellipsis
  return text.substring(0, length).trim() + '...';
}

/**
 * Process code blocks for syntax highlighting
 * @param codeBlock The code block to process
 * @returns The processed HTML for the code block
 */
export function processCodeBlock(codeBlock: CodeBlock): string {
  const { code, language, title } = codeBlock;
  
  // The actual implementation will depend on which syntax highlighter is used
  // Astro integrates with Shiki or Prism by default
  
  let codeHtml = `<pre><code class="language-${language}">${code}</code></pre>`;
  
  // Add title if provided
  if (title) {
    codeHtml = `<div class="code-block">
      <div class="code-title">${title}</div>
      ${codeHtml}
    </div>`;
  }
  
  return codeHtml;
}

/**
 * Parse frontmatter from a markdown string
 * @param markdown The markdown string to parse
 * @returns The extracted frontmatter
 */
export function parseFrontmatter(markdown: string): MarkdownFrontmatter | null {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(markdown);
  
  if (!match) return null;
  
  const frontmatterStr = match[1];
  const frontmatter: Record<string, any> = {};
  
  // Simple YAML-like parsing of frontmatter
  frontmatterStr.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim();
      frontmatter[key.trim()] = value;
    }
  });
  
  return frontmatter as MarkdownFrontmatter;
}

/**
 * Process markdown headings to create a table of contents
 * @param headings The markdown headings to process
 * @returns An array of processed TOC items
 */
export function generateTableOfContents(headings: MarkdownHeading[]): MarkdownHeading[] {
  // Filter out unwanted heading levels if needed
  return headings.filter(heading => heading.depth <= 3);
}

/**
 * Format headings with anchor links for easy navigation
 * @param content The HTML content
 * @param headings The markdown headings
 * @returns The processed HTML with anchor links
 */
export function addHeadingAnchors(content: string, headings: MarkdownHeading[]): string {
  let processedContent = content;
  
  headings.forEach(heading => {
    const { slug, text } = heading;
    const regex = new RegExp(`<h${heading.depth}>(${text})<\/h${heading.depth}>`, 'g');
    const replacement = `<h${heading.depth} id="${slug}"><a href="#${slug}" class="heading-anchor">${text}</a></h${heading.depth}>`;
    
    processedContent = processedContent.replace(regex, replacement);
  });
  
  return processedContent;
}

/**
 * Create custom MDX components for enhanced markdown rendering
 * @returns Object containing custom MDX components
 */
export function createMdxComponents() {
  // This is just an example - the actual implementation will depend on your needs
  return {
    // Example custom components that can be used in MDX
    Callout: (props: { children: any; type?: 'info' | 'warning' | 'error' }) => {
      const { type = 'info' } = props;
      return `<div class="callout ${type}">${props.children}</div>`;
    },
    CodeBlock: (props: CodeBlock) => {
      return processCodeBlock(props);
    },
    // Add more custom components as needed
  };
}

