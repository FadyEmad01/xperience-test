// "use client"
// import React from "react";
// import { motion } from "motion/react";
// import { Terminal } from "lucide-react";
// import { cn } from "@/lib/utils";
// import Container from "@/components/layout/Container";
// import { useTranslations } from "next-intl";

// // --- Types & Data ---
// // interface Testimonial {
// //     id: string;
// //     name: string;
// //     email: string;
// //     avatar: string;
// //     date: string;
// //     title: string;
// //     content: React.ReactNode;
// //     gradientColor: string; // The subtle color of the top glow
// //     layoutClasses: string; // Controls rotation and offset per card
// // }
// export interface Testimonial {
//     id: string;
//     name: string;
//     email?: string;
//     avatar?: string;

//     date: string;
//     title: string;
//     content?: string;

//     gradientColor: string; // The subtle color of the top glow
//     layoutClasses: string; // Controls rotation and offset per card
//     role?: string;// Controls rotation and offset per cardq

// }

// export const testimonials: Testimonial[] = [
//     {
//         id: "learning",
//         title: "testimonials.learning.title",
//         email: "zeno@resend.com",
//         date: "Dec 6th, 2022",
//         content: "testimonials.learning.content",
//         name: "testimonials.learning.name",
//         role: "testimonials.learning.role",
//         avatar: "https://i.pravatar.cc/150?u=learning",
//         gradientColor: "rgba(16, 122, 219, 0.15)", // Blueish
//         layoutClasses: "z-10", // First card, standard center
//     },
//     {
//         id: "teamwork",
//         title: "testimonials.teamwork.title",
//         email: "zeno@resend.com",
//         date: "Dec 6th, 2022",
//         content: "testimonials.teamwork.content",
//         name: "testimonials.teamwork.name",
//         role: "testimonials.teamwork.role",
//         avatar: "https://i.pravatar.cc/150?u=teamwork",
//         gradientColor: "rgba(150, 40, 150, 0.15)", // Purpleish
//         // Rotated right and pushed slightly
//         layoutClasses: "z-20 md:rotate-2 lg:rotate-2 lg:-translate-x-[10%] lg:-translate-y-[5%]",
//     },
//     {
//         id: "growth",
//         title: "testimonials.growth.title",
//         email: "zeno@resend.com",
//         date: "Dec 6th, 2022",
//         content: "testimonials.growth.content",
//         name: "testimonials.growth.name",
//         role: "testimonials.growth.role",
//         avatar: "https://i.pravatar.cc/150?u=growth",
//         gradientColor: "rgba(16, 199, 200, 0.15)", // Tealish
//         // Rotated left and pushed right
//        layoutClasses: "z-30 md:-rotate-1 lg:-rotate-2 lg:translate-x-[10%] lg:-translate-y-[5%]",
//     },
//     {
//         id: "career",
//         title: "testimonials.career.title",
//         email: "zeno@resend.com",
//         date: "Dec 6th, 2022",
//         content: "testimonials.career.content",
//         name: "testimonials.career.name",
//         role: "testimonials.career.role",
//         avatar: "https://i.pravatar.cc/150?u=career",
//         gradientColor: "rgba(16, 199, 200, 0.15)", // Tealish
//         // Rotated left and pushed right
//         layoutClasses: "z-40",
//     },
// ];

// // const testimonials: Testimonial[] = [
// //     {
// //         id: "zeno",
// //         name: "Zeno Rocha",
// //         email: "zeno@resend.com",
// //         avatar: "https://i.pravatar.cc/150?u=zeno",
// //         date: "Dec 6th, 2022",
// //         title: "Do work that inspires others",
// //         gradientColor: "rgba(16, 122, 219, 0.15)", // Blueish
// //         layoutClasses: "z-10", // First card, standard center

