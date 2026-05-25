"use client";

import { useRef, useState, forwardRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

/* ─── Dynamic import — react-pageflip uses browser DOM APIs ─── */
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

/* ─── Brand tokens ─── */
const ORANGE = "#E8541A";
const DARK   = "#1A1917";
const LIGHT  = "#F7F4F0";
const MUTED  = "#7A7572";
const CARD   = "#24211E";

/* ─── Shared page wrapper ─── */
const PageShell = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
  ({ children }, ref) => (
    <div
      ref={ref}
      style={{
        background: DARK,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        boxSizing: "border-box",
        position: "relative",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  )
);
PageShell.displayName = "PageShell";

/* ─── Shared label ─── */
function Tag({ children }: { children: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        background: ORANGE,
        color: DARK,
        fontFamily: "sans-serif",
        fontWeight: 900,
        fontSize: 9,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        padding: "3px 10px",
        borderRadius: 2,
        marginBottom: 12,
      }}
    >
      {children}
    </span>
  );
}

/* ─── PAGE 1 — Cover ─── */
const CoverPage = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref}>
    {/* Orange top stripe */}
    <div style={{ height: 6, background: ORANGE, width: "100%" }} />

    {/* Big radial glow behind logo */}
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: 320,
        height: 320,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(232,84,26,0.18) 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />

    <div
      style={{
        padding: "52px 36px 36px",
        display: "flex",
        flexDirection: "column",
        height: "calc(100% - 6px)",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Logomark */}
      <svg viewBox="0 0 100 100" width={60} height={60} style={{ marginBottom: 24 }}>
        <circle cx="50" cy="50" r="30" fill="rgba(232,84,26,0.12)" />
        <circle cx="50" cy="50" r="26" stroke={ORANGE} strokeWidth="1.5" fill="none" />
        <path d="M50 50 L50 24 A26 26 0 0 0 24 50 Z" fill={ORANGE} opacity="0.55" />
        <path d="M50 50 L76 50 A26 26 0 0 0 50 24 Z" fill={ORANGE} opacity="0.85" />
        <path d="M50 50 L50 76 A26 26 0 0 0 76 50 Z" fill={ORANGE} opacity="0.55" />
        <path d="M50 50 L24 50 A26 26 0 0 0 50 76 Z" fill={ORANGE} opacity="0.85" />
        <line x1="50" y1="24" x2="50" y2="76" stroke={DARK} strokeWidth="2.5" />
        <line x1="24" y1="50" x2="76" y2="50" stroke={DARK} strokeWidth="2.5" />
        <polygon points="47,24 50,4 53,24" fill={ORANGE} />
        <polygon points="47,76 50,96 53,76" fill={ORANGE} />
        <polygon points="76,47 96,50 76,53" fill={ORANGE} />
        <polygon points="24,47 4,50 24,53" fill={ORANGE} />
        <circle cx="50" cy="50" r="5.5" fill={DARK} />
        <circle cx="50" cy="50" r="3" fill={ORANGE} />
      </svg>

      {/* Wordmark */}
      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 28,
          letterSpacing: "0.08em",
          color: LIGHT,
          textTransform: "uppercase",
          lineHeight: 1,
          marginBottom: 4,
        }}
      >
        BETEL<span style={{ color: ORANGE }}>G</span>EUSE
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 11,
          letterSpacing: "0.45em",
          color: MUTED,
          textTransform: "uppercase",
          marginBottom: 52,
        }}
      >
        SOLAR
      </div>

      {/* Main title */}
      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 36,
          color: LIGHT,
          textTransform: "uppercase",
          lineHeight: 1.05,
          marginBottom: 16,
        }}
      >
        COMPANY
        <br />
        <span style={{ color: ORANGE }}>PROFILE</span>
      </div>

      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 12,
          color: MUTED,
          lineHeight: 1.6,
          maxWidth: 220,
          marginBottom: 40,
        }}
      >
        Your trusted Filipino solar energy partner. Powering homes and businesses since 2016.
      </div>

      {/* Divider */}
      <div style={{ width: 48, height: 2, background: ORANGE, marginBottom: 16 }} />

      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 10,
          color: MUTED,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        2026 Edition
      </div>

      {/* Bottom page number */}
      <div
        style={{
          marginTop: "auto",
          fontFamily: "sans-serif",
          fontSize: 9,
          color: MUTED,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Flip to explore →
      </div>
    </div>
  </PageShell>
));
CoverPage.displayName = "CoverPage";

