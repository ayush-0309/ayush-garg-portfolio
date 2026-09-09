"use client";

const LINKS = [
  { label: "Email", href: "mailto:ayush.garg2027@mastersunion.org" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayush0309/" },
];

export default function HomePanel() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="font-mono-stat mb-4 text-xs uppercase tracking-[0.3em]" style={{ color: "var(--brass)" }}>
        Founder&rsquo;s Office · Marketing
      </p>
      <h1 className="text-5xl italic sm:text-6xl" style={{ color: "var(--ink)" }}>
        Hey, I&rsquo;m Ayush 👋
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-soft)" }}>
        Technology &amp; Business Management student at Masters&rsquo; Union — engineer by
        training, builder by habit, and someone who&rsquo;s happiest turning a messy
        problem into a working plan. Take a look around the desk.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="focus-ring rounded-full border px-4 py-2 text-sm font-semibold"
            style={{ borderColor: "var(--line)", color: "var(--ink)" }}
          >
            {l.label}
          </a>
        ))}
      </div>
      <p className="mt-8 font-mono-stat text-[11px] uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
        Pick something off the shelf →
      </p>
    </div>
  );
}
