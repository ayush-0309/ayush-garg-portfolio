"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "goSTOPS Growth Strategy",
    stack: "Marketing Strategy · GTM",
    time: "2026",
    detail:
      "Part of a 5-person team that won Masters' Union's Marketing Strategies One-Day Challenge — a growth plan tackling goSTOPS' seasonal occupancy gap by building new demand in the JAS quarter through targeted segments and differentiated experiences.",
    featured: true,
  },
  {
    title: "Cricket Analytics Dashboard",
    stack: "Power BI · Python",
    time: "Jul 2025",
    detail:
      "Interactive dashboard analyzing player performance datasets, with KPI metrics designed to support data-driven team selection.",
    featured: false,
  },
  {
    title: "Music Streaming Platform",
    stack: "React · Spotify API",
    time: "Aug 2023",
    detail:
      "Front-end app with secure authentication, playlist management, and a reusable component architecture built for scale.",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
            Projects
          </p>
          <h2 className="mt-4 max-w-xl text-4xl sm:text-5xl" style={{ color: "var(--ink)" }}>
            Things I&rsquo;ve built end to end
          </h2>
        </motion.div>

        <div className="grid gap-5">
          {PROJECTS.filter((p) => p.featured).map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="lift-on-hover flex flex-col gap-1 rounded-xl border p-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
              style={{ borderColor: "var(--accent)", background: "color-mix(in srgb, var(--accent) 7%, var(--surface-raised))" }}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em]"
                    style={{ background: "var(--accent)", color: "var(--surface)" }}
                  >
                    🏆 Winner
                  </span>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em]"
                    style={{ background: "color-mix(in srgb, var(--accent) 14%, transparent)", color: "var(--accent)" }}
                  >
                    {p.stack}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "var(--ink-faint)" }}>
                    {p.time}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl leading-snug" style={{ color: "var(--ink)" }}>
                  {p.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {p.detail}
                </p>
              </div>
            </motion.div>
          ))}

          <div className="grid gap-5 sm:grid-cols-2">
            {PROJECTS.filter((p) => !p.featured).map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="lift-on-hover flex flex-col rounded-xl border p-6"
                style={{ borderColor: "var(--line)", background: "var(--surface-raised)" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em]"
                    style={{ background: "color-mix(in srgb, var(--accent) 14%, transparent)", color: "var(--accent)" }}
                  >
                    {p.stack}
                  </span>
                  <span className="text-xs font-medium" style={{ color: "var(--ink-faint)" }}>
                    {p.time}
                  </span>
                </div>
                <h3 className="mt-4 text-xl leading-snug" style={{ color: "var(--ink)" }}>
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {p.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
