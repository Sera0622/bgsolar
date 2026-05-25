"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    num: "01",
    title: "Send Your Meralco Bill",
    description:
      "Take a photo or screenshot of your most recent 1-month Meralco bill and send it to our Viber number. This helps us calculate the right system size for your home.",
  },
  {
    num: "02",
    title: "Wait for Our Response",
    description:
      "Our team will review your Meralco bill and prepare a detailed solar quotation tailored to your home — completely free of charge.",
  },
  {
    num: "03",
    title: "Receive Your Quotation",
    description:
      "That's it! We'll review your bill and prepare a detailed solar quotation tailored to your home. You'll receive it directly through Viber within 24 hours.",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 bg-gray-deep overflow-hidden"
    >
      {/* BG decoration */}
      <div
        className="absolute bottom-0 left-0 select-none pointer-events-none font-black leading-none"
        style={{
          fontSize: "clamp(8rem, 22vw, 22rem)",
          fontFamily: "var(--font-poppins)",
          color: "#3D3B38",
          opacity: 0.1,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        06
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-20">
          <AnimatedSection>
            <p
              className="text-orange text-xs font-bold tracking-[0.5em] uppercase mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Get In Touch
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
              Let&apos;s
              <br />
              <span className="text-orange">Connect</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p
              className="text-gray-dust text-base md:text-lg leading-relaxed mt-6 max-w-xl"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
            >
              No forms to fill up. Just message us on Viber — we&apos;ll take it from there.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: Steps */}
          <div>
            <AnimatedSection>
              <p
                className="text-orange text-xs font-bold tracking-[0.5em] uppercase mb-10"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                How It Works
              </p>
            </AnimatedSection>

            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  {/* Step line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-10 h-10 flex-shrink-0 border border-orange/40 flex items-center justify-center"
                      style={{ background: "rgba(232,84,26,0.08)" }}
                    >
                      <span
                        className="text-orange font-black text-xs"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {step.num}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 my-2" style={{ background: "rgba(232,84,26,0.2)", minHeight: "2.5rem" }} />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="pb-10">
                    <h3
                      className="font-black text-white-star uppercase text-base mb-2 group-hover:text-orange transition-colors duration-300"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-dust text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Viber CTA + Contact Info */}
          <div className="space-y-6">

            {/* Viber CTA card */}
            <AnimatedSection delay={0.2}>
              <div
                className="border border-orange/30 p-8 md:p-10 relative overflow-hidden"
                style={{ background: "rgba(232,84,26,0.05)" }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange" />

                {/* Viber icon */}
                <div className="mb-6">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="12" fill="rgba(232,84,26,0.12)" />
                    <path
                      d="M24 10C17.373 10 12 14.925 12 21c0 3.54 1.8 6.693 4.632 8.784L15.5 34l4.47-1.49A13.07 13.07 0 0024 33c6.627 0 12-4.925 12-11S30.627 10 24 10z"
                      fill="#E8541A"
                      fillOpacity="0.9"
                    />
                    <path
                      d="M20 20.5c.5 1 1.2 1.9 2 2.7.8.8 1.7 1.5 2.7 2 .1 0 .2 0 .3-.1l1.5-1.5c.2-.2.4-.2.6-.1.7.3 1.4.5 2.1.6.3 0 .5.3.5.5v2.1c0 .3-.2.5-.5.5C22.4 27.2 18 22.7 18 17.3c0-.3.2-.5.5-.5H20.6c.3 0 .5.2.5.5.1.7.3 1.4.6 2.1.1.2 0 .4-.1.6L20.1 21c-.1 0-.1.2 0 .3-.1-.3-.1-.5-.1-.8z"
                      fill="#1A1917"
                    />
                  </svg>
                </div>

                <p
                  className="text-gray-muted text-xs tracking-widest uppercase mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Message us on Viber
                </p>
                <p
                  className="font-black text-white-star mb-1"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 3rem)",
                    fontFamily: "var(--font-poppins)",
                  }}
                >
                  0969 604 8041
                </p>
                <p
                  className="text-gray-dust text-sm mb-8"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  Available Mon–Sat, 8:00 AM – 5:00 PM
                </p>

                <a
                  href="viber://chat?number=%2B639696048041"
                  className="relative flex items-center justify-center gap-3 w-full overflow-hidden bg-orange text-gray-deep py-4 font-black tracking-widest uppercase text-sm group"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
                      <path d="M24 10C17.373 10 12 14.925 12 21c0 3.54 1.8 6.693 4.632 8.784L15.5 34l4.47-1.49A13.07 13.07 0 0024 33c6.627 0 12-4.925 12-11S30.627 10 24 10z" fill="#1A1917"/>
                    </svg>
                    Open in Viber
                  </span>
                  <span className="absolute inset-0 bg-orange-light translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </a>
              </div>
            </AnimatedSection>

            {/* GCash payment box */}
            <AnimatedSection delay={0.3}>
              <div
                className="border border-gray-mid/50 p-6 flex items-start gap-4"
                style={{ background: "rgba(61,59,56,0.2)" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-orange/30"
                  style={{ background: "rgba(232,84,26,0.08)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8541A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-muted text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                    Quotation
                  </p>
                  <p className="text-orange font-black text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
                    FREE
                  </p>
                  <p className="text-gray-dust text-xs mt-1 leading-relaxed" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>
                    Just send your Meralco bill via Viber — no payment needed
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Email fallback */}
            <AnimatedSection delay={0.35}>
              <div
                className="border border-gray-mid/50 p-6 flex items-start gap-4"
                style={{ background: "rgba(61,59,56,0.2)" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-orange/30"
                  style={{ background: "rgba(232,84,26,0.08)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8541A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-muted text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                    Email
                  </p>
                  <a
                    href="mailto:lsscorporation@betelgeusesolar.com"
                    className="text-white-star font-bold text-sm hover:text-orange transition-colors duration-300 break-all"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    lsscorporation@betelgeusesolar.com
                  </a>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}
