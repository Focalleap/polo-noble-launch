import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { HorseMalletMotif } from "@/components/brand/HorseMalletMotif";
import { PrimaryLink } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { CTABanner } from "@/components/brand/CTABanner";
import { SiteLayout } from "@/components/brand/SiteLayout";
import { ManifestoClose } from "@/components/brand/ManifestoClose";
import { CornerBracketFrame } from "@/components/brand/CornerBracketFrame";
import aishaWithHorse from "@/assets/aisha-with-horse.jpg.asset.json";
import aishaKente from "@/assets/aisha-editorial-kente.jpg.asset.json";
import aishaHelmet from "@/assets/aisha-portrait-helmet.png.asset.json";
import aishaAction from "@/assets/aisha-match-action.png.asset.json";
import aishaForbes from "@/assets/aisha-blackeesh-forbes.png.asset.json";

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

const timeline = [
  {
    year: "2017",
    title: "First Ride, First Tournament",
    body: "After watching a match at the Kaduna Polo Club, Aisha begins training under a local beginners' coach and plays her first tournament within the year.",
  },
  {
    year: "2018",
    title: "Dantata and Sawoe Cup, Kano International Tournament",
    body: "Competing out of the Kaduna Polo Club, Aisha wins the Dantata and Sawoe Cup at the Kano International Tournament, becoming the first Northern Nigerian woman to claim a major polo title.",
  },
  {
    year: "2019",
    title: "A Double Governor's Cup",
    body: "Aisha adds the Governor's Cup at the Port Harcourt International Tournament and the Governor's Cup at the Kano International Tournament to her record — two major wins in a single season.",
  },
  {
    year: "2020",
    title: "Sports Woman of the Year",
    body: "Aisha is recognized at the Northern Pandora Awards for her impact on sport in Northern Nigeria.",
  },
  {
    year: "2021",
    title: "Forbes' 30 Inspirational Women",
    body: "Named to Forbes' list of 30 Inspirational Women for Women's History Month, bringing international recognition to her work opening polo to new players.",
  },
  {
    year: "Today",
    title: "Founding Ride Next Polo",
    body: "Aisha takes her belief in polo without borders international — building a tournament circuit that brings the sport to countries hosting it for the first time, starting with Morocco.",
  },
];

function FounderPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line pb-16 pt-36 sm:pb-24 sm:pt-44 lg:pb-28 lg:pt-52">
        <HorseMalletMotif className="pointer-events-none absolute -right-10 top-32 h-[420px] w-auto opacity-[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <Eyebrow>Our Founder</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-8 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
                  Aisha <em className="italic text-gold">Ahmad Suleiman</em>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-2xl text-[11px] uppercase tracking-[0.28em] text-ivory-faint">
                  Founder & Executive Director
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <CornerBracketFrame className="aspect-[3/4] overflow-hidden bg-panel-2">
                <img
                  src={aishaWithHorse.url}
                  alt="Aisha Ahmad Suleiman with her horse"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </CornerBracketFrame>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <blockquote className="border-l border-gold pl-8 font-display text-2xl italic leading-snug text-ivory sm:text-3xl">
                "Some journeys begin with ambition. Mine began with a horse."
              </blockquote>
              <cite className="mt-6 block text-[11px] uppercase not-italic tracking-[0.28em] text-ivory-faint">
                — Aisha Ahmad Suleiman
              </cite>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-6 text-base leading-relaxed text-ivory-dim">
                <p>
                  Long before polo became my profession, I found myself
                  captivated by the beauty, intelligence, and spirit of horses.
                  That fascination eventually led me onto a polo field — a place
                  that would shape the course of my life.
                </p>
                <p>
                  As one of the few Black female polo players to emerge from
                  Northern Nigeria, my journey has been anything but
                  conventional. Entering a sport traditionally dominated by
                  men required resilience, discipline, and an unwavering belief
                  in what was possible. Publicly documented milestones — from my
                  first tournaments to national recognition and Forbes
                  Inspirational Woman recognition — reflect that journey, but
                  they tell only part of the story.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Editorial image break */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-line md:grid-cols-2">
          <Reveal className="bg-black">
            <div className="aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
              <img
                src={aishaKente.url}
                alt="Aisha Ahmad Suleiman in kente cloth beside a grey horse"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="bg-black">
            <div className="aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
              <img
                src={aishaHelmet.url}
                alt="Aisha Ahmad Suleiman with a red polo helmet and mallet"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Turning point */}
      <section className="border-b border-line bg-panel/40 py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-ivory sm:text-3xl lg:text-4xl">
              What transformed me most wasn't simply competing. It was the
              realization that sport has the power to{" "}
              <em className="italic text-gold">
                open doors, build confidence, and connect people across
                cultures.
              </em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Continuing narrative */}
      <section className="border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-ivory-dim sm:text-lg">
              <p>
                Throughout my career, I have dedicated myself not only to
                playing polo but also to introducing others to the sport
                through coaching, youth development, and equestrian education.
                Founding Black Eesh Equestrian Academy reinforced my belief that
                access and opportunity can change lives.
              </p>
              <p>
                Ride Next Polo is the natural continuation of that belief. It
                was created to ensure that the next generation of players
                experiences something many young athletes rarely have the chance
                to experience — international competition, cultural exchange,
                meaningful friendships, and personal growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Rise */}
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

      {/* Closing quote */}
      <section className="border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <aside className="border-t-2 border-gold bg-panel p-10 sm:p-14 lg:p-16">
              <blockquote className="max-w-4xl font-display text-2xl italic leading-snug text-ivory sm:text-3xl lg:text-4xl">
                "My dream is simple. That one day a young player will look back
                and say, 'Ride Next Polo changed the way I saw the world.' If
                that happens, then this journey will have been worthwhile."
              </blockquote>
              <div className="mt-10 h-px w-16 bg-gold" />
              <div className="mt-6 text-[11px] uppercase tracking-[0.28em] text-ivory-faint">
                Aisha Ahmad Suleiman, Founder & Executive Director
              </div>
            </aside>
          </Reveal>
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
      <ManifestoClose short />
    </SiteLayout>
  );
}
