"use client";

import { useRef, useState, forwardRef, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const flipWords = ["ENERGY", "SAVINGS", "YOUR HOME", "YOUR FUTURE", "POWER"];
import AnimatedSection from "./AnimatedSection";

/* ─── Dynamic import — react-pageflip uses browser DOM APIs ─── */
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

/* ─── Brand tokens ─── */
const O  = "#E8541A";   // orange
const D  = "#1A1917";   // dark background
const L  = "#F7F4F0";   // light / white-star
const M  = "#7A7572";   // muted gray
const C  = "#24211E";   // card bg
const C2 = "#111009";   // section bg

/* ─── Tiny helpers ─── */
function Tag({ children }: { children: string }) {
  return (
    <span style={{ display:"inline-block", background:O, color:D, fontFamily:"sans-serif",
      fontWeight:900, fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase",
      padding:"3px 10px", borderRadius:2, marginBottom:12 }}>
      {children}
    </span>
  );
}

function Divider() {
  return <div style={{ width:36, height:2, background:O, marginBottom:18 }} />;
}

function PageNum({ n, total }: { n: number; total: number }) {
  return (
    <div style={{ marginTop:"auto", borderTop:`1px solid rgba(232,84,26,0.2)`,
      paddingTop:10, fontFamily:"sans-serif", fontSize:9, color:M, letterSpacing:"0.15em" }}>
      {String(n).padStart(2,"0")} / {String(total).padStart(2,"0")}  ·  BETELGEUSE SOLAR
    </div>
  );
}

const TOTAL = 17;

/* ─── Shared page shell ─── */
const Shell = forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => (
  <div ref={ref} style={{ background:D, width:"100%", height:"100%", overflow:"hidden",
    boxSizing:"border-box", position:"relative", userSelect:"none" }}>
    {children}
  </div>
));
Shell.displayName = "Shell";

/* ══════ PAGE 1 — HERO (OWN YOUR ENERGY) ══════ */
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
      {/* Solar-grid background */}
      <div style={{ position:"absolute", inset:0, opacity:0.06,
        backgroundImage:`linear-gradient(rgba(232,84,26,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,84,26,0.8) 1px, transparent 1px)`,
        backgroundSize:"22px 22px", pointerEvents:"none" }} />

      {/* Glow orb */}
      <div style={{ position:"absolute", top:"-20%", left:"-20%", width:"90%", height:"90%",
        borderRadius:"50%",
        background:"radial-gradient(circle, rgba(232,84,26,0.13) 0%, transparent 65%)",
        pointerEvents:"none" }} />

      <div style={{ padding:"32px 26px", height:"100%", boxSizing:"border-box",
        display:"flex", flexDirection:"column", alignItems:"center",
        justifyContent:"center", textAlign:"center", position:"relative" }}>

        {/* Logo mark */}
        <svg viewBox="0 0 100 100" width={40} height={40} style={{ marginBottom:14 }}>
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

        {/* OWN YOUR */}
        <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:30,
          color:L, textTransform:"uppercase", letterSpacing:"-0.02em",
          lineHeight:1, marginBottom:4, whiteSpace:"nowrap" }}>
          OWN YOUR
        </div>

        {/* Split-flap word */}
        <div style={{ position:"relative", display:"inline-block",
          background:"rgba(232,84,26,0.08)", border:`1px solid rgba(232,84,26,0.28)`,
          borderRadius:5, padding:"0 10px", marginBottom:18 }}>
          {/* Centre divider */}
          <span aria-hidden="true" style={{ position:"absolute", left:0, right:0,
            top:"50%", height:"1.5px", background:"rgba(232,84,26,0.45)",
            zIndex:5, transform:"translateY(-50%)", pointerEvents:"none" }} />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ rotateX:-90, opacity:0 }}
              animate={{ rotateX:0, opacity:1 }}
              exit={{ rotateX:90, opacity:0 }}
              transition={{ duration:0.26, ease:[0.4, 0, 0.2, 1] }}
              style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:30,
                color:O, textTransform:"uppercase", letterSpacing:"-0.02em",
                lineHeight:1.1, display:"block", whiteSpace:"nowrap",
                transformOrigin:"center center", backfaceVisibility:"hidden" }}
            >
              {flipWords[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Wordmark */}
        <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:13,
          color:L, textTransform:"uppercase", letterSpacing:"0.1em",
          marginBottom:2 }}>
          BETEL<span style={{ color:O }}>G</span>EUSE
        </div>
        <div style={{ fontFamily:"sans-serif", fontSize:8, letterSpacing:"0.4em",
          color:M, textTransform:"uppercase", marginBottom:18 }}>SOLAR</div>

        {/* Subline */}
        <div style={{ fontFamily:"sans-serif", fontSize:11, color:M,
          lineHeight:1.65, maxWidth:210, marginBottom:22 }}>
          Cut your Meralco bill. Power through brownouts.
          <br />Go solar with Betelgeuse.
        </div>

        {/* CTAs */}
        <div style={{ display:"flex", flexDirection:"column", gap:8, width:"100%", maxWidth:220 }}>
          <a href="#contact" style={{ background:O, color:D, fontFamily:"sans-serif",
            fontWeight:900, fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase",
            padding:"10px 0", textDecoration:"none", textAlign:"center",
            display:"block" }}>
            GET A QUOTE · ₱50
          </a>
          <a href="#products" style={{ border:`1px solid rgba(232,84,26,0.35)`,
            color:L, fontFamily:"sans-serif", fontWeight:700, fontSize:9,
            letterSpacing:"0.2em", textTransform:"uppercase",
            padding:"9px 0", textDecoration:"none", textAlign:"center",
            display:"block" }}>
            OUR SYSTEMS
          </a>
        </div>

        {/* Bottom hint */}
        <div style={{ position:"absolute", bottom:16, fontFamily:"sans-serif",
          fontSize:8, color:M, letterSpacing:"0.18em", textTransform:"uppercase" }}>
          Flip to explore →
        </div>

        {/* Bottom orange line */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:3,
          background:`linear-gradient(to right, transparent, ${O}, transparent)`,
          opacity:0.5 }} />
      </div>
    </Shell>
  );
});
P1Hero.displayName = "P1Hero";

