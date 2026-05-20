"use client";

import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 md:py-40"
      style={{ background: "#E8541A" }}
    >
      {/* Rotating sun rays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[200%] h-[200%]"
        >
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 h-full w-[1px]"
              style={{
                background: "rgba(26,25,23,0.08)",
                transformOrigin: "top center",
                transform: `translateX(-50%) translateY(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(242,120,75,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="font-black uppercase leading-none text-gray-deep"
          style={{
            fontSize: "clamp(3rem, 9vw, 10rem)",
            fontFamily: "var(--font-poppins)",
            letterSpacing: "-0.02em",
          }}
        >
          YOUR ROOF.
          <br />
          OUR MISSION.
        </motion.h2>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-gray-deep/70 text-lg md:text-xl max-w-2xl mx-auto mt-8 leading-relaxed"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
        >
          Every kilowatt-hour we generate is a vote for a livable planet.
          Start your assessment today — no commitment required.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="#"
            className="relative overflow-hidden bg-gray-deep text-white-star px-10 py-4 font-bold tracking-widest uppercase text-sm group"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span className="relative z-10 transition-colors duration-300">
              Get Free Assessment
            </span>
            <span className="absolute inset-0 bg-gray-mid translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </a>
          <a
            href="#"
            className="border-2 border-gray-deep text-gray-deep px-10 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gray-deep/10 transition-colors duration-300"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            See Case Studies
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-deep/50 text-xs tracking-widest uppercase mt-10"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          No obligation · Response within 24 hours · Serving 48 states
        </motion.p>
      </div>
    </section>
  );
}
