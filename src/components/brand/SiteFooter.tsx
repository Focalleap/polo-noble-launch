import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-black">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-12 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory-dim">
              An international polo tour building tournaments in countries new to
              the sport — starting in Morocco.
            </p>
          </div>

          <FooterCol title="Site">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/founder">Founder</FooterLink>
            <FooterLink to="/tournaments">Morocco 2026</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="The Founding Edition">
            <FooterLink to="/tournaments">Morocco Tournament</FooterLink>
            <FooterLink to="/contact">Register Interest</FooterLink>
            <FooterLink to="/contact">Media &amp; Press</FooterLink>
          </FooterCol>

          <FooterCol title="Follow">
            <FooterExt href="https://instagram.com">Instagram</FooterExt>
            <FooterExt href="https://x.com">X</FooterExt>
            <FooterExt href="https://youtube.com">YouTube</FooterExt>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs uppercase tracking-[0.24em] text-ivory-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ride Next Polo. All rights reserved.</p>
          <p>Founded by Aisha Ahmad Suleiman.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-5 font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
        {title}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-ivory-dim transition-colors hover:text-gold"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterExt({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-ivory-dim transition-colors hover:text-gold"
      >
        {children}
      </a>
    </li>
  );
}
