import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  const description = 'I’m Robbie Wagner, a web developer from Virginia.';
  const yearsOfWebDev =
    new Date().getFullYear() - new Date('04/20/2010').getFullYear();

  return (
    <>
      <Head>
        <title>About - Robbie Wagner</title>
        <meta name="description" content={description} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {description}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve always loved making things from creating and selling my own
                mint flavored water in third grade, to playing around with
                Photoshop to design shirts, but it was when I started building
                custom MySpace layouts for bands that I fell in love with the
                web.
              </p>

              <p>
                For the past {yearsOfWebDev} years, I’ve been learning and
                building on the web. From PHP and jQuery, to EmberJS and
                Angular, to Svelte, Astro and all the latest hotness, I’ve used
                it all, but no matter what shiny new frameworks come out, my
                heart always belongs to Ember.
              </p>

              <p>
                In 2017 I turned my passion for Ember into a business and
                founded an Ember consultancy called Ship Shape. Throughout my
                time with Ship Shape I worked with many clients including Apple,
                Netflix, and Expel, and as we grew we expanded into other
                frameworks like Nuxt and Next.js.
              </p>

              <p>
                Today, I work at HashiCorp, an IBM company, slinging EmberJS and
                building UIs to help streamline working with complex
                infrastructure. I also cohost Whiskey Web and Whatnot with
                Charles William Carpenter III and sometimes create videos and
                blog posts about the tech topic du jour.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/RobbieTheWagner"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>

              <SocialLink
                href="https://github.com/RobbieTheWagner"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>

              <SocialLink
                href="https://linkedin.com/in/RobbieTheWagner"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>

              <SocialLink
                href="mailto:robbie@shipshape.io"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                robbie@shipshape.io
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
