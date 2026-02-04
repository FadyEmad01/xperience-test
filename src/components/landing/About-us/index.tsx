'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layout, GitBranch, Terminal, ChevronRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import { cn } from '@/lib/utils';

const features = [
    {
        id: 0,
        title: "Zero-to-Hero Curriculum",
        description: "Our roadmap takes you from console.log to deploying scalable microservices. No fluff, just production-grade engineering practices.",
        icon: <Terminal className="w-5 h-5" />,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 1,
        title: "AI-Pair Programming",
        description: "Code inside our intelligent IDE that acts as a senior engineer, reviewing your PRs and suggesting refactors in real-time.",
        icon: <Code className="w-5 h-5" />,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Real-World Projects",
        description: "Build e-commerce backends, real-time chat apps, and SaaS dashboards. Gain the confidence to ship software that people actually use.",
        icon: <Layout className="w-5 h-5" />,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Verified Certification",
        description: "Pass our capstone exams to earn certificates that employers trust. Direct integrations with LinkedIn and GitHub.",
        icon: <GitBranch className="w-5 h-5" />,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    },
];

const DURATION = 5000; // 5s

// const imageVariants = {
//     enter: (direction: number) => ({
//         y: direction === 1 ? 80 : -80,
//         opacity: 0,
//         scale: 0.95,
//     }),
//     center: {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//     },
//     exit: (direction: number) => ({
//         y: direction === 1 ? -80 : 80,
//         opacity: 0,
//         scale: 0.95,
//     }),
// };

const imageVariants = {
    enter: (direction: number) => ({
        y: direction === 1 ? "100%" : "-100%",
        clipPath: direction === 1 ? "inset(100% 0 0 0)" : "inset(0% 0 100% 0)",
    }),
    center: {
        y: "0%",
        clipPath: "inset(0% 0 0 0)",
    },
    exit: (direction: number) => ({
        y: direction === 1 ? "-100%" : "100%",
        clipPath: direction === 1 ? "inset(0% 0 100% 0)" : "inset(100% 0 0 0)",
    }),
};

export default function AboutUs() {
    const [activeTab, setActiveTab] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<1 | -1>(1);

    const handleNext = useCallback(() => {
        setDirection(1);
        setActiveTab((prev) => (prev + 1) % features.length);
    }, []);

    const handleChange = (nextIndex: number) => {
        setDirection(nextIndex > activeTab ? 1 : -1);
        setActiveTab(nextIndex);
    };

    useEffect(() => {
        if (isPaused) return;
        const timer = setTimeout(handleNext, DURATION);
        return () => clearTimeout(timer);
    }, [activeTab, isPaused, handleNext]);

    return (
        <section className="overflow-hidden relative">
            <Container className='py-10'>
                {/* Header */}
                <div className="mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl ltr:leading-[1.1] ltr:sm:leading-[1.05] leading-tight tracking-[-0.005em] md:tracking-[-0.01em] mb-3 text-balance ">
                        <span className='effect-font-hero effect-font-gradient effect-font-styling'>Master modern</span> <br />
                        <span className="text-neutral-500">software engineering.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left: Accordion List */}
                    <div className="lg:col-span-6 space-y-4">
                        {features.map((feature, index) => (
                            <AccordionItem
                                key={feature.id}
                                feature={feature}
                                isActive={activeTab === index}
                                isPaused={isPaused}
                                onClick={() => {
                                    setActiveTab(index);
                                    handleChange(index)
                                    setIsPaused(true); // Stop autoplay on manual click
                                }}
                                progressDuration={DURATION}
                            />
                        ))}
                    </div>

                    {/* Right: Desktop Sticky Image */}
                    <div className="hidden lg:block lg:col-span-6 sticky top-24">
                        {/* <div className="relative aspect-[3/3] rounded-3xl overflow-hidden bg-green-900/20 backdrop-blur-3xl shadow-inner border border-white/10 ">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeTab}
                                    src={features[activeTab].image}
                                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="absolute inset-2  object-cover"
                                />
                            </AnimatePresence>
                        </div> */}
                        {/* <div className="relative aspect-[3/3] rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
                            style={{
                                backgroundImage: `url(/images/tahoe-light.jpg)`,
                            }}
                        >
                            <AnimatePresence mode="wait" custom={direction}>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <motion.img
                                        key={activeTab}
                                        src={features[activeTab].image}
                                        custom={direction}
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            duration: 0.6,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="w-full h-full max-w-[90%] max-h-[90%] rounded-lg object-cover"
                                    />
                                </div>
                            </AnimatePresence>
                        </div> */}
                        <ImageSwitcher direction={direction} activeIndex={activeTab}/>
                    </div>
                </div>
            </Container>
        </section>
    );
}

function AccordionItem({ feature, isActive, onClick, progressDuration, isPaused }: any) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "group relative p-6 rounded-3xl transition-all duration-500 cursor-pointer",
                isActive ? "bg-neutral-900/50 ring-1 ring-white/10" : "hover:bg-neutral-900/30"
            )}
        >
            <div className="flex items-center gap-4">
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    isActive ? "bg-white text-black" : "bg-neutral-800 text-neutral-400"
                )}>
                    {feature.icon}
                </div>
                <h3 className={cn(
                    "text-xl font-medium transition-colors",
                    isActive ? "text-white" : "text-neutral-500"
                )}>
                    {feature.title}
                </h3>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4">
                            <p className="text-neutral-400 leading-relaxed text-lg">
                                {feature.description}
                            </p>

                            {/* Mobile Image (Visible only inside accordion) */}
                            <div className="lg:hidden rounded-2xl overflow-hidden aspect-video border border-white/10">
                                <img src={feature.image} alt="" className="w-full h-full object-cover" />
                            </div>

                            {isActive && !isPaused && (
                                <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden mt-6">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{
                                            duration: progressDuration / 1000,
                                            ease: "linear",
                                        }}
                                        className="h-full bg-white"
                                    />
                                </div>
                            )}

                            {/* Progress Bar */}
                            {/* <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: progressDuration / 1000, ease: "linear" }}
                                    className="h-full bg-white"
                                />
                            </div> */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


const ImageSwitcher = ({ activeIndex, direction }: { activeIndex: number; direction: 1 | -1 }) => {
    return (
        <div className="relative aspect-[3/3] rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
            style={{
                backgroundImage: `url(/images/tahoe-light.jpg)`,
            }}
        >
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <motion.img
                        src={features[activeIndex].image}
                        initial={{ scale: 1.1, filter: 'blur(10px)' }}
                        animate={{ scale: 1, filter: 'blur(0px)' }}
                        exit={{ scale: 0.95, filter: 'blur(10px)' }}
                        transition={{ duration: 0.3, 
                            // ease: [0.6, 0.01, 0.05, 1] 
                            // ease: "easeInOut"
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                        className="w-full h-full max-w-[90%] max-h-[90%] rounded-lg object-cover"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};