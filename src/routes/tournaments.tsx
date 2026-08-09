import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { HorseMalletMotif } from "@/components/brand/HorseMalletMotif";
import { PrimaryLink, SecondaryAnchor } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { CTABanner } from "@/components/brand/CTABanner";
import { SiteLayout } from "@/components/brand/SiteLayout";
import { ManifestoClose } from "@/components/brand/ManifestoClose";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Season One — The Destination Reveal | Ride Next Polo" },
      {
        name: "description",
        content:
          "Six nations. One host. All to be revealed. The founding edition of Ride Next Polo arrives in 2026 — see the shortlist and register to hear the destination first.",
      },
      { property: "og:title", content: "Season One — The Destination Reveal" },
      {
        property: "og:description",
        content:
          "The host nation of the founding Ride Next Polo edition is still under wraps. Six countries are on the shortlist — the reveal is coming soon.",
      },
      { property: "og:type", content: "event" },
      { property: "og:url", content: "/tournaments" },
    ],
    links: [{ rel: "canonical", href: "/tournaments" }],
  }),
  component: TournamentsPage,
});

const info = [
  { label: "Shortlist", value: "6 Nations", tba: false },
  { label: "Reveal", value: "Coming Soon", tba: true },
  { label: "Dates", value: "2026 (To Be Confirmed)", tba: false },
  { label: "Field", value: "International", tba: false },
];

const shortlist = [
  "Morocco",
  "Dubai (UAE)",
  "Kenya",
  "Uganda",
  "Nigeria",
  "Egypt",
];

const format = [
  {
    title: "4-Chukka Matches",
    body: "Every fixture is played over four chukkas — fast, physical, and readable for first-time spectators without losing the discipline of the traditional game.",
  },
  {
    title: "Invited International Field",
    body: "Teams are invited from across the circuit, pairing emerging young players with experienced international sides for genuine competition.",
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
                The format is set. Only the{" "}
                <em className="italic text-gold">destination</em> remains a
                secret.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim">
                The tournament week is already mapped out day by day — venue and
                exact dates follow the host announcement. Register your interest
                to get the confirmed schedule first.
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
        eyebrow="The Destination Reveal"
        headline={
          <>
            Be the first to{" "}
            <em className="italic text-gold">find out.</em>
          </>
        }
        body="Register your interest and we'll email you the moment the host destination is revealed — before it's announced anywhere else."
        action={<PrimaryLink to="/contact">Register Interest</PrimaryLink>}
      />
      <ManifestoClose short />
    </SiteLayout>
  );
}