/* ══════ PAGE 2 — STATS ══════ */
const P2Stats = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
      display:"flex", flexDirection:"column" }}>
      <Tag>By The Numbers</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:22, color:L,
        textTransform:"uppercase", lineHeight:1.1, marginBottom:8 }}>
        OUR <span style={{ color:O }}>IMPACT</span>
      </div>
      <Divider />
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:24 }}>
        {[
          { val:"120 KW",  label:"Installed Capacity" },
          { val:"90%",     label:"Efficiency Rate" },
          { val:"50+",     label:"Homes Powered" },
          { val:"3–5 yr",  label:"Average ROI Period" },
          { val:"₱50",     label:"Quote Fee" },
          { val:"24 hrs",  label:"Quote Turnaround" },
        ].map(({ val, label }) => (
          <div key={label} style={{ background:"rgba(232,84,26,0.06)",
            border:"1px solid rgba(232,84,26,0.15)", borderRadius:6,
            padding:"16px 12px", textAlign:"center" }}>
            <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:22,
              color:O, lineHeight:1 }}>{val}</div>
            <div style={{ fontFamily:"sans-serif", fontSize:9, color:M,
              textTransform:"uppercase", letterSpacing:"0.15em", marginTop:6 }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily:"sans-serif", fontSize:11, color:M, lineHeight:1.6 }}>
        Since founding in 2016, we have helped Filipino families and businesses harness the power of the sun — reducing electricity bills and building energy independence.
      </div>
      <PageNum n={2} total={TOTAL} />
    </div>
  </Shell>
));
P2Stats.displayName = "P2Stats";

/* ══════ PAGE 3 — OUR STORY ══════ */
const P3Story = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
      display:"flex", flexDirection:"column" }}>
      <Tag>Our Story</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
        textTransform:"uppercase", lineHeight:1.1, marginBottom:8 }}>
        LSS DEVELOPMENT<br /><span style={{ color:O }}>CORPORATION</span>
      </div>
      <Divider />
      {[
        { year:"2016", text:"Founded as Blitzkrieg Electrical Services — providing electrical contracting solutions across the Philippines." },
        { year:"2020", text:"Pivoted to renewable energy, launching Betelgeuse Solar as the company's flagship solar brand." },
        { year:"2024", text:"Expanded to full-service solar installation: residential, commercial, and government projects nationwide." },
        { year:"2026", text:"Serving hundreds of Filipino families and businesses with clean, affordable solar power." },
      ].map(({ year, text }) => (
        <div key={year} style={{ display:"flex", gap:12, marginBottom:16 }}>
          <div style={{ minWidth:36, fontFamily:"sans-serif", fontWeight:900,
            fontSize:11, color:O, paddingTop:2 }}>{year}</div>
          <div style={{ fontFamily:"sans-serif", fontSize:11, color:M, lineHeight:1.55 }}>{text}</div>
        </div>
      ))}
      <div style={{ background:"rgba(232,84,26,0.06)", border:`1px solid rgba(232,84,26,0.2)`,
        borderRadius:6, padding:"12px 14px", marginTop:8 }}>
        <div style={{ fontFamily:"sans-serif", fontSize:10, color:O, fontWeight:700,
          textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:4 }}>
          100% Filipino-Owned
        </div>
        <div style={{ fontFamily:"sans-serif", fontSize:10, color:M, lineHeight:1.5 }}>
          Built by Filipinos, for Filipinos. We understand local conditions, Meralco regulations, and the challenges of Philippine weather.
        </div>
      </div>
      <PageNum n={3} total={TOTAL} />
    </div>
  </Shell>
));
P3Story.displayName = "P3Story";

