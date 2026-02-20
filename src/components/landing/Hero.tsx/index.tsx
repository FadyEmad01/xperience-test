// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import Link from "next/link";
// import { useTranslations } from "next-intl";
// import { OptimizedImage } from "@/components/ui/OptimizedImage";
// import { ArrowRight, ChevronRight } from "lucide-react";

// // UI Components
// import { Safari } from "@/components/safariMockup";
// import {
//     HoverCard,
//     HoverCardContent,
//     HoverCardTrigger,
// } from "@/components/ui/hover-card";
// import Container from "@/components/layout/Container";
// import { AnimatePresence, delay, motion, useInView, Variants } from "motion/react";
// import { AnimatedGroup } from "@/components/ui/animated-group";
// import { useIntro, HEADER_DELAY, HEADER_DURATION, HERO_DELAY, HERO_VISUAL_DELAY } from "@/components/context/ui-intro-provider";

// // --- Types ---

// export interface HeroUser {
//     id: number | string;
//     name: string;
//     username: string;
//     role: string;
//     image: string;
//     trainedStudents: string;
// }

// export interface PartnerLogo {
//     name: string;
//     url: string;
//     height: number;
//     width: number; // width is usually 'auto' in css but kept as number for next/image if needed, or ignored for img tags
// }

// interface HeroProps {
//     // Allow overriding default data
//     avatars?: HeroUser[];
//     logos?: PartnerLogo[];
// }

// // --- Default Data ---

// const DEFAULT_AVATARS: HeroUser[] = [
//     {
//         id: 1,
//         name: "Keith Kennedy",
//         username: "@k.kennedy",
//         role: "Designer at @coss.com",
//         image: "/images/hosseny.jpg",
//         trainedStudents: "+3000",
//     },
//     {
//         id: 2,
//         name: "John Doe",
//         username: "@john",
//         role: "Frontend Developer",
//         image: "/images/hosseny.jpg",
//         trainedStudents: "+3000",
//     },
//     {
//         id: 3,
//         name: "Jane Smith",
//         username: "@jane",
//         role: "UI Engineer",
//         image: "/images/hosseny.jpg",
//         trainedStudents: "+3000",
//     },
// ];

// const DEFAULT_LOGOS: PartnerLogo[] = [
//     { name: "Nvidia", url: "https://html.tailus.io/blocks/customers/nvidia.svg", height: 20, width: 0 },
//     { name: "Column", url: "https://html.tailus.io/blocks/customers/column.svg", height: 16, width: 0 },
//     { name: "GitHub", url: "https://html.tailus.io/blocks/customers/github.svg", height: 16, width: 0 },
//     { name: "Nike", url: "https://html.tailus.io/blocks/customers/nike.svg", height: 20, width: 0 },
//     { name: "Lemon Squeezy", url: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", height: 20, width: 0 },
//     { name: "Laravel", url: "https://html.tailus.io/blocks/customers/laravel.svg", height: 16, width: 0 },
//     { name: "Lilly", url: "https://html.tailus.io/blocks/customers/lilly.svg", height: 28, width: 0 },
//     { name: "OpenAI", url: "https://html.tailus.io/blocks/customers/openai.svg", height: 24, width: 0 },
// ];


// // --- Animations Variants ---

// export const fadeUpBlur = {
//     hidden: {
//         opacity: 0,
//         y: 20,
//         filter: "blur(12px)",
//     },
//     visible: {
//         opacity: 1,
//         y: 0,
//         filter: "blur(0px)",
//         transition: {
//             type: "spring" as const,
//             bounce: 0.3,
//             duration: 1.4,
//         },
//     },
// };

// export const staggerContainer = {
//     visible: {
//         transition: {
//             staggerChildren: 0.08,
//             delayChildren: 0.3,
//         },
//     },
// };

// // --- Main Component ---

// export default function HeroSection({
//     avatars = DEFAULT_AVATARS,
//     logos = DEFAULT_LOGOS,
// }: HeroProps) {
//     const t = useTranslations("hero");

