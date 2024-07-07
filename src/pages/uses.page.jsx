import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  const description =
    'Hardware I code on, software I code with, and other fancy things I use.';
  return (
    <>
      <Head>
        <title>Uses - Robbie Wagner</title>
        <meta name="description" content={description} />
      </Head>
      <SimpleLayout
        title={description}
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2021)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. The M1 is so efficient that the fans
              hardly ever turn on and my battery lasts forever. Even when I get
              the low battery warning, I know I have plenty of time before I
              need to plug in.
            </Tool>

            <Tool
              href="https://www.amazon.com/Apple-32-inch-Pro-Display-Retina/dp/B082M1P2ZQ/ref=sr_1_3?crid=97JRN092HJKI&amp;keywords=xdr&amp;qid=1686707795&amp;sprefix=xdr%252Caps%252C89&amp;sr=8-3&amp;ufe=app_do%253Aamzn1.fos.ac2169a1-b668-44b9-8bd0-5ec63b24bcb5&_encoding=UTF8&tag=robbiethewagn-20&linkCode=ur2&linkId=78886a36938f98014a3d32ca6f369e5a&camp=1789&creative=9325"
              title="Apple Pro Display XDR (Nano-texture Glass)"
            >
              Everyone jokes about how much the stand costs, but this display
              slaps. Best monitor I have ever used, hands down. The nano-texture
              glass is amazing and it feels like you could reach out and touch
              the pixels.
            </Tool>

            <Tool
              href="https://www.amazon.com/Logitech-Wireless-Ergonomic-Keyboard-Wrist/dp/B07ZWK2TQT/ref=sr_1_1_sspa?crid=2PB4HRSEDI8MQ&amp;keywords=logitech+ergo&amp;qid=1686739094&amp;sprefix=logitech+ergo%252Caps%252C87&amp;sr=8-1-spons&amp;ufe=app_do%253Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&amp;psc=1&amp;spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExV0hNUVQwUkhVVTEyJmVuY3J5cHRlZElkPUEwMzIwNzQ2MUdYTEIzN1lRWTRUVyZlbmNyeXB0ZWRBZElkPUEwOTczNDI4WjhHWTJEN1hWT1NOJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==&_encoding=UTF8&tag=robbiethewagn-20&linkCode=ur2&linkId=f70c43d3c7643fcff46f2b0ee4e8ef87&camp=1789&creative=9325"
              title="Logitech ERGO K860 Wireless Ergonomic Keyboard"
            >
              This keyboard does a good job at being slightly more ergonomic,
              while still feeling mostly like a traditional typing experience.
              It is a quick way to reduce some wrist strain, without the steep
              learning curve of something like a Kinesis Advantage.
            </Tool>

            <Tool
              href="https://www.amazon.com/Logitech-Vertical-Wireless-Mouse-Rechargeable/dp/B07FNJB8TT?&_encoding=UTF8&tag=robbiethewagn-20&linkCode=ur2&linkId=3c06eeacb52a64040e1e26e9e6f2aa1a&camp=1789&creative=9325"
              title="Logitech MX Vertical Wireless Mouse"
            >
              Like many developers, or any humans who use computers all day, I
              have a lot of wrist pain. This Logitech MX vertical mouse helps
              mitigate some of the pain and I’ll take all the help I can get.
            </Tool>

            <Tool
              href="https://www.amazon.com/Herman-Miller-Aeron-Chair-Graphite/dp/B01N0ZUN15/ref=sr_1_6?keywords=herman+miller+aeron&amp;qid=1686707683&amp;sr=8-6&amp;ufe=app_do%253Aamzn1.fos.ac2169a1-b668-44b9-8bd0-5ec63b24bcb5&_encoding=UTF8&tag=robbiethewagn-20&linkCode=ur2&linkId=486c2423c950f08b9c0ad542b688e717&camp=1789&creative=9325"
              title="Herman Miller Aeron Chair"
            >
              This is the gold standard of desk chairs for a reason. It’s both
              ergonomic and actually comfortable in various positions. This
              allows you to have as good or as bad posture as you’d like, while
              still remaining comfortable all day. It is endlessly adjustable,
              so it is comfortable for just about anyone.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Development tools">
            <Tool href="https://code.visualstudio.com/" title="VSCode">
              VSCode is nothing new or flashy these days, but it’s still the
              best code editor out there right now. It has extensions for every
              language you can think of and is extremely customizable to allow
              for whatever coding experience you prefer.
            </Tool>

            <Tool href="https://www.warp.dev/" title="Warp">
              Warp has been my terminal of choice for awhile now. It has a lot
              of great features, like saving your history in the cloud, so you
              always know what commands to run, grouping your commands and their
              output and making them shareable, and new fancy AI features.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Podcasting">
            <Tool
              href="https://www.amazon.com/Electro-Voice-RE20-BLACK-Broadcast-Microphone-RE20/dp/B08P7QTZM5/ref=sxts_rp_s_a_1_0?&_encoding=UTF8&tag=robbiethewagn-20&linkCode=ur2&linkId=47048637966798f88c575f21df7747dc&camp=1789&creative=9325"
              title="Electro-Voice RE20 Dynamic Broadcast Announcer Microphone"
            >
              The Shure SM7B might be the gold standard for podcast microphones,
              but, if so, the Electro-Voice RE20 must be platinum. This thing
              makes everyone sound good effortlessly and gives you that
              signature podcaster sound you are looking for.
            </Tool>

            <Tool
              href="https://rode.com/en-us/interfaces-and-mixers/rodecaster-series/rodecaster-duo"
              title="RØDECaster Duo"
            >
              RØDE is the gold standard in podcast equipment and the RØDECaster
              Duo is no exception. After previously using the RØDECaster Pro, I
              switched to the RØDECaster Duo to have something with a smaller
              footprint on my desk and updated audio processing capabilities. It
              also has a built in preamp, which is great, so I do not need to
              use a CloudLifter with my microphone anymore.
            </Tool>

            <Tool href="https://opalcamera.com/" title="Opal C1 4k Webcam">
              If you don’t want to spend thousands of dollars on a super fancy
              camera, but still want to get video results that look like you
              did, look no further than the Opal C1!
            </Tool>
          </ToolsSection>

          <ToolsSection title="Productivity">
            <Tool href="https://thebrowser.company/" title="Arc Browser">
              It’s been a long time since a new browser came out that really
              changed the game. Arc has a ton of great features, like a command
              palette, spaces, and best of all, auto closing tabs.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  );
}