/* ══════ PAGE 4 — VISION ══════ */
const P4Vision = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ position:"absolute", left:0, top:0, bottom:0, width:4,
      background:`linear-gradient(to bottom, ${O}, transparent)` }} />
    <div style={{ padding:"40px 32px 40px 40px", height:"100%",
      boxSizing:"border-box", display:"flex", flexDirection:"column" }}>
      <Tag>Vision</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
        textTransform:"uppercase", lineHeight:1.15, marginBottom:18 }}>
        WHERE WE'RE <span style={{ color:O }}>HEADED</span>
      </div>
      <div style={{ fontFamily:"sans-serif", fontSize:13, color:L, lineHeight:1.75,
        borderLeft:`3px solid ${O}`, paddingLeft:16, marginBottom:24, fontStyle:"italic" }}>
        "To become one of the leading and most trusted solar solution providers in the Philippines — empowering every Filipino home and business with clean, reliable, and affordable solar energy."
      </div>
      <div style={{ fontFamily:"sans-serif", fontSize:11, color:M, lineHeight:1.65, marginBottom:24 }}>
        We envision a Philippines where solar energy is the standard, not the exception — where every rooftop harnesses the power of the sun and every family saves on their electricity bill.
      </div>
      <div style={{ display:"flex", gap:14 }}>
        {[["Est.\n2016","Founded"],["9+","Years"],["100%","Filipino"]].map(([n,label]) => (
          <div key={label} style={{ flex:1, textAlign:"center",
            background:"rgba(232,84,26,0.06)", border:"1px solid rgba(232,84,26,0.15)",
            borderRadius:6, padding:"12px 8px" }}>
            <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:15, color:O,
              whiteSpace:"pre-line", lineHeight:1.1 }}>{n}</div>
            <div style={{ fontFamily:"sans-serif", fontSize:9, color:M,
              textTransform:"uppercase", letterSpacing:"0.2em", marginTop:5 }}>{label}</div>
          </div>
        ))}
      </div>
      <PageNum n={4} total={TOTAL} />
    </div>
  </Shell>
));
P4Vision.displayName = "P4Vision";

/* ══════ PAGE 5 — MISSION ══════ */
const P5Mission = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
      display:"flex", flexDirection:"column" }}>
      <Tag>Mission</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
        textTransform:"uppercase", lineHeight:1.1, marginBottom:8 }}>
        HOW WE <span style={{ color:O }}>SERVE</span>
      </div>
      <Divider />
      {[
        "Provide high-quality, affordable solar installations tailored to each client's energy needs.",
        "Offer transparent pricing and honest consultations — no hidden fees, no pushy sales.",
        "Support Filipino families in reducing their Meralco bills through reliable solar technology.",
        "Deliver end-to-end service: design, installation, net metering, and after-sales support.",
        "Promote energy independence and environmental sustainability across the Philippines.",
      ].map((item, i) => (
        <div key={i} style={{ display:"flex", gap:10, marginBottom:13 }}>
          <div style={{ minWidth:20, height:20, borderRadius:"50%", background:O,
            display:"flex", alignItems:"center", justifyContent:"center",
            fontFamily:"sans-serif", fontWeight:900, fontSize:9, color:D,
            flexShrink:0, marginTop:1 }}>{i+1}</div>
          <div style={{ fontFamily:"sans-serif", fontSize:11, color:M, lineHeight:1.55 }}>{item}</div>
        </div>
      ))}
      <PageNum n={5} total={TOTAL} />
    </div>
  </Shell>
));
P5Mission.displayName = "P5Mission";

/* ══════ PAGE 6 — HOW IT WORKS 1/2 ══════ */
const P6HowA = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
      display:"flex", flexDirection:"column" }}>
      <Tag>How It Works</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
        textTransform:"uppercase", lineHeight:1.1, marginBottom:8 }}>
        THE PROCESS <span style={{ color:O }}>(1/2)</span>
      </div>
      <Divider />
      {[
        { num:"01", title:"Assess", sub:"Site & Energy Analysis",
          desc:"We deploy remote sensing data combined with an on-site audit to model your solar potential. Shading analysis, roof load calculations, and 30-year yield projections are completed before a single panel is specified." },
        { num:"02", title:"Design", sub:"Engineering & Permitting",
          desc:"Our in-house structural and electrical engineers design a system optimized for your specific site. Full permit packages are submitted to your local authority — we handle all coordination, approvals, and utility interconnection agreements." },
      ].map(({ num, title, sub, desc }) => (
        <div key={num} style={{ marginBottom:22 }}>
          <div style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:6 }}>
            <div style={{ minWidth:36, height:36, border:`1px solid rgba(232,84,26,0.35)`,
              background:"rgba(232,84,26,0.06)", display:"flex", alignItems:"center",
              justifyContent:"center", fontFamily:"sans-serif", fontWeight:900,
              fontSize:11, color:O, flexShrink:0 }}>{num}</div>
            <div>
              <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:14,
                color:L, textTransform:"uppercase", letterSpacing:"0.05em" }}>{title}</div>
              <div style={{ fontFamily:"sans-serif", fontSize:9, color:O,
                textTransform:"uppercase", letterSpacing:"0.2em" }}>{sub}</div>
            </div>
          </div>
          <div style={{ fontFamily:"sans-serif", fontSize:11, color:M, lineHeight:1.6,
            paddingLeft:48 }}>{desc}</div>
        </div>
      ))}
      <PageNum n={6} total={TOTAL} />
    </div>
  </Shell>
));
P6HowA.displayName = "P6HowA";

