import type { ReactNode } from "react";

export function CornerBracketFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* corners */}
      <span aria-hidden className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l border-t border-gold" />
      <span aria-hidden className="pointer-events-none absolute right-0 top-0 h-6 w-6 border-r border-t border-gold" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 border-b border-l border-gold" />
      <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b border-r border-gold" />
      <div className="h-full w-full">{children}</div>
    </div>
  );
}
