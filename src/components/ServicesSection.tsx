"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    num: "01",
    title: "Site Assessment",
    description:
      "Our certified engineers conduct a full on-site inspection of your property — roof load, shading analysis, electrical panel capacity, and 25-year yield projection — before any system is specified.",
  },
  {
    num: "02",
    title: "System Design & Engineering",
    description:
      "Custom solar system layout tailored to your actual energy consumption. We handle structural, electrical, and single-line diagrams plus all permit documentation required by your local authority.",
  },
  {
    num: "03",
    title: "Professional Installation",
    description:
      "BETELGEUSE-certified crews complete most residential installations within 1–2 days. Low-profile racking, weatherproof penetration sealing, and full commissioning tests included.",
  },
  {
    num: "04",
    title: "Net Metering Application",
    description:
      "We process your complete net metering application with Meralco or your local distribution utility — from interconnection forms to inspection scheduling. Zero paperwork on your end.",
  },
  {
    num: "05",
    title: "System Monitoring",
    description:
      "Real-time panel-level production monitoring via the BETELGEUSE Connect app. Alerts for underperformance, inverter faults, and predictive maintenance notifications included free for 2 years.",
  },
  {
    num: "06",
    title: "After-Sales & Maintenance",
    description:
      "Annual preventive maintenance visits, panel cleaning, connection torque checks, and firmware updates. Extended service plans available for residential and commercial installations.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#111010" }}
    >
      {/* BG decoration */}
      <div
        className="absolute top-0 right-0 select-none pointer-events-none font-black leading-none"
        style={{
          fontSize: "clamp(8rem, 22vw, 22rem)",
          fontFamily: "var(--font-poppins)",
          color: "#3D3B38",
          opacity: 0.12,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        05
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <AnimatedSection>
            <p
              className="text-orange text-xs font-bold tracking-[0.5em] uppercase mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              What We Offer
            </p>
          </AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <AnimatedSection delay={0.1}>
              <h2
                className="font-black text-white-star uppercase leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 6rem)",
                  fontFamily: "var(--font-poppins)",
                  letterSpacing: "-0.02em",
                }}
              >
                Services &amp;
                <br />
                <span className="text-orange">Quotation</span>
              </h2>
            </AnimatedSection>

            {/* Quotation price callout */}
            <AnimatedSection delay={0.2}>
              <div
                className="border border-orange/40 p-6 md:p-8 text-center min-w-[200px]"
                style={{ background: "rgba(232,84,26,0.06)" }}
              >
                <p
                  className="text-gray-muted text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Quotation Request Fee
                </p>
                <p
                  className="font-black text-orange leading-none"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  ₱50
                </p>
                <p
                  className="text-gray-dust text-xs mt-3 leading-relaxed"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  For quotation only.
                  <br />
                  Site assessment is separate.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-mid/30">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="group p-8 lg:p-10 relative overflow-hidden"
              style={{ background: "#1A1917" }}
            >
              {/* Hover fill */}
              <div className="absolute inset-0 bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <span
                className="block font-black text-gray-mid text-5xl leading-none mb-6 group-hover:text-orange/20 transition-colors duration-500"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {service.num}
              </span>

              <h3
                className="font-black text-white-star uppercase mb-4 text-lg tracking-wide group-hover:text-orange transition-colors duration-300"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {service.title}
              </h3>

              <p
                className="text-gray-dust text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                {service.description}
              </p>

              {/* Bottom orange line on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-orange"
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA to contact */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <a
              href="#contact"
              className="relative overflow-hidden bg-orange text-gray-deep px-10 py-4 font-bold tracking-widest uppercase text-sm group"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span className="relative z-10">Request a Quotation</span>
              <span className="absolute inset-0 bg-orange-light translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>
            <p
              className="text-gray-muted text-sm"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              ₱50 for quotation only · Response within 24 hours
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
