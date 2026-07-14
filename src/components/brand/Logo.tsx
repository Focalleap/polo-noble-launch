import logo from "@/assets/ride-next-polo-logo.jpg.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Ride Next Polo"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
