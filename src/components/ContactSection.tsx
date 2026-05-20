"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";

const scheduleOptions = [
  "Monday – Friday, 8:00 AM – 12:00 PM",
  "Monday – Friday, 1:00 PM – 5:00 PM",
  "Saturday, 8:00 AM – 12:00 PM",
  "Saturday, 1:00 PM – 5:00 PM",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    schedule: "",
    inspection: false,
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [status, setStatus] = useState<FormState>("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.message,
          schedule:   form.schedule || "Not specified",
          inspection: form.inspection ? "Yes — Site visit requested" : "No",
          has_image:  image
            ? `Yes — customer has a GCash screenshot (${image.name}). Please follow up to collect it.`
            : "No screenshot uploaded",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

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
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left: Info */}
          <div>
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
                className="font-black text-white-star uppercase leading-none mb-10"
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

            {/* Contact details */}
            <div className="space-y-8">
              {[
                {
                  label: "Phone",
                  value: "+63 969 604 8041",
                  href: "tel:+639696048041",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8541A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.19 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  value: "lsscorporation@betelgeusesolar.com",
                  href: "mailto:lsscorporation@betelgeusesolar.com",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8541A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                },
              ].map((item) => (
                <AnimatedSection key={item.label} delay={0.2}>
                  <a href={item.href} className="flex items-start gap-4 group">
                    <div
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-orange/30 mt-0.5"
                      style={{ background: "rgba(232,84,26,0.06)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-muted text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                        {item.label}
                      </p>
                      <p className="text-white-star text-sm group-hover:text-orange transition-colors duration-300 break-all" style={{ fontFamily: "var(--font-poppins)", fontWeight: 700 }}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* GCash */}
            <AnimatedSection delay={0.28}>
              <div className="mt-8 flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-orange/30"
                  style={{ background: "rgba(232,84,26,0.06)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8541A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"/>
                    <line x1="2" y1="10" x2="22" y2="10"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-muted text-xs tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                    GCash
                  </p>
                  <p className="text-white-star text-sm font-black" style={{ fontFamily: "var(--font-poppins)" }}>
                    0969 604 8041
                  </p>
                  <p className="text-gray-muted text-xs mt-0.5" style={{ fontFamily: "var(--font-poppins)" }}>
                    ₱50 quotation fee
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Installation schedule */}
            <AnimatedSection delay={0.35}>
              <div
                className="mt-10 p-6 border border-orange/20"
                style={{ background: "rgba(232,84,26,0.05)" }}
              >
                <p className="text-orange text-xs font-bold tracking-widest uppercase mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                  Installation Schedule
                </p>
                <p className="text-gray-dust text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>
                  Site visits and installations are scheduled Monday through Saturday. Our team will confirm your preferred slot within 24 hours of your inquiry.
                </p>
                <ul className="space-y-1.5">
                  {scheduleOptions.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-gray-dust text-xs" style={{ fontFamily: "var(--font-poppins)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <AnimatedSection delay={0.2}>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-24 px-8 border border-orange/30"
                style={{ background: "rgba(232,84,26,0.06)", minHeight: 500 }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-orange flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8541A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-black text-white-star text-2xl uppercase mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                  Message Sent!
                </h3>
                <p className="text-gray-dust text-sm leading-relaxed" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>
                  Thank you! We&apos;ll get back to you within 24 hours. Please send ₱50 via GCash to <span className="text-orange font-bold">0969 604 8041</span> to process your quotation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-gray-muted mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    Full Name *
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Juan dela Cruz"
                    className="w-full bg-gray-mid/30 border border-gray-mid text-white-star text-sm px-4 py-3.5 outline-none focus:border-orange transition-colors duration-300 placeholder:text-gray-muted/50"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-gray-muted mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    Email Address *
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-gray-mid/30 border border-gray-mid text-white-star text-sm px-4 py-3.5 outline-none focus:border-orange transition-colors duration-300 placeholder:text-gray-muted/50"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-gray-muted mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    Message *
                  </label>
                  <textarea
                    id="message" name="message" required rows={4}
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us about your property, current electric bill, and what you're looking to achieve..."
                    className="w-full bg-gray-mid/30 border border-gray-mid text-white-star text-sm px-4 py-3.5 outline-none focus:border-orange transition-colors duration-300 placeholder:text-gray-muted/50 resize-none"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  />
                </div>

                {/* Image upload */}
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase text-gray-muted mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    Attach Image (optional)
                  </label>

                  {imagePreview ? (
                    <div className="relative border border-orange/40 overflow-hidden" style={{ background: "rgba(232,84,26,0.05)" }}>
                      <img src={imagePreview} alt="Preview" className="w-full max-h-48 object-cover" />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 w-7 h-7 bg-gray-deep border border-gray-mid flex items-center justify-center hover:border-orange transition-colors duration-200"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F7F4F0" strokeWidth="2" strokeLinecap="round">
                          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                      <div className="px-4 py-2 flex items-center gap-2">
                        <span className="text-gray-dust text-xs truncate" style={{ fontFamily: "var(--font-poppins)" }}>{image?.name}</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border border-dashed border-gray-mid hover:border-orange transition-colors duration-300 py-6 flex flex-col items-center gap-2 group"
                      style={{ background: "rgba(61,59,56,0.15)" }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7A7572" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-orange transition-colors duration-300">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                      <span className="text-gray-muted text-xs tracking-widest uppercase group-hover:text-orange transition-colors duration-300" style={{ fontFamily: "var(--font-poppins)" }}>
                        Upload Image
                      </span>
                      <span className="text-gray-muted/50 text-xs" style={{ fontFamily: "var(--font-poppins)" }}>
                        JPG, PNG, WEBP up to 10MB
                      </span>
                    </button>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                </div>

                {/* Schedule */}
                <div>
                  <label htmlFor="schedule" className="block text-xs font-bold tracking-widest uppercase text-gray-muted mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    Preferred Schedule
                  </label>
                  <select
                    id="schedule" name="schedule"
                    value={form.schedule} onChange={handleChange}
                    className="w-full bg-gray-mid/30 border border-gray-mid text-white-star text-sm px-4 py-3.5 outline-none focus:border-orange transition-colors duration-300 appearance-none"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    <option value="" style={{ background: "#1A1917" }}>Select a time slot</option>
                    {scheduleOptions.map((s) => (
                      <option key={s} value={s} style={{ background: "#1A1917" }}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Inspection checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input type="checkbox" name="inspection" checked={form.inspection} onChange={handleChange} className="sr-only" />
                    <div
                      className="w-5 h-5 border border-gray-mid group-hover:border-orange transition-colors duration-300 flex items-center justify-center"
                      style={{ background: form.inspection ? "#E8541A" : "rgba(61,59,56,0.3)", borderColor: form.inspection ? "#E8541A" : undefined }}
                    >
                      {form.inspection && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1A1917" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-dust text-sm leading-relaxed" style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}>
                    Schedule an <span className="text-white-star font-bold">Inspection / Site Visit</span> — our engineer will personally assess your property at no additional cost.
                  </span>
                </label>

                {/* Fee */}
                <div className="flex items-center gap-3 py-4 border-t border-gray-mid/40">
                  <span className="font-black text-orange text-2xl" style={{ fontFamily: "var(--font-poppins)" }}>₱50</span>
                  <span className="text-gray-muted text-xs leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
                    For quotation only. Payable via GCash <span className="text-white-star font-bold">0969 604 8041</span> upon confirmation.
                  </span>
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="text-red-400 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
                    Something went wrong. Please email us directly at lsscorporation@betelgeusesolar.com
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="relative w-full overflow-hidden bg-orange text-gray-deep py-4 font-black tracking-widest uppercase text-sm group disabled:opacity-70"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <span className="relative z-10">
                    {status === "submitting" ? "Sending…" : "Send Message"}
                  </span>
                  <span className="absolute inset-0 bg-orange-light translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
