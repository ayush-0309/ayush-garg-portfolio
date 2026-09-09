"use client";

import CountUp from "../CountUp";

const STATS = [
  { label: "CGPA at VIT", target: 8.35, decimals: 2 },
  { label: "Months at TCS", target: 19 },
  { label: "IEEE members led", target: 100, suffix: "+" },
];

const SKILL_GROUPS = [
  { group: "Business", skills: ["Strategic thinking", "Business analysis", "Stakeholder mgmt", "Project management"] },
  { group: "Analytics", skills: ["Power BI", "SQL", "Python", "Advanced Excel"] },
  { group: "Technical", skills: ["C/C++", "Linux", "Bash", "Git"] },
];

export default function AboutPanel() {
  return (
    <div>
      <p className="font-mono-stat mb-2 text-xs uppercase tracking-[0.28em]" style={{ color: "var(--brass)" }}>
        About
      </p>
      <h2 className="text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
        A quick introduction
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        I&rsquo;m pursuing my PGP in Technology &amp; Business Management at Masters&rsquo;
        Union, after a B.Tech in Computer Science &amp; Business Systems at VIT and
        nineteen months as a Systems Engineer at Tata Consultancy Services — building
        embedded C/C++ software for medical devices, and translating messy requirements
        into working systems. Now I&rsquo;m pointed at Founder&rsquo;s Office and
        Marketing: same instinct for structured problem-solving, aimed at business
        instead of firmware.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-4 border-y py-5" style={{ borderColor: "var(--line)" }}>
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="text-2xl" style={{ color: "var(--ink)" }}>
              <CountUp target={s.target} decimals={s.decimals} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.08em]" style={{ color: "var(--ink-soft)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {SKILL_GROUPS.map((g) => (
          <div key={g.group} className="flex flex-wrap items-center gap-2">
            <span className="font-mono-stat text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--brass)" }}>
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
    </div>
  );
}