//     const { hasLoaded, shouldAnimate: introShouldAnimate } = useIntro();
//     const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);

//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, margin: "-100px" }); // triggers when slightly in view

//     // Calculate when hero animations should start (after header completes)
//     useEffect(() => {
//         if (hasLoaded && isInView) {
//             if (introShouldAnimate) {
//                 // If intro animation played, wait for header to complete
//                 // Intro: 2200ms + Header delay: 300ms + Header duration: 600ms + Hero delay: 200ms = 3300ms total
//                 const timer = setTimeout(() => {
//                     setHeroAnimationStarted(true);
//                 }, HEADER_DELAY + HEADER_DURATION + HERO_DELAY);

//                 return () => clearTimeout(timer);
//             } else {
//                 // If intro was skipped, start hero animations after a short delay
//                 const timer = setTimeout(() => {
//                     setHeroAnimationStarted(true);
//                 }, 300);

//                 return () => clearTimeout(timer);
//             }
//         }
//     }, [hasLoaded, isInView, introShouldAnimate]);

//     const shouldAnimate = heroAnimationStarted && hasLoaded && isInView;

//     return (
//         <motion.main
//             ref={ref}
//             initial="hidden"
//             animate={shouldAnimate ? "visible" : "hidden"}
//             variants={staggerContainer}
//             className="overflow-hidden">
//             <BackgroundEffects shouldAnimate={shouldAnimate} />

//             <section>
//                 <div className="relative pt-18 md:pt-24">
//                     <BackgroundMasks shouldAnimate={shouldAnimate} />

//                     {/* <div className="mx-auto max-w-7xl px-6"> */}
//                     <Container>
//                         <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
//                             <motion.div
//                                 initial="hidden"
//                                 animate={shouldAnimate ? "visible" : "hidden"}
//                                 variants={staggerContainer}
//                             >
//                                 {/* Badge & Avatars */}
//                                 <motion.div variants={fadeUpBlur}>
//                                     <HeroBadge text={t.rich("badge", { br: () => <br /> })} avatars={avatars} />
//                                 </motion.div>

//                                 {/* Headings */}
//                                 <HeroHeader
//                                     title={t.rich("title", { br: () => <br /> })}
//                                     description={t.rich("description", { br: () => <br /> })}
//                                     shouldAnimate={shouldAnimate}
//                                 />
//                             </motion.div>

//                         </div>
//                     </Container>

//                     {/* Visual / Safari Mockup */}
//                     <HeroVisual />
//                 </div>
//             </section>

//             {/* Logo Cloud Section */}
//             {/* <LogoCloud logos={logos} /> */}
//         </motion.main>
//     );
// }

// // --- Sub Components ---

// function BackgroundEffects({ shouldAnimate }: { shouldAnimate: boolean }) {
//     return (
//         // <div className="bg-wrapper" aria-hidden>
//         //     <div className="bg-shape shape-1"></div>
//         //     <div className="bg-shape shape-2"></div>
//         //     <div className="bg-shape shape-3"></div>
//         // </div>
//         <motion.div
//             className="bg-wrapper"
//             aria-hidden
//             initial={{ opacity: 0 }}
//             animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
//             transition={{
//                 duration: 3,
//                 ease: [0.22, 1, 0.36, 1],
//             }}
//         >
//             <div className="bg-shape shape-1" />
//             <div className="bg-shape shape-2" />
//             <div className="bg-shape shape-3" />
//         </motion.div>
//     );
// }

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

// function HeroBadge({
//     text,
//     avatars,
// }: {
//     text: React.ReactNode;
//     avatars: HeroUser[];
// }) {
//     return (
//         <div>
//             <Link
//                 href="/"
//                 className="bg-background/30 backdrop-blur-2xl text-text-secondary group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 ltr:pl-4 rtl:pr-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:shadow-zinc-950"
//             >
//                 <span className="text-text-secondary text-[12px] sm:text-sm">{text}</span>
//                 <AvatarGroup users={avatars} />
//             </Link>
//         </div>
//     );
// }

