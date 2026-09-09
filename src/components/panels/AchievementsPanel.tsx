"use client";

const HONOURS = [
  { year: "2018", title: "National Champion (U-16), Javelin Throw — National Youth Games Committee" },
  { year: "2018", title: "1st Position, Inter-House Basketball Tournament" },
  { year: "2017", title: "Certificate of Merit — Subject Topper in Mathematics (97%)" },
  { year: "—", title: "Runner-up, Inter-House Cricket Competition" },
];

export default function AchievementsPanel() {
  return (
    <div>
      <p className="font-mono-stat mb-2 text-xs uppercase tracking-[0.28em]" style={{ color: "var(--brass)" }}>
        Achievements
      </p>
      <h2 className="text-3xl sm:text-4xl" style={{ color: "var(--ink)" }}>
        A few wins along the way
      </h2>
      <div className="mt-6 flex flex-col divide-y" style={{ borderColor: "var(--line)" }}>
        {HONOURS.map((h) => (
          <div key={h.title} className="flex items-baseline gap-4 border-t py-3.5 first:border-t-0" style={{ borderColor: "var(--line)" }}>
            <span className="font-mono-stat text-sm" style={{ color: "var(--brass)" }}>
              {h.year}
            </span>
            <span className="text-base" style={{ color: "var(--ink)" }}>
              {h.title}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
        Also somewhere on record: multiple podium finishes in district javelin
        competitions, back when engineering was still a few years off.
      </p>
    </div>
  );
}
