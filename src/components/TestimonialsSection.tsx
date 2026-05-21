"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    system: "Hybrid System",
    quote:
      "Our Meralco bill used to hit ₱8,000 a month. After Betelgeuse installed our hybrid system, it dropped to under ₱800. And during the last brownout in our area, our house was the only one with lights on. Best decision we ever made.",
    name: "Syra Mae Escudero",
    role: "PRULIFE Assistant Unit Manager",
    location: "Alfonso, Cavite",
    stars: 5,
  },
  {
    system: "Net Metering",
    quote:
      "The net metering setup was completely seamless. The Betelgeuse team handled all the Meralco paperwork and scheduling — I didn't lift a finger. Now my meter literally runs backwards every sunny day and my bill is almost zero.",
    name: "Rochie Solomon",
    role: "Head of DI33",
    location: "Muntinlupa, Metro Manila",
    stars: 5,
  },
  {
    system: "On-Grid System",
    quote:
      "I'm always travelling for work so I needed something reliable with remote monitoring. Betelgeuse installed an on-grid system and I can check my production data from anywhere in the world. The installation was done in two days — clean and professional.",
    name: "Danielle De Borja",
    role: "Independent Pilot",
    location: "Pacita, Biñan",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#E8541A">
          <path d="M7 0.5L8.85 5.07L13.76 5.44L10.06 8.63L11.26 13.36L7 10.77L2.74 13.36L3.94 8.63L0.24 5.44L5.15 5.07L7 0.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-32 md:py-48 bg-gray-deep overflow-hidden"
    >
      {/* BG decoration */}
      <div
        className="absolute top-0 left-0 select-none pointer-events-none font-black leading-none"
        style={{
          fontSize: "clamp(8rem, 22vw, 22rem)",
          fontFamily: "var(--font-poppins)",
          color: "#3D3B38",
          opacity: 0.15,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        04
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <AnimatedSection>
            <p
              className="text-orange text-xs font-bold tracking-[0.5em] uppercase mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Client Stories
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              className="font-black text-white-star uppercase leading-none"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 6rem)",
                fontFamily: "var(--font-poppins)",
                letterSpacing: "-0.02em",
              }}
            >
              What They
              <br />
              <span className="text-orange">Say</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative p-8 bg-gray-mid/30 border border-gray-mid/40 group hover:border-orange/30 transition-colors duration-500"
              style={{ background: "rgba(61,59,56,0.2)" }}
            >
              {/* System badge */}
              <div className="mb-6">
                <span
                  className="inline-block text-orange text-xs font-bold tracking-widest uppercase border border-orange/30 px-3 py-1"
                  style={{ fontFamily: "var(--font-poppins)", background: "rgba(232,84,26,0.08)" }}
                >
                  {t.system}
                </span>
              </div>

              {/* Large quotation mark */}
              <div
                className="text-orange font-black leading-none mb-6 select-none"
                style={{
                  fontSize: "5rem",
                  fontFamily: "var(--font-poppins)",
                  lineHeight: 0.8,
                  opacity: 0.5,
                }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Quote text */}
              <blockquote
                className="text-white-star/90 leading-relaxed mb-8 text-base"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                {t.quote}
              </blockquote>

              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Author */}
              <div className="mt-4 pt-6 border-t border-gray-mid/50">
                <div
                  className="font-bold text-white-star text-sm"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-gray-muted text-xs tracking-wider mt-0.5"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {t.role} · {t.location}
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 20% 80%, rgba(232,84,26,0.05) 0%, transparent 60%)"
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
