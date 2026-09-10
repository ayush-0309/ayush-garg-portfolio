"use client";

import { motion } from "framer-motion";

const CHANNELS = [
  { label: "Email", value: "ayush.garg2027@mastersunion.org", href: "mailto:ayush.garg2027@mastersunion.org" },
  { label: "LinkedIn", value: "linkedin.com/in/ayush0309", href: "https://www.linkedin.com/in/ayush0309/" },
];

export default function Contact() {
  return (
    <footer id="contact" className="py-24 md:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
            Contact
          </p>
          <h2 className="mt-4 max-w-xl text-4xl sm:text-6xl" style={{ color: "var(--ink)" }}>
            Let&rsquo;s build something.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            Open to Founder&rsquo;s Office and Marketing conversations — internships,
            projects, or just comparing notes on structured problem-solving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-px overflow-hidden rounded-lg border sm:grid-cols-2"
          style={{ borderColor: "var(--line)", background: "var(--line)" }}
        >
          {CHANNELS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="focus-ring group flex items-center justify-between gap-4 p-6 transition-colors hover:opacity-80"
              style={{ background: "var(--surface)" }}
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--accent)" }}>
                  {c.label}
                </p>
                <p className="mt-1 text-base font-medium" style={{ color: "var(--ink)" }}>
                  {c.value}
                </p>
              </div>
              <span className="text-lg" style={{ color: "var(--ink-faint)" }}>
                ↗
              </span>
            </a>
          ))}
        </motion.div>

        <div
          className="mt-16 flex flex-col items-start justify-between gap-3 border-t pt-8 sm:flex-row sm:items-center"
          style={{ borderColor: "var(--line)" }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.1em]" style={{ color: "var(--ink-faint)" }}>
            Ayush Garg · Masters&rsquo; Union, Class of 2027
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.1em]" style={{ color: "var(--ink-faint)" }}>
            Built with Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