/* ══════ PAGE 7 — HOW IT WORKS 2/2 ══════ */
const P7HowB = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
      display:"flex", flexDirection:"column" }}>
      <Tag>How It Works</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
        textTransform:"uppercase", lineHeight:1.1, marginBottom:8 }}>
        THE PROCESS <span style={{ color:O }}>(2/2)</span>
      </div>
      <Divider />
      {[
        { num:"03", title:"Install", sub:"Precision Deployment",
          desc:"BETELGEUSE-certified installation crews complete most residential systems in 1–2 days. We use proprietary low-profile racking systems and manage every detail from roof penetration sealing to final commissioning tests." },
        { num:"04", title:"Monitor", sub:"Lifetime Performance Intelligence",
          desc:"BETELGEUSE Connect, our monitoring platform, tracks production in real time at the panel level. Predictive maintenance algorithms alert our service team before performance degradation impacts your yield." },
      ].map(({ num, title, sub, desc }) => (
        <div key={num} style={{ marginBottom:22 }}>
          <div style={{ display:"flex", gap:12, alignItems:"flex-start", marginBottom:6 }}>
            <div style={{ minWidth:36, height:36, border:`1px solid rgba(232,84,26,0.35)`,
              background:"rgba(232,84,26,0.06)", display:"flex", alignItems:"center",
              justifyContent:"center", fontFamily:"sans-serif", fontWeight:900,
              fontSize:11, color:O, flexShrink:0 }}>{num}</div>
            <div>
              <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:14,
                color:L, textTransform:"uppercase", letterSpacing:"0.05em" }}>{title}</div>
              <div style={{ fontFamily:"sans-serif", fontSize:9, color:O,
                textTransform:"uppercase", letterSpacing:"0.2em" }}>{sub}</div>
            </div>
          </div>
          <div style={{ fontFamily:"sans-serif", fontSize:11, color:M, lineHeight:1.6,
            paddingLeft:48 }}>{desc}</div>
        </div>
      ))}
      <div style={{ background:"rgba(232,84,26,0.06)", border:`1px solid rgba(232,84,26,0.2)`,
        borderRadius:6, padding:"12px 14px" }}>
        <div style={{ fontFamily:"sans-serif", fontSize:10, color:O, fontWeight:700,
          letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:4 }}>
          BETELGEUSE Connect
        </div>
        <div style={{ fontFamily:"sans-serif", fontSize:10, color:M, lineHeight:1.5 }}>
          Free 2-year real-time panel monitoring app included with every installation.
        </div>
      </div>
      <PageNum n={7} total={TOTAL} />
    </div>
  </Shell>
));
P7HowB.displayName = "P7HowB";

/* ══════ PAGES 8–10 — PRODUCTS ══════ */
type ProdProps = { title: string; sub: string; desc: string; bullets: string[]; n: number };

function makeProd({ title, sub, desc, bullets, n }: ProdProps) {
  const C2 = forwardRef<HTMLDivElement>((_, ref) => (
    <Shell ref={ref}>
      <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
        display:"flex", flexDirection:"column" }}>
        <Tag>Products</Tag>
        <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
          textTransform:"uppercase", lineHeight:1.1, marginBottom:4 }}>{title}</div>
        <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:11, color:O,
          textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:16 }}>{sub}</div>
        <Divider />
        <div style={{ fontFamily:"sans-serif", fontSize:11, color:M, lineHeight:1.65,
          marginBottom:20 }}>{desc}</div>
        {/* Solar panel icon */}
        <div style={{ width:"100%", height:68, background:"rgba(232,84,26,0.06)",
          border:"1px solid rgba(232,84,26,0.18)", borderRadius:8, display:"flex",
          alignItems:"center", justifyContent:"center", marginBottom:20 }}>
          <svg viewBox="0 0 88 44" width={88} height={44} fill="none">
            {[0,1,2,3].map(col => [0,1].map(row => (
              <rect key={`${col}-${row}`} x={col*22+2} y={row*20+2} width={18} height={16}
                rx={1} fill={O} opacity={0.25 + (col+row)*0.12} />
            )))}
          </svg>
        </div>
        {bullets.map((b, i) => (
          <div key={i} style={{ display:"flex", gap:8, alignItems:"flex-start", marginBottom:10 }}>
            <div style={{ minWidth:6, height:6, borderRadius:"50%", background:O,
              marginTop:4, flexShrink:0 }} />
            <div style={{ fontFamily:"sans-serif", fontSize:11, color:M, lineHeight:1.5 }}>{b}</div>
          </div>
        ))}
        <PageNum n={n} total={TOTAL} />
      </div>
    </Shell>
  ));
  C2.displayName = `Prod_${n}`;
  return C2;
}

