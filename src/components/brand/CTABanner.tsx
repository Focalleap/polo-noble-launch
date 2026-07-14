import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function CTABanner({
  eyebrow,
  headline,
  body,
  action,
}: {
  eyebrow: string;
  headline: ReactNode;
  body: string;
  action: ReactNode;
}) {
  return (
    <section className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <Eyebrow align="center">{eyebrow}</Eyebrow>
          </div>
          <h2 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
            {headline}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim">
            {body}
          </p>
          <div className="mt-10 flex justify-center">{action}</div>
        </Reveal>
      </div>
    </section>
  );
}
