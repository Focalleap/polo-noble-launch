import { Reveal } from "./Reveal";

export function ManifestoClose({ short = false }: { short?: boolean }) {
  return (
    <section
      className={`w-full text-center ${short ? "py-20 sm:py-24 lg:py-28" : "py-24 sm:py-32 lg:py-40"} ${short ? "" : "border-t border-line bg-black"}`}
    >
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h2
            className={`font-display leading-[1.05] text-ivory ${short ? "text-3xl sm:text-4xl lg:text-5xl" : "text-4xl sm:text-5xl lg:text-6xl"}`}
          >
            Ride Beyond Borders.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p
            className={`mx-auto mt-6 max-w-2xl leading-relaxed text-ivory-dim ${short ? "text-base sm:text-lg lg:text-xl" : "text-lg sm:text-xl lg:text-2xl"}`}
          >
            Ride Next Polo is not simply about where you play. It is about who
            you become along the journey.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