/* ─── PAGE 2 — Our Story ─── */
const StoryPage = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref}>
    <div style={{ padding: "40px 32px", height: "100%", boxSizing: "border-box" }}>
      <Tag>Our Story</Tag>

      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 24,
          color: LIGHT,
          textTransform: "uppercase",
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        LSS DEVELOPMENT<br />
        <span style={{ color: ORANGE }}>CORPORATION</span>
      </div>

      <div
        style={{
          width: 36,
          height: 2,
          background: ORANGE,
          marginBottom: 20,
        }}
      />

      {[
        { year: "2016", text: "Founded as Blitzkrieg Electrical Services — providing electrical contracting solutions across the Philippines." },
        { year: "2020", text: "Pivoted to renewable energy, launching Betelgeuse Solar as the company's flagship solar brand." },
        { year: "2024", text: "Expanded to full-service solar installation: residential, commercial, and government projects nationwide." },
        { year: "2026", text: "Serving hundreds of Filipino families and businesses with clean, affordable solar power." },
      ].map(({ year, text }) => (
        <div key={year} style={{ display: "flex", gap: 14, marginBottom: 18 }}>
          <div
            style={{
              minWidth: 38,
              fontFamily: "sans-serif",
              fontWeight: 900,
              fontSize: 11,
              color: ORANGE,
              paddingTop: 2,
            }}
          >
            {year}
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 11,
              color: MUTED,
              lineHeight: 1.55,
            }}
          >
            {text}
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: "auto",
          borderTop: `1px solid rgba(232,84,26,0.2)`,
          paddingTop: 12,
          fontFamily: "sans-serif",
          fontSize: 9,
          color: MUTED,
          letterSpacing: "0.15em",
        }}
      >
        02 / COMPANY PROFILE
      </div>
    </div>
  </PageShell>
));
StoryPage.displayName = "StoryPage";

/* ─── PAGE 3 — Vision ─── */
const VisionPage = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref}>
    {/* Orange side accent */}
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 4,
        background: `linear-gradient(to bottom, ${ORANGE}, transparent)`,
      }}
    />

    <div style={{ padding: "40px 32px 40px 40px", height: "100%", boxSizing: "border-box" }}>
      <Tag>Vision</Tag>

      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 22,
          color: LIGHT,
          textTransform: "uppercase",
          lineHeight: 1.15,
          marginBottom: 20,
        }}
      >
        WHERE WE'RE<br />
        <span style={{ color: ORANGE }}>HEADED</span>
      </div>

      {/* Big quote-style vision statement */}
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 13,
          color: LIGHT,
          lineHeight: 1.7,
          borderLeft: `3px solid ${ORANGE}`,
          paddingLeft: 16,
          marginBottom: 28,
          fontStyle: "italic",
        }}
      >
        "To become one of the leading and most trusted solar solution providers in the Philippines — empowering every Filipino home and business with clean, reliable, and affordable solar energy."
      </div>

      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: 11,
          color: MUTED,
          lineHeight: 1.6,
        }}
      >
        We envision a Philippines where solar energy is the standard, not the exception — where every rooftop harnesses the power of the sun and every family saves on their electricity bill.
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 16, marginTop: 32 }}>
        {[
          { n: "Est.\n2016", label: "Founded" },
          { n: "9+", label: "Years" },
          { n: "100%", label: "Filipino" },
        ].map(({ n, label }) => (
          <div key={label} style={{ flex: 1, textAlign: "center" }}>
            <div
              style={{
                fontFamily: "sans-serif",
                fontWeight: 900,
                fontSize: 16,
                color: ORANGE,
                whiteSpace: "pre-line",
                lineHeight: 1.1,
              }}
            >
              {n}
            </div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: 9,
                color: MUTED,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginTop: 4,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "auto",
          borderTop: `1px solid rgba(232,84,26,0.2)`,
          paddingTop: 12,
          fontFamily: "sans-serif",
          fontSize: 9,
          color: MUTED,
          letterSpacing: "0.15em",
        }}
      >
        03 / COMPANY PROFILE
      </div>
    </div>
  </PageShell>
));
VisionPage.displayName = "VisionPage";

