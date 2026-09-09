"use client";

const EXPERIENCE = {
  title: "Systems Engineer",
  org: "Tata Consultancy Services",
  time: "Jul 2024 – Feb 2026 · Bengaluru",
  bullets: [
    "Developed embedded C/C++ communication modules (UART, CAN, IPC) for an IABP medical device.",
    "Automated Linux-based validation with Bash, cutting manual testing effort by 25%.",
    "Built validation utilities supporting 8–10 healthcare product releases before deployment.",
    "Collaborated with global engineering & QA teams across distributed Agile teams.",
  ],
};

const PROJECTS = [
  { title: "Cricket Analytics Dashboard", role: "Power BI & Python · Jul 2025", result: "Interactive dashboard analyzing player performance data to drive data-backed team selection." },
  { title: "Music Streaming Platform", role: "React & Spotify API · Aug 2023", result: "Front-end app with secure auth, playlist management, and reusable component architecture." },
  { title: "Real-time Chat Application", role: "React & Firebase · Jul 2023", result: "Real-time messaging with Firebase Auth for secure group communication." },
];

export default function WorkPanel() {
  return (
    <div>
      <p className="font-mono-stat mb-2 text-xs uppercase tracking-[0.28em]" style={{ color: "var(--brass)" }}>
        Experience
      </p>
      <h2 className="text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
        Where I&rsquo;ve worked &amp; built
      </h2>

      <div className="mt-6 rounded-lg border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold" style={{ color: "var(--ink)" }}>
            {EXPERIENCE.title} · {EXPERIENCE.org}
          </h3>
          <span className="font-mono-stat text-[11px] uppercase tracking-[0.1em]" style={{ color: "var(--brass)" }}>
            {EXPERIENCE.time}
          </span>
        </div>
        <ul className="mt-2 space-y-1.5">
          {EXPERIENCE.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              <span style={{ color: "var(--brass)" }}>—</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      <p className="font-mono-stat mb-2 mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--brass)" }}>
        Projects
      </p>
      <div className="flex flex-col gap-3">
        {PROJECTS.map((p) => (
          <div key={p.title} className="rounded-lg border p-4" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold" style={{ color: "var(--ink)" }}>
                {p.title}
              </h3>
              <span className="font-mono-stat text-[11px] uppercase tracking-[0.1em]" style={{ color: "var(--brass)" }}>
                {p.role}
              </span>
            </div>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              {p.result}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
