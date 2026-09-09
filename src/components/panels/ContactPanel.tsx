"use client";

import { usePlant } from "../PlantContext";

const CHANNELS = [
  { label: "Email", value: "ayush.garg2027@mastersunion.org", href: "mailto:ayush.garg2027@mastersunion.org" },
  { label: "LinkedIn", value: "linkedin.com/in/ayush0309", href: "https://www.linkedin.com/in/ayush0309/" },
];

export default function ContactPanel() {
  const { growth } = usePlant();

  return (
    <div>
      <p className="font-mono-stat mb-2 text-xs uppercase tracking-[0.28em]" style={{ color: "var(--brass)" }}>
        Get in touch
      </p>
      <h2 className="text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
        Let&rsquo;s talk
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        Open to Founder&rsquo;s Office and Marketing conversations — internships,
        projects, or just comparing notes on building things.
      </p>
      <div className="mt-6 flex flex-col gap-2.5">
        {CHANNELS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="focus-ring flex items-center justify-between rounded-lg border px-4 py-3 transition-colors hover:opacity-80"
            style={{ borderColor: "var(--line)" }}
          >
            <span className="font-mono-stat text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--brass)" }}>
              {c.label}
            </span>
            <span className="text-sm font-medium" style={{ color: "var(--ink)" }}>
              {c.value}
            </span>
          </a>
        ))}
      </div>
      <p className="mt-5 font-mono-stat text-[11px] uppercase tracking-[0.16em]" style={{ color: "var(--ink-soft)" }}>
        By the way — that plant is {growth}% grown from you being here.
      </p>
    </div>
  );
}