/* ─── PAGE 4 — Mission ─── */
const MissionPage = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref}>
    <div style={{ padding: "40px 32px", height: "100%", boxSizing: "border-box" }}>
      <Tag>Mission</Tag>

      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 22,
          color: LIGHT,
          textTransform: "uppercase",
          lineHeight: 1.15,
          marginBottom: 20,
        }}
      >
        HOW WE <span style={{ color: ORANGE }}>SERVE</span>
      </div>

      <div style={{ width: 36, height: 2, background: ORANGE, marginBottom: 20 }} />

      {[
        "Provide high-quality, affordable solar installations tailored to each client's energy needs.",
        "Offer transparent pricing and honest consultations — no hidden fees, no pushy sales.",
        "Support Filipino families in reducing their Meralco bills through reliable solar technology.",
        "Deliver end-to-end service: design, installation, net metering, and after-sales support.",
        "Promote energy independence and environmental sustainability across the Philippines.",
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, marginBottom: 14 }}>
          <div
            style={{
              minWidth: 20,
              height: 20,
              borderRadius: "50%",
              background: ORANGE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "sans-serif",
              fontWeight: 900,
              fontSize: 9,
              color: DARK,
              flexShrink: 0,
              marginTop: 1,
            }}
          >
            {i + 1}
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 11,
              color: MUTED,
              lineHeight: 1.55,
            }}
          >
            {item}
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: "auto",
          borderTop: `1px solid rgba(232,84,26,0.2)`,
          paddingTop: 12,
          fontFamily: "sans-serif",
          fontSize: 9,
          color: MUTED,
          letterSpacing: "0.15em",
        }}
      >
        04 / COMPANY PROFILE
      </div>
    </div>
  </PageShell>
));
MissionPage.displayName = "MissionPage";

/* ─── Reusable product page ─── */
type ProductPageProps = {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  pageNum: string;
};

function makeProductPage(props: ProductPageProps) {
  const C = forwardRef<HTMLDivElement>((_, ref) => (
    <PageShell ref={ref}>
      <div style={{ padding: "40px 32px", height: "100%", boxSizing: "border-box" }}>
        <Tag>{props.tag}</Tag>

        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: 22,
            color: LIGHT,
            textTransform: "uppercase",
            lineHeight: 1.1,
            marginBottom: 6,
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: 13,
            color: ORANGE,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 18,
          }}
        >
          {props.subtitle}
        </div>

        <div style={{ width: 36, height: 2, background: ORANGE, marginBottom: 18 }} />

        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 11,
            color: MUTED,
            lineHeight: 1.65,
            marginBottom: 22,
          }}
        >
          {props.description}
        </div>

        {/* Icon graphic */}
        <div
          style={{
            width: "100%",
            height: 80,
            background: `rgba(232,84,26,0.06)`,
            border: `1px solid rgba(232,84,26,0.18)`,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 22,
          }}
        >
          <svg viewBox="0 0 80 40" width={80} height={40} fill="none">
            {/* Solar panel illustration */}
            {[0, 1, 2, 3].map((col) =>
              [0, 1].map((row) => (
                <rect
                  key={`${col}-${row}`}
                  x={col * 20 + 2}
                  y={row * 18 + 4}
                  width={16}
                  height={14}
                  rx={1}
                  fill={ORANGE}
                  opacity={0.3 + (col + row) * 0.1}
                />
              ))
            )}
            <line x1={40} y1={38} x2={40} y2={40} stroke={ORANGE} strokeWidth={2} />
          </svg>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {props.bullets.map((b, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <div
                style={{
                  minWidth: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: ORANGE,
                  marginTop: 4,
                  flexShrink: 0,
                }}
              />
              <div style={{ fontFamily: "sans-serif", fontSize: 11, color: MUTED, lineHeight: 1.5 }}>
                {b}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            borderTop: `1px solid rgba(232,84,26,0.2)`,
            paddingTop: 12,
            fontFamily: "sans-serif",
            fontSize: 9,
            color: MUTED,
            letterSpacing: "0.15em",
          }}
        >
          {props.pageNum} / COMPANY PROFILE
        </div>
      </div>
    </PageShell>
  ));
  C.displayName = `ProductPage_${props.tag}`;
  return C;
}

const OffGridPage = makeProductPage({
  tag: "Products",
  title: "OFF / ON-GRID",
  subtitle: "Solar System",
  description:
    "Ideal for locations with or without a grid connection. Off-grid systems give you complete energy independence, while on-grid systems let you offset your Meralco bill with solar power.",
  bullets: [
    "Best for areas with frequent brownouts",
    "Battery backup keeps lights on 24/7",
    "Scalable from 1 kW to 100+ kW",
    "Reduces Meralco bill by up to 90%",
  ],
  pageNum: "05",
});

