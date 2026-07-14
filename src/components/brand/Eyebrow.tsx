import type { ReactNode } from "react";

export function Eyebrow({
  children,
  align = "left",
  className = "",
}: {
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const justify = align === "center" ? "justify-center" : "justify-start";
  return (
    <div className={`flex items-center gap-4 ${justify} ${className}`}>
      {align === "center" && (
        <span aria-hidden className="h-px w-10 bg-[color:var(--line-strong)]" />
      )}
      <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
        {children}
      </span>
      <span aria-hidden className="h-px w-10 bg-[color:var(--line-strong)]" />
    </div>
  );
}