const P8OffGrid = makeProd({
  title:"OFF / ON-GRID", sub:"Solar System", n:8,
  desc:"Ideal for locations with or without a grid connection. Off-grid gives complete energy independence; on-grid offsets your Meralco bill with solar power.",
  bullets:["Best for areas with frequent brownouts","Battery backup keeps lights on 24/7","Scalable from 1 kW to 100+ kW","Reduces Meralco bill by up to 90%"],
});

const P9NetMeter = makeProd({
  title:"NET METERING", sub:"Grid-Tie System", n:9,
  desc:"Export excess solar energy back to Meralco's grid and earn bill credits. The most cost-effective way to go solar if you already have reliable grid power.",
  bullets:["Sell excess power back to the grid","Earn Meralco bill credits monthly","No battery required — lower upfront cost","Government-backed ERC program"],
});

const P10Hybrid = makeProd({
  title:"HYBRID", sub:"Solar + Battery System", n:10,
  desc:"The best of both worlds — store solar energy in batteries for nighttime and brownout use, while staying connected to the grid. Never worry about power interruptions again.",
  bullets:["Solar + battery + grid connection","Automatic backup during brownouts","Smart energy management system","Expandable battery capacity"],
});

/* ══════ PAGE 11 — SERVICES 1/2 ══════ */
const P11ServA = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
      display:"flex", flexDirection:"column" }}>
      <Tag>Services</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
        textTransform:"uppercase", lineHeight:1.1, marginBottom:8 }}>
        WHAT WE <span style={{ color:O }}>OFFER (1/2)</span>
      </div>
      <Divider />
      {[
        { num:"01", title:"Site Assessment",
          desc:"Certified engineers inspect your roof, electrical panel, shading, and provide a 25-year yield projection before any system is specified." },
        { num:"02", title:"System Design & Engineering",
          desc:"Custom solar layout tailored to your energy consumption. Structural, electrical, and single-line diagrams plus all permit documentation included." },
        { num:"03", title:"Professional Installation",
          desc:"BETELGEUSE-certified crews complete most residential installations within 1–2 days. Low-profile racking and weatherproof sealing included." },
      ].map(({ num, title, desc }) => (
        <div key={num} style={{ display:"flex", gap:12, marginBottom:18 }}>
          <div style={{ minWidth:28, height:28, background:O, display:"flex",
            alignItems:"center", justifyContent:"center", fontFamily:"sans-serif",
            fontWeight:900, fontSize:10, color:D, flexShrink:0, marginTop:1 }}>{num}</div>
          <div>
            <div style={{ fontFamily:"sans-serif", fontWeight:700, fontSize:12,
              color:L, marginBottom:4 }}>{title}</div>
            <div style={{ fontFamily:"sans-serif", fontSize:10, color:M, lineHeight:1.6 }}>{desc}</div>
          </div>
        </div>
      ))}
      <PageNum n={11} total={TOTAL} />
    </div>
  </Shell>
));
P11ServA.displayName = "P11ServA";

