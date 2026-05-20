"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BetelgeuseLogo from "./BetelgeuseLogo";

const navLinks = ["Products", "How It Works", "Services", "About", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(26, 25, 23, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(61,59,56,0.5)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="Betelgeuse Solar — Home">
            <BetelgeuseLogo size="sm" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="relative text-gray-dust text-sm font-medium tracking-widest uppercase group overflow-hidden"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {link}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-orange transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative overflow-hidden border border-orange text-orange px-6 py-2.5 text-sm font-bold tracking-widest uppercase group"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-deep">
                Get Started
              </span>
              <span className="absolute inset-0 bg-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white-star transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white-star transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white-star transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] bg-gray-deep flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl font-black uppercase tracking-widest text-white-star"
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.5 }}
              className="border border-orange text-orange px-8 py-3 text-sm font-bold tracking-widest uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
