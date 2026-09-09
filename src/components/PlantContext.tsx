"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "desk-plant-v3";
const SECTIONS_TOTAL = 5;

interface Stored {
  firstVisit: number;
  totalActiveSeconds: number;
  visitedSections: string[];
}

interface PlantContextValue {
  growth: number; // 0-100
  stage: number; // 0-4
  daysSinceFirstVisit: number;
  visitedCount: number;
  markVisited: (id: string) => void;
}

const PlantContext = createContext<PlantContextValue | null>(null);

function load(): Stored {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return { firstVisit: Date.now(), totalActiveSeconds: 0, visitedSections: [] };
}

function save(data: Stored) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

function computeGrowth(data: Stored) {
  const timeScore = Math.min(50, data.totalActiveSeconds / 6);
  const sectionScore = Math.min(50, (data.visitedSections.length / SECTIONS_TOTAL) * 50);
  return Math.min(100, Math.round(timeScore + sectionScore));
}

export function PlantProvider({ children }: { children: React.ReactNode }) {
  const dataRef = useRef<Stored>({ firstVisit: 0, totalActiveSeconds: 0, visitedSections: [] });
  const [growth, setGrowth] = useState(0);
  const [visitedCount, setVisitedCount] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    dataRef.current = load();
    setGrowth(computeGrowth(dataRef.current));
    setVisitedCount(dataRef.current.visitedSections.length);
    setDays(Math.floor((Date.now() - dataRef.current.firstVisit) / 86400000));

    const tick = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      dataRef.current = { ...dataRef.current, totalActiveSeconds: dataRef.current.totalActiveSeconds + 5 };
      save(dataRef.current);
      setGrowth(computeGrowth(dataRef.current));
    }, 5000);

    return () => window.clearInterval(tick);
  }, []);

  const markVisited = useCallback((id: string) => {
    if (dataRef.current.visitedSections.includes(id)) return;
    dataRef.current = { ...dataRef.current, visitedSections: [...dataRef.current.visitedSections, id] };
    save(dataRef.current);
    setGrowth(computeGrowth(dataRef.current));
    setVisitedCount(dataRef.current.visitedSections.length);
  }, []);

  const stage = Math.min(4, Math.floor(growth / 20));

  return (
    <PlantContext.Provider value={{ growth, stage, daysSinceFirstVisit: days, visitedCount, markVisited }}>
      {children}
    </PlantContext.Provider>
  );
}

export function usePlant() {
  const ctx = useContext(PlantContext);
  if (!ctx) throw new Error("usePlant must be used within PlantProvider");
  return ctx;
}