/* ══════ PAGE 12 — SERVICES 2/2 ══════ */
const P12ServB = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
      display:"flex", flexDirection:"column" }}>
      <Tag>Services</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
        textTransform:"uppercase", lineHeight:1.1, marginBottom:8 }}>
        WHAT WE <span style={{ color:O }}>OFFER (2/2)</span>
      </div>
      <Divider />
      {[
        { num:"04", title:"Net Metering Application",
          desc:"We process your complete net metering application with Meralco — from interconnection forms to inspection scheduling. Zero paperwork on your end." },
        { num:"05", title:"System Monitoring",
          desc:"Real-time panel-level monitoring via BETELGEUSE Connect app. Alerts for underperformance and predictive maintenance — free for 2 years." },
        { num:"06", title:"After-Sales & Maintenance",
          desc:"Annual preventive maintenance visits, panel cleaning, connection checks, and firmware updates. Extended service plans available." },
      ].map(({ num, title, desc }) => (
        <div key={num} style={{ display:"flex", gap:12, marginBottom:18 }}>
          <div style={{ minWidth:28, height:28, background:O, display:"flex",
            alignItems:"center", justifyContent:"center", fontFamily:"sans-serif",
            fontWeight:900, fontSize:10, color:D, flexShrink:0, marginTop:1 }}>{num}</div>
          <div>
            <div style={{ fontFamily:"sans-serif", fontWeight:700, fontSize:12,
              color:L, marginBottom:4 }}>{title}</div>
            <div style={{ fontFamily:"sans-serif", fontSize:10, color:M, lineHeight:1.6 }}>{desc}</div>
          </div>
        </div>
      ))}
      {/* Quotation callout */}
      <div style={{ background:"rgba(232,84,26,0.08)", border:`1px solid rgba(232,84,26,0.3)`,
        borderRadius:6, padding:"14px", textAlign:"center" }}>
        <div style={{ fontFamily:"sans-serif", fontSize:9, color:M,
          textTransform:"uppercase", letterSpacing:"0.2em", marginBottom:4 }}>
          Quotation Request Fee
        </div>
        <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:32, color:O, lineHeight:1 }}>₱50</div>
        <div style={{ fontFamily:"sans-serif", fontSize:10, color:M, marginTop:4 }}>
          via GCash · 0969 604 8041
        </div>
      </div>
      <PageNum n={12} total={TOTAL} />
    </div>
  </Shell>
));
P12ServB.displayName = "P12ServB";

/* ══════ PAGES 13–15 — TESTIMONIALS ══════ */
type TestimonialProps = {
  system: string; quote: string; name: string; role: string; location: string; n: number;
};

function makeTestimonial({ system, quote, name, role, location, n }: TestimonialProps) {
  const C3 = forwardRef<HTMLDivElement>((_, ref) => (
    <Shell ref={ref}>
      <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
        display:"flex", flexDirection:"column" }}>
        <Tag>Client Stories</Tag>
        <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
          textTransform:"uppercase", lineHeight:1.1, marginBottom:4 }}>
          WHAT THEY <span style={{ color:O }}>SAY</span>
        </div>
        {/* System badge */}
        <div style={{ display:"inline-block", border:`1px solid rgba(232,84,26,0.35)`,
          background:"rgba(232,84,26,0.08)", padding:"3px 10px", fontFamily:"sans-serif",
          fontWeight:700, fontSize:9, color:O, textTransform:"uppercase",
          letterSpacing:"0.2em", marginBottom:20 }}>{system}</div>
        {/* Big quote mark */}
        <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:64, color:O,
          lineHeight:0.8, opacity:0.45, marginBottom:8, userSelect:"none" }}>"</div>
        {/* Quote */}
        <div style={{ fontFamily:"sans-serif", fontSize:12, color:L, lineHeight:1.75,
          marginBottom:24, fontStyle:"italic", flex:1 }}>{quote}</div>
        {/* Stars */}
        <div style={{ display:"flex", gap:3, marginBottom:12 }}>
          {[1,2,3,4,5].map(s => (
            <svg key={s} width="13" height="13" viewBox="0 0 14 14" fill={O}>
              <path d="M7 0.5L8.85 5.07L13.76 5.44L10.06 8.63L11.26 13.36L7 10.77L2.74 13.36L3.94 8.63L0.24 5.44L5.15 5.07L7 0.5Z" />
            </svg>
          ))}
        </div>
        {/* Author */}
        <div style={{ borderTop:`1px solid rgba(232,84,26,0.2)`, paddingTop:12 }}>
          <div style={{ fontFamily:"sans-serif", fontWeight:700, fontSize:12,
            color:L, marginBottom:3 }}>{name}</div>
          <div style={{ fontFamily:"sans-serif", fontSize:10, color:M }}>{role}</div>
          <div style={{ fontFamily:"sans-serif", fontSize:10, color:M, marginTop:2 }}>{location}</div>
        </div>
        <PageNum n={n} total={TOTAL} />
      </div>
    </Shell>
  ));
  C3.displayName = `Testimonial_${n}`;
  return C3;
}

const P13Testi1 = makeTestimonial({
  system:"Hybrid System", n:13,
  quote:"Our Meralco bill used to hit ₱8,000 a month. After Betelgeuse installed our hybrid system, it dropped to under ₱800. And during the last brownout in our area, our house was the only one with lights on. Best decision we ever made.",
  name:"Syra Mae Escudero", role:"PRULIFE Assistant Unit Manager", location:"Alfonso, Cavite",
});

const P14Testi2 = makeTestimonial({
  system:"Net Metering", n:14,
  quote:"The net metering setup was completely seamless. The Betelgeuse team handled all the Meralco paperwork and scheduling — I didn't lift a finger. Now my meter literally runs backwards every sunny day and my bill is almost zero.",
  name:"Rochie Solomon", role:"Head of DI33", location:"Muntinlupa, Metro Manila",
});

