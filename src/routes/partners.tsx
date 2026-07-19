import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { PrimaryLink } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { SiteLayout } from "@/components/brand/SiteLayout";
import { ManifestoClose } from "@/components/brand/ManifestoClose";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Ride Next Polo" },
      {
        name: "description",
        content:
          "Partner with Ride Next Polo: support sport, youth development, international collaboration, and cultural diplomacy.",
      },
      { property: "og:title", content: "Partners — Ride Next Polo" },
      {
        property: "og:description",
        content:
          "Partner with Ride Next Polo: support sport, youth development, international collaboration, and cultural diplomacy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

const partnerPillars = [
  {
    title: "Sponsorship",
    body: "Align your brand with the inaugural Morocco 2026 edition and a pioneering international youth polo platform.",
  },
  {
    title: "Cultural Collaboration",
    body: "Showcase heritage, craft, and hospitality to a global audience of players, families, and polo followers.",
  },
  {
    title: "Youth Development",
    body: "Invest in clinics, scholarships, and pathways that open polo to talented young players from underserved regions.",
  },
];

const impactItems = [
  "Youth Development",
  "International Exchange",
  "Female Participation",
  "Leadership",
  "Cross-cultural Collaboration",
  "Sports Tourism",
  "Equestrian Development",
  "Global Networking",
];

function PartnersPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-line pb-14 pt-36 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-52">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-4xl">
            <Reveal>
              <Eyebrow>Partners</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-8 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
                Partner With{" "}
                <em className="italic text-gold">Us</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-ivory-dim sm:text-lg lg:text-xl">
                Ride Next Polo welcomes organizations that believe in the power
                of sport, youth development, international collaboration, and
                cultural diplomacy. Together, we are creating opportunities that
                extend beyond competition and leave a lasting impact on future
                generations.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-12">
                <PrimaryLink
                  to="/contact"
                  search={{ interest: "Sponsorship & partnerships" }}
                >
                  Become a Partner
                </PrimaryLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Ways to Partner</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
                Build something lasting together.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
            {partnerPillars.map((item, i) => (
              <Reveal key={item.title} delay={i * 100} className="bg-black">
                <article className="h-full border-t-2 border-gold bg-panel p-10">
                  <h3 className="font-display text-2xl text-ivory">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-16">
              <PrimaryLink
                to="/contact"
                search={{ interest: "Sponsorship & partnerships" }}
              >
                Become a Partner
              </PrimaryLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact */}
      <section className="border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>Impact</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl lg:text-5xl">
                Measuring What Matters
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim">
                Our vision is to create measurable impact through:
              </p>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {impactItems.map((item, i) => (
              <Reveal key={item} delay={i * 40}>
                <span className="inline-flex items-center border border-line bg-panel px-5 py-3 text-sm uppercase tracking-[0.18em] text-ivory">
                  {item}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
