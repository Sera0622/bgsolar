"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BetelgeuseLogo from "./BetelgeuseLogo";

/* Map each nav label to the 0-based flipbook page index it should open */
const navLinks: { label: string; flipPage: number }[] = [
  { label: "About",        flipPage: 2  },   // Our Story
  { label: "How It Works", flipPage: 5  },   // Process 1/2
  { label: "Products",     flipPage: 7  },   // Off/On-Grid
  { label: "Services",     flipPage: 10 },   // Services 1/2
  { label: "Contact",      flipPage: 16 },   // Contact / back cover
];

/** Dispatch a custom event that FlipbookSection listens for */
function goToPage(flipPage: number) {
  window.dispatchEvent(
    new CustomEvent("flipbook-go", { detail: { page: flipPage } })
  );
}

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (flipPage: number) => {
    goToPage(flipPage);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(26, 25, 23, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(61,59,56,0.5)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo — clicking goes back to page 1 */}
          <button
            onClick={() => goToPage(0)}
            aria-label="Betelgeuse Solar — Home"
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
          >
            <BetelgeuseLogo size="sm" />
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map(({ label, flipPage }) => (
              <li key={label}>
                <button
                  onClick={() => handleLink(flipPage)}
                  className="relative text-gray-dust text-sm font-medium tracking-widest uppercase group overflow-hidden"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  {label}
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-orange transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleLink(16)}
              className="relative overflow-hidden border border-orange text-orange px-6 py-2.5 text-sm font-bold tracking-widest uppercase group"
              style={{ fontFamily: "var(--font-poppins)", background: "none", cursor: "pointer" }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-deep">
                Get Started
              </span>
              <span className="absolute inset-0 bg-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </button>
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
            {navLinks.map(({ label, flipPage }, i) => (
              <motion.button
                key={label}
                onClick={() => handleLink(flipPage)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl font-black uppercase tracking-widest text-white-star"
                style={{
                  fontFamily: "var(--font-poppins)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleLink(16)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.5 }}
              className="border border-orange text-orange px-8 py-3 text-sm font-bold tracking-widest uppercase"
              style={{ fontFamily: "var(--font-poppins)", background: "none", cursor: "pointer" }}
            >
              Get Started
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
