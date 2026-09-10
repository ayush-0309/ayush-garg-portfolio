"use client";

import { motion } from "framer-motion";

const ROLE = {
  title: "Systems Engineer",
  org: "Tata Consultancy Services",
  time: "Jul 2024 — Feb 2026",
  place: "Bengaluru",
  bullets: [
    "Developed embedded C/C++ communication modules (UART, CAN, IPC) for an IABP medical device.",
    "Automated Linux-based validation with Bash, cutting manual testing effort by 25%.",
    "Built validation utilities supporting 8–10 healthcare product releases before production.",
    "Coordinated with global engineering and QA teams across distributed Agile teams.",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32" style={{ background: "var(--paper)" }}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
            Fig. 03 — Experience
          </p>
          <h2 className="mt-4 max-w-xl text-4xl sm:text-5xl" style={{ color: "var(--ink)" }}>
            Nineteen months of shipping medical-device software
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="corner-brackets rounded-lg border p-7 md:p-10"
          style={{ borderColor: "var(--line)", background: "var(--surface)" }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b pb-5" style={{ borderColor: "var(--line)" }}>
            <div>
              <h3 className="text-2xl" style={{ color: "var(--ink)" }}>
                {ROLE.title}
              </h3>
              <p className="mt-1 text-base" style={{ color: "var(--ink-soft)" }}>
                {ROLE.org}
              </p>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "var(--ink-faint)" }}>
              {ROLE.time} · {ROLE.place}
            </span>
          </div>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {ROLE.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
