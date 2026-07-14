import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Eyebrow } from "@/components/brand/Eyebrow";
import { PrimaryButton } from "@/components/brand/Buttons";
import { Reveal } from "@/components/brand/Reveal";
import { SiteLayout } from "@/components/brand/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ride Next Polo" },
      {
        name: "description",
        content:
          "Reach the Ride Next Polo team: register interest in Season One in Morocco, or contact us for press, partnerships, and team enquiries.",
      },
      { property: "og:title", content: "Contact — Ride Next Polo" },
      {
        property: "og:description",
        content: "Register interest, press requests, partnerships — get in touch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  fullName: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  country: z.string().trim().max(100).optional().or(z.literal("")),
  interest: z.string().min(1, "Please choose an option"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const interests = [
  "Attending as a spectator",
  "Competing / team enquiry",
  "Sponsorship & partnerships",
  "Press & media",
  "Something else",
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      fullName: fd.get("fullName"),
      email: fd.get("email"),
      country: fd.get("country") ?? "",
      interest: fd.get("interest"),
      message: fd.get("message") ?? "",
    });
    if (!result.success) {
      const next: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0];
        if (typeof k === "string" && !next[k]) next[k] = i.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-line pb-14 pt-36 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-52">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <Eyebrow>Get In Touch</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
              Let's talk <em className="italic text-gold">polo.</em>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory-dim sm:text-lg">
              Whether you're a player, a sponsor, a member of the press, or
              simply want to follow Season One in Morocco, this is the fastest
              way to reach us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="border-b border-line py-24 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            {/* Form */}
            <Reveal>
              <div className="border-t-2 border-gold bg-panel p-8 sm:p-10 lg:p-12">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  Register Your Interest
                </div>
                <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
                  Send us a note.
                </h2>

                <form onSubmit={onSubmit} className="mt-10 space-y-6" noValidate>
                  <Field label="Full Name" name="fullName" required error={errors.fullName} />
                  <Field label="Email" name="email" type="email" required error={errors.email} />
                  <Field label="Country" name="country" error={errors.country} />

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-gold">
                      I'm interested in <span className="text-clay">*</span>
                    </label>
                    <select
                      name="interest"
                      required
                      defaultValue=""
                      className="w-full appearance-none border border-line bg-panel-2 px-4 py-3.5 text-sm text-ivory focus:border-gold focus:outline-none"
                    >
                      <option value="" disabled>
                        Choose one…
                      </option>
                      {interests.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="mt-2 text-xs text-clay">{errors.interest}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-gold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="w-full resize-none border border-line bg-panel-2 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory-faint focus:border-gold focus:outline-none"
                      placeholder="Tell us a little about your enquiry."
                    />
                  </div>

                  <div className="pt-2">
                    <PrimaryButton type="submit">Send</PrimaryButton>
                  </div>

                  {status === "success" && (
                    <div
                      role="status"
                      className="mt-6 border border-line-strong bg-panel-2 p-5 text-sm leading-relaxed text-ivory-dim"
                    >
                      Thanks — this form is a working draft and isn't connected
                      to an inbox yet. Wire it up to your email or CRM of choice
                      before launch.
                    </div>
                  )}
                </form>
              </div>
            </Reveal>

            {/* Direct contact */}
            <Reveal delay={120}>
              <div className="space-y-8">
                <ContactRow label="General" value="info@ridenextpolo.com" />
                <ContactRow label="Press" value="press@ridenextpolo.com" />
                <ContactRow label="Partnerships" value="partners@ridenextpolo.com" />

                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    Follow
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-base text-ivory">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-gold"
                    >
                      Instagram
                    </a>
                    <span className="text-ivory-faint">/</span>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-gold"
                    >
                      X
                    </a>
                    <span className="text-ivory-faint">/</span>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-gold"
                    >
                      YouTube
                    </a>
                  </div>
                </div>

                <div className="border-t border-line pt-8">
                  <p className="text-sm leading-relaxed text-ivory-dim">
                    For speaking engagements, interviews, or founder-specific
                    press requests involving Aisha Ahmad Suleiman, please write
                    to{" "}
                    <a
                      href="mailto:press@ridenextpolo.com"
                      className="text-gold hover:text-gold-light"
                    >
                      press@ridenextpolo.com
                    </a>{" "}
                    with "Founder Request" in the subject line.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-gold"
      >
        {label} {required && <span className="text-clay">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-line bg-panel-2 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory-faint focus:border-gold focus:outline-none"
      />
      {error && <p className="mt-2 text-xs text-clay">{error}</p>}
    </div>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-6">
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
        {label}
      </div>
      <a
        href={`mailto:${value}`}
        className="mt-3 block font-display text-2xl text-ivory transition-colors hover:text-gold sm:text-3xl"
      >
        {value}
      </a>
    </div>
  );
}