// //     },
// //     {
// //         id: "jonni",
// //         name: "Jonni Lundy",
// //         email: "jonni@resend.com",
// //         avatar: "https://i.pravatar.cc/150?u=jonni",
// //         date: "Jan 2nd, 2023",
// //         title: "No ego",
// //         gradientColor: "rgba(150, 40, 150, 0.15)", // Purpleish
// //         // Rotated right and pushed slightly
// //         layoutClasses: "z-20 md:rotate-2 lg:rotate-2 lg:-translate-x-[10%] lg:-translate-y-[5%]",

// //     },
// //     {
// //         id: "bu",
// //         name: "Bu Kinoshita",
// //         email: "bu@resend.com",
// //         avatar: "https://i.pravatar.cc/150?u=bu",
// //         date: "May 15th, 2023",
// //         title: "Keep shipping",
// //         gradientColor: "rgba(16, 199, 200, 0.15)", // Tealish
// //         // Rotated left and pushed right
// //         layoutClasses: "z-30 md:-rotate-1 lg:-rotate-2 lg:translate-x-[10%] lg:-translate-y-[5%]",

// //     },
// // ];

// // --- Sub-Component: The "Resend" Style Card ---

// const Card = ({ data }: { data: Testimonial }) => {

//     const t = useTranslations("testimonials");

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className={cn(
//                 "relative mx-auto w-full max-w-[704px] rounded-2xl overflow-hidden",
//                 "mb-12 lg:mb-0", // Spacing on mobile, overlap handled by layoutClasses on desktop
//                 data.layoutClasses
//             )}
//             // The Complex Gradient Border Strategy
//             style={{
//                 background: `
//           linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) padding-box,
//           linear-gradient(0deg, rgb(0, 0, 0) 25%, rgba(255, 255, 255, 0.15)) border-box
//         `,
//                 border: "2px solid transparent",
//             }}
//         >
//             {/* 1. Top Glow Light Effect */}
//             <div
//                 className="absolute left-1/2 top-0 z-0 h-[400px] w-[80%] -translate-x-1/2 pointer-events-none"
//                 style={{
//                     background: `radial-gradient(50% 100% at 50% 0%, ${data.gradientColor} 0%, rgba(0,0,0,0) 100%)`,
//                 }}
//             />

//             {/* 2. Window Header (Terminal Style) */}
//             <div className="relative z-10 flex items-center justify-between border-b border-white/5 p-4 bg-black/20 backdrop-blur-sm">
//                 {/* Traffic Lights */}
//                 <div className="flex gap-2">
//                     <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] border border-white/20" />
//                     <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] border border-white/20" />
//                     <div className="h-2.5 w-2.5 rounded-full bg-[#28C840] border border-white/20" />
//                 </div>
//                 {/* Date & Icon */}
//                 <div className="flex items-center gap-2 opacity-50">
//                     <Terminal size={14} className="text-white" />
//                     <span className="text-xs font-mono text-white tracking-wide">
//                         {data.date}
//                     </span>
//                 </div>
//             </div>

//             {/* 3. Card Content */}
//             <div className="relative z-10 p-6 md:p-12 bg-black/40">

//                 {/* Avatar Pill */}
//                 <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 backdrop-blur-md transition-colors hover:bg-white/10 cursor-default">
//                     <img
//                         src={data.avatar}
//                         alt={data.name}
//                         className="h-8 w-8 rounded-full border border-white/10"
//                     />
//                     <div className="flex flex-col text-left">
//                         <span className="text-xs font-semibold text-white/90">
//                             {t(data.name)}
//                         </span>
//                         <span className="text-[10px] text-white/50 font-mono">
//                             &lt;{data.email}&gt;
//                         </span>
//                     </div>
//                 </div>

//                 {/* Title */}
//                 <h3 className="mb-4 text-3xl md:text-4xl font-bold tracking-tighter text-white text-arabic-font">
//                     {data.title}
//                 </h3>

//                 {/* Body Text */}
//                 <p className="text-lg leading-relaxed text-neutral-400 ">
//                     {data.content}
//                 </p>
//             </div>
//         </motion.div>
//     );
// };

// // --- Main Section ---
// export default function TestimonialsSection() {
//     return (
//         <section className="relative w-full bg-black py-32 overflow-hidden">
//             <Container>
//                 <div className="relative z-10 mb-20 text-center max-w-2xl mx-auto">
//                     {/* <motion.h2
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6"
//                     >
//                         What we believe
//                     </motion.h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.1 }}
//                         className="text-lg text-neutral-400"
//                     >
//                         Principles that dictate how we think, behave, and make decisions.
//                     </motion.p> */}
//                     <h2 className="text-4xl md:text-6xl ltr:leading-[1.1] ltr:sm:leading-[1.05] leading-tight tracking-[-0.005em] md:tracking-[-0.01em] mb-3 text-balance ">
//                         <span className='effect-font-hero effect-font-gradient effect-font-styling'>Built for Learning.</span> <br />
//                         <span className="text-neutral-500">Trusted by Studemts.</span>
//                     </h2>
//                 </div>

//                 {/* Cards Container */}
//                 <div className="relative max-w-4xl mx-auto flex flex-col items-center">
//                     {testimonials.map((item) => (
//                         <Card key={item.id} data={item} />
//                     ))}
//                 </div>
//             </Container>
//             {/* Section Header */}

//         </section>
//     );
// }

"use client";

import React from "react";
import { motion } from "motion/react";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/Container";
import { useTranslations } from "next-intl";

// --- Configuration Data ---
// We only keep STYLING and IDs here. Text comes from messages.json
interface TestimonialConfig {
    id: "learning" | "teamwork" | "growth" | "career"; // Strictly typed to match JSON keys
    avatar: string;
    email: string; // This could be translated too, but usually email is static
    date: string;  // You can use next-intl formatting for dates if needed, keeping string for now
    gradientColor: string;
    layoutClasses: string;
}

const TESTIMONIAL_CONFIG: TestimonialConfig[] = [
    {
        id: "learning",
        avatar: "https://i.pravatar.cc/150?u=learning",
        email: "alex@xperience.com",
        date: "Dec 6th, 2022",
        gradientColor: "rgba(16, 122, 219, 0.15)", // Blueish
        layoutClasses: "z-10",
    },
    {
        id: "teamwork",
        avatar: "https://i.pravatar.cc/150?u=teamwork",
        email: "sarah@xperience.com",
        date: "Jan 12th, 2023",
        gradientColor: "rgba(150, 40, 150, 0.15)", // Purpleish
        layoutClasses: "z-20 md:rotate-2 lg:rotate-2 lg:-translate-x-[10%] lg:-translate-y-[5%]",
    },
    {
        id: "growth",
        avatar: "https://i.pravatar.cc/150?u=growth",
        email: "michael@xperience.com",
        date: "May 15th, 2023",
        gradientColor: "rgba(16, 199, 200, 0.15)", // Tealish
        layoutClasses: "z-30 md:-rotate-1 lg:-rotate-2 lg:translate-x-[10%] lg:-translate-y-[5%]",
    },
    {
        id: "career",
        avatar: "https://i.pravatar.cc/150?u=career",
        email: "emily@xperience.com",
        date: "Aug 24th, 2023",
        gradientColor: "rgba(255, 100, 50, 0.15)", // Orangeish
        layoutClasses: "z-40",
    },
];

// --- Sub-Component: The "Resend" Style Card ---

const Card = ({ config }: { config: TestimonialConfig }) => {
    // Hook into the 'testimonials' namespace
    const t = useTranslations("testimonials");

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
                "relative mx-auto w-full max-w-[704px] rounded-2xl overflow-hidden",
                "mb-12 lg:mb-0", // Spacing on mobile
                config.layoutClasses
            )}
            style={{
                background: `
          linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) padding-box,
          linear-gradient(0deg, rgb(0, 0, 0) 25%, rgba(255, 255, 255, 0.15)) border-box
        `,
                border: "2px solid transparent",
            }}
        >
            {/* 1. Top Glow Light Effect */}
            <div
                className="absolute left-1/2 top-0 z-0 h-[400px] w-[80%] -translate-x-1/2 pointer-events-none"
                style={{
                    background: `radial-gradient(50% 100% at 50% 0%, ${config.gradientColor} 0%, rgba(0,0,0,0) 100%)`,
                }}
            />

            {/* 2. Window Header (Terminal Style) */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/5 p-4 bg-black/20 backdrop-blur-sm">
                <div className="flex gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57] border border-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E] border border-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28C840] border border-white/20" />
                </div>
                <div className="flex items-center gap-2 opacity-50">
                    <Terminal size={14} className="text-white" />
                    <span className="text-xs font-mono text-white tracking-wide">
                        {config.date}
                    </span>
                </div>
            </div>

            {/* 3. Card Content */}
            <div className="relative z-10 p-6 md:p-12 bg-black/40">
                {/* Avatar Pill */}
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-4 rtl:pr-1 rtl:pl-4 backdrop-blur-md transition-colors hover:bg-white/10 cursor-default">
                    <img
                        src={config.avatar}
                        alt={t(`${config.id}.name`)}
                        className="h-8 w-8 rounded-full border border-white/10"
                    />
                    <div className="flex flex-col text-left">
                        {/* Dynamic Name */}
                        <span className="text-xs rtl:text-start font-semibold text-white/90">
                            {t(`${config.id}.name`)}
                        </span>
                        {/* Dynamic Role (Optional if you want to show role or email) */}
                        <span className="text-[10px] text-white/50 font-mono">
                            {/* If you want to use the role from JSON instead of email: */}
                            {/* {t(`${config.id}.role`)} */}
                            &lt;{config.email}&gt;
                        </span>
                    </div>
                </div>

                {/* Dynamic Title */}
                <h3 className="mb-4 text-3xl md:text-4xl font-bold tracking-tighter text-white">
                    {t(`${config.id}.title`)}
                </h3>

                {/* Dynamic Body Text with Rich Formatting (<strong> handling) */}
                {/* <p className="text-lg mb-4 leading-relaxed text-neutral-400">
                    {t.rich(`${config.id}.content`, {
                        strong: (chunks) => (
                            <span className="text-white font-medium">{chunks}</span>
                        ),
                    })}
                </p> */}
                <img className="w-full lg:rounded-2xl rounded-xl" src="/images/t1.png" alt="" />
            </div>
        </motion.div>
    );
};

