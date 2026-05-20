"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

type Stat =
  | { kind: "count"; to: number; suffix: string; decimals: number; label: string }
  | { kind: "static"; display: string; label: string };

const stats: Stat[] = [
  { kind: "count", to: 120, suffix: "KW", decimals: 0, label: "Installed Capacity" },
  { kind: "count", to: 90,  suffix: "%",  decimals: 0, label: "Efficiency Rate" },
  { kind: "count", to: 50,  suffix: "+",  decimals: 0, label: "Homes Powered" },
  { kind: "static", display: "3–5yr",                  label: "Avg. ROI Period" },
];

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-orange py-12 md:py-16">
      {/* Animated sun rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 h-[300%] w-[1px]"
            style={{
              background: "rgba(26,25,23,0.06)",
              transformOrigin: "top center",
              rotate: `${i * 45}deg`,
              translateX: "-50%",
              translateY: "-5%",
            }}
            animate={{ rotate: `${i * 45 + 360}deg` }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center"
            >
              <div
                className="font-black text-4xl md:text-5xl lg:text-6xl text-gray-deep leading-none"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.kind === "static" ? (
                  stat.display
                ) : (
                  <CountUp to={stat.to} suffix={stat.suffix} decimals={stat.decimals} duration={2200} />
                )}
              </div>
              <div
                className="text-gray-deep/70 text-xs font-bold tracking-widest uppercase mt-2"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
