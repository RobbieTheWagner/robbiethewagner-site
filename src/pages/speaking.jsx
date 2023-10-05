import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Robbie Wagner</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at events all around the world and been interviewed for many podcasts."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://www.youtube.com/watch?v=sf9NUrPVNyU"
              title="Whiskey Web and Whatnot Live at EmberConf"
              description={`
              Chatting with Ed Faulkner, Ember Core Team Member and Founder at Polynomial LLC, 
              live at EmberConf about the challenges with package management, how using Vite 
              with Ember will impact developer experience and the value of knowing how to debug.
              `}
              event="EmberConf 2023"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=Kw0V9HvMpI4"
              title="Talking to Your Dog with Ember"
              description={`
              Have you ever wished you knew what your dog was saying when they were barking? 
              Now you can! This talk showcases how we can use Ember and the Web Audio API to 
              decipher different dog barks and translate them into something more meaningful.
              `}
              event="EmberConf 2020"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=u5onNDpt8ks"
              title="Ember Data - It's Not Just for JSON:API Anymore"
              description={`
              Have you ever been completely stumped by a nonstandard API and integrating it with Ember Data? 
              Ember Data “just works” with JSON API out of the box, so often you do not need to know much about the magic behind the scenes. 
              When you have a nonstandard API, however, things can get hairy quick.

              This talk covers how to leverage the Ember Data hooks to bridge the gap, doing things like manually
              adding in links and relationships, for side loading data, combining multiple API calls together into one response, 
              changing the entire structure of your data, adding and removing default records and much, much more!
              `}
              event="EmberConf 2019"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://whiskeywebandwhatnot.fm/"
              title="A fireside chat with your favorite web developers"
              description={`
              Whiskey Web and Whatnot is an informal, whiskey fueled fireside chat with your favorite 
              web devs. We discuss all things web development including JavaScript, TypeScript, EmberJS, 
              React, Astro, SolidJS, CSS, HTML, Web3, and more, but we also get to know the human side 
              of developers and their hobbies outside of work.
              `}
              event="Whiskey Web and Whatnot"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://topenddevs.com/podcasts/javascript-jabber/episodes/unraveling-the-css-revolution-podcast-growth-tactics-and-more-jsj-600"
              title="Unraveling the CSS Revolution, Podcast Growth Tactics, and More"
              description="Had a good chat with the folks at JavaScript Jabber about podcasting tips, what's new in CSS, and various other topics."
              event="JavaScript Jabber, September 2023"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://modernweb.podbean.com/e/modern-web-podcast-s11e4-frameworks-vs-fundamentals-striking-the-right-balance/"
              title="Frameworks vs. Fundamentals: Striking the Right Balance ft The Whiskey Web and Whatnot Podcast"
              description="Really enjoyed chatting Ember, Astro, and the future of frameworks with Tracy and Rob."
              event="Modern Web, September 2023"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://changelog.com/jsparty/285"
              title="Frontend Feud: CSS Podcast vs Whiskey Web and Whatnot"
              description="We had a blast with this friendly competition. I still cannot believe how many people hate all C languages!"
              event="JS Party, July 2023"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://shoptalkshow.com/512/"
              title="Web Whiskey Crossover with Chuck Carpenter & Robbie Wagner"
              description="We had a great chat with Chris and Dave about podcasting, hiring and firing, imposter syndrome, web3, Ember, and working with clients."
              event="ShopTalk Show, April 2022"
              cta="Listen to podcast"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  );
}
