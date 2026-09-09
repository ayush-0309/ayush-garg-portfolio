"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    title: "Cricket Analytics Dashboard",
    stack: "Power BI · Python",
    time: "Jul 2025",
    detail:
      "Interactive dashboard analyzing player performance datasets, with KPI metrics designed to support data-driven team selection.",
  },
  {
    id: "02",
    title: "Music Streaming Platform",
    stack: "React · Spotify API",
    time: "Aug 2023",
    detail:
      "Front-end app with secure authentication, playlist management, and a reusable component architecture built for scale.",
  },
  {
    id: "03",
    title: "Real-time Chat Application",
    stack: "React · Firebase",
    time: "Jul 2023",
    detail:
      "Real-time messaging with Firebase Authentication, built to support secure group communication and collaboration.",
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
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
            Fig. 04 — Projects
          </p>
          <h2 className="mt-4 max-w-xl text-4xl sm:text-5xl" style={{ color: "var(--ink)" }}>
            Things I&rsquo;ve built end to end
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="corner-brackets flex flex-col rounded-lg border p-6"
              style={{ borderColor: "var(--line)", background: "var(--surface-raised)" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs" style={{ color: "var(--ink-faint)" }}>
                  {p.id}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.08em]" style={{ color: "var(--ink-faint)" }}>
                  {p.time}
                </span>
              </div>
              <h3 className="mt-4 text-xl leading-snug" style={{ color: "var(--ink)" }}>
                {p.title}
              </h3>
              <p className="font-mono mt-2 text-[11px] uppercase tracking-[0.08em]" style={{ color: "var(--accent)" }}>
                {p.stack}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                {p.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
