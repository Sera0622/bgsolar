"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const missionPoints = [
  "To provide safe, reliable, and high-quality electrical and solar solutions for residential, commercial, and specialized projects.",
  "To deliver professional services through skilled manpower, technical expertise, and continuous innovation.",
  "To uphold the highest standards of safety, integrity, and workmanship from project planning to turnover.",
  "To build long-term relationships with clients through excellent service, transparency, and dependable project execution.",
  "To continuously invest in the training, certification, and development of our workforce to ensure world-class service and client satisfaction.",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-deep"
    >
      {/* ── PHILOSOPHY ─────────────────────────────────────── */}
      <div className="relative py-32 md:py-48">
        {/* Large decorative number */}
        <div
          className="absolute top-0 left-0 select-none pointer-events-none leading-none font-black overflow-hidden"
          style={{
            fontSize: "clamp(8rem, 22vw, 22rem)",
            fontFamily: "var(--font-poppins)",
            color: "#3D3B38",
            opacity: 0.25,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          01
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p
              className="text-orange text-xs font-bold tracking-[0.5em] uppercase mb-16"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Philosophy
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left: Headline */}
            <AnimatedSection>
              <h2
                className="font-black text-white-star uppercase leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
                  fontFamily: "var(--font-poppins)",
                  letterSpacing: "-0.02em",
                }}
              >
                Proudly Filipino.
                <br />
                <span className="text-orange">Built to Last.</span>
              </h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="mt-10 h-1 bg-orange origin-left"
                style={{ width: "clamp(60px, 10vw, 120px)" }}
              />

              {/* Founding stats */}
              <AnimatedSection delay={0.4}>
                <div className="flex items-center gap-6 mt-10">
                  {[
                    { value: "2016", label: "Established" },
                    { value: "9+", label: "Years of Service" },
                    { value: "100%", label: "Filipino-Owned" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-6">
                      {i > 0 && <div className="w-px h-12 bg-gray-mid" />}
                      <div className="text-center">
                        <div
                          className="font-black text-3xl text-orange"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="text-gray-muted text-xs tracking-widest uppercase mt-1"
                          style={{ fontFamily: "var(--font-poppins)" }}
                        >
                          {s.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </AnimatedSection>

            {/* Right: Body */}
            <div className="space-y-6 pt-4 md:pt-20">
              {[
                "LSS Development Corporation is a proudly Filipino-owned electrical solutions company established in 2016 under the name Blitzkrieg Electrical Trading and Services, now expanding as LSS Development Corporation. Since its founding, the company has grown organically and consistently delivered exceptional electrical design and installation services across residential housing, commercial buildings, and specialized systems such as solar power and advanced electrical solutions.",
                "Backed by a team of highly skilled and dedicated professionals, LSS Development Corporation brings extensive expertise and technical knowledge in the electrical industry. The company continuously invests in the certification and development of its skilled applicators, ensuring compliance with industry standards and the delivery of world-class services.",
                "Committed to quality, safety, and client satisfaction, LSS Development Corporation provides top-notch workmanship from groundbreaking to project turnover — delivering reliable and efficient solutions tailored to every client's needs.",
              ].map((text, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <p
                    className="text-gray-dust leading-relaxed text-base md:text-lg"
                    style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                  >
                    {text}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── VISION & MISSION ───────────────────────────────── */}
      <div
        className="relative py-32 md:py-40 border-t"
        style={{ borderColor: "rgba(61,59,56,0.5)", background: "#111010" }}
      >
        {/* Large decorative text */}
        <div
          className="absolute top-0 right-0 select-none pointer-events-none leading-none font-black"
          style={{
            fontSize: "clamp(6rem, 18vw, 18rem)",
            fontFamily: "var(--font-poppins)",
            color: "#3D3B38",
            opacity: 0.15,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          VM
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p
              className="text-orange text-xs font-bold tracking-[0.5em] uppercase mb-16"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Vision &amp; Mission
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* VISION */}
            <AnimatedSection delay={0.1}>
              <div
                className="border border-orange/30 p-8 md:p-10 relative overflow-hidden"
                style={{ background: "rgba(232,84,26,0.04)" }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange" />

                <p
                  className="text-orange text-xs font-bold tracking-[0.4em] uppercase mb-6"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Vision
                </p>

                <h3
                  className="font-black text-white-star uppercase leading-tight mb-6"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    fontFamily: "var(--font-poppins)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Leading. Trusted.
                  <br />
                  <span className="text-orange">Recognized.</span>
                </h3>

                <p
                  className="text-gray-dust leading-relaxed text-sm md:text-base"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  To become one of the leading and most trusted solar solution providers in the Philippines, recognized for excellence, innovation, quality workmanship, and commitment to customer satisfaction in every project we deliver.
                </p>
              </div>
            </AnimatedSection>

            {/* MISSION */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <p
                  className="text-orange text-xs font-bold tracking-[0.4em] uppercase mb-6"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Mission
                </p>

                <h3
                  className="font-black text-white-star uppercase leading-tight mb-8"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    fontFamily: "var(--font-poppins)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  What We
                  <br />
                  <span className="text-orange">Stand For</span>
                </h3>

                <ul className="space-y-4">
                  {missionPoints.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <span
                        className="flex-shrink-0 w-6 h-6 border border-orange/40 flex items-center justify-center mt-0.5"
                        style={{ background: "rgba(232,84,26,0.08)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                      </span>
                      <p
                        className="text-gray-dust text-sm md:text-base leading-relaxed"
                        style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                      >
                        {point}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}
