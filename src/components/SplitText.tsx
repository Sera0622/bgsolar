"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: "words" | "chars";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  splitBy = "words",
}: SplitTextProps) {
  const items = splitBy === "words" ? text.split(" ") : text.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === "words" ? 0.1 : 0.04,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className}`}
      aria-label={text}
    >
      {items.map((part, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span variants={item} className="inline-block">
            {part}
            {splitBy === "words" && i < items.length - 1 ? "" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
