"use client";

import { useRef, useState, forwardRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

/* ─── Brand tokens ─── */
const O  = "#E8541A";
const D  = "#1A1917";
const L  = "#F7F4F0";
const M  = "#7A7572";
const BG = "#0D0C0A";

const TOTAL = 19;
const flipWords = ["ENERGY", "SAVINGS", "YOUR HOME", "YOUR FUTURE", "POWER"];

/* ─── Subtle dot-grid used on every page ─── */
const DOT_GRID: React.CSSProperties = {
  position: "absolute", inset: 0, pointerEvents: "none",
  backgroundImage: `radial-gradient(circle, rgba(232,84,26,0.22) 1px, transparent 1px)`,
  backgroundSize: "22px 22px",
  opacity: 0.18,
};

/* ─── Shared page shell ─── */
const Shell = forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => (
  <div ref={ref} style={{
    background: D, width: "100%", height: "100%",
    overflow: "hidden", boxSizing: "border-box",
    position: "relative", userSelect: "none",
  }}>
    <div style={DOT_GRID} />
    {children}
  </div>
));
Shell.displayName = "Shell";

/* ─── Tiny reusables ─── */
function Tag({ children }: { children: string }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      marginBottom: 14,
    }}>
      <div style={{ width: 16, height: 2, background: O }} />
      <span style={{
        fontFamily: "sans-serif", fontWeight: 900, fontSize: 8,
        color: O, letterSpacing: "0.32em", textTransform: "uppercase",
      }}>{children}</span>
    </div>
  );
}

function Rule() {
  return <div style={{ width: "100%", height: 1, background: `rgba(232,84,26,0.18)`, margin: "14px 0" }} />;
}

