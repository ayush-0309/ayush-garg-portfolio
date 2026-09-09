"use client";

import { motion } from "framer-motion";

export default function Plant({ stage }: { stage: number }) {
  const s = Math.max(0, Math.min(4, stage));

  return (
    <svg viewBox="0 0 120 160" className="h-full w-full" aria-hidden="true">
      {/* pot */}
      <path d="M 34 118 L 86 118 L 78 155 L 42 155 Z" fill="var(--wood-dark)" />
      <rect x="30" y="108" width="60" height="14" rx="4" fill="var(--wood-deep)" />
      <ellipse cx="60" cy="118" rx="26" ry="6" fill="#3a2b1c" />

      {s === 0 && <circle cx="60" cy="112" r="5" fill="var(--plant)" />}

      {s >= 1 && (
        <motion.g initial={{ scaleY: 0.5, opacity: 0.5 }} animate={{ scaleY: 1, opacity: 1 }} transition={{ duration: 0.7 }} style={{ transformOrigin: "60px 112px" }}>
          <path
            d="M 60 112 C 58 90 58 70 60 48"
            fill="none"
            stroke="#4f7a3d"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {s >= 2 && (
            <path d="M 60 96 C 40 92 30 78 34 62 C 50 66 60 78 60 96 Z" fill="var(--plant)" stroke="#3f6631" strokeWidth="1" />
          )}
          {s >= 2 && (
            <path d="M 60 96 C 80 92 90 78 86 62 C 70 66 60 78 60 96 Z" fill="#6ba151" stroke="#3f6631" strokeWidth="1" />
          )}
          {s >= 3 && (
            <path d="M 60 76 C 44 70 36 54 42 40 C 58 46 64 60 60 76 Z" fill="var(--plant)" stroke="#3f6631" strokeWidth="1" />
          )}
          {s >= 3 && (
            <path d="M 60 76 C 76 70 84 54 78 40 C 62 46 56 60 60 76 Z" fill="#6ba151" stroke="#3f6631" strokeWidth="1" />
          )}
        </motion.g>
      )}

      {s >= 4 && (
        <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ transformOrigin: "60px 44px" }}>
          <circle cx="60" cy="44" r="8" fill="var(--leather)" />
          <path d="M 52 44 Q 60 36 68 44 Q 60 42 52 44" fill="none" stroke="#f4ede1" strokeWidth="1" strokeDasharray="1.5 1.5" />
        </motion.g>
      )}
    </svg>
  );
}
