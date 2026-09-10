"use client";

import { motion } from "framer-motion";

const BULLETS = [
  "Led a 100+ member IEEE student chapter, driving engagement through 10+ technical events.",
  "Raised sponsorships by 30% (₹40,000+) through industry outreach and relationship building.",
  "Ran end-to-end speaker sessions with leaders from Google and Microsoft for 100–200+ attendees.",
];

const CERTS = [
  { name: "Foundations of Digital Marketing & E-commerce", org: "Coursera · Google", date: "Mar 2026" },
  { name: "Product Management Fundamentals", org: "Udemy", date: "Jan 2026" },
];

const HONOURS = [
  { year: "2018", title: "National Champion (U-16), Javelin Throw — National Youth Games Committee" },
  { year: "2017", title: "Certificate of Merit — Subject Topper in Mathematics (97%)" },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 md:py-32" style={{ background: "var(--paper)" }}>
      <div className="container-page grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
            Leadership
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl" style={{ color: "var(--ink)" }}>
            Chairperson, IEEE-SSIT VIT
          </h2>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em]" style={{ color: "var(--ink-faint)" }}>
            Jan 2022 — Jan 2023
          </p>
          <ul className="mt-6 space-y-3">
            {BULLETS.map((b) => (
              <li key={b} className="flex gap-3 text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-10"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--accent)" }}>
              Certifications
            </p>
            <div className="mt-3 flex flex-col divide-y" style={{ borderColor: "var(--line)" }}>
              {CERTS.map((c) => (
                <div key={c.name} className="flex items-baseline justify-between gap-4 border-t py-2.5 first:border-t-0" style={{ borderColor: "var(--line)" }}>
                  <span className="text-sm" style={{ color: "var(--ink)" }}>
                    {c.name}
                  </span>
                  <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.06em]" style={{ color: "var(--ink-faint)" }}>
                    {c.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--accent)" }}>
              Achievements
            </p>
            <div className="mt-3 flex flex-col gap-3">
              {HONOURS.map((h) => (
                <div key={h.title} className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold" style={{ color: "var(--ink-faint)" }}>
                    {h.year}
                  </span>
                  <span className="text-sm" style={{ color: "var(--ink-soft)" }}>
                    {h.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
