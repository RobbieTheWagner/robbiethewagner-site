# robbiethewagner.dev

Personal site of Robbie Wagner, built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com), based on the Spotlight
[Tailwind UI](https://tailwindui.com) template.

## Getting started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Then open [http://localhost:4321](http://localhost:4321) in your browser to
view the website.

## Building

```bash
pnpm build
pnpm preview
```

The site is fully static — pages are rendered at build time and the only
client-side JavaScript is a few small vanilla scripts (dark mode toggle,
mobile navigation, header scroll effects, and article demos).

Articles live in `src/content/articles` as Markdown/MDX content collections.
RSS feeds are generated at `/rss/feed.xml` and `/rss/feed.json`.

## License

This site is based on a commercial Tailwind UI template, licensed under the
[Tailwind UI license](https://tailwindui.com/license).

## Learn more

- [Astro](https://docs.astro.build) - the official Astro documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [MDX](https://mdxjs.com) - the MDX documentation