function PageNum({ n, total }: { n: number; total: number }) {
  return (
    <div style={{
      marginTop: "auto", paddingTop: 10,
      borderTop: `1px solid rgba(232,84,26,0.15)`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <span style={{ fontFamily: "sans-serif", fontSize: 8, color: "rgba(122,117,114,0.6)", letterSpacing: "0.15em" }}>
        BETELGEUSE SOLAR
      </span>
      <span style={{ fontFamily: "sans-serif", fontSize: 8, color: "rgba(122,117,114,0.6)", letterSpacing: "0.12em" }}>
        {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

/* ══════ P1 — HERO ══════ */
const P1Hero = forwardRef<HTMLDivElement>((_, ref) => {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    const iv = setInterval(() => setIndex(p => (p + 1) % flipWords.length), 2000);
    return () => clearInterval(iv);
  }, [started]);

  return (
    <Shell ref={ref}>
      {/* Orange top bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: O }} />

      {/* Centre glow */}
      <div style={{
        position: "absolute", top: "35%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "120%", height: "60%", borderRadius: "50%",
        background: `radial-gradient(ellipse, rgba(232,84,26,0.14) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        padding: "28px 28px 24px", height: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center", position: "relative",
      }}>
        {/* Logo mark */}
        <svg viewBox="0 0 100 100" width={44} height={44} style={{ marginBottom: 16 }}>
          <circle cx="50" cy="50" r="30" fill="rgba(232,84,26,0.12)" />
          <circle cx="50" cy="50" r="26" stroke={O} strokeWidth="1.5" fill="none" />
          <path d="M50 50 L50 24 A26 26 0 0 0 24 50 Z" fill={O} opacity="0.55" />
          <path d="M50 50 L76 50 A26 26 0 0 0 50 24 Z" fill={O} opacity="0.85" />
          <path d="M50 50 L50 76 A26 26 0 0 0 76 50 Z" fill={O} opacity="0.55" />
          <path d="M50 50 L24 50 A26 26 0 0 0 50 76 Z" fill={O} opacity="0.85" />
          <line x1="50" y1="24" x2="50" y2="76" stroke={D} strokeWidth="2.5" />
          <line x1="24" y1="50" x2="76" y2="50" stroke={D} strokeWidth="2.5" />
          <polygon points="47,24 50,4 53,24" fill={O} />
          <polygon points="47,76 50,96 53,76" fill={O} />
          <polygon points="76,47 96,50 76,53" fill={O} />
          <polygon points="24,47 4,50 24,53" fill={O} />
          <circle cx="50" cy="50" r="5.5" fill={D} />
          <circle cx="50" cy="50" r="3" fill={O} />
        </svg>

        {/* Static line */}
        <div style={{
          fontFamily: "sans-serif", fontWeight: 900, fontSize: 38,
          color: L, textTransform: "uppercase",
          letterSpacing: "-0.03em", lineHeight: 1, whiteSpace: "nowrap",
          marginBottom: 2,
        }}>OWN YOUR</div>

        {/* Split-flap card */}
        <div style={{
          position: "relative", display: "inline-block",
          background: "rgba(232,84,26,0.09)",
          border: `1.5px solid rgba(232,84,26,0.35)`,
          borderRadius: 6, padding: "2px 14px", marginBottom: 20,
        }}>
          <span aria-hidden="true" style={{
            position: "absolute", left: 0, right: 0, top: "50%",
            height: "1.5px", background: `rgba(232,84,26,0.45)`,
            transform: "translateY(-50%)", zIndex: 5, pointerEvents: "none",
          }} />
          <AnimatePresence mode="wait">
            <motion.div key={index}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              style={{
                fontFamily: "sans-serif", fontWeight: 900, fontSize: 38,
                color: O, textTransform: "uppercase",
                letterSpacing: "-0.03em", lineHeight: 1.15,
                display: "block", whiteSpace: "nowrap",
                transformOrigin: "center center", backfaceVisibility: "hidden",
              }}>
              {flipWords[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 18 }}>
          <div style={{ width: 20, height: 1, background: `rgba(122,117,114,0.4)` }} />
          <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 10, color: M, letterSpacing: "0.3em", textTransform: "uppercase" }}>
            BETEL<span style={{ color: O }}>G</span>EUSE SOLAR
          </span>
          <div style={{ width: 20, height: 1, background: `rgba(122,117,114,0.4)` }} />
        </div>

        {/* Subline */}
        <div style={{ fontFamily: "sans-serif", fontSize: 11, color: M, lineHeight: 1.7, maxWidth: 220, marginBottom: 24 }}>
          Cut your Meralco bill.<br />Power through brownouts.<br />Go solar with Betelgeuse.
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 230 }}>
          <a href="#catalog" style={{
            background: O, color: D, fontFamily: "sans-serif",
            fontWeight: 900, fontSize: 9, letterSpacing: "0.22em",
            textTransform: "uppercase", padding: "11px 0",
            textDecoration: "none", textAlign: "center", display: "block",
          }}>GET A FREE QUOTE</a>
          <a href="#catalog" style={{
            border: `1px solid rgba(232,84,26,0.4)`, color: L,
            fontFamily: "sans-serif", fontWeight: 700, fontSize: 9,
            letterSpacing: "0.22em", textTransform: "uppercase",
            padding: "10px 0", textDecoration: "none",
            textAlign: "center", display: "block",
          }}>OUR SYSTEMS</a>
        </div>

        {/* Flip hint */}
        <div style={{
          position: "absolute", bottom: 18,
          fontFamily: "sans-serif", fontSize: 8, color: "rgba(122,117,114,0.45)",
          letterSpacing: "0.2em", textTransform: "uppercase",
        }}>FLIP TO EXPLORE →</div>

        {/* Bottom glow line */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(to right, transparent, ${O}, transparent)`,
          opacity: 0.6,
        }} />
      </div>
    </Shell>
  );
});
P1Hero.displayName = "P1Hero";

/* ══════ P2 — VIDEO ══════ */
const PVideoPage = forwardRef<HTMLDivElement>((_, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <Shell ref={ref}>
      <div style={{ position: "absolute", inset: 0, background: "#080706" }} />
      <video ref={videoRef} src="/videos/drone.mp4" muted loop playsInline style={{
        position: "absolute", left: 0, top: "50%",
        transform: "translateY(-50%)", width: "100%", height: "auto",
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `linear-gradient(to bottom,
          rgba(8,7,6,0.88) 0%, rgba(8,7,6,0) 30%,
          rgba(8,7,6,0) 62%, rgba(8,7,6,0.92) 100%)`,
      }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: O }} />

      {/* Top label */}
      <div style={{ position: "absolute", top: 20, left: 22, display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 18, height: 2, background: O }} />
        <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 9, color: "rgba(247,244,240,0.85)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          BETEL<span style={{ color: O }}>G</span>EUSE · Aerial View
        </span>
      </div>

      {/* Bottom caption */}
      <div style={{ position: "absolute", bottom: 28, left: 24, right: 24 }}>
        <div style={{ fontFamily: "sans-serif", fontSize: 8, color: O, textTransform: "uppercase", letterSpacing: "0.28em", marginBottom: 8 }}>
          Real Installations
        </div>
        <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 26, color: L, textTransform: "uppercase", lineHeight: 1.05 }}>
          SOLAR PANELS<br /><span style={{ color: O }}>IN ACTION</span>
        </div>
        <div style={{ fontFamily: "sans-serif", fontSize: 10, color: "rgba(247,244,240,0.5)", marginTop: 8, lineHeight: 1.5 }}>
          Real Filipino homes. Real savings.
        </div>
      </div>
    </Shell>
  );
});
PVideoPage.displayName = "PVideoPage";

/* ══════ P3 — STATS ══════ */
const P2Stats = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    {/* Giant watermark */}
    <div style={{
      position: "absolute", bottom: -20, right: -10,
      fontFamily: "sans-serif", fontWeight: 900, fontSize: 120,
      color: O, opacity: 0.04, lineHeight: 1,
      textTransform: "uppercase", userSelect: "none",
    }} aria-hidden="true">KW</div>

    <div style={{ padding: "32px 28px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>By The Numbers</Tag>

      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 30, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 4 }}>
        OUR
      </div>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 30, color: O, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 20 }}>
        IMPACT
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1 }}>
        {[
          { val: "120", unit: "KW",    label: "Installed Capacity" },
          { val: "90",  unit: "%",     label: "Efficiency Rate" },
          { val: "50",  unit: "+",     label: "Homes Powered" },
          { val: "3–5", unit: "YR",    label: "Avg. ROI Period" },
          { val: "FREE",unit: "",      label: "Quotation" },
          { val: "24",  unit: "HRS",   label: "Response Time" },
        ].map(({ val, unit, label }) => (
          <div key={label} style={{
            background: "rgba(232,84,26,0.05)",
            border: "1px solid rgba(232,84,26,0.15)",
            borderRadius: 6, padding: "14px 12px",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div style={{ fontFamily: "sans-serif", fontWeight: 900, color: O, lineHeight: 1 }}>
              <span style={{ fontSize: 26 }}>{val}</span>
              {unit && <span style={{ fontSize: 12, marginLeft: 2 }}>{unit}</span>}
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 8, color: M, textTransform: "uppercase", letterSpacing: "0.18em", marginTop: 8 }}>{label}</div>
          </div>
        ))}
      </div>

      <PageNum n={3} total={TOTAL} />
    </div>
  </Shell>
));
P2Stats.displayName = "P2Stats";

