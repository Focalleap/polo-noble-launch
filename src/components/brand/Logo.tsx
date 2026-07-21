import logo from "@/assets/ride-next-polo-logo.PNG";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Ride Next Polo"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
