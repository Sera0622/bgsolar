"use client";

interface LogoMarkProps {
  size?: number;
  className?: string;
}

/** Standalone SVG icon mark — the Betelgeuse stellar-solar cross */
export function LogoMark({ size = 48, className = "" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Glow halo ── */}
      <circle cx="50" cy="50" r="30" fill="rgba(232,84,26,0.12)" />

      {/* ── Outer ring ── */}
      <circle cx="50" cy="50" r="26" stroke="#E8541A" strokeWidth="1.5" />

      {/* ── 4 solar-panel quadrant sectors ── */}
      {/* top-left */}
      <path d="M50 50 L50 24 A26 26 0 0 0 24 50 Z" fill="#E8541A" opacity="0.55" />
      {/* top-right */}
      <path d="M50 50 L76 50 A26 26 0 0 0 50 24 Z" fill="#E8541A" opacity="0.85" />
      {/* bottom-right */}
      <path d="M50 50 L50 76 A26 26 0 0 0 76 50 Z" fill="#E8541A" opacity="0.55" />
      {/* bottom-left */}
      <path d="M50 50 L24 50 A26 26 0 0 0 50 76 Z" fill="#E8541A" opacity="0.85" />

      {/* ── Panel divider cross (dark gaps) ── */}
      <line x1="50" y1="24" x2="50" y2="76" stroke="#1A1917" strokeWidth="2.5" />
      <line x1="24" y1="50" x2="76" y2="50" stroke="#1A1917" strokeWidth="2.5" />

      {/* ── 4 cardinal spike rays ── */}
      {/* North */}
      <polygon points="47,24 50,4 53,24" fill="#E8541A" />
      {/* South */}
      <polygon points="47,76 50,96 53,76" fill="#E8541A" />
      {/* East */}
      <polygon points="76,47 96,50 76,53" fill="#E8541A" />
      {/* West */}
      <polygon points="24,47 4,50 24,53" fill="#E8541A" />

      {/* ── 4 diagonal short tick marks ── */}
      <line x1="68" y1="32" x2="76" y2="24" stroke="#E8541A" strokeWidth="2" strokeLinecap="round" />
      <line x1="68" y1="68" x2="76" y2="76" stroke="#E8541A" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="68" x2="24" y2="76" stroke="#E8541A" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="32" x2="24" y2="24" stroke="#E8541A" strokeWidth="2" strokeLinecap="round" />

      {/* ── Center core dot ── */}
      <circle cx="50" cy="50" r="5.5" fill="#1A1917" />
      <circle cx="50" cy="50" r="3" fill="#E8541A" />
    </svg>
  );
}

interface BetelgeuseLogoProps {
  /** Show the text wordmark next to the mark */
  showWordmark?: boolean;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  className?: string;
}

const markSizes = { sm: 28, md: 40, lg: 56 };
const textSizes = {
  sm: { brand: "text-base", sub: "text-[9px]" },
  md: { brand: "text-xl",   sub: "text-[10px]" },
  lg: { brand: "text-3xl",  sub: "text-xs" },
};

export default function BetelgeuseLogo({
  showWordmark = true,
  size = "md",
  className = "",
}: BetelgeuseLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={markSizes[size]} />
      {showWordmark && (
        <div className="leading-none">
          <div
            className={`font-black uppercase tracking-[0.15em] text-white-star ${textSizes[size].brand}`}
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            BETEL<span className="text-orange">G</span>EUSE
          </div>
          <div
            className={`text-gray-muted tracking-[0.35em] uppercase mt-0.5 ${textSizes[size].sub}`}
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            SOLAR
          </div>
        </div>
      )}
    </div>
  );
}
