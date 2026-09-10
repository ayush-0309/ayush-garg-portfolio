"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  { range: "2018 – 20", title: "Delhi Public School, Ghaziabad", note: "CBSE Class XII — 94.4%" },
  { range: "2020 – 24", title: "VIT — B.Tech, CS & Business Systems", note: "CGPA 8.35 · Chairperson, IEEE-SSIT" },
  { range: "2024 – 26", title: "Tata Consultancy Services", note: "Software Engineer" },
  { range: "2026 – Present", title: "Masters' Union", note: "PGP, Technology & Business Management" },
];

export default function Timeline() {
  return (
    <section id="journey" className="py-24 md:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
            Journey
          </p>
          <h2 className="mt-4 max-w-xl text-4xl sm:text-5xl" style={{ color: "var(--ink)" }}>
            Where it&rsquo;s led so far
          </h2>
        </motion.div>

        <div className="no-scrollbar overflow-x-auto pb-2">
          <div className="relative flex min-w-[720px] gap-2 sm:min-w-0">
            <div className="pointer-events-none absolute left-0 right-0 top-[7px] h-px" style={{ background: "var(--line)" }} />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="pointer-events-none absolute left-0 right-0 top-[7px] h-px origin-left"
              style={{ background: "var(--accent)" }}
            />

            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex-1 px-1"
              >
                <span
                  className="relative z-10 block h-3.5 w-3.5 rounded-full"
                  style={{
                    background: i === MILESTONES.length - 1 ? "var(--accent)" : "var(--surface)",
                    border: `2.5px solid ${i === MILESTONES.length - 1 ? "var(--accent)" : "var(--ink-faint)"}`,
                  }}
                />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--accent)" }}>
                  {m.range}
                </p>
                <p className="mt-1.5 text-base font-semibold leading-snug" style={{ color: "var(--ink)" }}>
                  {m.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {m.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
