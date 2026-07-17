import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { HorseMalletMotif } from "@/components/brand/HorseMalletMotif";
import { PrimaryLink, SecondaryAnchor } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { CTABanner } from "@/components/brand/CTABanner";
import { SiteLayout } from "@/components/brand/SiteLayout";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Ride Next Polo Morocco 2026 — The Founding Edition" },
      {
        name: "description",
        content:
          "Morocco 2026 — The Founding Edition of Ride Next Polo brings together talented young athletes from Nigeria and Morocco for three days of elite polo, cultural exchange, and unforgettable experiences.",
      },
      { property: "og:title", content: "Ride Next Polo Morocco 2026 — The Founding Edition" },
      {
        property: "og:description",
        content:
          "The inaugural edition of Ride Next Polo in Morocco unites young polo players from Nigeria and Morocco for elite competition, cultural exchange, and lifelong memories.",
      },
      { property: "og:type", content: "event" },
      { property: "og:url", content: "/tournaments" },
    ],
    links: [{ rel: "canonical", href: "/tournaments" }],
  }),
  component: TournamentsPage,
});

const info = [
  { label: "Host Nation", value: "Morocco", tba: false },
  { label: "Venue", value: "To Be Announced", tba: true },
  { label: "Dates", value: "2026 (To Be Confirmed)", tba: false },
  { label: "Duration", value: "3 Days", tba: false },
  { label: "Nations", value: "Nigeria & Morocco", tba: false },
];

const format = [
  {
    title: "Founding Nations",
    body: "The founding edition features two nations: Nigeria and Morocco. Young athletes from both countries come together to compete, learn, and build lasting friendships.",
  },
  {
    title: "3-Day Experience",
    body: "Three days of elite polo competition paired with cultural exchange, stable experiences, and shared activities designed to create connections beyond the field.",
  },
  {
    title: "Open to Spectators",
    body: "Unlike much of the international circuit, the founding edition is built with public access in mind, welcoming guests, families, and first-time followers of the game.",
  },
];

const schedule = [
  {
    day: "Day 1",
    title: "Arrivals, Opening Reception & First Chukkas",
    body: "Teams arrive, horses are stabled and rested, and the tournament opens with a welcome reception for players, hosts, and guests — followed by the first chukkas of the edition.",
  },
  {
    day: "Day 2",
    title: "Competition & Cultural Exchange",
    body: "A full day of matches between the Nigerian and Moroccan sides, with cultural activities and shared experiences running alongside the polo.",
  },
  {
    day: "Day 3",
    title: "Finals Day, Gala & Closing Ceremony",
    body: "The tournament final, trophy presentation, and a closing celebration to mark the end of the founding edition and the beginning of the Ride Next story.",
  },
];

function ClayPattern() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className="h-6 w-full"
    >
      <g stroke="var(--clay)" strokeWidth="1" fill="none" opacity="0.75">
        {Array.from({ length: 40 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 30} 20 L${i * 30 + 15} 4 L${i * 30 + 30} 20 L${i * 30 + 15} 36 Z`}
          />
        ))}
      </g>
    </svg>
  );
}

function TournamentsPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line pb-24 pt-36 sm:pb-32 sm:pt-44 lg:pb-40 lg:pt-52">
        <HorseMalletMotif className="pointer-events-none absolute -right-12 top-28 h-[520px] w-auto opacity-[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <Eyebrow>The Founding Edition</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Ride Next Polo <em className="italic text-gold">Morocco 2026</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
              The inaugural edition of Ride Next Polo marks the beginning of a
              journey that we hope will inspire generations of polo players.
              Hosted in Morocco, this first edition brings together talented
              young athletes from Nigeria and Morocco for three days of elite
              polo, cultural exchange, and unforgettable experiences.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12 flex flex-wrap gap-4">
              <PrimaryLink to="/contact">Register Interest</PrimaryLink>
              <SecondaryAnchor href="#format">Tournament Format</SecondaryAnchor>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-16 max-w-2xl">
              <ClayPattern />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Info strip */}
      <section className="border-b border-line bg-panel/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line md:grid-cols-5">
          {info.map((item) => (
            <div key={item.label} className="bg-panel p-8">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                {item.label}
              </div>
              <div className="mt-4 font-display text-xl text-ivory sm:text-2xl">
                <span data-placeholder={item.tba ? "tba" : undefined}>
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Format */}
      <section id="format" className="scroll-mt-24 border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <Eyebrow>The Format</Eyebrow>
              <h2 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
                A founding edition, not just a{" "}
                <em className="italic text-gold">tournament.</em>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-dim">
                Morocco 2026 is designed as a three-day experience that blends
                elite polo competition with cultural immersion. It is the first
                chapter in a larger story — one that begins with two nations
                and a shared belief in what young players can become.
              </p>
            </Reveal>

            <div className="space-y-px bg-line">
              {format.map((c, i) => (
                <Reveal key={c.title} delay={i * 100}>
                  <article className="border-t-2 border-gold bg-panel p-8 sm:p-10">
                    <h3 className="font-display text-xl text-ivory sm:text-2xl">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
                      {c.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="border-b border-line bg-panel/40 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Tournament Days</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
                A <em className="italic text-gold">three-day</em> founding edition.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim">
                Exact dates and venue are still being finalized with our
                Moroccan host club. Here's how the three days are shaping up —
                register your interest to get the confirmed schedule first.
              </p>
            </Reveal>
          </div>

          <ol className="mt-16 space-y-10">
            {schedule.map((s, i) => (
              <Reveal as="li" key={s.day} delay={i * 60}>
                <div className="grid gap-4 border-t border-line pt-8 md:grid-cols-[180px_1fr] md:gap-10">
                  <div className="font-display text-2xl italic text-gold sm:text-3xl">
                    {s.day}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-ivory sm:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ivory-dim">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing pull-quote */}
      <section className="border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <blockquote className="font-display text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl">
              “More than a tournament…{" "}
              <em className="italic text-gold">
                This is where the Ride Next story begins.
              </em>”
            </blockquote>
          </Reveal>
        </div>
      </section>

      <CTABanner
        eyebrow="Get The Confirmed Dates First"
        headline={
          <>
            Register your interest in{" "}
            <em className="italic text-gold">Morocco 2026.</em>
          </>
        }
        body="We'll send venue, dates, and ticketing details to your inbox as soon as they're locked in — before public announcement."
        action={<PrimaryLink to="/contact">Register Interest</PrimaryLink>}
      />
    </SiteLayout>
  );
}
