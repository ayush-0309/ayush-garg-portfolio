"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Shelf, { PanelId } from "./Shelf";
import { usePlant } from "./PlantContext";
import HomePanel from "./panels/HomePanel";
import AboutPanel from "./panels/AboutPanel";
import WorkPanel from "./panels/WorkPanel";
import LeadershipPanel from "./panels/LeadershipPanel";
import AchievementsPanel from "./panels/AchievementsPanel";
import ContactPanel from "./panels/ContactPanel";

const PANELS: Record<Exclude<PanelId, "home">, React.ComponentType> = {
  about: AboutPanel,
  work: WorkPanel,
  leadership: LeadershipPanel,
  achievements: AchievementsPanel,
  contact: ContactPanel,
};

export default function MainStage({ rightSlot }: { rightSlot?: React.ReactNode }) {
  const [active, setActive] = useState<PanelId>("home");
  const { markVisited, visitedCount } = usePlant();
  const [visited, setVisited] = useState<string[]>([]);

  function select(id: PanelId) {
    setActive(id);
    markVisited(id);
    setVisited((v) => (v.includes(id) ? v : [...v, id]));
  }

  const ActivePanel = active === "home" ? HomePanel : PANELS[active];

  return (
    <div className="flex h-full w-full items-center gap-6 lg:gap-10">
      <div className="hidden w-48 shrink-0 md:block lg:w-56">
        <Shelf active={active} onSelect={select} visited={visited} />
      </div>

      <div className="relative min-h-0 flex-1">
        <div
          className="no-scrollbar relative mx-auto flex h-[min(78vh,640px)] w-full max-w-2xl flex-col justify-center overflow-y-auto rounded-2xl border px-6 py-8 sm:px-10"
          style={{ borderColor: "var(--line)", background: "var(--surface)", boxShadow: `0 20px 50px ${"var(--shadow)"}` }}
        >
          {active !== "home" && (
            <button
              onClick={() => setActive("home")}
              className="focus-ring mb-4 flex w-fit items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
              style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
            >
              ← Desk
            </button>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <ActivePanel />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="hidden w-48 shrink-0 lg:block">{rightSlot}</div>

      {/* mobile shelf as a row of tabs below the card */}
      <div className="fixed inset-x-0 bottom-3 z-20 flex justify-center md:hidden">
        <div className="flex gap-1 rounded-full border px-1.5 py-1.5" style={{ borderColor: "var(--line)", background: "var(--surface)" }}>
          {(["home", "about", "work", "leadership", "achievements", "contact"] as PanelId[]).map((id) => (
            <button
              key={id}
              onClick={() => select(id)}
              className="focus-ring rounded-full px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide"
              style={{
                background: active === id ? "var(--wood-deep)" : "transparent",
                color: active === id ? "var(--brass-bright)" : "var(--ink-soft)",
              }}
            >
              {id === "home" ? "Desk" : id.slice(0, 4)}
            </button>
          ))}
        </div>
      </div>
      <span className="sr-only" aria-live="polite">
        {visitedCount} of 5 sections explored
      </span>
    </div>
  );
}
