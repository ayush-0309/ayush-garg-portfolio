"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter((el): el is Element => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50"
      style={{
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        background: scrolled ? "color-mix(in srgb, var(--surface) 90%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <nav className="container-page flex items-center justify-between py-4">
        <a href="#top" className="font-mono text-sm tracking-tight focus-ring rounded-sm" style={{ color: "var(--ink)" }}>
          AYUSH GARG
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="focus-ring relative block rounded-sm px-3 py-2 text-sm font-medium"
                style={{ color: active === l.href ? "var(--ink)" : "var(--ink-soft)" }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-3 right-3 h-px transition-transform duration-300"
                  style={{
                    background: "var(--accent)",
                    transform: active === l.href ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                  }}
                />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="focus-ring rounded-full border px-4 py-1.5 text-sm font-semibold"
          style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
}