/* ══════ P4 — OUR STORY ══════ */
const P3Story = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    {/* Left accent bar */}
    <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: `linear-gradient(to bottom, ${O}, transparent)` }} />

    <div style={{ padding: "32px 28px 24px 36px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>Our Story</Tag>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 28, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 4 }}>
        LSS DEVELOP-
      </div>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 28, color: O, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 22 }}>
        MENT CORP.
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative", flex: 1 }}>
        {/* Vertical timeline line */}
        <div style={{ position: "absolute", left: 17, top: 0, bottom: 40, width: 1, background: "rgba(232,84,26,0.2)" }} />

        {[
          { year: "2016", text: "Founded as Blitzkrieg Electrical Services — electrical contracting across the Philippines." },
          { year: "2020", text: "Pivoted to renewable energy. Betelgeuse Solar launched as our flagship brand." },
          { year: "2024", text: "Expanded nationwide: residential, commercial, and government solar projects." },
          { year: "2026", text: "Serving hundreds of Filipino families and businesses with clean solar power." },
        ].map(({ year, text }) => (
          <div key={year} style={{ display: "flex", gap: 14, marginBottom: 16, position: "relative" }}>
            {/* Timeline dot */}
            <div style={{ minWidth: 36, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 2 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: O, border: `2px solid ${D}`, boxShadow: `0 0 0 2px rgba(232,84,26,0.3)`, zIndex: 1 }} />
            </div>
            <div>
              <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 10, color: O, letterSpacing: "0.15em", marginBottom: 3 }}>{year}</div>
              <div style={{ fontFamily: "sans-serif", fontSize: 11, color: M, lineHeight: 1.55 }}>{text}</div>
            </div>
          </div>
        ))}
      </div>

      <PageNum n={4} total={TOTAL} />
    </div>
  </Shell>
));
P3Story.displayName = "P3Story";

/* ══════ P5 — VISION ══════ */
const P4Vision = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    {/* Big quote mark behind */}
    <div style={{
      position: "absolute", top: 60, left: 20,
      fontFamily: "sans-serif", fontWeight: 900, fontSize: 200,
      color: O, opacity: 0.05, lineHeight: 0.8,
      userSelect: "none",
    }} aria-hidden="true">"</div>

    <div style={{ padding: "32px 28px 24px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>Vision</Tag>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 28, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 24 }}>
        WHERE WE'RE<br /><span style={{ color: O }}>HEADED</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{
          borderLeft: `3px solid ${O}`, paddingLeft: 16,
          fontFamily: "sans-serif", fontSize: 13, color: L,
          lineHeight: 1.8, fontStyle: "italic", marginBottom: 24,
        }}>
          "To become one of the leading and most trusted solar solution providers in the Philippines — empowering every Filipino home and business with clean, reliable, and affordable solar energy."
        </div>

        <div style={{ fontFamily: "sans-serif", fontSize: 11, color: M, lineHeight: 1.65, marginBottom: 24 }}>
          We envision a Philippines where solar energy is the standard — where every rooftop harnesses the power of the sun.
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 8 }}>
        {[["Est. 2016", "Founded"], ["9+", "Years"], ["100%", "Filipino"]].map(([n, label]) => (
          <div key={label} style={{
            flex: 1, textAlign: "center",
            background: "rgba(232,84,26,0.06)",
            border: "1px solid rgba(232,84,26,0.15)",
            borderRadius: 4, padding: "10px 6px",
          }}>
            <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 13, color: O, lineHeight: 1 }}>{n}</div>
            <div style={{ fontFamily: "sans-serif", fontSize: 8, color: M, textTransform: "uppercase", letterSpacing: "0.18em", marginTop: 5 }}>{label}</div>
          </div>
        ))}
      </div>

      <PageNum n={5} total={TOTAL} />
    </div>
  </Shell>
));
P4Vision.displayName = "P4Vision";

/* ══════ P6 — MISSION ══════ */
const P5Mission = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding: "32px 28px 24px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>Mission</Tag>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 28, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 22 }}>
        HOW WE<br /><span style={{ color: O }}>SERVE</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          "Provide high-quality, affordable solar installations tailored to each client's energy needs.",
          "Offer transparent pricing and honest consultations — no hidden fees, no pushy sales.",
          "Support Filipino families in reducing their Meralco bills through reliable solar technology.",
          "Deliver end-to-end service: design, installation, net metering, and after-sales support.",
          "Promote energy independence and sustainability across the Philippines.",
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{
              minWidth: 22, height: 22, borderRadius: "50%", background: O,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "sans-serif", fontWeight: 900, fontSize: 9, color: D,
              flexShrink: 0, marginTop: 1,
            }}>{i + 1}</div>
            <div style={{ fontFamily: "sans-serif", fontSize: 11, color: M, lineHeight: 1.6 }}>{item}</div>
          </div>
        ))}
      </div>

      <PageNum n={6} total={TOTAL} />
    </div>
  </Shell>
));
P5Mission.displayName = "P5Mission";

