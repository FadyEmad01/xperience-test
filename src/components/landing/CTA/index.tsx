"use client";

import { motion } from "motion/react";
import { Plus, ArrowUpRight, Video } from "lucide-react";
import Container from "@/components/layout/Container";

// Event Card Component
const EventCard = ({ isMain = false }: { isMain?: boolean }) => {
    return (
        <div
            className={`w-72 shrink-0 rounded-xl bg-card px-2 py-3 md:w-96 ${isMain ? "shadow-xl ring-1 ring-foreground/5" : "shadow-sm"
                }`}
        >
            <div className="flex items-center justify-between px-2 pb-2">
                <div className="flex items-center gap-1">
                    <div className="size-5 overflow-hidden rounded-full border bg-muted">
                        <img
                            alt="Avatar"
                            className="size-full object-cover"
                            height={20}
                            width={20}
                            src="https://storage.efferd.com/shaban.webp"
                        />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                        By Shaban
                    </span>
                </div>
                <span className="text-xs text-muted-foreground">This Thursday</span>
            </div>
            <div className="rounded-xl border border-dashed border-muted-foreground/20 bg-background p-4 shadow">
                <h3 className="mb-1 font-medium md:text-lg">
                    Cold Outreach Deep Dive Ask Learn and Share
                </h3>
                <p className="mb-4 flex items-center gap-2 text-xs md:text-sm">
                    <span className="text-muted-foreground">on</span>
                    <span className="inline-flex items-center gap-1">
                        <Video
                            className="size-4 fill-foreground/20"
                            aria-hidden="true"
                        />
                        <span className="font-medium">Zoom</span>
                    </span>
                </p>
                <div className="border-t border-dashed border-foreground/20 pt-4">
                    <h4 className="mb-2 text-sm font-medium">About Event</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        Join us for a deep dive into AI Agents, focusing on our latest
                        addition, Agent Frank. You&apos;ll discover its unique features and
                        capabilities. This session is part of our weekly Salesforge webinar
                        series...
                    </p>
                </div>
            </div>
        </div>
    );
};

// Floating Badge Component
const FloatingBadge = ({
    emoji,
    text,
    className,
    delay = 0,
}: {
    emoji: string;
    text: string;
    className?: string;
    delay?: number;
}) => {
    return (
        <motion.div
            className={`absolute z-30 flex items-center gap-1 rounded-2xl border bg-card px-3 py-2 shadow-lg ${className}`}
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
            }}
        >
            <span className="text-xl">{emoji}</span>
            <span className="font-bold">{text}</span>
        </motion.div>
    );
};

// Main CTA Component
export default function CTA() {
    return (
        <div className="relative min-h-screen place-content-center p-4">

            <Container>
                <motion.div
                    className="relative mx-auto w-full "
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <div className="flex flex-col items-center overflow-hidden">
                        {/* Header Content */}
                        <motion.div
                            className="z-10 mx-auto max-w-xl space-y-4 px-4 pt-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-4xl md:text-6xl ltr:leading-[1.1] ltr:sm:leading-[1.05] leading-tight tracking-[-0.005em] md:tracking-[-0.01em] mb-3 text-balance effect-font-hero effect-font-gradient effect-font-styling">
                                Ask Me Anything
                            </h2>
                            <p className="text-base leading-relaxed text-muted-foreground">
                                Every Thursday at 10:00 AM ET (16:00 CET) connect with a Product
                                Expert to discover the Forge and get all your questions answered.
                            </p>
                            <motion.button
                                className="group inline-flex h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border bg-background px-6 text-sm font-medium shadow-sm outline-none transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:border-input dark:bg-input/30 dark:hover:bg-input/50"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Reserve my seat
                                <ArrowUpRight
                                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    aria-hidden="true"
                                />
                            </motion.button>
                        </motion.div>

                        {/* Cards Section */}
                        <div className="relative mt-6 flex h-60 w-full items-start justify-center">
                            {/* Floating Badges */}
                            <FloatingBadge
                                emoji="📨"
                                text="?"
                                className="-top-10 left-[10%] -rotate-12 md:left-[20%]"
                                delay={0}
                            />
                            <FloatingBadge
                                emoji="🗳️"
                                text="?"
                                className="-top-5 right-[10%] rotate-12 md:right-[15%]"
                                delay={0.4}
                            />
                            <FloatingBadge
                                emoji="🥓"
                                text="!?"
                                className="bottom-[40%] right-[10%] rotate-6 md:right-[20%]"
                                delay={0.8}
                            />

                            {/* Left Background Card */}
                            {/* <motion.div
                                className="pointer-events-none absolute left-1/2 top-12 opacity-60 blur-[1px]"
                                initial={{ opacity: 0, x: "-70%", rotate: -6 }}
                                animate={{ opacity: 0.6, x: "-90%", rotate: -6 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <EventCard />
                            </motion.div> */}

                            {/* Center Main Card */}
                            {/* <motion.div
                                className="absolute z-20"
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <EventCard isMain />
                            </motion.div> */}

                            {/* Right Background Card */}
                            {/* <motion.div
                                className="pointer-events-none absolute right-1/2 top-12 opacity-60 blur-[1px]"
                                initial={{ opacity: 0, x: "70%", rotate: 6 }}
                                animate={{ opacity: 0.6, x: "90%", rotate: 6 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <EventCard />
                            </motion.div> */}

                            {/* Bottom Gradient Fade */}
                            <div className="pointer-events-none absolute bottom-0 left-0 z-40 h-30 w-full bg-gradient-to-t from-background  to-transparent" />
                        </div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}