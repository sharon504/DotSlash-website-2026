"use client"

import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import img1 from '@/app/assets/gallery/1.jpg'
import img2 from '@/app/assets/gallery/2.jpg'
import img3 from '@/app/assets/gallery/3.jpg'
import img4 from '@/app/assets/gallery/7.jpg'
import img5 from '@/app/assets/gallery/4.jpg'
import img6 from '@/app/assets/gallery/5.jpg'
import img7 from '@/app/assets/gallery/9.jpg'
import img8 from '@/app/assets/gallery/lab.jpg'

import { motion } from 'framer-motion'

type Plate = {
  src: StaticImageData;
  alt: string;
  md: string;
  mobile: string;
};

const plates: Plate[] = [
  { src: img1, alt: "Cosmic portal with person standing", md: "md:col-span-2 md:row-span-2", mobile: "aspect-[4/3]" },
  { src: img2, alt: "Glowing crater", md: "md:row-span-2", mobile: "aspect-[3/4]" },
  { src: img3, alt: "Fallen statue", md: "md:row-span-1", mobile: "aspect-square" },
  { src: img4, alt: "Sunset landscape", md: "md:row-span-1", mobile: "aspect-square" },
  { src: img5, alt: "Crowned statue", md: "md:row-span-1", mobile: "aspect-[4/3]" },
  { src: img6, alt: "Sunset landscape", md: "md:col-span-2 md:row-span-1", mobile: "aspect-[16/9]" },
  { src: img7, alt: "Ancient stone masks along a wall", md: "md:row-span-1", mobile: "aspect-[4/3]" },
  { src: img8, alt: "Face with glowing cracks", md: "md:row-span-1", mobile: "aspect-[4/3]" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-background py-24 md:py-40">
      <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-foreground-subtle mb-6">
          <span>05 — Gallery</span>
          <span className="flex-1 border-t border-dashed border-foreground/25" />
          <span className="text-primary">/</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display font-semibold uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(2.5rem,6vw,6rem)]"
          >
            Glimpses of
            <br />
            <span className="text-primary">DotSlash &apos;23.</span>
          </motion.h2>
          <div className="font-body text-sm uppercase tracking-[0.2em] text-foreground-subtle lg:pb-4">
            Archive <span className="text-primary">/</span> 10 frames
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5"
        >
          {plates.map((plate, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-surface border border-border ${plate.md} ${plate.mobile}`}
            >
              <Image
                src={plate.src}
                alt={plate.alt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out"
                style={{ transform: "scale(1.02)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={i < 2}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;