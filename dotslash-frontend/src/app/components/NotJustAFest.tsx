"use client"

import React from "react";
import dsolve from "@/app/assets/DSolve.png";
import dotnight from "@/app/assets/dotnight.png";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

const explore = [
  {
    index: "04",
    title: "Panel Discussions",
    body: "Sharp minds, sharper takes. Industry voices go head to head on what matters in tech today.",
  },
  {
    index: "05",
    title: "Workshops",
    body: "Get your hands on the stack. Build real things, guided by people who ship every day.",
  },
  {
    index: "06",
    title: "Talk Sessions",
    body: "Short, honest, and dense. Ideas you can actually carry back to your next project.",
  },
];

const NotJustAFest = () => {
  return (
    <section className="relative bg-background py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-foreground-subtle mb-6">
          <span>03 — Experiences</span>
          <span className="flex-1 border-t border-dashed border-foreground/25" />
          <span className="text-primary">/</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="font-display font-medium uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(2.5rem,6vw,6rem)]"
          >
            Not just
            <br />
            a <span className="text-primary">fest.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed max-w-md lg:pb-4"
          >
            Discover new ideas, push boundaries, and dive into experiences that
            inspire. DotSlash &apos;26 is all about exploration.
          </motion.p>
        </div>

        {/* Featured experiences with imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-6 md:mb-10">
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            href="#"
            className="group bg-background border border-border transition-all duration-200 hover:border-primary hover:-translate-y-1 flex flex-col"
          >
            <div className="relative aspect-[4/3] bg-surface border-b border-border overflow-hidden">
              <Image
                src={dsolve}
                alt="DSolve"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.03]"
                width={800}
                height={600}
              />
              <span className="absolute top-4 left-4 bg-foreground text-logo-light font-display text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5">
                12-Hour Hacknight
              </span>
            </div>
            <div className="p-6 md:p-8 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-medium uppercase text-foreground text-2xl md:text-3xl tracking-tight">
                  DSolve
                </h3>
                <p className="font-body text-base text-foreground-muted leading-relaxed mt-3">
                  A 12-hour hacknight to innovate, build, and compete. Team up,
                  code hard, and bring ideas to life.
                </p>
              </div>
              <span className="font-display text-primary text-xl leading-none group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                →
              </span>
            </div>
          </motion.a>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            href="#"
            className="group bg-background border border-border transition-all duration-200 hover:border-primary hover:-translate-y-1 flex flex-col"
          >
            <div className="relative aspect-[4/3] bg-surface border-b border-border overflow-hidden">
              <Image
                src={dotnight}
                alt="DotNight"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.03]"
                width={800}
                height={600}
              />
              <span className="absolute top-4 left-4 bg-foreground text-logo-light font-display text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5">
                Performances Night
              </span>
            </div>
            <div className="p-6 md:p-8 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display font-medium uppercase text-foreground text-2xl md:text-3xl tracking-tight">
                  DotNight
                </h3>
                <p className="font-body text-base text-foreground-muted leading-relaxed mt-3">
                  A night of electrifying performances and artistic expression.
                  Lose yourself in the music, dance, and creativity all around you.
                </p>
              </div>
              <span className="font-display text-primary text-xl leading-none group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                →
              </span>
            </div>
          </motion.a>
        </div>

        {/* Text cells */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {explore.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1 + i * 0.1}
              className="bg-background border border-border hover:border-primary transition-colors duration-200 p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-medium text-primary text-xl leading-none">
                  {item.index}
                </span>
                <span className="w-2 h-2 rounded-full bg-foreground-subtle" />
              </div>
              <h3 className="font-display font-medium uppercase text-foreground text-xl md:text-2xl tracking-tight">
                {item.title}
              </h3>
              <p className="font-body text-base text-foreground-muted leading-relaxed mt-3">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-24 md:mt-36">
          <div className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-foreground-subtle mb-6">
            <span className="text-primary">+</span>
            <span className="flex-1 border-t border-dashed border-foreground/25" />
            <span>Explore</span>
          </div>
          <h2 className="font-display font-medium uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(2.2rem,5vw,5rem)]">
            The power to <span className="text-primary">explore.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default NotJustAFest;