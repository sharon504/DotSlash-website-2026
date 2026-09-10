"use client"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  }),
};

const CollaborateSection = () => {
    return (
        <section id="collaboration" className="bg-background py-24 md:py-40">
            <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 lg:px-16">
                <div className="flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-foreground-subtle mb-6">
                    <span>06 — Collaborate</span>
                    <span className="flex-1 border-t border-dashed border-foreground/25" />
                    <span className="text-primary">/</span>
                </div>

                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className="font-display font-medium uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(2.5rem,6vw,6rem)] mb-14 md:mb-20"
                >
                    Collaborate
                    <br />
                    with <span className="text-primary">us.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {/* Sponsors card */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                        className="group bg-background border border-border hover:border-primary hover:-translate-y-1 transition-all duration-200 p-8 md:p-12 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-16 md:mb-24">
                            <span className="font-display font-medium text-primary text-xl">01</span>
                            <span className="font-display text-primary text-2xl transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">→</span>
                        </div>
                        <h3 className="font-display font-medium uppercase tracking-tight text-foreground text-3xl md:text-4xl">
                            For Sponsors
                        </h3>
                        <p className="font-body text-lg text-foreground-muted leading-relaxed mt-4 max-w-md">
                            Partner with us to elevate DotSlash &apos;26! Gain visibility
                            among tech enthusiasts, students, and professionals while
                            supporting an exciting tech fest. Let&apos;s make an impact
                            together.
                        </p>
                    </motion.div>

                    {/* Clubs card */}
                    <motion.a
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        href="https://forms.gle/r4VKAswC8zZhFrdY9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-background border border-border hover:border-primary hover:-translate-y-1 transition-all duration-200 p-8 md:p-12 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-16 md:mb-24">
                            <span className="font-display font-medium text-primary text-xl">02</span>
                            <span className="font-display text-primary text-2xl transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">→</span>
                        </div>
                        <h3 className="font-display font-medium uppercase tracking-tight text-foreground text-3xl md:text-4xl">
                            For Clubs
                        </h3>
                        <p className="font-body text-lg text-foreground-muted leading-relaxed mt-4 max-w-md">
                            Collaborate with DotSlash &apos;26 to showcase your club&apos;s
                            vision. Host workshops, competitions, or exhibits and engage
                            with passionate tech minds.
                        </p>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default CollaborateSection;