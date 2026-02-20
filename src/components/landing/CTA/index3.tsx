"use client";

import { Button } from "@/components/ui/button";
import {
    motion,
    useInView,
    useScroll,
    useVelocity,
    useSpring,
    useAnimationFrame,
} from "motion/react";
import React, { useEffect, useRef, useState, useMemo } from "react";

// --- DATA (unchanged) ---
type CircleItem =
    | { type: "front-end"; name: string; image: string; href: string }
    | { type: "ui-ux"; name: string; image: string; href: string }
    | { type: "backend"; name: string; image: string; href: string }
    | { type: "database"; name: string; image: string; href: string }
    | { type: "devops"; name: string; image: string; href: string }
    | { type: "tools"; name: string; image: string; href: string }
    | { type: "empty" };

const orbit1Items: CircleItem[] = [
    { type: "front-end", name: "Angular", image: "/front-end/angular.svg", href: "https://angular.dev/" },
    { type: "front-end", name: "Bootstrap", image: "/front-end/bootstrap.svg", href: "https://getbootstrap.com/" },
    { type: "front-end", name: "CSS3", image: "/front-end/css_old.svg", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { type: "ui-ux", name: "Figma", image: "/front-end/figma.svg", href: "https://www.figma.com/" },
    { type: "database", name: "Firebase", image: "/front-end/firebase.svg", href: "https://firebase.google.com/" },
    { type: "tools", name: "Git", image: "/front-end/git.svg", href: "https://git-scm.com/" },
    { type: "tools", name: "GitHub", image: "/front-end/github_dark.svg", href: "https://github.com/" },
    { type: "front-end", name: "HTML5", image: "/front-end/html5.svg", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { type: "front-end", name: "JavaScript", image: "/front-end/javascript.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { type: "tools", name: "Jest", image: "/front-end/jest.svg", href: "https://jestjs.io/" },
    { type: "front-end", name: "jQuery", image: "/front-end/jquery_dark.svg", href: "https://jquery.com/" },
    { type: "tools", name: "JSON", image: "/front-end/json.svg", href: "https://www.json.org/" },
    { type: "backend", name: "JWT", image: "/front-end/jwt.svg", href: "https://jwt.io/" },
    { type: "front-end", name: "Next.js", image: "/front-end/nextjs_icon_dark.svg", href: "https://nextjs.org/" },
    { type: "tools", name: "npm", image: "/front-end/npm.svg", href: "https://www.npmjs.com/" },
    { type: "front-end", name: "React", image: "/front-end/react_dark.svg", href: "https://react.dev/" },
    { type: "front-end", name: "React Router", image: "/front-end/reactrouter.svg", href: "https://reactrouter.com/" },
    { type: "front-end", name: "RxJS", image: "/front-end/rxjs.svg", href: "https://rxjs.dev/" },
    { type: "front-end", name: "Tailwind CSS", image: "/front-end/tailwindcss.svg", href: "https://tailwindcss.com/" },
    { type: "front-end", name: "TypeScript", image: "/front-end/typescript.svg", href: "https://www.typescriptlang.org/" },
    { type: "devops", name: "Vercel", image: "/front-end/vercel_dark.svg", href: "https://vercel.com/" },
    { type: "tools", name: "VS Code", image: "/front-end/vscode.svg", href: "https://code.visualstudio.com/" },
    { type: "tools", name: "Yarn", image: "/front-end/yarn.svg", href: "https://yarnpkg.com/" },
];

const orbit2Items: CircleItem[] = [
    { type: "tools", name: "", image: "/others/authjs.svg", href: "" },
    { type: "tools", name: "", image: "/others/better-auth_dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/canva.svg", href: "" },
    { type: "tools", name: "", image: "/others/dribbble.svg", href: "" },
    { type: "tools", name: "", image: "/others/eslint-icon-dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/Google_Colaboratory.svg", href: "" },
    { type: "tools", name: "", image: "/others/laravel.svg", href: "" },
    { type: "tools", name: "", image: "/others/layers_dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/linkedin.svg", href: "" },
    { type: "tools", name: "", image: "/others/microsoft-excel.svg", href: "" },
    { type: "tools", name: "", image: "/others/microsoft-powerpoint.svg", href: "" },
    { type: "tools", name: "", image: "/others/mongodb-icon-dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/motion_dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/mysql-icon-dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/n8n.svg", href: "" },
    { type: "tools", name: "", image: "/others/nodejs.svg", href: "" },
    { type: "tools", name: "", image: "/others/notion.svg", href: "" },
    { type: "tools", name: "", image: "/others/openai_dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/php_dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/prettier-icon-dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/python.svg", href: "" },
    { type: "tools", name: "", image: "/others/shadcn-ui_dark.svg", href: "" },
    { type: "tools", name: "", image: "/others/sketch.svg", href: "" },
    { type: "tools", name: "", image: "/others/tensorflow-icon-dark.svg", href: "" },
];

// --- MEMOIZED CIRCLE COMPONENT (unchanged) ---
const CircleContent = React.memo(({ item }: { item: CircleItem }) => {
    if (item.type === "empty") return null;

    return (
        <a
            href={item.href}
            title={item.name}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full p-2 rounded-full transition-all duration-200 hover:scale-105 group"
        >
            <img
                src={item.image}
                alt={item.name}
                title={item.name}
                className="max-w-[36px] max-h-[36px] object-contain"
                loading="lazy"
                decoding="async"
                width={36}
                height={36}
            />
        </a>
    );
});

CircleContent.displayName = "CircleContent";

// --- ORBIT ITEM with CSS Counter-Rotation ---
const OrbitItem = React.memo(({
    item,
    x,
    y,
    isEmpty,
    circleSize,
}: {
    item: CircleItem;
    x: number;
    y: number;
    isEmpty: boolean;
    circleSize: number;
}) => {
    return (
        <div
            className={`absolute flex items-center justify-center rounded-full will-change-transform
                ${isEmpty ? "" : "bg-background/10 backdrop-blur-sm border"}
                ${!isEmpty ? "transition-[filter] duration-200 hover:scale-105" : ""}
            `}
            style={{
                width: isEmpty ? 6 : circleSize,
                height: isEmpty ? 6 : circleSize,
                left: isEmpty ? x + circleSize / 2 - 3 : x,
                top: isEmpty ? y + circleSize / 2 - 3 : y,
                // CSS counter-rotation using inherited CSS variable
                transform: `rotate(calc(var(--orbit-rotation, 0) * -1deg))`,
            }}
        >
            {isEmpty ? (
                <div className="w-full h-full rounded-full bg-amber-50/20" />
            ) : (
                <CircleContent item={item} />
            )}
        </div>
    );
});

OrbitItem.displayName = "OrbitItem";

// --- OPTIMIZED ORBIT COMPONENT with CSS Variables ---
function Orbit({
    items,
    radius,
    baseSpeed,
    direction = 1,
    orbitIndex,
    isInView,
    scrollVelocity,
}: {
    items: CircleItem[];
    radius: number;
    baseSpeed: number;
    direction?: 1 | -1;
    orbitIndex: number;
    isInView: boolean;
    scrollVelocity: ReturnType<typeof useSpring>;
}) {
    const total = items.length;
    const circleSize = 64;

    const containerRef = useRef<HTMLDivElement>(null);
    const rotationRef = useRef(0);

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    // Memoize circle positions
    const circlePositions = useMemo(() => {
        return items.map((_, i) => {
            const angle = (360 / total) * i - 90;
            const rad = (angle * Math.PI) / 180;
            const x = radius + radius * Math.cos(rad) - circleSize / 2;
            const y = radius + radius * Math.sin(rad) - circleSize / 2;
            return { x, y, angle };
        });
    }, [items.length, radius, circleSize, total]);

    // Single animation frame updates ONE CSS variable - no multiple subscriptions!
    useAnimationFrame((_, delta) => {
        if (!isInView || !containerRef.current) return;

        const velocity = Math.abs(scrollVelocity.get());
        const velocityBoost = Math.min(velocity / 500, 3);
        const speedMultiplier = 1 + velocityBoost;

        const increment = direction * baseSpeed * (delta / 1000) * speedMultiplier;
        rotationRef.current += increment;

        // Update single CSS variable - all items inherit this
        containerRef.current.style.setProperty(
            '--orbit-rotation',
            String(rotationRef.current)
        );
    });

    if (!isMounted) {
        return (
            <div
                className="absolute rounded-full border border-green-50/[0.07]"
                style={{
                    width: radius * 2,
                    height: radius * 2,
                    top: "50%",
                    left: "50%",
                    marginLeft: -radius,
                    marginTop: -radius,
                    opacity: 0,
                }}
            />
        );
    }

    return (
        <motion.div
            className="absolute rounded-full border border-green-50/[0.07]"
            style={{
                width: radius * 2,
                height: radius * 2,
                top: "50%",
                left: "50%",
                marginLeft: -radius,
                marginTop: -radius,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
                duration: 1.2,
                delay: 0.2 + orbitIndex * 0.15,
                ease: [0.25, 1, 0.5, 1],
            }}
        >
            {/* Container with CSS variable and transform */}
            <div
                ref={containerRef}
                className="w-full h-full relative will-change-transform"
                style={{
                    // Orbit rotation using the same CSS variable
                    transform: `rotate(calc(var(--orbit-rotation, 0) * 1deg))`,
                }}
            >
                {items.map((item, i) => {
                    const { x, y } = circlePositions[i];
                    const isEmpty = item.type === "empty";

                    return (
                        <OrbitItem
                            key={`${orbitIndex}-${i}`}
                            item={item}
                            x={x}
                            y={y}
                            isEmpty={isEmpty}
                            circleSize={circleSize}
                        />
                    );
                })}
            </div>
        </motion.div>
    );
}

// --- CTAButton (unchanged) ---
const CTAButton = React.memo(({ isInView }: { isInView: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href="#intro"
            className="group relative inline-flex items-center gap-2 transition-all duration-200 ease-out cursor-pointer will-change-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={
                isInView
                    ? { opacity: 1, y: 0, scale: isHovered ? 1.05 : 1 }
                    : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
        >
            <Button className="btn-primary">Discover how</Button>
        </motion.a>
    );
});

CTAButton.displayName = "CTAButton";

// --- LOGO SVG (unchanged) ---
function Logo({ isInView }: { isInView: boolean }) {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="38"
            fill="none"
            viewBox="0 0 41 38"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
        >
            <path
                fill="#47B671"
                d="M40.5204 37.2549H31.7265L23.3323 23.884C21.2537 19.6379 22.4662 14.6978 23.3323 12.7585L31.8264 0H40.5204L29.9277 15.4123C29.0484 17.9436 29.5613 20.2095 29.9277 21.0261L40.5204 37.2549Z"
            />
            <path
                fill="#47B671"
                d="M0 37.2549H8.79391L17.1881 23.884C19.2667 19.6379 18.0542 14.6978 17.1881 12.7585L8.69398 0H4.55645e-06L10.5927 15.4123C11.4721 17.9436 10.9591 20.2095 10.5927 21.0261L0 37.2549Z"
            />
        </motion.svg>
    );
}

// --- MAIN HERO ---
export default function Cta3() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });


    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-[150vh] w-full flex items-center justify-center overflow-hidden"
        >
            {/* Subtle radial glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    className={`w-[800px] h-[800px] rounded-full bg-green-600/10 ${isMobile ? "blur-[80px]" : "blur-[120px]"}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* Orbits */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="relative"
                    style={{
                        width: isMobile ? 700 : 900,
                        height: isMobile ? 700 : 900,
                    }}
                >
                    <Orbit
                        items={orbit2Items}
                        radius={isMobile ? 340 : 440}
                        baseSpeed={isMobile ? 3 : 4}
                        direction={-1}
                        orbitIndex={1}
                        isInView={isInView}
                        scrollVelocity={smoothVelocity}
                    />
                    <Orbit
                        items={orbit1Items}
                        radius={isMobile ? 240 : 340}
                        baseSpeed={isMobile ? 4 : 5}
                        direction={1}
                        orbitIndex={0}
                        isInView={isInView}
                        scrollVelocity={smoothVelocity}
                    />
                </div>
            </div>

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-6"
                >
                    <Logo isInView={isInView} />
                </motion.div>
                <motion.h5
                    className="text-4xl md:text-6xl ltr:leading-[1.1] ltr:sm:leading-[1.05] leading-tight tracking-[-0.005em] md:tracking-[-0.01em] mb-3 text-balance effect-font-hero effect-font-gradient effect-font-styling"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Make it Stronger
                </motion.h5>
                <motion.p
                    className="text-balance text-sm sm:text-[1rem] md:text-lg text-text-secondary mb-8 max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.65 }}
                >
                    Protect Works, Secure Catalogs, Identify AI
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <CTAButton isInView={isInView} />
                </motion.div>
            </div>
        </section>
    );
}