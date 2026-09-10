"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em]"
            style={{ color: "var(--accent)" }}
          >
            Founder&rsquo;s Office · Marketing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-3xl text-[2.75rem] leading-[1.05] sm:text-6xl md:text-6xl lg:text-7xl"
            style={{ color: "var(--ink)" }}
          >
            Ayush Garg turns ambiguity into a{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              plan
            </span>{" "}
            people can act on.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 max-w-xl text-lg leading-relaxed sm:text-xl"
            style={{ color: "var(--ink-soft)" }}
          >
            Technology &amp; Business Management student at Masters&rsquo; Union,
            building toward Founder&rsquo;s Office and Marketing roles — with a
            foundation in structured problem-solving from nineteen months as a
            Systems Engineer at TCS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="focus-ring rounded-full px-6 py-3 text-sm font-semibold"
              style={{ background: "var(--ink)", color: "var(--paper)" }}
            >
              See the work
            </a>
            <a
              href="mailto:ayush.garg2027@mastersunion.org"
              className="focus-ring rounded-full border px-6 py-3 text-sm font-semibold"
              style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/ayush0309/"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-full border px-6 py-3 text-sm font-semibold"
              style={{ borderColor: "var(--line)", color: "var(--ink-soft)" }}
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[320px] md:max-w-none"
        >
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border"
            style={{ borderColor: "var(--line)", background: "var(--surface-raised)" }}
          >
            {/* Placeholder — replace with a real photo at /public/photo.jpg
                and swap this block for: <Image src="/photo.jpg" alt="Ayush Garg" fill className="object-cover" /> */}
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
              <span
                className="flex h-20 w-20 items-center justify-center rounded-full text-2xl italic"
                style={{
                  fontFamily: "var(--font-display), serif",
                  background: "color-mix(in srgb, var(--accent) 16%, transparent)",
                  color: "var(--accent)",
                  border: "1px solid color-mix(in srgb, var(--accent) 35%, transparent)",
                }}
              >
                AG
              </span>
              <p className="text-xs font-medium uppercase tracking-[0.1em]" style={{ color: "var(--ink-faint)" }}>
                Photo coming soon
              </p>
            </div>
          </div>
          <div
            className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] blur-2xl"
            style={{ background: "var(--accent-bright)", opacity: 0.18 }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="pointer-events-none absolute -right-32 top-10 hidden h-96 w-96 rounded-full blur-[120px] md:block"
        style={{ background: "var(--accent-bright)", opacity: 0.22 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="pointer-events-none absolute -left-24 bottom-0 hidden h-64 w-64 rounded-full blur-[110px] md:block"
        style={{ background: "var(--accent)", opacity: 0.12 }}
      />
    </section>
  );
}
