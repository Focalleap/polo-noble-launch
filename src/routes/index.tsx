import { createFileRoute } from "@tanstack/react-router";
import {
  Trophy,
  Heart,
  Compass,
  Handshake,
  Target,
  Mic,
  Users,
  Plane,
  Sparkles,
  Camera,
} from "lucide-react";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { HorseMalletMotif } from "@/components/brand/HorseMalletMotif";
import { PrimaryLink, SecondaryLink } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { CornerBracketFrame } from "@/components/brand/CornerBracketFrame";
import { CTABanner } from "@/components/brand/CTABanner";
import { SiteLayout } from "@/components/brand/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ride Next Polo — Ride Beyond Borders" },
      {
        name: "description",
        content:
          "An international polo tour building tournaments in countries new to the sport. First stop: Morocco.",
      },
      { property: "og:title", content: "Ride Next Polo — Ride Beyond Borders" },
      {
        property: "og:description",
        content:
          "An international polo tour building tournaments in countries new to the sport. First stop: Morocco.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Purpose />
      <Values />
      <Experience />
      <MoroccoTeaser />
      <WhyWeExist />
      <FounderTeaser />
      <CTABanner
        eyebrow="Stay In The Saddle"
        headline={
          <>
            Be first to know when <em className="italic text-gold">Morocco</em> is
            confirmed.
          </>
        }
        body="Tournament dates, ticketing, and hospitality details are announced to our list before anywhere else."
        action={<PrimaryLink to="/contact">Register Interest</PrimaryLink>}
      />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line pb-24 pt-40 sm:pb-32 sm:pt-48 lg:pb-40 lg:pt-56">
      <HorseMalletMotif className="pointer-events-none absolute -right-16 top-24 h-[560px] w-auto opacity-[0.09] sm:opacity-[0.12] lg:right-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>International Polo Tour</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
            The game travels.{" "}
            <em className="italic text-gold">So do we.</em>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
            Ride Next Polo builds a circuit of tournaments in countries that have
            never hosted international polo before — pairing the sport's tradition
            of horsemanship with the energy of a new home ground each season.
            First stop: Morocco.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-12 flex flex-wrap gap-4">
            <PrimaryLink to="/tournaments">See the Morocco Tournament</PrimaryLink>
            <SecondaryLink to="/founder">Meet Our Founder</SecondaryLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const whoWeAreItems = [
  {
    label: "Purpose",
    title: "Our Purpose",
    body: "To inspire a generation of polo players to think beyond their local fields and discover the limitless opportunities that exist across the world.",
  },
  {
    label: "Vision",
    title: "Our Vision",
    body: "To become the world's leading international youth polo platform, connecting nations through sport while shaping the next generation of global polo ambassadors.",
  },
  {
    label: "Mission",
    title: "Our Mission",
    body: "To create meaningful international experiences where young polo players compete, learn, travel, connect, and grow into confident leaders on and off the polo field.",
  },
];

const purposeItems = [
  {
    n: "I",
    title: "International Hosting",
    body: "We select a new host country for every season, working with local clubs and federations to bring a full-scale international tournament to ground that has never carried one.",
  },
  {
    n: "II",
    title: "Open Access",
    body: "Polo has long answered to money and lineage. We build entry points — scholarships, coaching partnerships, and youth clinics — around every tournament we host.",
  },
  {
    n: "III",
    title: "Heritage & Craft",
    body: "Horsemanship, not spectacle, is the point. Every Ride Next Polo event is built around the discipline, patience, and respect for the horse that the sport was built on.",
  },
];

function Purpose() {
  return (
    <section className="border-b border-line py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-4xl">
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 font-display text-xl leading-relaxed text-ivory sm:text-2xl lg:text-3xl">
              Ride Next Polo is an international sports and cultural platform
              created to redefine how young polo players experience the game.
              Founded on the belief that talent should never be limited by
              geography, Ride Next Polo provides emerging players with
              opportunities to compete internationally, experience different
              polo cultures, build lifelong friendships, and develop into future
              leaders within the sport.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-ivory-dim sm:text-lg">
              Every edition is more than a tournament. It is a carefully
              curated experience that combines elite polo, travel, education,
              networking, leadership, and cultural immersion.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-3xl border-l-2 border-gold pl-6 font-display text-xl italic leading-snug text-gold sm:text-2xl">
              Our mission extends far beyond the polo field. We are building a
              global community united by courage, excellence, respect, and a
              shared passion for horses.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-line md:grid-cols-3">
          {whoWeAreItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="bg-black">
              <article className="h-full border-t-2 border-gold bg-panel p-10">
                <div className="font-display text-2xl italic text-gold">
                  {item.label}
                </div>
                <h3 className="mt-6 font-display text-2xl text-ivory">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-px bg-line md:grid-cols-3">
          {purposeItems.map((item, i) => (
            <Reveal key={item.n} delay={i * 100} className="bg-black">
              <article className="h-full border-t-2 border-gold bg-panel p-10">
                <div className="font-display text-2xl italic text-gold">
                  {item.n}
                </div>
                <h3 className="mt-6 font-display text-2xl text-ivory">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const valuesItems = [
  {
    title: "Courage",
    body: "Stepping beyond comfort zones.",
  },
  {
    title: "Excellence",
    body: "Delivering world-class experiences in everything we do.",
  },
  {
    title: "Respect",
    body: "Respect for horses. Respect for opponents. Respect for culture. Respect for people.",
  },
  {
    title: "Connection",
    body: "Building friendships that transcend nationality.",
  },
  {
    title: "Growth",
    body: "Helping every participant become a better player and a better person.",
  },
  {
    title: "Legacy",
    body: "Creating opportunities that inspire generations to come.",
  },
];

function Values() {
  return (
    <section className="border-b border-line py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>Our Values</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
              The principles that guide every chukka we play.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-line grid-cols-2 md:grid-cols-3">
          {valuesItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="bg-black">
              <article className="h-full border-t-2 border-gold bg-panel p-8 sm:p-10">
                <h3 className="font-display text-xl text-ivory sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const experienceItems = [
  { icon: Trophy, title: "International Polo Competition" },
  { icon: Heart, title: "Horse and Stable Experiences" },
  { icon: Compass, title: "Cultural Exploration" },
  { icon: Handshake, title: "Professional Networking" },
  { icon: Target, title: "Leadership Development" },
  { icon: Mic, title: "Media & Storytelling" },
  { icon: Users, title: "Community Building" },
  { icon: Plane, title: "Travel Experiences" },
  { icon: Sparkles, title: "Gala & Awards" },
  { icon: Camera, title: "Photography & Memories" },
];

function Experience() {
  return (
    <section className="border-b border-line py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>The Ride Next Experience</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-6 font-display text-xl leading-relaxed text-ivory sm:text-2xl lg:text-3xl">
              Ride Next Polo is intentionally designed to be more than
              competition. Every participant becomes part of an international
              experience that includes:
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px bg-line grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {experienceItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 60} className="bg-black">
                <article className="flex h-full flex-col items-start border-t-2 border-gold bg-panel p-8 sm:p-10">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-lg leading-snug text-ivory sm:text-xl">
                    {item.title}
                  </h3>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-16 max-w-4xl border-l-2 border-gold pl-6 font-display text-xl italic leading-snug text-gold sm:text-2xl lg:text-3xl">
            By the time a player leaves Ride Next Polo, they leave with far
            more than medals. They leave with lifelong friendships,
            unforgettable memories, and a broader understanding of the world.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const moroccoInfo = [
  { label: "Host Nation", value: "Morocco" },
  { label: "Edition", value: "Inaugural" },
  { label: "Format", value: "4-Chukka" },
  { label: "Status", value: "Announcing Soon" },
];

function MoroccoTeaser() {
  return (
    <section className="border-b border-line py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <Eyebrow>Season One</Eyebrow>
            <h2 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
              First Stop:{" "}
              <em className="italic text-gold">Morocco</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-dim">
              Our inaugural tournament brings an international field to Morocco —
              a country with deep equestrian roots and no shortage of appetite for
              the sport. Expect a full tournament week: qualifying chukkas, a
              finals day, and a program built to welcome first-time spectators
              alongside seasoned polo followers.
            </p>
            <div className="mt-10">
              <PrimaryLink to="/tournaments">Tournament Details</PrimaryLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-px border border-line bg-line">
              {moroccoInfo.map((item) => (
                <div key={item.label} className="bg-panel p-8">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    {item.label}
                  </div>
                  <div className="mt-4 font-display text-2xl text-ivory">
                    {item.label === "Status" || item.label === "Format" ? (
                      <span data-placeholder={item.value === "Announcing Soon" ? "tba" : undefined}>
                        {item.value}
                      </span>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyWeExist() {
  return (
    <section className="border-b border-line py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Eyebrow align="center">Why We Exist</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-8 font-display text-xl leading-relaxed text-ivory sm:text-2xl lg:text-3xl">
            The future of polo depends on the opportunities we create today.
            Young athletes deserve the chance to compete internationally, ride
            different horses, experience new cultures, and build relationships
            that will shape their careers for years to come. Ride Next Polo
            exists to make those opportunities accessible.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FounderTeaser() {
  return (
    <section className="border-b border-line py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <CornerBracketFrame className="aspect-[4/5] bg-panel-2">
              <div className="flex h-full w-full items-center justify-center p-10">
                <HorseMalletMotif className="h-full w-auto max-h-[420px] opacity-40" />
              </div>
            </CornerBracketFrame>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <Eyebrow>Our Founder</Eyebrow>
            <blockquote className="mt-8 font-display text-2xl leading-snug text-ivory sm:text-3xl lg:text-[2.25rem]">
              <span className="text-gold">"</span>A champion can come from
              anywhere. Polo is known as a{" "}
              <em className="italic text-gold">worldly sport</em> — that doesn't
              mean other people can't play it.
              <span className="text-gold">"</span>
            </blockquote>
            <cite className="mt-4 block text-[11px] uppercase not-italic tracking-[0.28em] text-ivory-faint">
              — Aisha Ahmad Suleiman
            </cite>
            <p className="mt-8 text-base leading-relaxed text-ivory-dim">
              The first Northern Nigerian woman to compete in polo, Aisha built
              her name at the Kano Polo Club before taking that same
              determination international. Ride Next Polo is her next chukka:
              opening the game to countries and players who've been waiting for
              an invitation.
            </p>
            <div className="mt-10">
              <SecondaryLink to="/founder">Read Her Full Story</SecondaryLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
