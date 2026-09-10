"use client";

import React from "react";
import { motion } from "framer-motion";
import HoverButton from "./HoverButton";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const Landing = () => {
  return (
    <section className="relative flex flex-col min-h-screen bg-foreground pt-[120px] md:pt-[140px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/landing.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/80" />

      {/* Technical top bar */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16 flex items-center justify-between font-body text-xs uppercase tracking-[0.2em] text-logo-light/80">
        <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          Dotslash <span className="text-primary">/</span>&apos;26
        </motion.span>
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="hidden md:inline"
        >
          CSE · CET
        </motion.span>
        <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
          MMXXVI
        </motion.span>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-24 left-4 md:left-8 w-10 h-10 md:w-14 md:h-14 border-t border-l border-logo-light/40 pointer-events-none z-10" />
      <div className="absolute top-24 right-4 md:right-8 w-10 h-10 md:w-14 md:h-14 border-t border-r border-logo-light/40 pointer-events-none z-10" />

      {/* Headline */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16 py-16">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="font-body text-sm font-medium uppercase tracking-[0.3em] text-logo-light/80 mb-6 md:mb-10"
        >
          01 / Build
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="font-display font-semibold uppercase leading-[0.92] tracking-tight text-logo-light text-[clamp(3.5rem,10vw,11rem)]"
        >
          BUILD THE
          <br />
          <span className="text-primary">BLUE FUTURE.</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="max-w-xl mt-8 md:mt-10"
        >
          <p className="font-body text-base md:text-lg text-logo-light/85 leading-relaxed">
            DotSlash &apos;26 is where technology meets thrill — a techno-cultural
            festival engineered by the CSE department, built for people who
            make things.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="flex flex-wrap items-center gap-4 mt-10 md:mt-12"
        >
          <HoverButton url="/events" text="Explore" size="lg" />
          <HoverButton url="/#about" text="Learn More" variant="light" size="lg" />
        </motion.div>
      </div>

      {/* Bottom meta strip */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16 pb-8">
        <div className="border-t border-dashed border-logo-light/40 pt-5 flex flex-wrap items-center justify-between font-body text-xs uppercase tracking-[0.2em] text-logo-light/70">
          <span>Build / Create / Break / Repeat</span>
          <span className="hidden md:inline text-primary">/ Dotslash </span>
          <span>Technocultural Fest 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Landing;