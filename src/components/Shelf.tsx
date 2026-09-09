"use client";

import { motion } from "framer-motion";

export type PanelId = "home" | "about" | "work" | "leadership" | "achievements" | "contact";

const ITEMS: { id: PanelId; label: string; icon: PanelId }[] = [
  { id: "about", label: "About", icon: "about" },
  { id: "work", label: "Work", icon: "work" },
  { id: "leadership", label: "Leadership", icon: "leadership" },
  { id: "achievements", label: "Achievements", icon: "achievements" },
  { id: "contact", label: "Contact", icon: "contact" },
];

function Icon({ id }: { id: PanelId }) {
  switch (id) {
    case "about":
      return (
        <svg viewBox="0 0 32 32" width="26" height="26">
          <path d="M4 20 Q16 6 28 20 Q16 26 4 20 Z" fill="var(--brass)" />
          <path d="M4 20 Q-2 21 -3 24 L 28 24 Q28 22 28 20 Z" fill="var(--brass-bright)" />
          <circle cx="16" cy="15" r="2.6" fill="var(--wall)" />
        </svg>
      );
    case "work":
      return (
        <svg viewBox="0 0 32 32" width="26" height="26">
          <path d="M4 26 L4 10 L12 10 L15 13 L28 13 L28 26 Z" fill="var(--wood)" />
          <path d="M4 26 L28 26 L28 12 L11 12 L4 18 Z" fill="var(--wood-light)" />
        </svg>
      );
    case "leadership":
      return (
        <svg viewBox="0 0 32 32" width="26" height="26">
          <rect x="3" y="6" width="10" height="22" rx="1.4" fill="#7a3b3b" transform="rotate(-8 8 17)" />
          <rect x="11" y="4" width="10" height="24" rx="1.4" fill="var(--brass)" transform="rotate(-2 16 16)" />
          <rect x="19" y="7" width="10" height="21" rx="1.4" fill="#3f5f4a" transform="rotate(5 24 17)" />
        </svg>
      );
    case "achievements":
      return (
        <svg viewBox="0 0 32 32" width="26" height="26">
          <rect x="12" y="24" width="8" height="4" rx="1" fill="var(--wood-dark)" />
          <rect x="13.5" y="17" width="5" height="8" fill="var(--brass-bright)" />
          <path d="M9 4 L23 4 L21 16 Q16 20 11 16 Z" fill="var(--brass-bright)" />
          <path d="M9 4 C0 4 0 15 10 14" fill="none" stroke="var(--brass-bright)" strokeWidth="2" />
          <path d="M23 4 C32 4 32 15 22 14" fill="none" stroke="var(--brass-bright)" strokeWidth="2" />
        </svg>
      );
    case "contact":
      return (
        <svg viewBox="0 0 32 32" width="26" height="26">
          <rect x="3" y="8" width="26" height="18" rx="2" fill="var(--brass)" />
          <path d="M3 8 L16 19 L29 8" fill="none" stroke="var(--wall)" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Shelf({
  active,
  onSelect,
  visited,
}: {
  active: PanelId;
  onSelect: (id: PanelId) => void;
  visited: string[];
}) {
  return (
    <div className="flex flex-col items-stretch gap-4">
      <p
        className="font-mono-stat px-1 text-[10px] uppercase tracking-[0.24em]"
        style={{ color: "var(--ink-soft)" }}
      >
        The Shelf
      </p>
      <div className="flex flex-col gap-3">
        {ITEMS.map((item, i) => {
          const isActive = active === item.id;
          const isVisited = visited.includes(item.id);
          return (
            <motion.button
              key={item.id}
              onClick={() => onSelect(item.id)}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              whileHover={{ x: 4 }}
              className="focus-ring group relative flex items-center gap-3 rounded-r-lg border-b-4 py-2.5 pl-3 pr-4 text-left"
              style={{
                background: isActive ? "var(--surface-raised)" : "transparent",
                borderColor: "var(--wood-dark)",
              }}
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                style={{ background: isActive ? "var(--wood-deep)" : "var(--wood)" }}
              >
                <Icon id={item.icon} />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
                  {item.label}
                </span>
                {isVisited && (
                  <span className="font-mono-stat text-[9px] uppercase tracking-wide" style={{ color: "var(--plant)" }}>
                    visited
                  </span>
                )}
              </span>
              {isActive && (
                <motion.span
                  layoutId="shelf-active"
                  className="absolute -right-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full"
                  style={{ background: "var(--brass-bright)" }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
      {/* shelf plank */}
      <div className="mt-1 h-3 w-full rounded-sm" style={{ background: "var(--wood-dark)", boxShadow: "0 6px 10px var(--shadow)" }} />
    </div>
  );
}
