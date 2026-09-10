"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-page">
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
          className="mt-6 max-w-3xl text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl"
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
            href="mailto:officialayushgarg@gmail.com"
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