// function AvatarGroup({ users }: { users: HeroUser[] }) {
//     return (
//         <div className="-space-x-1.5 flex">
//             {users.map((user) => (
//                 <AvatarItem key={user.id} user={user} />
//             ))}
//             <div className="bg-muted size-6 overflow-hidden rounded-full duration-500 z-15">
//                 <div className="flex w-12 -translate-x-1/2 group-hover:translate-x-0 rtl:translate-x-1/2 rtl:group-hover:translate-x-0 duration-500 ease-in-out">
//                     <span className="flex size-6 rtl:rotate-180">
//                         <ArrowRight className="m-auto size-3" />
//                     </span>
//                     <span className="flex size-6 rtl:rotate-180">
//                         <ArrowRight className="m-auto size-3" />
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function AvatarItem({ user }: { user: HeroUser }) {
//     return (
//         <HoverCard>
//             <HoverCardTrigger asChild>
//                 <div className="size-6 rounded-full ring-1 ring-background relative z-0 transition-all duration-300 hover:z-20 hover:scale-105 overflow-hidden">
//                     <OptimizedImage
//                         src={user.image}
//                         alt={user.name}
//                         width={24}
//                         height={24}
//                         className="object-cover"
//                     />
//                 </div>
//             </HoverCardTrigger>

//             <HoverCardContent sideOffset={10} className="z-30 bg-background/95 backdrop-blur-xl supports-backdrop-filter:bg-background/50">
//                 <div className="space-y-3">
//                     <div className="flex items-center gap-3">
//                         <div className="size-10 rounded-full overflow-hidden">
//                             <OptimizedImage
//                                 src={user.image}
//                                 alt={user.name}
//                                 width={40}
//                                 height={40}
//                                 className="object-cover"
//                             />
//                         </div>
//                         <div>
//                             <p className="text-sm font-medium">{user.name}</p>
//                             <p className="text-xs text-text-secondary">{user.username}</p>
//                         </div>
//                     </div>

//                     <p className="text-sm text-text-secondary">{user.role}</p>

//                     <p className="text-xs text-text-secondary">
//                         Trained more than{" "}
//                         <span className="text-foreground">{user.trainedStudents}</span>{" "}
//                         students.
//                     </p>
//                 </div>
//             </HoverCardContent>
//         </HoverCard>
//     );
// }

// function HeroHeader({
//     title,
//     description,
//     shouldAnimate,
// }: {
//     title: React.ReactNode;
//     description: React.ReactNode;
//     shouldAnimate: boolean;
// }) {
//     const item = {
//         hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
//         visible: {
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//             transition: { duration: 0.6, ease: "easeOut" as const },
//         },
//     };
//     const item2 = {
//         hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
//         visible: {
//             opacity: 1,
//             y: 0,
//             filter: "blur(0px)",
//             transition: { delay: 0.2, duration: 0.6, ease: "easeOut" as const },
//         },
//     };

//     return (
//         <>
//             <motion.h1
//                 variants={item}
//                 initial="hidden"
//                 animate={shouldAnimate ? "visible" : "hidden"}
//                 className="mt-6 text-[2.4rem] sm:text-[3rem] md:text-[4.8rem] ltr:leading-[1.1] ltr:sm:leading-[1.05] leading-tight tracking-[-0.005em] md:tracking-[-0.01em] text-center mb-3 text-balance effect-font-hero effect-font-gradient effect-font-styling">
//                 {title}
//             </motion.h1>
//             <motion.h2
//                 variants={item2}
//                 initial="hidden"
//                 animate={shouldAnimate ? "visible" : "hidden"}
//                 className="mx-auto mt-4 max-w-xl text-balance  text-sm sm:text-[1rem] md:text-lg text-text-secondary">
//                 {description}
//             </motion.h2>
//         </>
//     );
// }

// function HeroVisual() {
//     const { hasLoaded, shouldAnimate: introShouldAnimate } = useIntro();
//     const [visualAnimationStarted, setVisualAnimationStarted] = useState(false);

//     const ref = useRef<HTMLDivElement>(null);
//     const isInView = useInView(ref, { once: true, margin: "-50px" });

//     useEffect(() => {
//         if (hasLoaded && isInView) {
//             const delay = introShouldAnimate ? HERO_VISUAL_DELAY : 400;

//             const timer = setTimeout(() => {
//                 setVisualAnimationStarted(true);
//             }, delay);

//             return () => clearTimeout(timer);
//         }
//     }, [hasLoaded, isInView, introShouldAnimate]);

//     const shouldAnimate = visualAnimationStarted && hasLoaded && isInView;

//     return (
//         <div ref={ref}>
//             <motion.div
//                 initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }}
//                 animate={shouldAnimate 
//                     ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } 
//                     : { opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" }
//                 }
//                 transition={{
//                     duration: 0.9,
//                     ease: [0.25, 0.1, 0.25, 1],
//                 }}
//                 className="mask-b-from-55% relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20"
//             >
//                 <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background/20 backdrop-blur-3xl relative mx-auto max-w-6xl overflow-hidden rounded-4xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
//                     <div className="relative aspect-[15/8] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
//                         <iframe
//                             src="https://youtube.com/embed/Fvl1WWec5nY?si=XbiPYIhpIRBdapcK"
//                             className="absolute inset-0 w-full h-full border-0 rounded-2xl"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         />
//                     </div>
//                 </div>
//             </motion.div>
//         </div>
//     );
// }

// function LogoCloud({ logos }: { logos: PartnerLogo[] }) {
//     return (
//         <section className="bg-background pb-16 pt-16 md:pb-32">
//             <div className="group relative m-auto max-w-5xl px-6">
//                 <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
//                     <Link href="/" className="block text-sm duration-150 hover:opacity-75">
//                         <span> Meet Our Customers</span>
//                         <ChevronRight className="ml-1 inline-block size-3" />
//                     </Link>
//                 </div>
//                 <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
//                     {logos.map((logo, index) => (
//                         <div key={index} className="flex">
//                             <img
//                                 className="mx-auto w-fit dark:invert"
//                                 src={logo.url}
//                                 alt={`${logo.name} Logo`}
//                                 style={{ height: `${logo.height}px` }}
//                                 width="auto"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

// UI Components
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import Container from "@/components/layout/Container";
import { AnimatePresence, motion, useInView, Variants } from "motion/react";
import {
    useIntro,
    HEADER_DELAY,
    HEADER_DURATION,
    HERO_DELAY,
    HERO_VISUAL_DELAY
} from "@/components/context/ui-intro-provider";
import { Spinner } from "@/components/ui/spinner";

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
    width: number;
}

