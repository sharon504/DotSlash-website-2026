"use client"
import Image from "next/image";
import TshirtImage from "../assets/dotshirt.png";
import HoverButton from "./HoverButton";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export default function Tshirt() {
  return (
    <section id="tshirt" className="relative bg-surface py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-foreground-subtle mb-6">
          <span>04 — Merch</span>
          <span className="flex-1 border-t border-dashed border-foreground/25" />
          <span className="text-primary">/</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="font-display font-semibold uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(2.5rem,6vw,6rem)]"
            >
              Grab your
              <br />
              <span className="text-primary">tees.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              className="font-body text-base md:text-lg text-foreground-muted leading-relaxed mt-8"
            >
              DotSlash &apos;26 merch is here! This isn&apos;t just a T-shirt — it&apos;s a
              badge of honor, a symbol of the electrifying energy that defines the
              fest. Designed for those who live and breathe tech, it&apos;s bold,
              exclusive, and built to make a statement.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.25}
              className="font-body text-base text-foreground-muted leading-relaxed mt-4"
            >
              Limited edition and up for grabs — once they&apos;re gone, they&apos;re
              gone. Lock in your order now and be part of something bigger.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.35}
              className="flex items-center gap-6 mt-10"
            >
              <HoverButton url="#" text="Get the tee" size="lg" />
              <span className="font-body text-xs uppercase tracking-[0.2em] text-foreground-subtle hidden sm:inline">
                Limited <span className="text-primary">/</span> 2026
              </span>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="relative bg-background border border-border"
          >
            <div className="absolute top-3 left-3 w-6 h-6 md:w-8 md:h-8 border-t border-l border-primary pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-6 h-6 md:w-8 md:h-8 border-b border-r border-primary pointer-events-none" />
            <div className="relative flex items-center justify-center p-8 md:p-12">
              <Image
                src={TshirtImage}
                alt="DotSlash '26 t-shirt"
                className="object-contain w-full h-auto max-w-[420px] lg:max-w-[480px]"
                width={780}
                height={780}
              />
            </div>
            <div className="border-t border-border px-4 py-3 flex items-center justify-between font-body text-[10px] uppercase tracking-[0.25em] text-foreground-subtle">
              <span>DotSlash CET</span>
              <span className="text-primary">No. 01 / 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}