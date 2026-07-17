import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { HorseMalletMotif } from "@/components/brand/HorseMalletMotif";
import { PrimaryLink } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { CTABanner } from "@/components/brand/CTABanner";
import { SiteLayout } from "@/components/brand/SiteLayout";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Founder — Aisha Ahmad Suleiman | Ride Next Polo" },
      {
        name: "description",
        content:
          "The first Northern Nigerian woman to compete in polo, Aisha Ahmad Suleiman is taking the game international with Ride Next Polo.",
      },
      { property: "og:title", content: "Aisha Ahmad Suleiman — Founder, Ride Next Polo" },
      {
        property: "og:description",
        content:
          "From Kaduna to the Kano Polo Club to founding an international tour — the story behind Ride Next Polo.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/founder" },
    ],
    links: [{ rel: "canonical", href: "/founder" }],
  }),
  component: FounderPage,
});


function FounderPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line pb-16 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <HorseMalletMotif className="pointer-events-none absolute -right-10 top-32 h-[420px] w-auto opacity-[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <Eyebrow>Our Founder</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Aisha <em className="italic text-gold">Ahmad Suleiman</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
              The first Northern Nigerian woman to compete in polo — and the
              woman taking the game international.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <blockquote className="border-l border-gold pl-8 font-display text-2xl italic leading-snug text-ivory sm:text-3xl">
                "I want ladies to say yes. I started playing polo because I
                wanted to show that riding is an option, regardless of gender."
              </blockquote>
              <cite className="mt-6 block text-[11px] uppercase not-italic tracking-[0.28em] text-ivory-faint">
                — Aisha Ahmad Suleiman
              </cite>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-ivory-dim">
                Born in Kaduna State on 17 December 2001 to a family originally
                from Kogi State, Aisha had no background in horses or polo — no
                royal lineage, no riding family. Her first encounter with the
                sport came almost by accident, watching a match at the Kaduna
                Polo Club with friends. She made quiet enquiries about how to
                begin, found a coach, and took her first ride in 2017. She
                played in her first tournament the same year.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-line bg-panel/40 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>The Rise</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
                From a first ride to the Kano Polo Club's{" "}
                <em className="italic text-gold">biggest cups.</em>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim">
                Within two years of her first tournament, Aisha had beaten a
                historically male-dominated field to win two of Northern
                Nigeria's most prestigious polo trophies — cementing her legacy
                in a region where she remains the only female player.
              </p>
            </Reveal>
          </div>

          <ol className="mt-20 space-y-16">
            {timeline.map((item, i) => (
              <Reveal as="li" delay={i * 60} key={item.year}>
                <div className="grid gap-6 border-t border-line pt-10 md:grid-cols-[220px_1fr] md:gap-12">
                  <div className="font-display text-5xl italic leading-none text-gold sm:text-6xl">
                    {item.year}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl text-ivory sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory-dim">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Why Ride Next Polo</Eyebrow>
              <h2 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
                "Most polo players come from royal or wealthy families.{" "}
                <em className="italic text-gold">That's changing.</em>"
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory-dim">
                Aisha has spoken often about the cost of entry into polo —
                horses, gear, and club membership that put the sport out of
                reach for most. Ride Next Polo is built around the same instinct
                that got her onto a horse in the first place: that the game
                should be open to anyone willing to learn it, wherever they're
                from.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <aside className="h-full border-t-2 border-gold bg-panel p-10 sm:p-12">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  In her words
                </div>
                <p className="mt-8 font-display text-2xl italic leading-snug text-ivory sm:text-[1.75rem]">
                  There is no polo without horses, and before going into the
                  game one has to develop a genuine and unconditional love for
                  horses.
                </p>
                <div className="mt-10 h-px w-16 bg-gold" />
                <div className="mt-6 text-[11px] uppercase tracking-[0.28em] text-ivory-faint">
                  Aisha Ahmad Suleiman
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="What's Next"
        headline={
          <>
            See where her next chukka is{" "}
            <em className="italic text-gold">taking the sport.</em>
          </>
        }
        body="Season One brings Ride Next Polo to Morocco — a full tournament week built with local clubs, invited international teams, and public spectator access."
        action={<PrimaryLink to="/tournaments">View the Morocco Tournament</PrimaryLink>}
      />
    </SiteLayout>
  );
}
