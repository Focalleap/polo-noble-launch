# Ride Next Polo — Marketing Site Plan

A premium, editorial 4-page site with a black-and-gold quiet-luxury design system. All copy from the brief is used verbatim.

## Design System (src/styles.css)

Replace the default shadcn tokens with the brand palette:

- `--black #0a0a0a`, `--panel #131211`, `--panel-2 #1a1815`
- `--line rgba(201,162,77,0.28)`, `--line-strong rgba(201,162,77,0.55)`
- `--gold-dark #8a6a2c`, `--gold #c9a24d`, `--gold-light #e8d08a`
- `--ivory #f3efe4`, `--ivory-dim #cfc9ba`, `--ivory-faint #948d7d`
- `--clay #a15c3e` (Tournaments page only)

Map into `@theme inline` so `bg-panel`, `text-ivory`, `text-gold`, `border-line`, etc. all work as Tailwind utilities. Set `background`/`foreground` to `--black`/`--ivory`.

**Typography:** Fraunces (serif display, italic for emphasis) + Manrope (body/UI), loaded via `<link>` tags in `src/routes/__root.tsx` head. Registered as `--font-display` and `--font-sans`.

**Motion:** subtle fade/slide-up scroll reveals via a small IntersectionObserver hook. Respects `prefers-reduced-motion`.

## Shared Components (src/components/)

- `SiteNav.tsx` — transparent over hero, becomes `bg-black/80 backdrop-blur` with a bottom gold hairline once scrolled >40px. Logo left (~40px, placeholder box until asset uploaded), links right: Home / Founder / Morocco 2027 / Contact, plus "Register Interest" gold-outline button. Mobile: hamburger → right-side slide-in panel.
- `SiteFooter.tsx` — 4 columns (Brand blurb + logo / Site / Season One / Follow) + bottom bar with copyright + "Founded by Aisha Ahmad Suleiman."
- `Eyebrow.tsx` — small-caps uppercase, `tracking-[0.3em]`, gold, flanked by thin horizontal rules.
- `Button` variants: `PrimaryButton` (solid gold bg, black uppercase text, arrow that translates-x on hover) and `SecondaryButton` (transparent, gold-ish outline, ivory text → gold text/outline on hover).
- `SectionDivider.tsx` — thin gold hairline for between-section separation.
- `HorseMalletMotif.tsx` — inline SVG: linear horse-head silhouette + polo mallet, single stroke, gold, low opacity. Used as background flourish in hero sections (right-aligned, absolutely positioned).
- `Reveal.tsx` — wraps children with fade/slide-up on scroll into view.
- `CornerBracketFrame.tsx` — box with gold corner brackets, used for founder portrait placeholder.
- `CTABanner.tsx` — reusable eyebrow/headline/body/button banner.

## Pages (src/routes/)

Each route file sets its own `head()` with unique title/description/og tags. All copy exactly as provided in the brief.

- `index.tsx` — Hero + Purpose (3 numbered cards w/ roman numerals I/II/III) + Morocco teaser (2-col text + 4-item info grid) + Founder teaser (corner-bracket frame + text) + CTA banner.
- `founder.tsx` — Shorter hero + Intro (quote + bio) + Timeline "The Rise" (vertical, large gold serif year markers: 2017, 2018, 2019, 2020, 2021, Today) + Philosophy (text + right quote panel) + CTA banner.
- `tournaments.tsx` — Hero with subtle `--clay` geometric hairline band + 4-col info strip (Host / Venue TBA / Dates TBA / Field) + Format (text + 3 cards) + Schedule (Day 1 / Days 2–3 / Day 4 / Day 5 list) + CTA banner. "To Be Announced" values wrapped in a `<span data-placeholder="tba">` for easy find-and-replace later.
- `contact.tsx` — Short hero + two-column: left form in dark panel ("Register Your Interest": Full Name, Email, Country, interest select, Message, Send). Right column: gold-label contact list (info@, press@, partners@), social links, founder press note.

Contact form: client-side only for now — on submit, show the placeholder note from the brief ("Thanks — this form is a working draft…"). Zod validation on required fields. (Wiring to Lovable Cloud is called out as a follow-up, not part of this build unless requested.)

## Responsive & A11y

- Fully responsive to 375px: two-column sections stack, hero heights reduce, nav collapses to slide-in.
- Multi-item rows use `grid-cols-[minmax(0,1fr)_auto]` + `min-w-0` + `shrink-0` per the responsive rules.
- Section vertical padding ~100–120px desktop, ~64px mobile.
- `prefers-reduced-motion` disables all reveal animations.
- Semantic HTML, single H1 per page, alt text on all imagery, proper form labels.

## Assets

- Logo: leave a labeled placeholder box in nav + footer until you upload it. When uploaded I'll swap to a `lovable-assets` CDN pointer.
- No photography used — the horse+mallet line-art motif carries the visual weight, per the brief.

## Out of scope (follow-ups you already listed)

- Founder portrait upload / image swap
- Wiring contact form to Supabase / email service
- Replacing TBA values
- Instagram feed / photo gallery

## Technical Notes

- TanStack Start file-based routing under `src/routes/` (no `src/pages/`).
- Root layout keeps `<Outlet />`; each leaf sets its own `head()` (unique title/desc/og), no og:image until real hero imagery exists.
- Fraunces + Manrope loaded via `<link rel="stylesheet">` in `__root.tsx` head — never `@import`ed in styles.css.
- No shadcn button restyle collisions — using purpose-built brand `PrimaryButton`/`SecondaryButton` rather than fighting the default variants.
- No drop shadows, no rounded-2xl bubbles, no gradients — flat panels with gold hairlines only.
