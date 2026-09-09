"use client";

import { motion } from "framer-motion";
import Plant from "./Plant";
import { usePlant } from "./PlantContext";

const STAGE_LABELS = ["Seed", "Sprouting", "Growing", "Leafing out", "In bloom"];

export default function PlantColumn() {
  const { stage, growth } = usePlant();

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-mono-stat text-[10px] uppercase tracking-[0.24em]" style={{ color: "var(--ink-soft)" }}>
        Grows while you&rsquo;re here
      </p>
      <motion.div
        key={stage}
        initial={{ scale: 0.94 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-44 w-32"
      >
        <Plant stage={stage} />
      </motion.div>
      <div className="w-full">
        <div className="h-1.5 w-full overflow-hidden rounded-full" style={{ background: "var(--line)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--plant)" }}
            animate={{ width: `${growth}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
        <p className="mt-2 text-center font-mono-stat text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--ink-soft)" }}>
          {STAGE_LABELS[stage]} · {growth}%
        </p>
      </div>
    </div>
  );
}
