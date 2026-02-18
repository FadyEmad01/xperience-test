"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ArrowRight, ChevronRight } from "lucide-react";

// UI Components
import { Safari } from "@/components/safariMockup";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import Container from "@/components/layout/Container";
import { delay, motion, useInView, Variants } from "motion/react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useIntro, HEADER_DELAY, HEADER_DURATION, HERO_DELAY } from "@/components/context/ui-intro-provider";

// --- Types ---

export interface HeroUser {
    id: number | string;
    name: string;
    username: string;
    role: string;
    image: string;
    trainedStudents: string;
}

export interface PartnerLogo {
    name: string;
    url: string;
    height: number;
    width: number; // width is usually 'auto' in css but kept as number for next/image if needed, or ignored for img tags
}

interface HeroProps {
    // Allow overriding default data
    avatars?: HeroUser[];
    logos?: PartnerLogo[];
}

// --- Default Data ---

const DEFAULT_AVATARS: HeroUser[] = [
    {
        id: 1,
        name: "Keith Kennedy",
        username: "@k.kennedy",
        role: "Designer at @coss.com",
        image: "/images/hosseny.jpg",
        trainedStudents: "+3000",
    },
    {
        id: 2,
        name: "John Doe",
        username: "@john",
        role: "Frontend Developer",
        image: "/images/hosseny.jpg",
        trainedStudents: "+3000",
    },
    {
        id: 3,
        name: "Jane Smith",
        username: "@jane",
        role: "UI Engineer",
        image: "/images/hosseny.jpg",
        trainedStudents: "+3000",
    },
];

const DEFAULT_LOGOS: PartnerLogo[] = [
    { name: "Nvidia", url: "https://html.tailus.io/blocks/customers/nvidia.svg", height: 20, width: 0 },
    { name: "Column", url: "https://html.tailus.io/blocks/customers/column.svg", height: 16, width: 0 },
    { name: "GitHub", url: "https://html.tailus.io/blocks/customers/github.svg", height: 16, width: 0 },
    { name: "Nike", url: "https://html.tailus.io/blocks/customers/nike.svg", height: 20, width: 0 },
    { name: "Lemon Squeezy", url: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", height: 20, width: 0 },
    { name: "Laravel", url: "https://html.tailus.io/blocks/customers/laravel.svg", height: 16, width: 0 },
    { name: "Lilly", url: "https://html.tailus.io/blocks/customers/lilly.svg", height: 28, width: 0 },
    { name: "OpenAI", url: "https://html.tailus.io/blocks/customers/openai.svg", height: 24, width: 0 },
];


// --- Animations Variants ---

export const fadeUpBlur = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(12px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring" as const,
            bounce: 0.3,
            duration: 1.4,
        },
    },
};

export const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        },
    },
};

// --- Main Component ---

export default function HeroCoursesSection({
    avatars = DEFAULT_AVATARS,
    logos = DEFAULT_LOGOS,
}: HeroProps) {
    const t = useTranslations("heroCourses");

    const { hasLoaded, shouldAnimate: introShouldAnimate } = useIntro();
    const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers when slightly in view

    // Calculate when hero animations should start (after header completes)
    useEffect(() => {
        if (hasLoaded && isInView) {
            if (introShouldAnimate) {
                // If intro animation played, wait for header to complete
                // Intro: 2200ms + Header delay: 300ms + Header duration: 600ms + Hero delay: 200ms = 3300ms total
                const timer = setTimeout(() => {
                    setHeroAnimationStarted(true);
                }, HEADER_DELAY + HEADER_DURATION + HERO_DELAY);

                return () => clearTimeout(timer);
            } else {
                // If intro was skipped, start hero animations after a short delay
                const timer = setTimeout(() => {
                    setHeroAnimationStarted(true);
                }, 300);

                return () => clearTimeout(timer);
            }
        }
    }, [hasLoaded, isInView, introShouldAnimate]);

    const shouldAnimate = heroAnimationStarted && hasLoaded && isInView;

    return (
        <motion.main
            ref={ref}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            variants={staggerContainer}
            className="overflow-hidden">
            <BackgroundEffects shouldAnimate={shouldAnimate} />

            <section>
                <div className="relative pt-18 md:pt-24 pb-18 md:pb-24">
                    {/* <BackgroundMasks shouldAnimate={shouldAnimate}/> */}

                    {/* <div className="mx-auto max-w-7xl px-6"> */}
                    <Container>
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <motion.div
                                initial="hidden"
                                animate={shouldAnimate ? "visible" : "hidden"}
                                variants={staggerContainer}
                            >
                                {/* Headings */}
                                <HeroHeader
                                    title={t.rich("title", { br: () => <br /> })}
                                    description={t.rich("description", { br: () => <br /> })}
                                    shouldAnimate={shouldAnimate}
                                />
                            </motion.div>

                        </div>
                    </Container>

                    {/* Visual / Safari Mockup */}
                    {/* <HeroVisual /> */}
                </div>
            </section>

            {/* Logo Cloud Section */}
            {/* <LogoCloud logos={logos} /> */}
        </motion.main>
    );
}

// --- Sub Components ---

function BackgroundEffects({ shouldAnimate }: { shouldAnimate: boolean }) {
    return (
        // <div className="bg-wrapper" aria-hidden>
        //     <div className="bg-shape shape-1"></div>
        //     <div className="bg-shape shape-2"></div>
        //     <div className="bg-shape shape-3"></div>
        // </div>
        <motion.div
            className="bg-wrapper"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{
                duration: 3,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <div className="bg-shape shape-1" />
            <div className="bg-shape shape-2" />
            <div className="bg-shape shape-3" />
        </motion.div>
    );
}

// function BackgroundMasks({ shouldAnimate }: { shouldAnimate: boolean }) {
//     return (
//         <>
//             <motion.div
//                 aria-hidden
//                 initial={{ opacity: 0 }}
//                 animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
//                 transition={{
//                     duration: 1.2,
//                     ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="absolute inset-0 -z-20"
//             >
//                 <div className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
//                     {/* Optional Image Background can be uncommented here */}
//                     <div className="bg-green-900/25 w-full h-full" />
//                 </div>
//                 <div aria-hidden className="radial-bg" />
//             </motion.div>
//         </>
//     );
// }

function HeroHeader({
    title,
    description,
    shouldAnimate,
}: {
    title: React.ReactNode;
    description: React.ReactNode;
    shouldAnimate: boolean;
}) {
    const item = {
        hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };
    const item2 = {
        hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { delay: 0.2, duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        <>
            <motion.h1
                variants={item}
                initial="hidden"
                animate={shouldAnimate ? "visible" : "hidden"}
                className="mt-6 text-[2.4rem] sm:text-[3rem] md:text-[4.8rem] ltr:leading-[1.1] ltr:sm:leading-[1.05] leading-tight tracking-[-0.005em] md:tracking-[-0.01em] text-center mb-3 text-balance effect-font-hero effect-font-gradient effect-font-styling">
                {title}
            </motion.h1>
            {/* <motion.h2
                variants={item2}
                initial="hidden"
                animate={shouldAnimate ? "visible" : "hidden"}
                className="mx-auto mt-4 max-w-xl text-balance  text-sm sm:text-[1rem] md:text-lg text-text-secondary">
                {description}
            </motion.h2> */}
        </>
    );
}
