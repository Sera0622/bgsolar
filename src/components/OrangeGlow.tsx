"use client";

import { motion } from "framer-motion";

interface OrangeGlowProps {
  size?: number;
  opacity?: number;
  className?: string;
  animate?: boolean;
}

export default function OrangeGlow({
  size = 600,
  opacity = 0.18,
  className = "",
  animate: shouldAnimate = true,
}: OrangeGlowProps) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(232,84,26,${opacity}) 0%, rgba(232,84,26,0.05) 50%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      animate={
        shouldAnimate
          ? {
              scale: [1, 1.15, 1],
              opacity: [opacity, opacity * 1.4, opacity],
            }
          : {}
      }
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
