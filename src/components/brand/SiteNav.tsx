import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/founder", label: "Founder" },
  { to: "/tournaments", label: "Morocco 2027" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const barClass = scrolled
    ? "bg-black/85 backdrop-blur-md border-b border-line"
    : "bg-transparent border-b border-transparent";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${barClass}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Ride Next Polo — Home">
            <Logo className="h-10 w-auto" />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-[11px] uppercase tracking-[0.28em] text-ivory-dim transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center border border-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-black"
            >
              Register Interest
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-ivory lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile slide-in panel */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-line bg-panel transition-transform duration-400 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <Logo className="h-9 w-auto" />
            <button
              type="button"
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center border border-line text-ivory"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-line/50 py-4 text-sm uppercase tracking-[0.28em] text-ivory transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center border border-gold px-5 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-black"
            >
              Register Interest
            </Link>
          </nav>
        </aside>
      </div>
    </>
  );
}