const P15Testi3 = makeTestimonial({
  system:"On-Grid System", n:15,
  quote:"I'm always travelling for work so I needed something reliable with remote monitoring. Betelgeuse installed an on-grid system and I can check my production data from anywhere in the world. The installation was done in two days — clean and professional.",
  name:"Danielle De Borja", role:"Independent Pilot", location:"Pacita, Biñan",
});

/* ══════ PAGE 16 — WHY CHOOSE US ══════ */
const P16WhyUs = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ padding:"40px 32px", height:"100%", boxSizing:"border-box",
      display:"flex", flexDirection:"column" }}>
      <Tag>Why Choose Us</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:20, color:L,
        textTransform:"uppercase", lineHeight:1.1, marginBottom:8 }}>
        THE BETELGEUSE <span style={{ color:O }}>ADVANTAGE</span>
      </div>
      <Divider />
      {[
        { icon:"⚡", title:"Fast Installation", desc:"Most systems installed in 1–3 days with minimal disruption to your daily life." },
        { icon:"🇵🇭", title:"100% Filipino", desc:"Local team, local expertise. We understand Philippine conditions and Meralco rules." },
        { icon:"📋", title:"Net Metering Experts", desc:"We handle all Meralco paperwork and ERC applications for you — stress-free." },
        { icon:"🛡️", title:"25-Year Warranty", desc:"Industry-leading panel warranty and 10-year inverter warranty for peace of mind." },
        { icon:"💰", title:"₱50 Quotation", desc:"Get a detailed, personalized quote for just ₱50 via GCash — response in 24 hours." },
      ].map(({ icon, title, desc }) => (
        <div key={title} style={{ display:"flex", gap:12, marginBottom:14 }}>
          <div style={{ fontSize:16, flexShrink:0, marginTop:-1 }}>{icon}</div>
          <div>
            <div style={{ fontFamily:"sans-serif", fontWeight:700, fontSize:11,
              color:L, marginBottom:2 }}>{title}</div>
            <div style={{ fontFamily:"sans-serif", fontSize:10, color:M, lineHeight:1.55 }}>{desc}</div>
          </div>
        </div>
      ))}
      <PageNum n={16} total={TOTAL} />
    </div>
  </Shell>
));
P16WhyUs.displayName = "P16WhyUs";

/* ══════ PAGE 17 — CONTACT / BACK COVER ══════ */
const P17Contact = forwardRef<HTMLDivElement>((_, ref) => (
  <Shell ref={ref}>
    <div style={{ height:6, background:O }} />
    <div style={{ position:"absolute", bottom:"15%", left:"50%",
      transform:"translate(-50%,50%)", width:260, height:260, borderRadius:"50%",
      background:`radial-gradient(circle, rgba(232,84,26,0.14) 0%, transparent 70%)`,
      pointerEvents:"none" }} />
    <div style={{ padding:"44px 32px", height:"calc(100% - 6px)",
      boxSizing:"border-box", display:"flex", flexDirection:"column", position:"relative" }}>
      <Tag>Get In Touch</Tag>
      <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:22, color:L,
        textTransform:"uppercase", lineHeight:1.1, marginBottom:28 }}>
        START YOUR<br /><span style={{ color:O }}>SOLAR JOURNEY</span>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
        {[
          { label:"Viber / Call", value:"+63 969 604 8041" },
          { label:"Email", value:"lsscorporation@\nbetelgeusesolar.com" },
          { label:"Quote Fee", value:"₱50 via GCash" },
          { label:"Response Time", value:"Within 24 hours" },
        ].map(({ label, value }) => (
          <div key={label}>
            <div style={{ fontFamily:"sans-serif", fontSize:9, color:O,
              textTransform:"uppercase", letterSpacing:"0.25em", marginBottom:3 }}>{label}</div>
            <div style={{ fontFamily:"sans-serif", fontWeight:700, fontSize:13,
              color:L, whiteSpace:"pre-line" }}>{value}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:"auto" }}>
        <div style={{ width:36, height:2, background:O, marginBottom:12 }} />
        <div style={{ fontFamily:"sans-serif", fontWeight:900, fontSize:16, color:L,
          textTransform:"uppercase", letterSpacing:"0.08em" }}>
          BETEL<span style={{ color:O }}>G</span>EUSE SOLAR
        </div>
        <div style={{ fontFamily:"sans-serif", fontSize:9, color:M,
          letterSpacing:"0.35em", textTransform:"uppercase", marginTop:3 }}>
          Own Your Energy
        </div>
      </div>
    </div>
  </Shell>
));
P17Contact.displayName = "P17Contact";