/* ══════ P7 — HOW IT WORKS 1/2 ══════ */
const P6HowA = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    {/* BG number */}
    <div style={{
      position: "absolute", bottom: 40, right: -10,
      fontFamily: "sans-serif", fontWeight: 900, fontSize: 130,
      color: O, opacity: 0.04, lineHeight: 1,
    }} aria-hidden="true">1</div>

    <div style={{ padding: "32px 28px 24px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>How It Works</Tag>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 26, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 22 }}>
        THE PROCESS<br /><span style={{ color: O }}>— PART 1</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
        {[
          { num: "01", title: "Assess", sub: "Site & Energy Analysis", desc: "We deploy remote sensing data with an on-site audit to model your solar potential. Shading analysis, roof load calculations, and 30-year yield projections completed before any panel is specified." },
          { num: "02", title: "Design", sub: "Engineering & Permitting", desc: "Our engineers design a system optimized for your site. Full permit packages submitted to your local authority — we handle all coordination and utility interconnection agreements." },
        ].map(({ num, title, sub, desc }) => (
          <div key={num} style={{
            background: "rgba(232,84,26,0.04)",
            border: "1px solid rgba(232,84,26,0.12)",
            borderRadius: 8, padding: "14px 14px 14px 12px",
            borderLeft: `3px solid ${O}`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 18, color: O, lineHeight: 1 }}>{num}</span>
              <div>
                <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 13, color: L, textTransform: "uppercase", letterSpacing: "0.05em" }}>{title}</div>
                <div style={{ fontFamily: "sans-serif", fontSize: 8, color: O, textTransform: "uppercase", letterSpacing: "0.2em" }}>{sub}</div>
              </div>
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 10, color: M, lineHeight: 1.65 }}>{desc}</div>
          </div>
        ))}
      </div>

      <PageNum n={7} total={TOTAL} />
    </div>
  </Shell>
));
P6HowA.displayName = "P6HowA";

/* ══════ P8 — HOW IT WORKS 2/2 ══════ */
const P7HowB = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{
      position: "absolute", bottom: 40, right: -10,
      fontFamily: "sans-serif", fontWeight: 900, fontSize: 130,
      color: O, opacity: 0.04, lineHeight: 1,
    }} aria-hidden="true">2</div>

    <div style={{ padding: "32px 28px 24px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>How It Works</Tag>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 26, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 22 }}>
        THE PROCESS<br /><span style={{ color: O }}>— PART 2</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
        {[
          { num: "03", title: "Install", sub: "Precision Deployment", desc: "BETELGEUSE-certified crews complete most residential systems in 1–2 days. Proprietary low-profile racking, roof penetration sealing, and full commissioning tests included." },
          { num: "04", title: "Monitor", sub: "Lifetime Performance Intelligence", desc: "BETELGEUSE Connect tracks production in real time at the panel level. Predictive maintenance algorithms alert our team before performance degradation impacts your yield." },
        ].map(({ num, title, sub, desc }) => (
          <div key={num} style={{
            background: "rgba(232,84,26,0.04)",
            border: "1px solid rgba(232,84,26,0.12)",
            borderRadius: 8, padding: "14px 14px 14px 12px",
            borderLeft: `3px solid ${O}`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <span style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 18, color: O, lineHeight: 1 }}>{num}</span>
              <div>
                <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 13, color: L, textTransform: "uppercase", letterSpacing: "0.05em" }}>{title}</div>
                <div style={{ fontFamily: "sans-serif", fontSize: 8, color: O, textTransform: "uppercase", letterSpacing: "0.2em" }}>{sub}</div>
              </div>
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 10, color: M, lineHeight: 1.65 }}>{desc}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "rgba(232,84,26,0.06)", border: `1px solid rgba(232,84,26,0.2)`, borderRadius: 6, padding: "10px 14px", marginTop: 12 }}>
        <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 10, color: O, marginBottom: 2 }}>BETELGEUSE Connect</div>
        <div style={{ fontFamily: "sans-serif", fontSize: 10, color: M }}>Free 2-year real-time panel monitoring app.</div>
      </div>

      <PageNum n={8} total={TOTAL} />
    </div>
  </Shell>
));
P7HowB.displayName = "P7HowB";

/* ══════ PRODUCT PAGE FACTORY ══════ */
type ProdProps = { tag: string; title: string; sub: string; desc: string; bullets: string[]; n: number };

