import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type LinkProps = ComponentProps<typeof Link>;

const primaryClass =
  "group inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const secondaryClass =
  "group inline-flex items-center gap-3 border border-[color:var(--line-strong)] px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-ivory transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black";

function ButtonInner({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
        strokeWidth={1.5}
      />
    </>
  );
}

export function PrimaryLink(props: LinkProps) {
  const { children, className, ...rest } = props as LinkProps & { className?: string };
  return (
    <Link {...(rest as LinkProps)} className={`${primaryClass} ${className ?? ""}`}>
      <ButtonInner>{children}</ButtonInner>
    </Link>
  );
}

export function SecondaryLink(props: LinkProps) {
  const { children, className, ...rest } = props as LinkProps & { className?: string };
  return (
    <Link {...(rest as LinkProps)} className={`${secondaryClass} ${className ?? ""}`}>
      <ButtonInner>{children}</ButtonInner>
    </Link>
  );
}

export function PrimaryAnchor({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`${primaryClass} ${className}`}>
      <ButtonInner>{children}</ButtonInner>
    </a>
  );
}

export function SecondaryAnchor({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`${secondaryClass} ${className}`}>
      <ButtonInner>{children}</ButtonInner>
    </a>
  );
}

export function PrimaryButton({
  children,
  className = "",
  ...props
}: ComponentProps<"button">) {
  return (
    <button {...props} className={`${primaryClass} ${className}`}>
      <ButtonInner>{children}</ButtonInner>
    </button>
  );
}
