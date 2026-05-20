"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import BetelgeuseLogo from "./BetelgeuseLogo";

const footerLinks = {
  Products: ["BETELGEUSE PRO", "BETELGEUSE LITE", "BETELGEUSE GRID", "Accessories"],
  Company: ["About", "Careers", "Press", "Partners"],
  Resources: ["Case Studies", "White Papers", "Support", "BETELGEUSE Connect"],
  Legal: ["Privacy Policy", "Terms of Service", "Warranty Terms", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="relative bg-gray-deep border-t border-gray-mid/30 pt-24 pb-12 overflow-hidden">
      {/* Large HELIOS watermark */}
      <div
        className="absolute bottom-0 left-0 right-0 text-center select-none pointer-events-none font-black leading-none overflow-hidden"
        style={{
          fontSize: "clamp(6rem, 20vw, 20rem)",
          fontFamily: "var(--font-poppins)",
          color: "#3D3B38",
          opacity: 0.12,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        BETELGEUSE
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top: Logo + tagline */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <AnimatedSection>
            <div>
              <BetelgeuseLogo size="lg" className="mb-5" />
              <p
                className="text-gray-dust text-sm leading-relaxed max-w-sm"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                Harnessing solar energy.
                <br />
                Since 2020.
              </p>

              {/* Social links */}
              <div className="flex gap-4 mt-8">
                {["LinkedIn", "X", "Instagram", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-muted text-xs tracking-widest uppercase hover:text-orange transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Newsletter */}
          <AnimatedSection delay={0.15}>
            <div>
              <p
                className="text-white-star font-bold text-sm tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Stay Informed
              </p>
              <p
                className="text-gray-dust text-sm mb-6"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
              >
                Quarterly reports on solar efficiency breakthroughs, policy
                changes, and BETELGEUSE product developments.
              </p>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-gray-mid/50 border border-gray-mid text-white-star text-sm px-4 py-3 outline-none focus:border-orange transition-colors duration-300 placeholder:text-gray-muted"
                  style={{ fontFamily: "var(--font-poppins)" }}
                />
                <button
                  className="bg-orange text-gray-deep text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-orange-light transition-colors duration-300"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {Object.entries(footerLinks).map(([category, links], i) => (
            <AnimatedSection key={category} delay={i * 0.08}>
              <div>
                <h3
                  className="text-white-star text-xs font-bold tracking-[0.4em] uppercase mb-6"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-dust text-sm hover:text-orange transition-colors duration-300"
                        style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-mid/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p
            className="text-gray-muted text-xs"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            © 2025 BETELGEUSE Energy Systems Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-gray-muted text-xs" style={{ fontFamily: "var(--font-poppins)" }}>
            <span>Privacy</span>
            <span className="text-orange">·</span>
            <span>Terms</span>
            <span className="text-orange">·</span>
            <span>Cookies</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