const NetMeteringPage = makeProductPage({
  tag: "Products",
  title: "NET METERING",
  subtitle: "Grid-Tie System",
  description:
    "Export excess solar energy back to Meralco's grid and earn bill credits. Net metering is the most cost-effective way to go solar if you already have reliable grid power.",
  bullets: [
    "Sell excess power back to the grid",
    "Earn Meralco bill credits monthly",
    "No battery required — lower upfront cost",
    "Government-backed ERC program",
  ],
  pageNum: "06",
});

const HybridPage = makeProductPage({
  tag: "Products",
  title: "HYBRID",
  subtitle: "Solar + Battery System",
  description:
    "The best of both worlds — store solar energy in batteries for nighttime and brownout use, while staying connected to the grid. Never worry about power interruptions again.",
  bullets: [
    "Solar + battery + grid connection",
    "Automatic backup during brownouts",
    "Smart energy management system",
    "Expandable battery capacity",
  ],
  pageNum: "07",
});

/* ─── PAGE 8 — Why Choose Us ─── */
const WhyUsPage = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref}>
    <div style={{ padding: "40px 32px", height: "100%", boxSizing: "border-box" }}>
      <Tag>Why Choose Us</Tag>

      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 22,
          color: LIGHT,
          textTransform: "uppercase",
          lineHeight: 1.1,
          marginBottom: 20,
        }}
      >
        THE BETELGEUSE<br />
        <span style={{ color: ORANGE }}>ADVANTAGE</span>
      </div>

      <div style={{ width: 36, height: 2, background: ORANGE, marginBottom: 20 }} />

      {[
        { icon: "⚡", title: "Fast Installation", desc: "Most systems installed in 1–3 days with minimal disruption." },
        { icon: "🇵🇭", title: "100% Filipino", desc: "Local team, local expertise. We understand Philippine conditions." },
        { icon: "📋", title: "Net Metering Experts", desc: "We handle all Meralco paperwork and ERC applications for you." },
        { icon: "🛡️", title: "25-Year Warranty", desc: "Industry-leading panel warranty for your peace of mind." },
        { icon: "💰", title: "₱50 Quotation", desc: "Get a detailed, personalized quote for just ₱50 via GCash." },
      ].map(({ icon, title, desc }) => (
        <div key={title} style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <div style={{ fontSize: 18, flexShrink: 0, marginTop: -2 }}>{icon}</div>
          <div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontWeight: 700,
                fontSize: 11,
                color: LIGHT,
                marginBottom: 2,
              }}
            >
              {title}
            </div>
            <div style={{ fontFamily: "sans-serif", fontSize: 10, color: MUTED, lineHeight: 1.5 }}>
              {desc}
            </div>
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: "auto",
          borderTop: `1px solid rgba(232,84,26,0.2)`,
          paddingTop: 12,
          fontFamily: "sans-serif",
          fontSize: 9,
          color: MUTED,
          letterSpacing: "0.15em",
        }}
      >
        08 / COMPANY PROFILE
      </div>
    </div>
  </PageShell>
));
WhyUsPage.displayName = "WhyUsPage";

