import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
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
  )
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
              href="https://www.youtube.com/watch?v=Kw0V9HvMpI4"
              title="Talking to Your Dog with Ember"
              description="Description"
              event="EmberConf 2020"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=u5onNDpt8ks"
              title="Ember Data - It's Not Just for JSON:API Anymore"
              description="Description"
              event="EmberConf 2019"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://whiskeywebandwhatnot.fm/"
              title="A fireside chat with your favorite web developers"
              description="TODO"
              event="Whiskey Web and Whatnot"
              cta="Listen to podcast"
            />
            <Appearance
              href="https://shoptalkshow.com/512/"
              title="Web Whiskey Crossover with Chuck Carpenter & Robbie Wagner"
              description="TODO"
              event="ShopTalk Show, April 2022"
              cta="Listen to podcast"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