// --- Main Section ---
export default function TestimonialsSection() {
    const t = useTranslations("testimonials");

    return (
        <section className="relative w-full bg-black py-32 overflow-hidden">
            <Container>
                <div className="relative z-10  text-center max-w-2xl mx-auto">
                    {/* Using text-balance for nicer wrapping */}
                    <h2 className="text-4xl md:text-6xl ltr:leading-[1.1] ltr:sm:leading-[1.05] leading-tight tracking-[-0.005em] md:tracking-[-0.01em] mb-3 text-balance">
                        {/* <span className="effect-font-hero effect-font-gradient effect-font-styling">
              Built for Learning.
            </span>{" "}
            <br />
            <span className="text-neutral-500">Trusted by Students.</span> */}
                        {t.rich("header", {
                            // Map the <gradient> tag to the span with gradient styles
                            gradient: (chunks) => (
                                <span className="effect-font-hero effect-font-gradient effect-font-styling">
                                    {chunks}
                                </span>
                            ),
                            // Map the <br> tag to a line break
                            br: () => <br />,
                            // Map the <muted> tag to the gray text span
                            muted: (chunks) => (
                                <span className="text-neutral-500">
                                    {chunks}
                                </span>
                            ),
                        })}
                    </h2>
                </div>

                {/* Cards Container */}
                <div className="relative max-w-4xl mx-auto flex flex-col items-center overflow-hidden">
                    {TESTIMONIAL_CONFIG.map((item) => (
                        <Card key={item.id} config={item} />
                    ))}
                </div>
            </Container>
        </section>
    );
}