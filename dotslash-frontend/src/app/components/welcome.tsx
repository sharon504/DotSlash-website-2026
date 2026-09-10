"use client";
import sphere from "../assets/final.gif";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Welcome() {
  const firstTextRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let xPercent = 0;
    let direction = -1;
    let animationId: number;

    const endPosition = Math.min(window.innerHeight * 5, 10000);

    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: endPosition,
        onUpdate: (self) => {
          direction = self.direction * -1;
        },
        invalidateOnRefresh: true,
        markers: false,
      },
      x: "-500px",
    });

    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }

      if (firstTextRef.current && secondTextRef.current) {
        gsap.set(firstTextRef.current, { xPercent: xPercent });
        gsap.set(secondTextRef.current, { xPercent: xPercent });
      }

      animationId = requestAnimationFrame(animate);
      xPercent += 0.075 * direction;
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="flex flex-col w-full bg-background pt-24 md:pt-40 overflow-hidden"
    >
      {/* Label + heading */}
      <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-foreground-subtle mb-6">
          <span>01 — About</span>
          <span className="flex-1 border-t border-dashed border-foreground/25" />
          <span className="text-primary">/</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
            className="font-display font-medium uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(2.5rem,6vw,6rem)] lg:col-span-7"
          >
            Built for people who{" "}
            <span className="text-primary">make things.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
            className="lg:col-span-5 lg:pt-4"
          >
            <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed">
              DotSlash 2026 is where technology meets thrill, creativity sparks
              innovation, and every moment is an experience to remember!
              Organized by the CSE department, this isn&apos;t just about tech —
              it&apos;s about energy, competition, and pure excitement. Dive
              into hands-on workshops, challenge yourself in mind-bending
              contests, and explore a world where tech blends seamlessly with
              fun. Get ready for a celebration of tech like never before!
            </p>
            <div className="mt-8 font-body text-sm uppercase tracking-[0.2em] text-foreground-subtle">
              DotSlash CET <span className="text-primary">●</span> Est. CEST
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sphere visual */}
      <div className="relative w-full flex justify-center items-center py-16 md:py-20">
        <div className="relative w-full max-w-[880px] mx-auto">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-foreground/25" />
          <div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="w-1.5 h-1.5 rounded-full bg-foreground-subtle" />
            <span className="w-1.5 h-1.5 rounded-full bg-foreground-subtle" />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative w-full border-y border-border py-6 md:py-8">
        <div ref={sliderRef} className="flex whitespace-nowrap">
          <div
            ref={firstTextRef}
            className="font-display font-medium uppercase tracking-tight text-foreground text-5xl md:text-8xl pr-8"
          >
            <span className="text-primary">./</span>CULTURALS&nbsp;&nbsp;
            <span className="text-primary">./</span>TECH&nbsp;&nbsp;
            <span className="text-primary">./</span>INNOVATION
          </div>
          <div
            ref={secondTextRef}
            className="font-display font-medium uppercase tracking-tight text-foreground text-5xl md:text-8xl pr-8"
          >
            <span className="text-primary">./</span>CULTURALS&nbsp;&nbsp;
            <span className="text-primary">./</span>TECH&nbsp;&nbsp;
            <span className="text-primary">./</span>INNOVATION
          </div>
        </div>
      </div>
    </section>
  );
}
