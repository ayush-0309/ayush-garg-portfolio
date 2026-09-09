"use client";

const BULLETS = [
  "Led a 100+ member IEEE student chapter, driving engagement through 10+ technical events.",
  "Launched 2 flagship initiatives, expanding learning opportunities for members.",
  "Raised sponsorships by 30% (₹40,000+) through industry outreach and relationship building.",
  "Ran end-to-end speaker sessions with leaders from Google and Microsoft, 100–200+ attendees.",
  "Started the chapter's YouTube channel to build its digital presence.",
];

const CERTS = [
  { name: "Foundations of Digital Marketing & E-commerce", org: "Coursera · Google", date: "Mar 2026" },
  { name: "Product Management Fundamentals", org: "Udemy", date: "Jan 2026" },
  { name: "Power BI Master Class", org: "Udemy", date: "Nov 2025" },
  { name: "Security, Compliance & Identity Fundamentals", org: "Microsoft", date: "Jun 2023" },
];

export default function LeadershipPanel() {
  return (
    <div>
      <p className="font-mono-stat mb-2 text-xs uppercase tracking-[0.28em]" style={{ color: "var(--brass)" }}>
        Leadership
      </p>
      <h2 className="text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
        Chairperson, IEEE-SSIT VIT
      </h2>
      <p className="mt-1 font-mono-stat text-[11px] uppercase tracking-[0.1em]" style={{ color: "var(--ink-soft)" }}>
        Jan 2022 – Jan 2023
      </p>
      <ul className="mt-4 space-y-1.5">
        {BULLETS.map((b) => (
          <li key={b} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
            <span style={{ color: "var(--brass)" }}>—</span>
            {b}
          </li>
        ))}
      </ul>

      <p className="font-mono-stat mb-2 mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--brass)" }}>
        Certifications
      </p>
      <div className="flex flex-col divide-y" style={{ borderColor: "var(--line)" }}>
        {CERTS.map((c) => (
          <div key={c.name} className="flex items-baseline justify-between gap-4 border-t py-2.5 first:border-t-0" style={{ borderColor: "var(--line)" }}>
            <span className="text-sm" style={{ color: "var(--ink)" }}>
              {c.name} <span style={{ color: "var(--ink-soft)" }}>· {c.org}</span>
            </span>
            <span className="font-mono-stat shrink-0 text-[10px] uppercase tracking-[0.08em]" style={{ color: "var(--ink-soft)" }}>
              {c.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
