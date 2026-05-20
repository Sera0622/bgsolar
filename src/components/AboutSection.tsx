"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-48 overflow-hidden bg-gray-deep"
    >
      {/* Large decorative number */}
      <div
        className="absolute top-0 left-0 select-none pointer-events-none leading-none font-black text-gray-mid overflow-hidden"
        style={{
          fontSize: "clamp(8rem, 22vw, 22rem)",
          fontFamily: "var(--font-poppins)",
          opacity: 0.25,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        01
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
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
              Built for a planet that can&apos;t
              <span className="text-orange"> wait.</span>
            </h2>

            {/* Orange separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="mt-10 h-1 bg-orange origin-left"
              style={{ width: "clamp(60px, 10vw, 120px)" }}
            />
          </AnimatedSection>

          {/* Right: Body */}
          <div className="space-y-6 pt-4 md:pt-20">
            {[
              "BETELGEUSE was founded on a single principle: the energy transition cannot wait for incremental improvement. We design photovoltaic systems that push the boundaries of conversion efficiency, durability, and intelligence.",
              "Every panel we produce is engineered to extract maximum yield across its 30-year lifespan — through variable weather, grid fluctuation, and technological evolution. Our proprietary thermal management architecture reduces degradation by 60% compared to industry standard.",
              "We work exclusively with architects, developers, and forward-thinking homeowners who understand that solar infrastructure is not a product — it is a long-term investment in planetary survival.",
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

            <AnimatedSection delay={0.4}>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div
                    className="font-black text-3xl text-orange"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    30yr
                  </div>
                  <div
                    className="text-gray-muted text-xs tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Panel Lifespan
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-mid" />
                <div className="text-center">
                  <div
                    className="font-black text-3xl text-orange"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    −60%
                  </div>
                  <div
                    className="text-gray-muted text-xs tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Degradation Rate
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-mid" />
                <div className="text-center">
                  <div
                    className="font-black text-3xl text-orange"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    A+
                  </div>
                  <div
                    className="text-gray-muted text-xs tracking-widest uppercase mt-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Energy Rating
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