/* ─── PAGE 9 — Back cover / Contact ─── */
const ContactPage = forwardRef<HTMLDivElement>((_, ref) => (
  <PageShell ref={ref}>
    <div style={{ height: 6, background: ORANGE, width: "100%" }} />

    <div
      style={{
        position: "absolute",
        bottom: "20%",
        left: "50%",
        transform: "translate(-50%, 50%)",
        width: 280,
        height: 280,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(232,84,26,0.12) 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />

    <div
      style={{
        padding: "44px 32px",
        height: "calc(100% - 6px)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Tag>Get In Touch</Tag>

      <div
        style={{
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 24,
          color: LIGHT,
          textTransform: "uppercase",
          lineHeight: 1.1,
          marginBottom: 28,
        }}
      >
        START YOUR<br />
        <span style={{ color: ORANGE }}>SOLAR JOURNEY</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {[
          { label: "Viber / Call", value: "+63 969 604 8041" },
          { label: "Email", value: "lsscorporation@\nbetelgeusesolar.com" },
          { label: "Quote Fee", value: "₱50 via GCash" },
          { label: "Turnaround", value: "Within 24 hours" },
        ].map(({ label, value }) => (
          <div key={label}>
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: 9,
                color: ORANGE,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                marginBottom: 3,
              }}
            >
              {label}
            </div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontWeight: 700,
                fontSize: 13,
                color: LIGHT,
                whiteSpace: "pre-line",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "auto" }}>
        <div style={{ width: 36, height: 2, background: ORANGE, marginBottom: 12 }} />
        <div
          style={{
            fontFamily: "sans-serif",
            fontWeight: 900,
            fontSize: 16,
            color: LIGHT,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          BETEL<span style={{ color: ORANGE }}>G</span>EUSE SOLAR
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: 9,
            color: MUTED,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            marginTop: 3,
          }}
        >
          Own Your Energy
        </div>
      </div>
    </div>
  </PageShell>
));
ContactPage.displayName = "ContactPage";

/* ══════════════════════════════════════════════
   MAIN SECTION COMPONENT
═══════════════════════════════════════════════ */
export default function FlipbookSection() {
  const bookRef = useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void; getCurrentPageIndex: () => number; getPageCount: () => number } } | null>(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(9);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onFlip = useCallback((e: { data: number }) => {
    setPage(e.data);
  }, []);

  const onInit = useCallback(() => {
    if (bookRef.current) {
      setTotalPages(bookRef.current.pageFlip().getPageCount());
    }
  }, []);

  const goNext = () => bookRef.current?.pageFlip().flipNext();
  const goPrev = () => bookRef.current?.pageFlip().flipPrev();

  return (
    <section
      id="catalog"
      style={{ background: "#111009", padding: "80px 0 100px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Section header */}
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div
              style={{
                display: "inline-block",
                background: ORANGE,
                color: DARK,
                fontFamily: "sans-serif",
                fontWeight: 900,
                fontSize: 10,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "4px 14px",
                borderRadius: 2,
                marginBottom: 16,
              }}
            >
              Company Profile
            </div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                color: LIGHT,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                marginBottom: 12,
              }}
            >
              FLIP THROUGH OUR{" "}
              <span style={{ color: ORANGE }}>CATALOG</span>
            </div>
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
                color: MUTED,
                maxWidth: 420,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Drag or click the edges to turn pages. Learn about our story, products, and how we can help you go solar.
            </div>
          </div>
        </AnimatedSection>

        {/* Flipbook */}
        <AnimatedSection delay={0.15}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 32,
            }}
          >
            {/* Book container */}
            <div
              style={{
                position: "relative",
                filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.7))",
              }}
            >
              {isClient && (
                // @ts-expect-error — react-pageflip ref typing is loose
                <HTMLFlipBook
                  ref={bookRef}
                  width={320}
                  height={450}
                  size="fixed"
                  minWidth={260}
                  maxWidth={400}
                  minHeight={360}
                  maxHeight={560}
                  showCover={true}
                  mobileScrollSupport={true}
                  onFlip={onFlip}
                  onInit={onInit}
                  style={{ margin: "0 auto" }}
                  startPage={0}
                  drawShadow={true}
                  flippingTime={700}
                  usePortrait={false}
                  startZIndex={0}
                  autoSize={false}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={30}
                  showPageCorners={true}
                  disableFlipByClick={false}
                  className=""
                >
                  <CoverPage />
                  <StoryPage />
                  <VisionPage />
                  <MissionPage />
                  <OffGridPage />
                  <NetMeteringPage />
                  <HybridPage />
                  <WhyUsPage />
                  <ContactPage />
                </HTMLFlipBook>
              )}
            </div>

            {/* Controls */}
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <button
                onClick={goPrev}
                disabled={page === 0}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: `1px solid ${page === 0 ? "rgba(232,84,26,0.2)" : ORANGE}`,
                  background: "transparent",
                  color: page === 0 ? "rgba(232,84,26,0.3)" : ORANGE,
                  cursor: page === 0 ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  transition: "all 0.2s",
                }}
                aria-label="Previous page"
              >
                ‹
              </button>

              <div
                style={{
                  fontFamily: "sans-serif",
                  fontSize: 12,
                  color: MUTED,
                  letterSpacing: "0.15em",
                  minWidth: 80,
                  textAlign: "center",
                }}
              >
                {page + 1} / {totalPages}
              </div>

              <button
                onClick={goNext}
                disabled={page >= totalPages - 1}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: `1px solid ${page >= totalPages - 1 ? "rgba(232,84,26,0.2)" : ORANGE}`,
                  background: "transparent",
                  color: page >= totalPages - 1 ? "rgba(232,84,26,0.3)" : ORANGE,
                  cursor: page >= totalPages - 1 ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  transition: "all 0.2s",
                }}
                aria-label="Next page"
              >
                ›
              </button>
            </div>

            {/* Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "sans-serif",
                fontSize: 10,
                color: "rgba(122,117,114,0.6)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              ← Drag or click page edges to flip →
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