function makeProd({ title, sub, desc, bullets, n }: ProdProps) {
  const Comp = forwardRef<HTMLDivElement>((_, ref) => (
    <Shell ref={ref}>
      {/* Full-width orange header band */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 80,
        background: `linear-gradient(135deg, ${O} 0%, rgba(232,84,26,0.6) 100%)`,
      }}>
        <div style={DOT_GRID} />
        <div style={{ padding: "18px 24px" }}>
          <div style={{ fontFamily: "sans-serif", fontSize: 8, color: "rgba(26,25,23,0.7)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 4 }}>Products</div>
          <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 20, color: D, textTransform: "uppercase", lineHeight: 1 }}>{title}</div>
        </div>
      </div>

      <div style={{ padding: "92px 24px 24px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 9, color: O, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 12 }}>{sub}</div>

        <div style={{ fontFamily: "sans-serif", fontSize: 11, color: M, lineHeight: 1.7, marginBottom: 18 }}>{desc}</div>

        <Rule />

        <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
          {bullets.map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{
                minWidth: 18, height: 18, background: `rgba(232,84,26,0.15)`,
                border: `1px solid rgba(232,84,26,0.35)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, borderRadius: 2,
              }}>
                <div style={{ width: 5, height: 5, background: O, borderRadius: "50%" }} />
              </div>
              <div style={{ fontFamily: "sans-serif", fontSize: 11, color: M, lineHeight: 1.55 }}>{b}</div>
            </div>
          ))}
        </div>

        <PageNum n={n} total={TOTAL} />
      </div>
    </Shell>
  ));
  Comp.displayName = `Prod_${n}`;
  return Comp;
}

const P8OffGrid  = makeProd({ tag: "Products", title: "OFF / ON-GRID", sub: "Solar System", n: 9,
  desc: "Ideal for locations with or without a grid connection. Off-grid gives complete energy independence; on-grid offsets your Meralco bill with solar power.",
  bullets: ["Best for areas with frequent brownouts", "Battery backup keeps lights on 24/7", "Scalable from 1 kW to 100+ kW", "Reduces Meralco bill by up to 90%"] });

const P9NetMeter = makeProd({ tag: "Products", title: "NET METERING", sub: "Grid-Tie System", n: 10,
  desc: "Export excess solar energy back to Meralco's grid and earn bill credits. The most cost-effective way to go solar if you have reliable grid power.",
  bullets: ["Sell excess power back to the grid", "Earn Meralco bill credits monthly", "No battery required — lower upfront cost", "Government-backed ERC program"] });

const P10Hybrid  = makeProd({ tag: "Products", title: "HYBRID", sub: "Solar + Battery System", n: 11,
  desc: "The best of both worlds — store solar energy in batteries for nighttime and brownout use, while staying connected to the grid.",
  bullets: ["Solar + battery + grid connection", "Automatic backup during brownouts", "Smart energy management system", "Expandable battery capacity"] });

/* ══════ P12 — SERVICES 1/2 ══════ */
const P11ServA = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding: "32px 28px 24px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>Services</Tag>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 26, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 22 }}>
        WHAT WE<br /><span style={{ color: O }}>OFFER</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { n: "01", title: "Site Assessment", desc: "Certified engineers inspect your roof, electrical panel, and shading — 25-year yield projection included." },
          { n: "02", title: "System Design", desc: "Custom layout tailored to your consumption. All structural, electrical diagrams and permit documents covered." },
          { n: "03", title: "Installation", desc: "Certified crews complete most residential setups in 1–2 days. Weatherproof sealing and commissioning tests included." },
        ].map(({ n, title, desc }) => (
          <div key={n} style={{ display: "flex", gap: 12 }}>
            <div style={{
              minWidth: 26, height: 26, background: O,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "sans-serif", fontWeight: 900, fontSize: 9, color: D,
              flexShrink: 0, borderRadius: 2,
            }}>{n}</div>
            <div>
              <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 12, color: L, marginBottom: 3 }}>{title}</div>
              <div style={{ fontFamily: "sans-serif", fontSize: 10, color: M, lineHeight: 1.6 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <PageNum n={12} total={TOTAL} />
    </div>
  </Shell>
));
P11ServA.displayName = "P11ServA";

/* ══════ P13 — SERVICES 2/2 ══════ */
const P12ServB = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding: "32px 28px 24px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>Services</Tag>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 26, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 22 }}>
        CONTINUED<br /><span style={{ color: O }}>CARE</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { n: "04", title: "Net Metering", desc: "We file your complete net metering application with Meralco — forms, inspection scheduling, everything. Zero paperwork on your end." },
          { n: "05", title: "Monitoring", desc: "Real-time panel monitoring via BETELGEUSE Connect. Alerts for faults and predictive maintenance — free for 2 years." },
          { n: "06", title: "After-Sales", desc: "Annual maintenance visits, cleaning, torque checks, and firmware updates. Extended service plans available." },
        ].map(({ n, title, desc }) => (
          <div key={n} style={{ display: "flex", gap: 12 }}>
            <div style={{
              minWidth: 26, height: 26, background: O,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "sans-serif", fontWeight: 900, fontSize: 9, color: D,
              flexShrink: 0, borderRadius: 2,
            }}>{n}</div>
            <div>
              <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 12, color: L, marginBottom: 3 }}>{title}</div>
              <div style={{ fontFamily: "sans-serif", fontSize: 10, color: M, lineHeight: 1.6 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Free quote callout */}
      <div style={{
        background: `linear-gradient(135deg, rgba(232,84,26,0.12) 0%, rgba(232,84,26,0.04) 100%)`,
        border: `1px solid rgba(232,84,26,0.3)`,
        borderRadius: 8, padding: "14px", textAlign: "center", marginTop: 14,
      }}>
        <div style={{ fontFamily: "sans-serif", fontSize: 8, color: M, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 4 }}>Quotation</div>
        <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 26, color: O, lineHeight: 1 }}>FREE</div>
        <div style={{ fontFamily: "sans-serif", fontSize: 9, color: M, marginTop: 5 }}>Send your Meralco bill via Viber</div>
      </div>

      <PageNum n={13} total={TOTAL} />
    </div>
  </Shell>
));
P12ServB.displayName = "P12ServB";

/* ══════ TESTIMONIAL FACTORY ══════ */
type TestiProps = { system: string; quote: string; name: string; role: string; location: string; n: number };

function makeTestimonial({ system, quote, name, role, location, n }: TestiProps) {
  const Comp = forwardRef<HTMLDivElement>((_, ref) => (
    <Shell ref={ref}>
      {/* Orange background accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "38%",
        background: `linear-gradient(180deg, rgba(232,84,26,0.08) 0%, transparent 100%)`,
      }} />

      <div style={{ padding: "30px 28px 24px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <Tag>Client Stories</Tag>
          <div style={{
            background: "rgba(232,84,26,0.1)",
            border: `1px solid rgba(232,84,26,0.3)`,
            padding: "3px 8px",
            fontFamily: "sans-serif", fontWeight: 700, fontSize: 8,
            color: O, textTransform: "uppercase", letterSpacing: "0.18em",
          }}>{system}</div>
        </div>

        {/* Giant quote mark */}
        <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 80, color: O, lineHeight: 0.7, opacity: 0.35, marginBottom: 10, userSelect: "none" }}>"</div>

        {/* Quote */}
        <div style={{ fontFamily: "sans-serif", fontSize: 12, color: L, lineHeight: 1.8, fontStyle: "italic", flex: 1, marginBottom: 16 }}>
          {quote}
        </div>

        {/* Stars */}
        <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
          {[1, 2, 3, 4, 5].map(s => (
            <svg key={s} width="12" height="12" viewBox="0 0 14 14" fill={O}>
              <path d="M7 0.5L8.85 5.07L13.76 5.44L10.06 8.63L11.26 13.36L7 10.77L2.74 13.36L3.94 8.63L0.24 5.44L5.15 5.07L7 0.5Z" />
            </svg>
          ))}
        </div>

        {/* Author */}
        <div style={{ borderTop: `1px solid rgba(232,84,26,0.18)`, paddingTop: 12 }}>
          <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 12, color: L, marginBottom: 2 }}>{name}</div>
          <div style={{ fontFamily: "sans-serif", fontSize: 9, color: M }}>{role}</div>
          <div style={{ fontFamily: "sans-serif", fontSize: 9, color: M, marginTop: 1 }}>{location}</div>
        </div>

        <PageNum n={n} total={TOTAL} />
      </div>
    </Shell>
  ));
  Comp.displayName = `Testi_${n}`;
  return Comp;
}

const P13Testi1 = makeTestimonial({ system: "Hybrid System", n: 14,
  quote: "Our Meralco bill used to hit ₱8,000 a month. After Betelgeuse installed our hybrid system, it dropped to under ₱800. And during the last brownout, our house was the only one with lights on.",
  name: "Syra Mae Escudero", role: "PRULIFE Assistant Unit Manager", location: "Alfonso, Cavite" });

const P14Testi2 = makeTestimonial({ system: "Net Metering", n: 15,
  quote: "The net metering setup was completely seamless. The Betelgeuse team handled all the Meralco paperwork — I didn't lift a finger. Now my meter literally runs backwards every sunny day.",
  name: "Rochie Solomon", role: "Head of DI33", location: "Muntinlupa, Metro Manila" });

const P15Testi3 = makeTestimonial({ system: "On-Grid System", n: 16,
  quote: "I'm always travelling for work so I needed reliable remote monitoring. Betelgeuse installed an on-grid system and I can check my production data from anywhere in the world.",
  name: "Danielle De Borja", role: "Independent Pilot", location: "Pacita, Biñan" });

/* ══════ P17 — WHY CHOOSE US ══════ */
const P16WhyUs = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding: "32px 28px 24px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>Why Choose Us</Tag>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 26, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 22 }}>
        THE BETELGEUSE<br /><span style={{ color: O }}>ADVANTAGE</span>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
        {[
          { icon: "⚡", title: "Fast Installation", desc: "Most systems installed in 1–3 days with minimal disruption." },
          { icon: "🇵🇭", title: "100% Filipino", desc: "Local team, local expertise. We understand Philippine conditions." },
          { icon: "📋", title: "Net Metering Experts", desc: "We handle all Meralco paperwork and ERC applications." },
          { icon: "🛡️", title: "25-Year Warranty", desc: "Industry-leading panel warranty for peace of mind." },
          { icon: "💬", title: "Free Quotation", desc: "Send your Meralco bill via Viber — we respond in 24 hours." },
        ].map(({ icon, title, desc }) => (
          <div key={title} style={{
            display: "flex", gap: 12, alignItems: "flex-start",
            background: "rgba(232,84,26,0.04)",
            border: "1px solid rgba(232,84,26,0.1)",
            borderRadius: 6, padding: "10px 12px",
          }}>
            <div style={{ fontSize: 16, flexShrink: 0 }}>{icon}</div>
            <div>
              <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: 11, color: L, marginBottom: 2 }}>{title}</div>
              <div style={{ fontFamily: "sans-serif", fontSize: 10, color: M, lineHeight: 1.5 }}>{desc}</div>
            </div>
          </div>
        ))}
      </div>

      <PageNum n={17} total={TOTAL} />
    </div>
  </Shell>
));
P16WhyUs.displayName = "P16WhyUs";

/* ══════ P18 — PRICING ══════ */
const PPricing = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    {/* Orange header band */}
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 72,
      background: `linear-gradient(135deg, ${O} 0%, rgba(232,84,26,0.6) 100%)`,
    }}>
      <div style={DOT_GRID} />
      <div style={{ padding: "14px 24px" }}>
        <div style={{ fontFamily: "sans-serif", fontSize: 8, color: "rgba(26,25,23,0.7)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 3 }}>Offer / Proposal</div>
        <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 20, color: D, textTransform: "uppercase", lineHeight: 1 }}>SYSTEM PRICING</div>
      </div>
    </div>

    <div style={{ padding: "84px 20px 20px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>

      {/* One block per system size */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { kw: "6 KW",  hybrid: "₱380,000", ongrid: "₱300,000" },
          { kw: "8 KW",  hybrid: "₱480,000", ongrid: "₱370,000" },
          { kw: "10 KW", hybrid: "₱580,000", ongrid: "₱470,000" },
        ].map(({ kw, hybrid, ongrid }) => (
          <div key={kw} style={{
            background: "rgba(232,84,26,0.04)",
            border: "1px solid rgba(232,84,26,0.14)",
            borderRadius: 8, overflow: "hidden",
          }}>
            {/* KW header */}
            <div style={{
              background: "rgba(232,84,26,0.1)", padding: "8px 14px",
              borderBottom: "1px solid rgba(232,84,26,0.15)",
              fontFamily: "sans-serif", fontWeight: 900, fontSize: 13,
              color: L, letterSpacing: "0.08em",
            }}>{kw}</div>

            {/* 2 price columns */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
              {[
                { label: "Hybrid", sub: "Battery, Panels, Inverter", price: hybrid },
                { label: "On Grid + Net Metering", sub: "Panels, Inverter", price: ongrid },
              ].map(({ label, sub, price }, i) => (
                <div key={label} style={{
                  padding: "12px 14px", textAlign: "center",
                  borderRight: i === 0 ? "1px solid rgba(232,84,26,0.12)" : "none",
                }}>
                  <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 9, color: O, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: "sans-serif", fontSize: 8, color: M, lineHeight: 1.4, marginBottom: 8 }}>{sub}</div>
                  <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 15, color: O, lineHeight: 1 }}>{price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div style={{ marginTop: 12, padding: "8px 10px", background: "rgba(232,84,26,0.05)", border: "1px solid rgba(232,84,26,0.12)", borderRadius: 4 }}>
        <div style={{ fontFamily: "sans-serif", fontSize: 8, color: M, lineHeight: 1.55 }}>
          * Prices are indicative. Final quotation based on site assessment. Contact us via Viber for a free detailed proposal.
        </div>
      </div>

      <PageNum n={18} total={TOTAL} />
    </div>
  </Shell>
));
PPricing.displayName = "PPricing";

/* ══════ P19 — CONTACT ══════ */
const P17Contact = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    {/* Full left orange strip */}
    <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 6, background: O }} />

    {/* Background radial */}
    <div style={{
      position: "absolute", bottom: "10%", left: "40%",
      width: 280, height: 280, borderRadius: "50%",
      background: `radial-gradient(circle, rgba(232,84,26,0.1) 0%, transparent 70%)`,
      pointerEvents: "none",
    }} />

    <div style={{ padding: "32px 28px 24px 38px", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <Tag>Get In Touch</Tag>
      <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 28, color: L, textTransform: "uppercase", lineHeight: 1.05, marginBottom: 28 }}>
        START YOUR<br /><span style={{ color: O }}>SOLAR</span><br />JOURNEY
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
        {[
          { label: "Viber / Call", value: "+63 969 604 8041" },
          { label: "Email", value: "lsscorporation@\nbetelgeusesolar.com" },
          { label: "Quotation", value: "FREE" },
          { label: "Response", value: "Within 24 hours" },
        ].map(({ label, value }) => (
          <div key={label}>
            <div style={{ fontFamily: "sans-serif", fontSize: 8, color: O, textTransform: "uppercase", letterSpacing: "0.28em", marginBottom: 3 }}>{label}</div>
            <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: label === "Quotation" ? 24 : 13, color: label === "Quotation" ? O : L, whiteSpace: "pre-line", lineHeight: 1.3 }}>{value}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "auto" }}>
        <Rule />
        <div style={{ fontFamily: "sans-serif", fontWeight: 900, fontSize: 15, color: L, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          BETEL<span style={{ color: O }}>G</span>EUSE SOLAR
        </div>
        <div style={{ fontFamily: "sans-serif", fontSize: 8, color: M, letterSpacing: "0.32em", textTransform: "uppercase", marginTop: 4 }}>
          Own Your Energy
        </div>
      </div>
    </div>
  </Shell>
));
P17Contact.displayName = "P17Contact";

/* ══════════════════════════════════════════════
   RESPONSIVE DIMENSIONS
══════════════════════════════════════════════ */
function useBookDims() {
  const [dims, setDims] = useState({ w: 380, h: 535, portrait: false });

  useEffect(() => {
    function calc() {
      const NAV   = 64;
      const CTRL  = 100;
      const PAD   = 24;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const avail = vh - NAV - CTRL - PAD;
      const mobile = vw < 720;

      if (mobile) {
        const w = Math.min(vw - 32, 400);
        const h = Math.min(Math.floor(w * 1.41), avail);
        setDims({ w, h, portrait: true });
      } else {
        const w = Math.min(Math.floor(vw * 0.44), 560);
        const h = Math.min(Math.floor(w * 1.41), avail);
        setDims({ w, h, portrait: false });
      }
    }
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  return dims;
}

/* ══════════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════════ */
export default function FlipbookSection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null);
  const [page,   setPage]   = useState(0);
  const [spread, setSpread] = useState(1);
  const prevPageRef = useRef(0);
  const [isClient, setIsClient] = useState(false);
  const dims = useBookDims();

  const totalSpreads = dims.portrait ? TOTAL : Math.ceil((TOTAL + 1) / 2);

  useEffect(() => { setIsClient(true); }, []);

  const onFlip = useCallback((e: { data: number }) => {
    const newPage = e.data;
    const oldPage = prevPageRef.current;
    prevPageRef.current = newPage;
    setPage(newPage);
    setSpread(prev =>
      newPage > oldPage
        ? Math.min(prev + 1, totalSpreads)
        : Math.max(prev - 1, 1)
    );
  }, [totalSpreads]);

  const goNext = () => bookRef.current?.pageFlip().flipNext();
  const goPrev = () => bookRef.current?.pageFlip().flipPrev();

  const jumpTo = useCallback((target: number) => {
    bookRef.current?.pageFlip().flip(target);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => jumpTo((e as CustomEvent<{ page: number }>).detail.page);
    window.addEventListener("flipbook-go", handler);
    return () => window.removeEventListener("flipbook-go", handler);
  }, [jumpTo]);

  const spreadToPage = (s: number) =>
    dims.portrait ? s - 1 : s === 1 ? 0 : 2 * (s - 1) - 1;

  const atStart = spread === 1;
  const atEnd   = spread === totalSpreads;

  return (
    <section id="catalog" style={{
      minHeight: "calc(100vh - 64px)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      overflow: "hidden",
      padding: "12px 16px 0",
      boxSizing: "border-box",
      /* Layered radial glows for depth */
      background: `
        radial-gradient(ellipse at 20% 50%, rgba(232,84,26,0.07) 0%, transparent 55%),
        radial-gradient(ellipse at 80% 50%, rgba(232,84,26,0.05) 0%, transparent 50%),
        ${BG}
      `,
    }}>
      {/* Ambient glow behind book */}
      <div style={{
        position: "relative", flexShrink: 0,
        filter: "drop-shadow(0 32px 60px rgba(0,0,0,0.85))",
      }}>
        {/* Orange halo */}
        <div style={{
          position: "absolute", inset: -32,
          background: `radial-gradient(ellipse at center, rgba(232,84,26,0.18) 0%, transparent 65%)`,
          pointerEvents: "none", borderRadius: "50%",
          filter: "blur(24px)",
        }} />

        {isClient && (
          <HTMLFlipBook
            ref={bookRef}
            width={dims.w}
            height={dims.h}
            size="fixed"
            minWidth={240} maxWidth={600}
            minHeight={340} maxHeight={860}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onFlip}
            style={{ margin: "0 auto" }}
            startPage={0}
            drawShadow={true}
            flippingTime={680}
            usePortrait={dims.portrait}
            startZIndex={0}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={20}
            showPageCorners={true}
            disableFlipByClick={false}
            maxShadowOpacity={0.6}
            className=""
          >
            <P1Hero />
            <PVideoPage />
            <P2Stats />
            <P3Story />
            <P4Vision />
            <P5Mission />
            <P6HowA />
            <P7HowB />
            <P8OffGrid />
            <P9NetMeter />
            <P10Hybrid />
            <P11ServA />
            <P12ServB />
            <P13Testi1 />
            <P14Testi2 />
            <P15Testi3 />
            <P16WhyUs />
            <PPricing />
            <P17Contact />
          </HTMLFlipBook>
        )}
      </div>

      {/* Controls */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        gap: 10, paddingTop: 16, paddingBottom: 16, flexShrink: 0,
      }}>
        {/* Prev / counter / Next */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <button onClick={goPrev} disabled={atStart} aria-label="Previous page" style={{
            width: 40, height: 40, borderRadius: "50%",
            border: `1px solid ${atStart ? "rgba(232,84,26,0.15)" : O}`,
            background: "transparent",
            color: atStart ? "rgba(232,84,26,0.2)" : O,
            cursor: atStart ? "not-allowed" : "pointer",
            fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}>‹</button>

          <span style={{
            fontFamily: "sans-serif", fontSize: 11, color: M,
            letterSpacing: "0.18em", minWidth: 64, textAlign: "center",
          }}>{spread} / {totalSpreads}</span>

          <button onClick={goNext} disabled={atEnd} aria-label="Next page" style={{
            width: 40, height: 40, borderRadius: "50%",
            border: `1px solid ${atEnd ? "rgba(232,84,26,0.15)" : O}`,
            background: "transparent",
            color: atEnd ? "rgba(232,84,26,0.2)" : O,
            cursor: atEnd ? "not-allowed" : "pointer",
            fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}>›</button>
        </div>

        {/* Page dots */}
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "center", maxWidth: "min(320px, 90vw)" }}>
          {Array.from({ length: totalSpreads }, (_, i) => {
            const s = i + 1;
            const active = s === spread;
            return (
              <button key={s} onClick={() => jumpTo(spreadToPage(s))} title={`Page ${s}`} style={{
                width: active ? 20 : 8, height: 8,
                border: "none",
                background: active ? O : "rgba(232,84,26,0.25)",
                cursor: "pointer",
                borderRadius: 4,
                transition: "all 0.25s",
                padding: 0,
              }} />
            );
          })}
        </div>

        <div style={{
          fontFamily: "sans-serif", fontSize: 9,
          color: "rgba(122,117,114,0.35)", letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}>← drag or click page edges to flip →</div>
      </div>
    </section>
  );
}