interface HeroProps {
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

// ============================================
// UNIFIED ANIMATION CONFIGURATION
// ============================================

const EASE = {
    // Smooth deceleration - great for entrances
    out: [0.22, 1, 0.36, 1] as const,
    // Smooth acceleration then deceleration
    inOut: [0.65, 0, 0.35, 1] as const,
    // Subtle spring-like feel
    smooth: [0.25, 0.1, 0.25, 1] as const,
    // More dramatic entrance
    expo: [0.16, 1, 0.3, 1] as const,
};

const DURATION = {
    fast: 0.4,
    normal: 0.6,
    slow: 0.8,
    slower: 1.0,
    background: 1.5,
};

const STAGGER = {
    fast: 0.08,
    normal: 0.12,
    slow: 0.15,
};

// --- Animation Variants ---

const backgroundVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: DURATION.background,
            ease: EASE.out,
        },
    },
};

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: STAGGER.normal,
            delayChildren: 0.1,
        },
    },
};

const fadeUpBlurVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 24,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: DURATION.normal,
            ease: EASE.out,
        },
    },
};

const titleVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: "blur(12px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: DURATION.slower,
            ease: EASE.out,
        },
    },
};

const descriptionVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(8px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: DURATION.normal,
            ease: EASE.out,
        },
    },
};

const visualVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: "blur(12px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: DURATION.slower,
            ease: EASE.smooth,
        },
    },
};

