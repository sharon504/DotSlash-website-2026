"use client";

import React from "react";
import { motion } from "framer-motion";
import HoverButton from "./HoverButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const CTABand = () => {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Technical decoration */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-10 h-10 md:w-16 md:h-16 border-t border-l border-white/40 pointer-events-none" />
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 md:w-16 md:h-16 border-b border-r border-white/40 pointer-events-none" />
      <div className="absolute top-1/2 left-8 hidden lg:block font-body text-xs uppercase tracking-[0.3em] text-white/70 rotate-90 origin-left translate-y-[-50%]">
        Dotslash <span className="font-display">/</span> 2026
      </div>

      <div className="relative max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16 py-28 md:py-40">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-white/80 mb-8"
        >
          <span>07 — Build</span>
          <span className="flex-1 border-t border-dashed border-white/40" />
          <span className="font-display">/</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="font-display font-medium uppercase leading-[0.92] tracking-tight text-logo-light text-[clamp(3rem,9vw,9.5rem)]"
        >
          Ideas deserve
          <br />
          to exist.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-8"
        >
          <LinkJoin />
        </motion.div>
      </div>
    </section>
  );
};

function LinkJoin() {
  return (
    <>
      <HoverButton
        url="/events"
        text="Join now"
        size="lg"
        variant="light"
      />
      <p className="font-body text-sm uppercase tracking-[0.2em] text-white/80">
        March 2026 <span className="font-display">/</span> CET
      </p>
    </>
  );
}

export default CTABand;