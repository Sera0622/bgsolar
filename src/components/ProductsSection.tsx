"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const products = [
  {
    id: "OFF GRID / ON GRID",
    tagline: "Energy independence, your way",
    efficiency: "Up to 98%",
    output: "1–20kW",
    warranty: "25yr",
    temp: "Inverter Eff.",
    description:
      "Off-Grid systems operate completely independent from the utility grid — ideal for remote properties and areas with unreliable power. On-Grid systems connect directly to your local utility, eliminating monthly electric bills by consuming solar power first and drawing from the grid only when needed.",
    accent: "#E8541A",
    specs: [
      { label: "System Type", value: "Off-Grid / On-Grid" },
      { label: "Battery Storage", value: "Optional (Off-Grid)" },
      { label: "Best For", value: "Remote & Urban Homes" },
      { label: "Grid Required", value: "No (Off) / Yes (On)" },
    ],
  },
  {
    id: "NET METERING",
    tagline: "Let your meter run backwards",
    efficiency: "Up to 95%",
    output: "3–30kW",
    warranty: "25yr",
    temp: "Export Ready",
    description:
      "A grid-tied system that exports your excess solar generation back to the utility grid. Under the Philippine Renewable Energy Act (RA 9513), your Meralco or local utility credits you for every kilowatt-hour you push to the grid — effectively spinning your meter in reverse and slashing your electric bill.",
    accent: "#B0ABA6",
    specs: [
      { label: "System Type", value: "Grid-Tied + Export" },
      { label: "Legal Basis", value: "RA 9513 (RE Act)" },
      { label: "Best For", value: "Residential & Commercial" },
      { label: "Battery Required", value: "No" },
    ],
  },
  {
    id: "HYBRID",
    tagline: "Power through any outage",
    efficiency: "Up to 97%",
    output: "3–50kW",
    warranty: "25yr",
    temp: "Dual-Source",
    description:
      "The best of both worlds. Hybrid systems combine solar panels, battery storage, and grid connection. Priority flow goes Solar → Battery → Grid. During brownouts and blackouts your home stays powered. Excess energy is stored or exported. The most popular choice for Philippine households facing frequent outages.",
    accent: "#E8541A",
    specs: [
      { label: "System Type", value: "Solar + Battery + Grid" },
      { label: "Blackout Protection", value: "Yes" },
      { label: "Best For", value: "Frequent Outage Areas" },
      { label: "Net Metering", value: "Compatible" },
    ],
  },
];

function PanelSVG({ color = "#E8541A" }: { color?: string }) {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* Panel body */}
      <rect x="10" y="10" width="300" height="180" rx="4" fill="#1A1917" stroke="#3D3B38" strokeWidth="1.5" />

      {/* Grid cells - 4 columns × 3 rows */}
      {[0, 1, 2, 3].map((col) =>
        [0, 1, 2].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={22 + col * 72}
            y={22 + row * 54}
            width={62}
            height={46}
            rx="2"
            fill={color}
            fillOpacity={0.08 + row * 0.04}
            stroke={color}
            strokeWidth="0.5"
            strokeOpacity="0.3"
          />
        ))
      )}

      {/* Bus bars */}
      {[0, 1, 2, 3].map((col) => (
        <line
          key={`bus-${col}`}
          x1={53 + col * 72}
          y1={22}
          x2={53 + col * 72}
          y2={178}
          stroke={color}
          strokeWidth="0.5"
          strokeOpacity="0.2"
        />
      ))}

      {/* Junction box */}
      <rect x="140" y="170" width="40" height="14" rx="2" fill="#3D3B38" />

      {/* Glow overlay */}
      <rect x="10" y="10" width="300" height="180" rx="4" fill={`url(#glow-${color.replace("#","")})`} />

      <defs>
        <radialGradient id={`glow-${color.replace("#","")}`} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.06" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative bg-gray-deep py-32 md:py-48"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-16">
          <AnimatedSection>
            <p
              className="text-orange text-xs font-bold tracking-[0.5em] uppercase mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Products
            </p>
          </AnimatedSection>

          {/* Large decorative number */}
          <div
            className="absolute top-0 right-0 select-none pointer-events-none font-black leading-none"
            style={{
              fontSize: "clamp(6rem, 18vw, 18rem)",
              fontFamily: "var(--font-poppins)",
              color: "#3D3B38",
              opacity: 0.3,
              lineHeight: 1,
            }}
            aria-hidden="true"
          >
            02
          </div>

          <AnimatedSection delay={0.1}>
            <h2
              className="font-black uppercase text-white-star leading-none"
              style={{
                fontSize: "clamp(2rem, 4vw, 4.5rem)",
                fontFamily: "var(--font-poppins)",
                letterSpacing: "-0.02em",
              }}
            >
              Our Systems
            </h2>
          </AnimatedSection>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-gray-mid rounded-sm overflow-hidden border group"
              style={{ borderColor: "rgba(61,59,56,0.5)" }}
            >
                {/* Panel illustration */}
                <div className="relative p-8 bg-gray-deep/50 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <PanelSVG color={product.accent} />
                  </motion.div>
                  {/* Clip reveal overlay */}
                  <motion.div
                    initial={{ scaleX: 1 }}
                    whileInView={{ scaleX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.2 + 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-gray-mid origin-right"
                  />
                </div>

                {/* Card content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3
                      className="font-black text-2xl uppercase text-white-star tracking-wide"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {product.id}
                    </h3>
                    <p
                      className="text-gray-muted text-sm mt-1"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {product.tagline}
                    </p>
                  </div>

                  {/* Key metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Efficiency", value: product.efficiency },
                      { label: "Output", value: product.output },
                      { label: "Warranty", value: product.warranty },
                    ].map((m) => (
                      <div key={m.label}>
                        <div
                          className="font-black text-xl"
                          style={{ color: product.accent, fontFamily: "var(--font-poppins)" }}
                        >
                          {m.value}
                        </div>
                        <div
                          className="text-gray-muted text-xs tracking-widest uppercase"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p
                    className="text-gray-dust text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {product.description}
                  </p>

                  {/* Spec list */}
                  <ul className="space-y-2 border-t border-gray-deep pt-4">
                    {product.specs.map((spec) => (
                      <li key={spec.label} className="flex justify-between items-center">
                        <span
                          className="text-gray-muted text-xs tracking-wider"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          <span
                            className="inline-block w-1.5 h-1.5 rounded-full mr-2"
                            style={{ backgroundColor: product.accent }}
                          />
                          {spec.label}
                        </span>
                        <span
                          className="text-white-star text-xs font-bold"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="block text-center border py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300"
                    style={{
                      borderColor: product.accent,
                      color: product.accent,
                      fontFamily: "var(--font-poppins)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = product.accent;
                      (e.currentTarget as HTMLAnchorElement).style.color = "#1A1917";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      (e.currentTarget as HTMLAnchorElement).style.color = product.accent;
                    }}
                  >
                    Request Datasheet
                  </a>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}