// --- Main Component ---

export default function HeroSection({
    avatars = DEFAULT_AVATARS,
    logos = DEFAULT_LOGOS,
}: HeroProps) {
    const t = useTranslations("hero");

    const { hasLoaded, shouldAnimate: introShouldAnimate } = useIntro();
    const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Calculate when hero animations should start (after header completes)
    useEffect(() => {
        if (hasLoaded && isInView) {
            const delay = introShouldAnimate
                ? HEADER_DELAY + HEADER_DURATION + HERO_DELAY
                : 100;

            const timer = setTimeout(() => {
                setHeroAnimationStarted(true);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [hasLoaded, isInView, introShouldAnimate]);

    const shouldAnimate = heroAnimationStarted && hasLoaded && isInView;

    return (
        <motion.main
            ref={ref}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            className="overflow-hidden"
        >
            {/* Background Elements - Start first, animate slowly */}
            <BackgroundEffects shouldAnimate={shouldAnimate} />

            <section>
                <div className="relative pt-18 md:pt-24">
                    <BackgroundMasks shouldAnimate={shouldAnimate} />

                    <Container>
                        <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            {/* Content Container with Stagger */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate={shouldAnimate ? "visible" : "hidden"}
                            >
                                {/* Badge & Avatars - First element */}
                                <motion.div variants={fadeUpBlurVariants}>
                                    <HeroBadge
                                        text={t.rich("badge", { br: () => <br /> })}
                                        avatars={avatars}
                                    />
                                </motion.div>

                                {/* Title - Second element */}
                                <motion.h1
                                    variants={titleVariants}
                                    className="mt-6 text-[2.4rem] sm:text-[3rem] md:text-[4.8rem] ltr:leading-[1.1] ltr:sm:leading-[1.05] leading-tight tracking-[-0.005em] md:tracking-[-0.01em] text-center mb-3 text-balance effect-font-hero effect-font-gradient effect-font-styling"
                                >
                                    {t.rich("title", { br: () => <br /> })}
                                </motion.h1>

                                {/* Description - Third element */}
                                <motion.h2
                                    variants={descriptionVariants}
                                    className="mx-auto mt-4 max-w-xl text-balance text-sm sm:text-[1rem] md:text-lg text-text-secondary"
                                >
                                    {t.rich("description", { br: () => <br /> })}
                                </motion.h2>
                            </motion.div>
                        </div>
                    </Container>

                    {/* Visual / Video - Animates last with its own timing */}
                    <HeroVisual />
                </div>
            </section>
        </motion.main>
    );
}

// --- Sub Components ---

function BackgroundEffects({ shouldAnimate }: { shouldAnimate: boolean }) {
    return (
        <motion.div
            className="bg-wrapper"
            aria-hidden
            variants={backgroundVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
        >
            <div className="bg-shape shape-1" />
            <div className="bg-shape shape-2" />
            <div className="bg-shape shape-3" />
        </motion.div>
    );
}

function BackgroundMasks({ shouldAnimate }: { shouldAnimate: boolean }) {
    return (
        <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={shouldAnimate ? { opacity: 1 } : { opacity: 0 }}
            transition={{
                duration: DURATION.slow,
                ease: EASE.out,
            }}
            className="absolute inset-0 -z-20"
        >
            <div className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                <div className="bg-green-900/25 w-full h-full" />
            </div>
            <div aria-hidden className="radial-bg" />
        </motion.div>
    );
}

function HeroBadge({
    text,
    avatars,
}: {
    text: React.ReactNode;
    avatars: HeroUser[];
}) {
    return (
        <div>
            <Link
                href="/"
                className="bg-background/30 backdrop-blur-2xl text-text-secondary group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 ltr:pl-4 rtl:pr-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:shadow-zinc-950"
            >
                <span className="text-text-secondary text-[12px] sm:text-sm">{text}</span>
                <AvatarGroup users={avatars} />
            </Link>
        </div>
    );
}

function AvatarGroup({ users }: { users: HeroUser[] }) {
    return (
        <div className="-space-x-1.5 flex">
            {users.map((user) => (
                <AvatarItem key={user.id} user={user} />
            ))}
            <div className="bg-muted size-6 overflow-hidden rounded-full duration-500 z-15">
                <div className="flex w-12 -translate-x-1/2 group-hover:translate-x-0 rtl:translate-x-1/2 rtl:group-hover:translate-x-0 duration-500 ease-in-out">
                    <span className="flex size-6 rtl:rotate-180">
                        <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6 rtl:rotate-180">
                        <ArrowRight className="m-auto size-3" />
                    </span>
                </div>
            </div>
        </div>
    );
}

function AvatarItem({ user }: { user: HeroUser }) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <div className="size-6 rounded-full ring-1 ring-background relative z-0 transition-all duration-300 hover:z-20 hover:scale-105 overflow-hidden">
                    <OptimizedImage
                        src={user.image}
                        alt={user.name}
                        width={24}
                        height={24}
                        className="object-cover"
                    />
                </div>
            </HoverCardTrigger>

            <HoverCardContent
                sideOffset={10}
                className="z-30 bg-background/95 backdrop-blur-xl supports-backdrop-filter:bg-background/50"
            >
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full overflow-hidden">
                            <OptimizedImage
                                src={user.image}
                                alt={user.name}
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium">{user.name}</p>
                            <p className="text-xs text-text-secondary">{user.username}</p>
                        </div>
                    </div>
                    <p className="text-sm text-text-secondary">{user.role}</p>
                    <p className="text-xs text-text-secondary">
                        Trained more than{" "}
                        <span className="text-foreground">{user.trainedStudents}</span>{" "}
                        students.
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}

// --- Video Skeleton Component ---

function VideoSkeleton() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 rounded-2xl overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800" />

            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={{
                    x: ['-100%', '100%'],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.5,
                }}
            />

            {/* Decorative lines */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        style={{
                            top: `${20 + i * 15}%`,
                            left: '10%',
                            right: '10%',
                        }}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{
                            delay: i * 0.1,
                            duration: 0.8,
                            ease: EASE.out,
                        }}
                    />
                ))}
            </div>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center gap-6">
                {/* Animated play button */}
                <motion.div
                    className="relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: EASE.out }}
                >
                    {/* Pulsing rings */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-white/10"
                        animate={{
                            scale: [1, 1.5, 1.5],
                            opacity: [0.3, 0, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                        }}
                        style={{ width: 80, height: 80, margin: -10 }}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-full bg-white/10"
                        animate={{
                            scale: [1, 1.5, 1.5],
                            opacity: [0.3, 0, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: 0.5,
                        }}
                        style={{ width: 80, height: 80, margin: -10 }}
                    />

                    {/* Play button */}
                    <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white/80 ml-1" fill="currentColor" />
                    </div>
                </motion.div>

                {/* Loading text with dots */}
                <motion.div
                    className="flex items-center gap-1 text-sm text-white/50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <span>Loading video</span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        .
                    </motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    >
                        .
                    </motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    >
                        .
                    </motion.span>
                </motion.div>
            </div>

            {/* Bottom progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                <motion.div
                    className="h-full bg-gradient-to-r from-green-500/50 to-emerald-500/50"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </div>
    );
}

// --- Alternative Minimal Skeleton ---

function VideoSkeletonMinimal() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 rounded-2xl overflow-hidden">
            {/* Subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900 to-zinc-800" />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Animated glow */}
            <motion.div
                className="absolute w-96 h-96 rounded-full bg-green-500/20 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Center spinner */}
            <div className="relative">
                <motion.div
                    className="w-12 h-12 rounded-full border-2 border-white/10 border-t-white/50"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white/50 ml-0.5" />
                </div>
            </div>
        </div>
    );
}

function VideoSkeletonMinimalSpinner() {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Spinner />
        </div>

    );
}

function HeroVisual() {
    const { hasLoaded, shouldAnimate: introShouldAnimate } = useIntro();
    const [visualAnimationStarted, setVisualAnimationStarted] = useState(false);
    const [isIframeLoaded, setIsIframeLoaded] = useState(false);
    // Force remount if stuck:
    const [key, setKey] = useState(0);
    const handleError = () => {
        setKey(prev => prev + 1);
    };

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-30px" });

    useEffect(() => {
        if (hasLoaded && isInView) {
            const delay = introShouldAnimate ? HERO_VISUAL_DELAY : 300;

            const timer = setTimeout(() => {
                setVisualAnimationStarted(true);
            }, delay);

            return () => clearTimeout(timer);
        }
    }, [hasLoaded, isInView, introShouldAnimate]);

    const shouldAnimate = visualAnimationStarted && hasLoaded && isInView;

    const handleIframeLoad = () => {
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
            setIsIframeLoaded(true);
        }, 0);
    };

    return (
        // <div ref={ref}>
        //     <motion.div
        //         variants={visualVariants}
        //         initial="hidden"
        //         animate={shouldAnimate ? "visible" : "hidden"}
        //         className="mask-b-from-55% relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20"
        //     >
        //         <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background/20 backdrop-blur-3xl relative mx-auto max-w-6xl overflow-hidden rounded-4xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
        //             <div className="relative aspect-[15/8] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900"
        //             // style={{
        //             //     isolation: 'isolate',
        //             //     contain: 'layout style paint',
        //             // }}
        //             >
        //                 <iframe
        //                     src="https://youtube.com/embed/Fvl1WWec5nY?si=XbiPYIhpIRBdapcK"
        //                     className="absolute inset-0 w-full h-full border-0 rounded-2xl"
        //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //                     allowFullScreen
        //                 />
        //             </div>
        //         </div>
        //     </motion.div>
        // </div>
        <div ref={ref}>
            <motion.div
                variants={visualVariants}
                initial="hidden"
                animate={shouldAnimate ? "visible" : "hidden"}
                className="mask-b-from-55% relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20"
            >
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background/20 backdrop-blur-3xl relative mx-auto max-w-6xl overflow-hidden rounded-4xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                    <div className="relative aspect-[15/8] w-full overflow-hidden rounded-2xl bg-background">
                        {/* Skeleton - Shows while loading */}
                        <AnimatePresence>
                            {!isIframeLoaded && (
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    exit={{
                                        opacity: 0,
                                        scale: 1.02,
                                        filter: "blur(10px)",
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: EASE.out
                                    }}
                                    className="absolute inset-0 z-10"
                                >
                                    {/* <VideoSkeleton /> */}
                                    {/* Or use the minimal version: */}
                                    {/* <VideoSkeletonMinimal /> */}
                                    <VideoSkeletonMinimalSpinner />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Iframe - Hidden until loaded */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isIframeLoaded ? 1 : 0 }}
                            transition={{ duration: 0.5, ease: EASE.out }}
                            className="absolute inset-0"
                            data-lenis-prevent
                            style={{
                                overscrollBehavior: "contain"
                            }}
                        >
                        <iframe
                            // key={key}
                            src="https://www.youtube.com/embed/Fvl1WWec5nY"
                            className="absolute inset-0 w-full h-full border-0 rounded-2xl"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={handleIframeLoad}
                        />
                    </motion.div>
                </div>
        </div>
            </motion.div >
        </div >
    );
}

function LogoCloud({ logos }: { logos: PartnerLogo[] }) {
    return (
        <section className="bg-background pb-16 pt-16 md:pb-32">
            <div className="group relative m-auto max-w-5xl px-6">
                <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Link href="/" className="block text-sm duration-150 hover:opacity-75">
                        <span>Meet Our Customers</span>
                        <ChevronRight className="ml-1 inline-block size-3" />
                    </Link>
                </div>
                <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                    {logos.map((logo, index) => (
                        <div key={index} className="flex">
                            <img
                                className="mx-auto w-fit dark:invert"
                                src={logo.url}
                                alt={`${logo.name} Logo`}
                                style={{ height: `${logo.height}px` }}
                                width="auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}