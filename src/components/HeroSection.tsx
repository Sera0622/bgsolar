"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SplitText from "./SplitText";
import OrangeGlow from "./OrangeGlow";

const flipWords = ["ENERGY", "SAVINGS", "YOUR HOME", "YOUR FUTURE", "POWER"];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Start flipping after the initial SplitText animation finishes
  useEffect(() => {
    const startDelay = setTimeout(() => setStarted(true), 2200);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % flipWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden solar-grid-bg"
      style={{ background: "#1A1917" }}
    >
      {/* Glow orbs */}
      <OrangeGlow size={800} opacity={0.12} className="top-[-200px] left-[-200px]" />
      <OrangeGlow size={500} opacity={0.08} className="bottom-[-100px] right-[-100px]" />

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto"
      >
        {/* Main headline */}
        <h1
          className="font-black uppercase leading-none text-white-star mb-4"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
            fontFamily: "var(--font-poppins)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          {/* Static top line */}
          <span className="block overflow-hidden" style={{ whiteSpace: "nowrap" }}>
            <SplitText text="OWN YOUR" splitBy="chars" delay={0.5} />
          </span>

          {/* Flip line — split-flap / departures-board style */}
          <span
            className="block"
            style={{
              whiteSpace: "nowrap",
              height: "1.15em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              perspective: "900px",
            }}
          >
            {/* The "card" that looks like a split-flap tile */}
            <span
              style={{
                position: "relative",
                display: "inline-block",
                color: "#E8541A",
                background: "rgba(232,84,26,0.07)",
                border: "1px solid rgba(232,84,26,0.22)",
                borderRadius: "6px",
                padding: "0 0.22em",
              }}
            >
              {/* Centre divider — hallmark of a split-flap display */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  height: "1.5px",
                  background: "rgba(232,84,26,0.4)",
                  zIndex: 5,
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                }}
              />

              {!started ? (
                <span style={{ display: "inline-block" }}>ENERGY</span>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ rotateX: -90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    exit={{ rotateX: 90, opacity: 0 }}
                    transition={{ duration: 0.26, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      display: "inline-block",
                      transformOrigin: "center center",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {flipWords[index]}
                  </motion.span>
                </AnimatePresence>
              )}
            </span>
          </span>
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-dust text-lg md:text-xl max-w-2xl mx-auto mt-10 leading-relaxed font-normal"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Cut your Meralco bill. Power through brownouts.
          <br />
          Go solar with Betelgeuse.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="#contact"
            className="relative overflow-hidden bg-orange text-gray-deep px-10 py-4 font-bold tracking-widest uppercase text-sm group"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <span className="relative z-10">Get a Quote for as low as ₱50</span>
            <span className="absolute inset-0 bg-orange-light translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </a>
          <a
            href="#products"
            className="border border-gray-mid text-white-star px-10 py-4 font-bold tracking-widest uppercase text-sm hover:border-orange hover:text-orange transition-colors duration-300"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Our Systems
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-gray-muted text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-orange to-transparent"
        />
      </motion.div>

      {/* Decorative horizontal line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange to-transparent origin-left"
        style={{ opacity: 0.3 }}
      />
    </section>
  );
}
