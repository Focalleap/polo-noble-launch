export function HorseMalletMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <g
        stroke="var(--gold)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* Horse head silhouette (stylized line) */}
        <path d="M120 380 L120 250 C120 200 140 165 175 145 C195 133 210 118 218 100 C222 90 228 88 232 96 C238 108 236 122 230 132 C244 128 258 130 268 138 C280 148 284 160 280 172 L266 176 C258 178 254 184 254 192 L254 208 C254 218 250 224 240 226 L230 228 L228 250 L220 252 L220 380" />
        {/* Eye */}
        <circle cx="242" cy="168" r="1.8" fill="var(--gold)" stroke="none" />
        {/* Ear */}
        <path d="M218 100 L228 82 L236 92" />
        {/* Polo mallet, diagonal */}
        <line x1="80" y1="470" x2="330" y2="60" />
        {/* Mallet head */}
        <path d="M320 45 L352 20 L370 42 L338 68 Z" />
        {/* Grip wrap ticks */}
        <line x1="96" y1="454" x2="106" y2="446" />
        <line x1="108" y1="440" x2="118" y2="432" />
      </g>
    </svg>
  );
}