/* ══════════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════════ */
export default function FlipbookSection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bookRef = useRef<any>(null);
  const [page, setPage] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  const onFlip = useCallback((e: { data: number }) => { setPage(e.data); }, []);

  const goNext = () => bookRef.current?.pageFlip().flipNext();
  const goPrev = () => bookRef.current?.pageFlip().flipPrev();

  const atStart = page === 0;
  const atEnd   = page >= TOTAL - 1;

  return (
    <section id="catalog" style={{ background:C2, padding:"80px 0 100px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px" }}>

        {/* Header */}
        <AnimatedSection>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <div style={{ display:"inline-block", background:O, color:D, fontFamily:"sans-serif",
              fontWeight:900, fontSize:10, letterSpacing:"0.25em", textTransform:"uppercase",
              padding:"4px 14px", borderRadius:2, marginBottom:14 }}>
              Digital Brochure
            </div>
            <div style={{ fontFamily:"sans-serif", fontWeight:900,
              fontSize:"clamp(1.8rem, 4vw, 3rem)", color:L, textTransform:"uppercase",
              letterSpacing:"-0.02em", lineHeight:1.05, marginBottom:10 }}>
              FLIP THROUGH OUR{" "}<span style={{ color:O }}>FULL CATALOG</span>
            </div>
            <div style={{ fontFamily:"sans-serif", fontSize:14, color:M,
              maxWidth:460, margin:"0 auto", lineHeight:1.6 }}>
              Our story, products, services, testimonials, and contact — all in one interactive flipbook. Drag or click the page edges to turn.
            </div>
          </div>
        </AnimatedSection>

        {/* Flipbook + controls */}
        <AnimatedSection delay={0.15}>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:28 }}>

            {/* Book */}
            <div style={{ filter:"drop-shadow(0 32px 64px rgba(0,0,0,0.75))", position:"relative" }}>
              {isClient && (
                <HTMLFlipBook
                  ref={bookRef}
                  width={310}
                  height={438}
                  size="fixed"
                  minWidth={240}
                  maxWidth={400}
                  minHeight={340}
                  maxHeight={560}
                  showCover={true}
                  mobileScrollSupport={true}
                  onFlip={onFlip}
                  style={{ margin:"0 auto" }}
                  startPage={0}
                  drawShadow={true}
                  flippingTime={650}
                  usePortrait={false}
                  startZIndex={0}
                  autoSize={false}
                  clickEventForward={true}
                  useMouseEvents={true}
                  swipeDistance={25}
                  showPageCorners={true}
                  disableFlipByClick={false}
                  maxShadowOpacity={0.5}
                  className=""
                >
                  <P1Hero />
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
                  <P17Contact />
                </HTMLFlipBook>
              )}
            </div>

            {/* Navigation */}
            <div style={{ display:"flex", alignItems:"center", gap:20 }}>
              <button onClick={goPrev} disabled={atStart} aria-label="Previous page"
                style={{ width:44, height:44, borderRadius:"50%",
                  border:`1px solid ${atStart ? "rgba(232,84,26,0.2)" : O}`,
                  background:"transparent",
                  color:atStart ? "rgba(232,84,26,0.3)" : O,
                  cursor:atStart ? "not-allowed" : "pointer",
                  fontSize:20, display:"flex", alignItems:"center", justifyContent:"center",
                  transition:"all 0.2s" }}>‹</button>

              <div style={{ fontFamily:"sans-serif", fontSize:12, color:M,
                letterSpacing:"0.15em", minWidth:72, textAlign:"center" }}>
                {page + 1} / {TOTAL}
              </div>

              <button onClick={goNext} disabled={atEnd} aria-label="Next page"
                style={{ width:44, height:44, borderRadius:"50%",
                  border:`1px solid ${atEnd ? "rgba(232,84,26,0.2)" : O}`,
                  background:"transparent",
                  color:atEnd ? "rgba(232,84,26,0.3)" : O,
                  cursor:atEnd ? "not-allowed" : "pointer",
                  fontSize:20, display:"flex", alignItems:"center", justifyContent:"center",
                  transition:"all 0.2s" }}>›</button>
            </div>

            {/* Pages index row */}
            <div style={{ display:"flex", gap:6, flexWrap:"wrap", justifyContent:"center",
              maxWidth:360 }}>
              {Array.from({ length:TOTAL }, (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const diff = i - page;
                    if (diff > 0) for (let k=0;k<diff;k++) bookRef.current?.pageFlip().flipNext();
                    else for (let k=0;k<-diff;k++) bookRef.current?.pageFlip().flipPrev();
                  }}
                  style={{ width:28, height:28, border:`1px solid ${i===page ? O : "rgba(232,84,26,0.2)"}`,
                    background:i===page ? O : "transparent",
                    color:i===page ? D : M,
                    fontFamily:"sans-serif", fontSize:9, fontWeight:700,
                    cursor:"pointer", borderRadius:4, transition:"all 0.2s" }}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }}
              transition={{ delay:0.8 }} viewport={{ once:true }}
              style={{ fontFamily:"sans-serif", fontSize:10,
                color:"rgba(122,117,114,0.5)", letterSpacing:"0.2em",
                textTransform:"uppercase" }}>
              ← Drag or click page edges to flip →
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
