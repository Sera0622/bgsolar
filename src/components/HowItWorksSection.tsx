"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Assess",
    subtitle: "Site & Energy Analysis",
    description:
      "We deploy remote sensing data combined with an on-site audit to model your solar potential. Shading analysis, roof load calculations, and 30-year yield projections are completed before a single panel is specified.",
  },
  {
    num: "02",
    title: "Design",
    subtitle: "Engineering & Permitting",
    description:
      "Our in-house structural and electrical engineers design a system optimized for your specific site. Full permit packages are submitted to your local authority — we handle all coordination, approvals, and utility interconnection agreements.",
  },
  {
    num: "03",
    title: "Install",
    subtitle: "Precision Deployment",
    description:
      "BETELGEUSE-certified installation crews complete most residential systems in 1–2 days. We use proprietary low-profile racking systems and manage every detail from roof penetration sealing to final commissioning tests.",
  },
  {
    num: "04",
    title: "Monitor",
    subtitle: "Lifetime Performance Intelligence",
    description:
      "BETELGEUSE Connect, our monitoring platform, tracks production in real time at the panel level. Predictive maintenance algorithms alert our service team before performance degradation impacts your yield.",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-8 md:gap-16"
    >
      {/* Left: Number + Line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-14 h-14 flex items-center justify-center border border-orange/30 relative"
          style={{ background: "rgba(232,84,26,0.05)" }}
        >
          <span
            className="font-black text-sm text-orange"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {step.num}
          </span>
        </div>

        {/* Connecting line */}
        {index < steps.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{
              duration: 0.8,
              delay: index * 0.15 + 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-[1px] bg-gradient-to-b from-orange to-transparent mt-4"
            style={{ minHeight: "80px" }}
          />
        )}
      </div>

      {/* Right: Content */}
      <div className="pb-16">
        <p
          className="text-orange text-xs font-bold tracking-widest uppercase mb-2"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {step.subtitle}
        </p>
        <h3
          className="font-black text-white-star uppercase mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontFamily: "var(--font-poppins)",
            letterSpacing: "-0.02em",
          }}
        >
          {step.title}
        </h3>
        <p
          className="text-gray-dust leading-relaxed max-w-xl text-base"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-32 md:py-48 bg-gray-deep overflow-hidden"
      style={{ background: "#111010" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 select-none pointer-events-none font-black leading-none"
        style={{
          fontSize: "clamp(8rem, 25vw, 28rem)",
          fontFamily: "var(--font-poppins)",
          color: "#3D3B38",
          opacity: 0.12,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        03
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <AnimatedSection>
            <p
              className="text-orange text-xs font-bold tracking-[0.5em] uppercase mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Process
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
              How It{" "}
              <span className="text-orange">Works</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <div className="max-w-3xl">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
