"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const STATS = [
  { label: "CGPA at VIT", target: 8.35, decimals: 2 },
  { label: "Months at TCS", target: 19 },
  { label: "IEEE members led", target: 100, suffix: "+" },
];

const FACTS = [
  { label: "Location", value: "Gurugram, India" },
  { label: "Focus", value: "Founder's Office · Marketing" },
  { label: "Status", value: "Open to opportunities, 2026" },
];

const SKILL_GROUPS = [
  {
    group: "Business",
    skills: [
      "Strategic thinking",
      "Business analysis",
      "Stakeholder management",
      "Cross-functional collaboration",
      "Project management",
      "Problem solving",
      "Process optimization",
    ],
  },
  { group: "Analytics", skills: ["Dashboarding", "Data analysis", "Power BI", "SQL", "Python", "Advanced Excel"] },
  { group: "Technical", skills: ["C / C++", "Linux", "Bash", "Git", "JIRA", "Claude Code"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-page">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
              About
            </p>
            <h2 className="mt-4 text-4xl sm:text-5xl" style={{ color: "var(--ink)" }}>
              From engineering
              <br />
              to strategy.
            </h2>

            <div
              className="mt-8 grid grid-cols-3 gap-4 rounded-xl border p-5"
              style={{ borderColor: "var(--line)", background: "var(--surface-raised)" }}
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl" style={{ color: "var(--ink)" }}>
                    <CountUp target={s.target} decimals={s.decimals} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.06em]" style={{ color: "var(--ink-faint)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col rounded-xl border" style={{ borderColor: "var(--line)" }}>
              {FACTS.map((f, i) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between gap-4 px-5 py-3.5"
                  style={{ borderTop: i === 0 ? "none" : "1px solid var(--line)" }}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--ink-faint)" }}>
                    {f.label}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              I&rsquo;m pursuing a PGP in Technology &amp; Business Management at
              Masters&rsquo; Union, after a B.Tech in Computer Science &amp; Business
              Systems at VIT (8.35 CGPA) and nineteen months as a Software Engineer at
              Tata Consultancy Services — where I worked on a firmware project for
              medical devices, writing C/C++, debugging distributed systems, and
              translating functional requirements into working software.
            </p>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              What I actually enjoyed about that job wasn&rsquo;t the code — it was the
              root-cause analysis, the cross-functional coordination across global
              teams, and turning a messy defect report into a clear plan. That&rsquo;s
              the instinct I&rsquo;m now pointing at Founder&rsquo;s Office and
              Marketing roles.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 border-t pt-10"
          style={{ borderColor: "var(--line)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
            Skills
          </p>
          <div className="mt-5 flex flex-col gap-5">
            {SKILL_GROUPS.map((g) => (
              <div key={g.group} className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "var(--ink-faint)" }}>
                  {g.group}
                </span>
                <span className="hidden h-px flex-1 sm:block" style={{ background: "var(--line)" }} />
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border px-3 py-1.5 text-xs font-medium"
                      style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
