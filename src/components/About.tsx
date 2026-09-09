"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const STATS = [
  { label: "CGPA at VIT", target: 8.35, decimals: 2 },
  { label: "Months at TCS", target: 19 },
  { label: "IEEE members led", target: 100, suffix: "+" },
];

const SKILL_GROUPS = [
  { group: "Business", skills: ["Strategic thinking", "Business analysis", "Stakeholder management", "Project management", "Process optimization"] },
  { group: "Analytics", skills: ["Power BI", "SQL", "Python", "Advanced Excel", "Dashboarding"] },
  { group: "Technical", skills: ["C / C++", "Linux", "Bash", "Git", "JIRA"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "var(--surface)" }}>
      <div className="container-page grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
            Fig. 02 — About
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl" style={{ color: "var(--ink)" }}>
            From firmware to strategy.
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-4 border-y py-6" style={{ borderColor: "var(--line)" }}>
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
            Systems at VIT (8.35 CGPA) and nineteen months as a Systems Engineer at
            Tata Consultancy Services — writing embedded C/C++ for medical devices,
            debugging distributed systems, and translating functional requirements
            into working software.
          </p>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            What I actually enjoyed about that job wasn&rsquo;t the code — it was the
            root-cause analysis, the cross-functional coordination across global
            teams, and turning a messy defect report into a clear plan. That&rsquo;s
            the instinct I&rsquo;m now pointing at Founder&rsquo;s Office and
            Marketing roles.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {SKILL_GROUPS.map((g) => (
              <div key={g.group} className="flex flex-wrap items-center gap-2">
                <span className="font-mono w-24 shrink-0 text-[11px] uppercase tracking-[0.1em]" style={{ color: "var(--accent)" }}>
                  {g.group}
                </span>
                {g.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border px-2.5 py-1 text-xs font-medium"
                    style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
