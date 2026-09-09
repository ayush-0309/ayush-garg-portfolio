"use client";

import { motion } from "framer-motion";
import MainStage from "@/components/MainStage";
import PlantColumn from "@/components/PlantColumn";
import { usePlant } from "@/components/PlantContext";

function DeskDecor() {
  return (
    <>
      {/* cricket ball, top-left */}
      <motion.div
        initial={{ opacity: 0, y: -10, rotate: -8 }}
        animate={{ opacity: 1, y: 0, rotate: -8 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pointer-events-none absolute left-[6%] top-[10%] hidden h-10 w-10 md:block"
      >
        <svg viewBox="0 0 40 40" className="h-full w-full drop-shadow-md">
          <circle cx="20" cy="20" r="18" fill="var(--leather)" />
          <path d="M8 10 Q20 20 8 30" fill="none" stroke="#f4ede1" strokeWidth="1.4" strokeDasharray="2 1.6" />
        </svg>
      </motion.div>

      {/* bat, bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pointer-events-none absolute bottom-[8%] left-[3%] hidden h-24 w-10 rotate-[18deg] md:block"
      >
        <svg viewBox="0 0 40 100" className="h-full w-full drop-shadow-md">
          <rect x="14" y="0" width="12" height="66" rx="4" fill="#e4c48a" />
          <rect x="12" y="60" width="16" height="34" rx="5" fill="#7a4a26" />
        </svg>
      </motion.div>

      {/* mug, top-right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="pointer-events-none absolute right-[5%] top-[12%] hidden h-12 w-12 md:block"
      >
        <svg viewBox="0 0 40 40" className="h-full w-full drop-shadow-md">
          <path d="M8 6 L28 6 L25 34 L11 34 Z" fill="var(--wood-deep)" />
          <ellipse cx="18" cy="6" rx="10" ry="3" fill="var(--wood-dark)" />
          <path d="M27 12 Q38 14 27 24" fill="none" stroke="var(--wood-deep)" strokeWidth="2.6" />
        </svg>
      </motion.div>
    </>
  );
}

function MobilePlantBadge() {
  const { growth } = usePlant();
  return (
    <div
      className="fixed right-3 top-3 z-20 flex items-center gap-1.5 rounded-full border px-3 py-1.5 md:hidden"
      style={{ borderColor: "var(--line)", background: "var(--surface)" }}
    >
      <span style={{ color: "var(--plant)" }}>🌱</span>
      <span className="font-mono-stat text-[10px] uppercase tracking-wide" style={{ color: "var(--ink-soft)" }}>
        {growth}%
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="relative h-dvh w-full overflow-y-auto md:overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 0%, var(--wall-soft) 0%, var(--wall) 55%)",
      }}
    >
      <header className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 sm:px-8">
        <span className="font-mono-stat text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink-soft)" }}>
          AG · desk
        </span>
      </header>

      <DeskDecor />
      <MobilePlantBadge />

      <div className="mx-auto flex min-h-dvh w-full max-w-6xl items-center px-5 py-20 sm:px-8 md:h-full md:py-6">
        <MainStage rightSlot={<PlantColumn />} />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-10 md:block"
        style={{ background: "linear-gradient(180deg, transparent, var(--wood-deep) 320%)" }}
      />
    </div>
  );
}
