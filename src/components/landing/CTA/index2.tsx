// // "use client";

// // import { motion } from "motion/react";
// // import React from "react";

// // // --- DATA ---
// // type CircleItem =
// //   | { type: "code"; label: string }
// //   | { type: "artist"; name: string; image: string; href?: string }
// //   | { type: "partner"; name: string; image: string; href: string }
// //   | { type: "stat"; value: string; label: string }
// //   | { type: "empty" };

// // const orbit1Items: CircleItem[] = [
// //   { type: "code", label: "IPN" },
// //   { type: "artist", name: "Romain C'", image: "https://cdn.sanity.io/images/0t57ra9c/production/9e5376a5c094486c1a63a39149b902b93a61bac2-161x161.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/roman_c_music/" },
// //   { type: "empty" },
// //   { type: "partner", name: "DMP", image: "https://cdn.sanity.io/images/0t57ra9c/production/d214824cf74f59fe9df015cf85820b1797d66888-107x55.png?auto=format&fit=max&q=90&w=64", href: "https://www.des-mesures.com" },
// //   { type: "code", label: "ISMN" },
// //   { type: "empty" },
// //   { type: "artist", name: "Yacine", image: "https://cdn.sanity.io/images/0t57ra9c/production/3cc9881e8c5b5fd339a45a8e19686330d6544de2-167x167.jpg?auto=format&fit=max&q=90&w=64" },
// //   { type: "partner", name: "Tuneport", image: "https://cdn.sanity.io/images/0t57ra9c/production/83b8b5f0dbbe9fb4a243583511d9bb339030a961-52x34.svg?auto=format&fit=max&q=90&w=52", href: "https://tuneport.xyz" },
// //   { type: "code", label: "EAN" },
// //   { type: "empty" },
// //   { type: "partner", name: "shamusic", image: "https://cdn.sanity.io/images/0t57ra9c/production/162e191a466bde00c21b700772d9809d3d60dceb-81x59.png?auto=format&fit=max&q=90&w=64", href: "https://shamusic.es" },
// //   { type: "code", label: "IPI" },
// //   { type: "empty" },
// //   { type: "partner", name: "Minted Waves", image: "https://cdn.sanity.io/images/0t57ra9c/production/c3b556a35e174061c80ba0001b77c565b1cca238-37x35.svg?auto=format&fit=max&q=90&w=37", href: "https://mintedwaves.com" },
// //   { type: "artist", name: "attalin", image: "https://cdn.sanity.io/images/0t57ra9c/production/c7ff1714140613bbe7ad905288c779acdd9ed253-512x513.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/attalin_ofc/" },
// //   { type: "empty" },
// //   { type: "partner", name: "Snowfall", image: "https://cdn.sanity.io/images/0t57ra9c/production/780914ae11d384e000f008f93bea5131d84b414a-81x79.png?auto=format&fit=max&q=90&w=64", href: "https://www.snow-fall.io" },
// //   { type: "partner", name: "music moon", image: "https://cdn.sanity.io/images/0t57ra9c/production/f0af32b4151c6771eb121f3b11d82139ae22aafb-73x63.png?auto=format&fit=max&q=90&w=64", href: "https://musicmoon.io" },
// //   { type: "code", label: "ISAN" },
// //   { type: "empty" },
// //   { type: "partner", name: "Acegood", image: "https://cdn.sanity.io/images/0t57ra9c/production/0a5ee5cd3dc2fa893fd230f992e8c6f33a23ddf6-20x35.svg?auto=format&fit=max&q=90&w=20", href: "https://acegood.net" },
// //   { type: "artist", name: "Piatro Music", image: "https://cdn.sanity.io/images/0t57ra9c/production/f90a380b2e02e11ba10c3b35a14d7ea993c3e28e-1440x1440.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/piatro.music/" },
// //   { type: "empty" },
// //   { type: "partner", name: "kor protocol", image: "https://cdn.sanity.io/images/0t57ra9c/production/ffb67bb44fb20e4bb037d76ff89f5e9aea27fd2f-129x51.png?auto=format&fit=max&q=90&w=64", href: "https://korprotocol.io" },
// // ];

// // const orbit2Items: CircleItem[] = [
// //   { type: "code", label: "ISWC" },
// //   { type: "artist", name: "Ablaye Cissoko", image: "https://cdn.sanity.io/images/0t57ra9c/production/ea27e8ce2b12aca8da3d118839e43b7615f0c0ac-164x164.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/ablayecissoko/" },
// //   { type: "partner", name: "NFHITS", image: "https://cdn.sanity.io/images/0t57ra9c/production/54aab50223a3bf410f4eb6cb75ada3044981edf0-97x97.png?auto=format&fit=max&q=90&w=64", href: "https://www.nfhits.com" },
// //   { type: "empty" },
// //   { type: "code", label: "UPC" },
// //   { type: "partner", name: "musigamy", image: "https://cdn.sanity.io/images/0t57ra9c/production/6a6391fac3372844e60f8889015aa85651f98505-77x89.png?auto=format&fit=max&q=90&w=64", href: "https://musigamy.com" },
// //   { type: "code", label: "ISNI" },
// //   { type: "partner", name: "kreypt", image: "https://cdn.sanity.io/images/0t57ra9c/production/77306c9c755a7ffbeb54f253d5467b72cf0e7ef6-112x112.png?auto=format&fit=max&q=90&w=64", href: "https://kreypt.art" },
// //   { type: "artist", name: "Emma Daumas", image: "https://cdn.sanity.io/images/0t57ra9c/production/dd3a9f4ce04a5926ce3cdf5aa6f13965c8973afa-1440x960.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/emmadaumasofficiel/" },
// //   { type: "empty" },
// //   { type: "partner", name: "Wiseband", image: "https://cdn.sanity.io/images/0t57ra9c/production/e24efbea406ef5deeab9c4bdf1009d353f8df70f-49x38.svg?auto=format&fit=max&q=90&w=49", href: "https://www.wiseband.com" },
// //   { type: "code", label: "ISRC" },
// //   { type: "stat", value: "400+", label: "artists" },
// //   { type: "partner", name: "DDEX", image: "https://cdn.sanity.io/images/0t57ra9c/production/47f259db717d190aced0dc844868f13e1ed3ebb7-73x20.svg?auto=format&fit=max&q=90&w=64", href: "https://ddex.net" },
// //   { type: "partner", name: "Claimy", image: "https://cdn.sanity.io/images/0t57ra9c/production/9ccf81c33ac2b5b8f44244d83970f7f7e834338c-49x49.svg?auto=format&fit=max&q=90&w=49", href: "https://www.claimy.co" },
// //   { type: "empty" },
// //   { type: "artist", name: "Salihou Jam", image: "https://cdn.sanity.io/images/0t57ra9c/production/c98e869f32d151f4399b98c81f89950e38de5954-855x571.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/salihoujam/" },
// //   { type: "partner", name: "Recallby", image: "https://cdn.sanity.io/images/0t57ra9c/production/33861b8c64b7fa24e1c4e70145fa7f6013cced34-98x100.png?auto=format&fit=max&q=90&w=64", href: "https://recallby.com" },
// //   { type: "stat", value: "9", label: "labels" },
// //   { type: "partner", name: "Dinga Stream", image: "https://cdn.sanity.io/images/0t57ra9c/production/605a3cd4eed991990bb6372378041d2789aff390-128x115.png?auto=format&fit=max&q=90&w=64", href: "https://dingastream.com" },
// //   { type: "partner", name: "Rubichain", image: "https://cdn.sanity.io/images/0t57ra9c/production/a41a7618e8a540cee4d4a1d74c34073228c8eca7-129x81.png?auto=format&fit=max&q=90&w=64", href: "https://www.rubichain.io" },
// //   { type: "empty" },
// //   { type: "code", label: "ISTC" },
// //   { type: "partner", name: "stay independent", image: "https://cdn.sanity.io/images/0t57ra9c/production/81bf98afb50bb57e19398ce701b71ea1223eeefb-177x43.png?auto=format&fit=max&q=90&w=64", href: "https://stayindependent.gr" },
// // ];

// // // --- CIRCLE COMPONENT ---
// // function CircleContent({ item }: { item: CircleItem }) {
// //   if (item.type === "empty") return null;

// //   if (item.type === "code") {
// //     return (
// //       <code className="text-[10px] font-mono font-bold text-amber-50/80 tracking-wider">
// //         {item.label}
// //       </code>
// //     );
// //   }

// //   if (item.type === "stat") {
// //     return (
// //       <dl className="text-center">
// //         <dt className="text-sm font-bold text-amber-50 leading-tight">{item.value}</dt>
// //         <dd className="text-[9px] text-amber-50/60 uppercase tracking-wider">{item.label}</dd>
// //       </dl>
// //     );
// //   }

// //   if (item.type === "artist" || item.type === "partner") {
// //     const img = (
// //       <img
// //         src={item.image}
// //         alt={item.name}
// //         className={
// //           item.type === "artist"
// //             ? "w-full h-full object-cover rounded-full"
// //             : "max-w-[36px] max-h-[36px] object-contain"
// //         }
// //         loading="lazy"
// //         decoding="async"
// //       />
// //     );

// //     if ("href" in item && item.href) {
// //       return (
// //         <a
// //           href={item.href}
// //           title={item.name}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="flex items-center justify-center w-full h-full"
// //         >
// //           {img}
// //         </a>
// //       );
// //     }

// //     return <div className="flex items-center justify-center w-full h-full">{img}</div>;
// //   }

// //   return null;
// // }

// // // --- ORBIT COMPONENT ---
// // function Orbit({
// //   items,
// //   radius,
// //   duration,
// //   direction = 1,
// //   orbitIndex,
// // }: {
// //   items: CircleItem[];
// //   radius: number;
// //   duration: number;
// //   direction?: 1 | -1;
// //   orbitIndex: number;
// // }) {
// //   const total = items.length;
// //   const circleSize = 52;

// //   return (
// //     <motion.div
// //       className="absolute rounded-full border border-amber-50/[0.07]"
// //       style={{
// //         width: radius * 2,
// //         height: radius * 2,
// //         top: "50%",
// //         left: "50%",
// //         marginLeft: -radius,
// //         marginTop: -radius,
// //       }}
// //       initial={{ scale: 0, opacity: 0 }}
// //       animate={{ scale: 1, opacity: 1 }}
// //       transition={{
// //         duration: 1.2,
// //         delay: 0.2 + orbitIndex * 0.15,
// //         ease: [0.25, 1, 0.5, 1],
// //       }}
// //     >
// //       <motion.div
// //         className="w-full h-full relative"
// //         animate={{ rotate: direction * 360 }}
// //         transition={{
// //           duration,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //       >
// //         {items.map((item, i) => {
// //           const angle = (360 / total) * i;
// //           const rad = (angle * Math.PI) / 180;
// //           const x = radius + radius * Math.cos(rad) - circleSize / 2;
// //           const y = radius + radius * Math.sin(rad) - circleSize / 2;

// //           const isEmpty = item.type === "empty";

// //           return (
// //             <motion.div
// //               key={i}
// //               className={`absolute flex items-center justify-center rounded-full overflow-hidden
// //                 ${isEmpty ? "" : "bg-amber-50/[0.06] backdrop-blur-sm border border-amber-50/[0.1]"}
// //                 ${item.type === "artist" ? "ring-2 ring-amber-50/20" : ""}
// //                 ${item.type === "stat" ? "bg-amber-50/[0.1]" : ""}
// //               `}
// //               style={{
// //                 width: isEmpty ? 6 : circleSize,
// //                 height: isEmpty ? 6 : circleSize,
// //                 left: isEmpty ? x + circleSize / 2 - 3 : x,
// //                 top: isEmpty ? y + circleSize / 2 - 3 : y,
// //               }}
// //               // Counter-rotate so content stays upright
// //               animate={{ rotate: -(direction * 360) }}
// //               transition={{
// //                 duration,
// //                 repeat: Infinity,
// //                 ease: "linear",
// //               }}
// //             >
// //               {isEmpty ? (
// //                 <div className="w-full h-full rounded-full bg-amber-50/20" />
// //               ) : (
// //                 <CircleContent item={item} />
// //               )}
// //             </motion.div>
// //           );
// //         })}
// //       </motion.div>
// //     </motion.div>
// //   );
// // }

// // // --- LOGO SVG ---
// // function Logo() {
// //   return (
// //     <motion.svg
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="80"
// //       height="79"
// //       fill="none"
// //       viewBox="0 0 154 152"
// //       initial={{ scale: 0, opacity: 0 }}
// //       animate={{ scale: 1, opacity: 1 }}
// //       transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
// //     >
// //       <path
// //         fill="#FFFBEB"
// //         d="M136.02 64.72a15.99 15.99 0 0 0-8.6-20.86 15.9 15.9 0 0 0-20.8 8.64 15.98 15.98 0 0 0 8.62 20.86 15.9 15.9 0 0 0 20.78-8.64ZM32.32 74.56c8.79 0 15.91-7.15 15.91-15.96 0-8.82-7.12-15.97-15.9-15.97A15.94 15.94 0 0 0 16.4 58.6c0 8.81 7.12 15.96 15.91 15.96ZM76.59 152c8.78 0 15.9-7.15 15.9-15.97 0-8.81-7.12-15.96-15.9-15.96a15.94 15.94 0 0 0-15.91 15.97c0 8.81 7.12 15.96 15.9 15.96Z"
// //       />
// //       <path
// //         fill="#FFFBEB"
// //         d="M141.74 95.22a23.7 23.7 0 0 0-15.55-2.87c-5.3.79-11.52 4.74-18.5.7-5.6-3.26-6.44-9.56-7.91-14.4a23.48 23.48 0 0 0-6.75-11.12c-3.36-3.44-7.55-7.17-7.55-13.1 0-8.09 6.52-11.5 9.85-15.72a24.2 24.2 0 0 0 5.28-15A23.68 23.68 0 0 0 76.97 0a23.68 23.68 0 0 0-23.63 23.72c0 5.62 1.8 10.53 5.22 14.85 2.97 3.76 9.94 8.75 9.94 15.82 0 6.63-5.86 10.54-9.84 15.64a26.94 26.94 0 0 0-3.63 6.1c-2.16 4.97-2.16 12.93-8.75 16.73-6.97 4.04-13.2.08-18.5-.7a23.75 23.75 0 0 0-15.55 2.87 23.8 23.8 0 0 0-8.65 32.43 23.58 23.58 0 0 0 32.3 8.66 23.2 23.2 0 0 0 10.22-11.95c1.75-4.46 2.58-13.02 8.7-16.56 4.9-2.84 10.27-.92 15.77.25.17.05.33.08.5.14.05 0 .1.03.14.03.24.05.5.1.77.17.2.03.39.09.6.1.08 0 .16.04.21.04 1.37.25 2.79.39 4.22.39h.61c.23 0 .45 0 .7-.04.67-.03 1.36-.08 2.02-.17 6.55-.81 13.02-4.18 18.88-.78 6.1 3.54 6.95 12.1 8.7 16.56a23.63 23.63 0 0 0 42.52 3.3 23.76 23.76 0 0 0-8.7-32.39v.01Z"
// //       />
// //     </motion.svg>
// //   );
// // }

// // // --- MAIN HERO ---
// // export default function Cta2() {
// //   return (
// //     <section
// //       id="hero"
// //       className="relative min-h-screen w-full flex items-center justify-center "
// //     >
// //       {/* Background gradient */}
// //       {/* <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-[#1a0a2e] to-[#0f0618]" /> */}

// //       {/* Subtle radial glow */}
// //       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
// //         <div className="w-[800px] h-[800px] rounded-full bg-green-600/[0.07] blur-[120px]" />
// //       </div>

// //       {/* Orbits */}
// //       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
// //         <div className="relative" style={{ width: 900, height: 900 }}>
// //           {/* Orbit 3 (outermost, empty dots only - decorative) */}
// //           <Orbit
// //             items={Array(24).fill({ type: "empty" } as CircleItem)}
// //             radius={440}
// //             duration={180}
// //             direction={1}
// //             orbitIndex={2}
// //           />
// //           {/* Orbit 2 */}
// //           <Orbit
// //             items={orbit2Items}
// //             radius={340}
// //             duration={120}
// //             direction={-1}
// //             orbitIndex={1}
// //           />
// //           {/* Orbit 1 */}
// //           <Orbit
// //             items={orbit1Items}
// //             radius={240}
// //             duration={90}
// //             direction={1}
// //             orbitIndex={0}
// //           />
// //         </div>
// //       </div>

// //       {/* Center content */}
// //       <div className="relative z-10 flex flex-col items-center text-center px-4 pointer-events-auto">
// //         {/* <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.3 }}
// //           className="mb-6"
// //         >
// //           <Logo />
// //         </motion.div> */}

// //         <motion.h1
// //           className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-50 mb-4 tracking-tight"
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.5 }}
// //         >
// //           Make it Stronger
// //         </motion.h1>

// //         <motion.p
// //           className="text-base sm:text-lg text-amber-50/60 mb-8 max-w-md"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.65 }}
// //         >
// //           Protect Works, Secure Catalogs, Identify AI
// //         </motion.p>

// //         <motion.a
// //           href="#intro"
// //           className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full 
// //                      border border-amber-50/20 text-amber-50 text-sm font-medium
// //                      hover:bg-amber-50/10 hover:border-amber-50/40 
// //                      transition-all duration-300 ease-out"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.8 }}
// //           whileHover={{ scale: 1.05 }}
// //           whileTap={{ scale: 0.97 }}
// //         >
// //           <span>Discover how</span>
// //           <svg
// //             className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //             strokeWidth={2}
// //           >
// //             <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
// //           </svg>
// //         </motion.a>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";

// import {
//   motion,
//   useInView,
//   useScroll,
//   useVelocity,
//   useSpring,
//   useMotionValue,
//   useAnimationFrame,
//   useTransform,
// } from "motion/react";
// import React, { useEffect, useRef, useState } from "react";

// // --- DATA ---
// type CircleItem =
//   | { type: "code"; label: string }
//   | { type: "artist"; name: string; image: string; href?: string }
//   | { type: "partner"; name: string; image: string; href: string }
//   | { type: "stat"; value: string; label: string }
//   | { type: "empty" };

// const orbit1Items: CircleItem[] = [
//   { type: "code", label: "IPN" },
//   { type: "artist", name: "Romain C'", image: "https://cdn.sanity.io/images/0t57ra9c/production/9e5376a5c094486c1a63a39149b902b93a61bac2-161x161.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/roman_c_music/" },
//   // { type: "empty" },
//   { type: "partner", name: "DMP", image: "https://cdn.sanity.io/images/0t57ra9c/production/d214824cf74f59fe9df015cf85820b1797d66888-107x55.png?auto=format&fit=max&q=90&w=64", href: "https://www.des-mesures.com" },
//   { type: "code", label: "ISMN" },
//   // { type: "empty" },
//   { type: "artist", name: "Yacine", image: "https://cdn.sanity.io/images/0t57ra9c/production/3cc9881e8c5b5fd339a45a8e19686330d6544de2-167x167.jpg?auto=format&fit=max&q=90&w=64" },
//   { type: "partner", name: "Tuneport", image: "https://cdn.sanity.io/images/0t57ra9c/production/83b8b5f0dbbe9fb4a243583511d9bb339030a961-52x34.svg?auto=format&fit=max&q=90&w=52", href: "https://tuneport.xyz" },
//   { type: "code", label: "EAN" },
//   // { type: "empty" },
//   { type: "partner", name: "shamusic", image: "https://cdn.sanity.io/images/0t57ra9c/production/162e191a466bde00c21b700772d9809d3d60dceb-81x59.png?auto=format&fit=max&q=90&w=64", href: "https://shamusic.es" },
//   { type: "code", label: "IPI" },
//   // { type: "empty" },
//   { type: "partner", name: "Minted Waves", image: "https://cdn.sanity.io/images/0t57ra9c/production/c3b556a35e174061c80ba0001b77c565b1cca238-37x35.svg?auto=format&fit=max&q=90&w=37", href: "https://mintedwaves.com" },
//   { type: "artist", name: "attalin", image: "https://cdn.sanity.io/images/0t57ra9c/production/c7ff1714140613bbe7ad905288c779acdd9ed253-512x513.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/attalin_ofc/" },
//   // { type: "empty" },
//   { type: "partner", name: "Snowfall", image: "https://cdn.sanity.io/images/0t57ra9c/production/780914ae11d384e000f008f93bea5131d84b414a-81x79.png?auto=format&fit=max&q=90&w=64", href: "https://www.snow-fall.io" },
//   { type: "partner", name: "music moon", image: "https://cdn.sanity.io/images/0t57ra9c/production/f0af32b4151c6771eb121f3b11d82139ae22aafb-73x63.png?auto=format&fit=max&q=90&w=64", href: "https://musicmoon.io" },
//   { type: "code", label: "ISAN" },
//   // { type: "empty" },
//   { type: "partner", name: "Acegood", image: "https://cdn.sanity.io/images/0t57ra9c/production/0a5ee5cd3dc2fa893fd230f992e8c6f33a23ddf6-20x35.svg?auto=format&fit=max&q=90&w=20", href: "https://acegood.net" },
//   { type: "artist", name: "Piatro Music", image: "https://cdn.sanity.io/images/0t57ra9c/production/f90a380b2e02e11ba10c3b35a14d7ea993c3e28e-1440x1440.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/piatro.music/" },
//   // { type: "empty" },
//   { type: "partner", name: "kor protocol", image: "https://cdn.sanity.io/images/0t57ra9c/production/ffb67bb44fb20e4bb037d76ff89f5e9aea27fd2f-129x51.png?auto=format&fit=max&q=90&w=64", href: "https://korprotocol.io" },
// ];

// const orbit2Items: CircleItem[] = [
//   { type: "code", label: "ISWC" },
//   { type: "artist", name: "Ablaye Cissoko", image: "https://cdn.sanity.io/images/0t57ra9c/production/ea27e8ce2b12aca8da3d118839e43b7615f0c0ac-164x164.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/ablayecissoko/" },
//   { type: "partner", name: "NFHITS", image: "https://cdn.sanity.io/images/0t57ra9c/production/54aab50223a3bf410f4eb6cb75ada3044981edf0-97x97.png?auto=format&fit=max&q=90&w=64", href: "https://www.nfhits.com" },
//   { type: "empty" },
//   { type: "code", label: "UPC" },
//   { type: "partner", name: "musigamy", image: "https://cdn.sanity.io/images/0t57ra9c/production/6a6391fac3372844e60f8889015aa85651f98505-77x89.png?auto=format&fit=max&q=90&w=64", href: "https://musigamy.com" },
//   { type: "code", label: "ISNI" },
//   { type: "partner", name: "kreypt", image: "https://cdn.sanity.io/images/0t57ra9c/production/77306c9c755a7ffbeb54f253d5467b72cf0e7ef6-112x112.png?auto=format&fit=max&q=90&w=64", href: "https://kreypt.art" },
//   { type: "artist", name: "Emma Daumas", image: "https://cdn.sanity.io/images/0t57ra9c/production/dd3a9f4ce04a5926ce3cdf5aa6f13965c8973afa-1440x960.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/emmadaumasofficiel/" },
//   { type: "empty" },
//   { type: "partner", name: "Wiseband", image: "https://cdn.sanity.io/images/0t57ra9c/production/e24efbea406ef5deeab9c4bdf1009d353f8df70f-49x38.svg?auto=format&fit=max&q=90&w=49", href: "https://www.wiseband.com" },
//   { type: "code", label: "ISRC" },
//   { type: "stat", value: "400+", label: "artists" },
//   { type: "partner", name: "DDEX", image: "https://cdn.sanity.io/images/0t57ra9c/production/47f259db717d190aced0dc844868f13e1ed3ebb7-73x20.svg?auto=format&fit=max&q=90&w=64", href: "https://ddex.net" },
//   { type: "partner", name: "Claimy", image: "https://cdn.sanity.io/images/0t57ra9c/production/9ccf81c33ac2b5b8f44244d83970f7f7e834338c-49x49.svg?auto=format&fit=max&q=90&w=49", href: "https://www.claimy.co" },
//   { type: "empty" },
//   { type: "artist", name: "Salihou Jam", image: "https://cdn.sanity.io/images/0t57ra9c/production/c98e869f32d151f4399b98c81f89950e38de5954-855x571.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/salihoujam/" },
//   { type: "partner", name: "Recallby", image: "https://cdn.sanity.io/images/0t57ra9c/production/33861b8c64b7fa24e1c4e70145fa7f6013cced34-98x100.png?auto=format&fit=max&q=90&w=64", href: "https://recallby.com" },
//   { type: "stat", value: "9", label: "labels" },
//   { type: "partner", name: "Dinga Stream", image: "https://cdn.sanity.io/images/0t57ra9c/production/605a3cd4eed991990bb6372378041d2789aff390-128x115.png?auto=format&fit=max&q=90&w=64", href: "https://dingastream.com" },
//   { type: "partner", name: "Rubichain", image: "https://cdn.sanity.io/images/0t57ra9c/production/a41a7618e8a540cee4d4a1d74c34073228c8eca7-129x81.png?auto=format&fit=max&q=90&w=64", href: "https://www.rubichain.io" },
//   { type: "empty" },
//   { type: "code", label: "ISTC" },
//   { type: "partner", name: "stay independent", image: "https://cdn.sanity.io/images/0t57ra9c/production/81bf98afb50bb57e19398ce701b71ea1223eeefb-177x43.png?auto=format&fit=max&q=90&w=64", href: "https://stayindependent.gr" },
// ];

// // --- CIRCLE COMPONENT ---
// function CircleContent({ item }: { item: CircleItem }) {
//   if (item.type === "empty") return null;

//   if (item.type === "code") {
//     return (
//       <code className="text-[10px] font-mono font-bold text-amber-50/80 tracking-wider">
//         {item.label}
//       </code>
//     );
//   }

//   if (item.type === "stat") {
//     return (
//       <dl className="text-center">
//         <dt className="text-sm font-bold text-amber-50 leading-tight">{item.value}</dt>
//         <dd className="text-[9px] text-amber-50/60 uppercase tracking-wider">{item.label}</dd>
//       </dl>
//     );
//   }

//   if (item.type === "artist" || item.type === "partner") {
//     const img = (
//       <img
//         src={item.image}
//         alt={item.name}
//         className={
//           item.type === "artist"
//             ? "w-full h-full object-cover rounded-full"
//             : "max-w-[36px] max-h-[36px] object-contain"
//         }
//         loading="lazy"
//         decoding="async"
//       />
//     );

//     if ("href" in item && item.href) {
//       return (
//         <a
//           href={item.href}
//           title={item.name}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center w-full h-full"
//         >
//           {img}
//         </a>
//       );
//     }

//     return <div className="flex items-center justify-center w-full h-full">{img}</div>;
//   }

//   return null;
// }

// // --- ORBIT COMPONENT WITH SCROLL VELOCITY ---
// function Orbit({
//   items,
//   radius,
//   baseSpeed,
//   direction = 1,
//   orbitIndex,
//   isInView,
//   scrollVelocity,
// }: {
//   items: CircleItem[];
//   radius: number;
//   baseSpeed: number; // degrees per second
//   direction?: 1 | -1;
//   orbitIndex: number;
//   isInView: boolean;
//   scrollVelocity: ReturnType<typeof useSpring>;
// }) {
//   const total = items.length;
//   const circleSize = 52;

//   // Motion values for orbit and counter rotation
//   const orbitRotation = useMotionValue(0);
//   const counterRotation = useMotionValue(0);

//   const [isMounted, setIsMounted] = useState(false);
//   useEffect(() => setIsMounted(true), []);

//   // Animation frame for continuous rotation with scroll velocity boost
//   useAnimationFrame((_, delta) => {
//     if (!isInView) return;

//     // Get scroll velocity and calculate speed multiplier
//     const velocity = Math.abs(scrollVelocity.get());
//     const velocityBoost = Math.min(velocity / 500, 5); // Cap the boost at 5x
//     const speedMultiplier = 1 + velocityBoost;

//     // Calculate rotation increment
//     const increment = direction * baseSpeed * (delta / 1000) * speedMultiplier;

//     orbitRotation.set(orbitRotation.get() + increment);
//     counterRotation.set(counterRotation.get() - increment);
//   });

//   if (!isMounted) return (
//     <div
//       className="absolute rounded-full border border-green-50/[0.07]"
//       style={{
//         width: radius * 2,
//         height: radius * 2,
//         top: "50%",
//         left: "50%",
//         marginLeft: -radius,
//         marginTop: -radius,
//         opacity: 0,
//       }}
//     />
//   );

//   return (
//     <motion.div
//       className="absolute rounded-full border border-green-50/[0.07] "
//       style={{
//         width: radius * 2,
//         height: radius * 2,
//         top: "50%",
//         left: "50%",
//         marginLeft: -radius,
//         marginTop: -radius,
//       }}
//       initial={{ scale: 0, opacity: 0 }}
//       animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
//       transition={{
//         duration: 1.2,
//         delay: 0.2 + orbitIndex * 0.15,
//         ease: [0.25, 1, 0.5, 1],
//       }}
//     >
//       <motion.div
//         className="w-full h-full relative"
//         style={{ rotate: orbitRotation }}
//       >
//         {items.map((item, i) => {
//           const angle = (360 / total) * i - 90; // Start from top
//           const rad = (angle * Math.PI) / 180;
//           const x = radius + radius * Math.cos(rad) - circleSize / 2;
//           const y = radius + radius * Math.sin(rad) - circleSize / 2;

//           const isEmpty = item.type === "empty";

//           return (
//             <motion.div
//               key={i}
//               className={`absolute flex items-center justify-center rounded-full hover:scale-110 duration-200 ease-in-out grayscale-100 hover:grayscale-0
//                 ${isEmpty ? "" : "bg-amber-50/[0.06] backdrop-blur-sm border border-amber-50/[0.1]"}
//                 ${item.type === "artist" ? "ring-2 ring-amber-50/20" : ""}
//                 ${item.type === "stat" ? "bg-amber-50/[0.1]" : ""}
//               `}
//               style={{
//                 width: isEmpty ? 6 : circleSize,
//                 height: isEmpty ? 6 : circleSize,
//                 left: isEmpty ? x + circleSize / 2 - 3 : x,
//                 top: isEmpty ? y + circleSize / 2 - 3 : y,
//                 rotate: counterRotation,
//               }}
//             >
//               {isEmpty ? (
//                 <div className="w-full h-full rounded-full bg-amber-50/20" />
//               ) : (
//                 <CircleContent item={item} />
//               )}
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </motion.div>
//   );
// }

// // --- LOGO SVG ---
// function Logo({ isInView }: { isInView: boolean }) {
//   return (
//     <motion.svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="80"
//       height="79"
//       fill="none"
//       viewBox="0 0 154 152"
//       initial={{ scale: 0, opacity: 0 }}
//       animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
//       transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
//     >
//       <path
//         fill="#FFFBEB"
//         d="M136.02 64.72a15.99 15.99 0 0 0-8.6-20.86 15.9 15.9 0 0 0-20.8 8.64 15.98 15.98 0 0 0 8.62 20.86 15.9 15.9 0 0 0 20.78-8.64ZM32.32 74.56c8.79 0 15.91-7.15 15.91-15.96 0-8.82-7.12-15.97-15.9-15.97A15.94 15.94 0 0 0 16.4 58.6c0 8.81 7.12 15.96 15.91 15.96ZM76.59 152c8.78 0 15.9-7.15 15.9-15.97 0-8.81-7.12-15.96-15.9-15.96a15.94 15.94 0 0 0-15.91 15.97c0 8.81 7.12 15.96 15.9 15.96Z"
//       />
//       <path
//         fill="#FFFBEB"
//         d="M141.74 95.22a23.7 23.7 0 0 0-15.55-2.87c-5.3.79-11.52 4.74-18.5.7-5.6-3.26-6.44-9.56-7.91-14.4a23.48 23.48 0 0 0-6.75-11.12c-3.36-3.44-7.55-7.17-7.55-13.1 0-8.09 6.52-11.5 9.85-15.72a24.2 24.2 0 0 0 5.28-15A23.68 23.68 0 0 0 76.97 0a23.68 23.68 0 0 0-23.63 23.72c0 5.62 1.8 10.53 5.22 14.85 2.97 3.76 9.94 8.75 9.94 15.82 0 6.63-5.86 10.54-9.84 15.64a26.94 26.94 0 0 0-3.63 6.1c-2.16 4.97-2.16 12.93-8.75 16.73-6.97 4.04-13.2.08-18.5-.7a23.75 23.75 0 0 0-15.55 2.87 23.8 23.8 0 0 0-8.65 32.43 23.58 23.58 0 0 0 32.3 8.66 23.2 23.2 0 0 0 10.22-11.95c1.75-4.46 2.58-13.02 8.7-16.56 4.9-2.84 10.27-.92 15.77.25.17.05.33.08.5.14.05 0 .1.03.14.03.24.05.5.1.77.17.2.03.39.09.6.1.08 0 .16.04.21.04 1.37.25 2.79.39 4.22.39h.61c.23 0 .45 0 .7-.04.67-.03 1.36-.08 2.02-.17 6.55-.81 13.02-4.18 18.88-.78 6.1 3.54 6.95 12.1 8.7 16.56a23.63 23.63 0 0 0 42.52 3.3 23.76 23.76 0 0 0-8.7-32.39v.01Z"
//       />
//     </motion.svg>
//   );
// }

// // --- CTA BUTTON ---
// function CTAButton({ isInView }: { isInView: boolean }) {
//   const [isHovered, setIsHovered] = React.useState(false);

//   return (
//     <motion.a
//       href="#intro"
//       className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border text-amber-50 text-sm font-medium transition-colors duration-300 ease-out cursor-pointer"
//       initial={{ opacity: 0, y: 20 }}
//       animate={
//         isInView
//           ? {
//             opacity: 1,
//             y: 0,
//             scale: isHovered ? 1.05 : 1,
//             backgroundColor: isHovered ? "rgba(255, 251, 235, 0.1)" : "rgba(255, 251, 235, 0)",
//             borderColor: isHovered ? "rgba(255, 251, 235, 0.4)" : "rgba(255, 251, 235, 0.2)",
//           }
//           : { opacity: 0, y: 20 }
//       }
//       transition={{ duration: 0.3 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onTapStart={() => setIsHovered(true)}
//       onTap={() => setIsHovered(false)}
//       onTapCancel={() => setIsHovered(false)}
//     >
//       <span>Discover how</span>
//       <motion.svg
//         className="w-4 h-4"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//         animate={{ y: isHovered ? 2 : 0 }}
//         transition={{ duration: 0.2 }}
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//       </motion.svg>
//     </motion.a>
//   );
// }

// // --- MAIN HERO ---
// export default function HeroSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

//   // Scroll velocity tracking
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });

//   return (
//     <section
//       ref={sectionRef}
//       id="hero"
//       className="relative min-h-[150vh] w-full flex items-center justify-center overflow-hidden"
//     // style={{ backgroundColor: "#1a0a2e" }}
//     >
//       {/* Background gradient */}
//       {/* <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-[#1a0a2e] to-[#0f0618]" /> */}

//       {/* Subtle radial glow */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <motion.div
//           className="w-[800px] h-[800px] rounded-full bg-green-600/10 blur-[120px]"
//           initial={{ scale: 0, opacity: 0 }}
//           animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         />
//       </div>

//       {/* Orbits */}
//       <div className="absolute inset-0 flex items-center justify-center ">
//         <div className="relative" style={{ width: 900, height: 900 }}>
//           {/* Orbit 3 (outermost, empty dots only - decorative) */}
//           {/* <Orbit
//             items={Array(24).fill({ type: "empty" } as CircleItem)}
//             radius={440}
//             baseSpeed={2} // degrees per second
//             direction={1}
//             orbitIndex={2}
//             isInView={isInView}
//             scrollVelocity={smoothVelocity}
//           /> */}
//           {/* Orbit 2 */}
//           <Orbit
//             items={orbit2Items}
//             radius={440}
//             // radius={340}
//             baseSpeed={3}
//             direction={-1}
//             orbitIndex={1}
//             isInView={isInView}
//             scrollVelocity={smoothVelocity}
//           />
//           {/* Orbit 1 */}
//           <Orbit
//             items={orbit1Items}
//             radius={340}
//             // radius={240}
//             baseSpeed={4}
//             direction={1}
//             orbitIndex={0}
//             isInView={isInView}
//             scrollVelocity={smoothVelocity}
//           />
//         </div>
//       </div>

//       {/* Center content */}
//       <div className="relative z-10 flex flex-col items-center text-center px-4 pointer-events-auto">
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="mb-6"
//         >
//           <Logo isInView={isInView} />
//         </motion.div> */}

//         <motion.h1
//           className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-50 mb-4 tracking-tight"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           Make it Stronger
//         </motion.h1>

//         <motion.p
//           className="text-base sm:text-lg text-amber-50/60 mb-8 max-w-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8, delay: 0.65 }}
//         >
//           Protect Works, Secure Catalogs, Identify AI
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8, delay: 0.8 }}
//         >
//           <CTAButton isInView={isInView} />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import {
  motion,
  useInView,
  useScroll,
  useVelocity,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import React, { useEffect, useRef, useState, useMemo } from "react";

// // --- DATA --- (same as before, keeping it unchanged)
// type CircleItem =
//   | { type: "code"; label: string }
//   | { type: "artist"; name: string; image: string; href?: string }
//   | { type: "partner"; name: string; image: string; href: string }
//   | { type: "stat"; value: string; label: string }
//   | { type: "empty" };

// const orbit1Items: CircleItem[] = [
//   { type: "code", label: "IPN" },
//   { type: "artist", name: "Romain C'", image: "https://cdn.sanity.io/images/0t57ra9c/production/9e5376a5c094486c1a63a39149b902b93a61bac2-161x161.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/roman_c_music/" },
//   { type: "partner", name: "DMP", image: "https://cdn.sanity.io/images/0t57ra9c/production/d214824cf74f59fe9df015cf85820b1797d66888-107x55.png?auto=format&fit=max&q=90&w=64", href: "https://www.des-mesures.com" },
//   { type: "code", label: "ISMN" },
//   { type: "artist", name: "Yacine", image: "https://cdn.sanity.io/images/0t57ra9c/production/3cc9881e8c5b5fd339a45a8e19686330d6544de2-167x167.jpg?auto=format&fit=max&q=90&w=64" },
//   { type: "partner", name: "Tuneport", image: "https://cdn.sanity.io/images/0t57ra9c/production/83b8b5f0dbbe9fb4a243583511d9bb339030a961-52x34.svg?auto=format&fit=max&q=90&w=52", href: "https://tuneport.xyz" },
//   { type: "code", label: "EAN" },
//   { type: "partner", name: "shamusic", image: "https://cdn.sanity.io/images/0t57ra9c/production/162e191a466bde00c21b700772d9809d3d60dceb-81x59.png?auto=format&fit=max&q=90&w=64", href: "https://shamusic.es" },
//   { type: "code", label: "IPI" },
//   { type: "partner", name: "Minted Waves", image: "https://cdn.sanity.io/images/0t57ra9c/production/c3b556a35e174061c80ba0001b77c565b1cca238-37x35.svg?auto=format&fit=max&q=90&w=37", href: "https://mintedwaves.com" },
//   { type: "artist", name: "attalin", image: "https://cdn.sanity.io/images/0t57ra9c/production/c7ff1714140613bbe7ad905288c779acdd9ed253-512x513.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/attalin_ofc/" },
//   { type: "partner", name: "Snowfall", image: "https://cdn.sanity.io/images/0t57ra9c/production/780914ae11d384e000f008f93bea5131d84b414a-81x79.png?auto=format&fit=max&q=90&w=64", href: "https://www.snow-fall.io" },
//   { type: "partner", name: "music moon", image: "https://cdn.sanity.io/images/0t57ra9c/production/f0af32b4151c6771eb121f3b11d82139ae22aafb-73x63.png?auto=format&fit=max&q=90&w=64", href: "https://musicmoon.io" },
//   { type: "code", label: "ISAN" },
//   { type: "partner", name: "Acegood", image: "https://cdn.sanity.io/images/0t57ra9c/production/0a5ee5cd3dc2fa893fd230f992e8c6f33a23ddf6-20x35.svg?auto=format&fit=max&q=90&w=20", href: "https://acegood.net" },
//   { type: "artist", name: "Piatro Music", image: "https://cdn.sanity.io/images/0t57ra9c/production/f90a380b2e02e11ba10c3b35a14d7ea993c3e28e-1440x1440.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/piatro.music/" },
//   { type: "partner", name: "kor protocol", image: "https://cdn.sanity.io/images/0t57ra9c/production/ffb67bb44fb20e4bb037d76ff89f5e9aea27fd2f-129x51.png?auto=format&fit=max&q=90&w=64", href: "https://korprotocol.io" },
// ];

// const orbit2Items: CircleItem[] = [
//   { type: "code", label: "ISWC" },
//   { type: "artist", name: "Ablaye Cissoko", image: "https://cdn.sanity.io/images/0t57ra9c/production/ea27e8ce2b12aca8da3d118839e43b7615f0c0ac-164x164.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/ablayecissoko/" },
//   { type: "partner", name: "NFHITS", image: "https://cdn.sanity.io/images/0t57ra9c/production/54aab50223a3bf410f4eb6cb75ada3044981edf0-97x97.png?auto=format&fit=max&q=90&w=64", href: "https://www.nfhits.com" },
//   { type: "empty" },
//   { type: "code", label: "UPC" },
//   { type: "partner", name: "musigamy", image: "https://cdn.sanity.io/images/0t57ra9c/production/6a6391fac3372844e60f8889015aa85651f98505-77x89.png?auto=format&fit=max&q=90&w=64", href: "https://musigamy.com" },
//   { type: "code", label: "ISNI" },
//   { type: "partner", name: "kreypt", image: "https://cdn.sanity.io/images/0t57ra9c/production/77306c9c755a7ffbeb54f253d5467b72cf0e7ef6-112x112.png?auto=format&fit=max&q=90&w=64", href: "https://kreypt.art" },
//   { type: "artist", name: "Emma Daumas", image: "https://cdn.sanity.io/images/0t57ra9c/production/dd3a9f4ce04a5926ce3cdf5aa6f13965c8973afa-1440x960.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/emmadaumasofficiel/" },
//   { type: "empty" },
//   { type: "partner", name: "Wiseband", image: "https://cdn.sanity.io/images/0t57ra9c/production/e24efbea406ef5deeab9c4bdf1009d353f8df70f-49x38.svg?auto=format&fit=max&q=90&w=49", href: "https://www.wiseband.com" },
//   { type: "code", label: "ISRC" },
//   { type: "stat", value: "400+", label: "artists" },
//   { type: "partner", name: "DDEX", image: "https://cdn.sanity.io/images/0t57ra9c/production/47f259db717d190aced0dc844868f13e1ed3ebb7-73x20.svg?auto=format&fit=max&q=90&w=64", href: "https://ddex.net" },
//   { type: "partner", name: "Claimy", image: "https://cdn.sanity.io/images/0t57ra9c/production/9ccf81c33ac2b5b8f44244d83970f7f7e834338c-49x49.svg?auto=format&fit=max&q=90&w=49", href: "https://www.claimy.co" },
//   { type: "empty" },
//   { type: "artist", name: "Salihou Jam", image: "https://cdn.sanity.io/images/0t57ra9c/production/c98e869f32d151f4399b98c81f89950e38de5954-855x571.jpg?auto=format&fit=max&q=90&w=64", href: "https://www.instagram.com/salihoujam/" },
//   { type: "partner", name: "Recallby", image: "https://cdn.sanity.io/images/0t57ra9c/production/33861b8c64b7fa24e1c4e70145fa7f6013cced34-98x100.png?auto=format&fit=max&q=90&w=64", href: "https://recallby.com" },
//   { type: "stat", value: "9", label: "labels" },
//   { type: "partner", name: "Dinga Stream", image: "https://cdn.sanity.io/images/0t57ra9c/production/605a3cd4eed991990bb6372378041d2789aff390-128x115.png?auto=format&fit=max&q=90&w=64", href: "https://dingastream.com" },
//   { type: "partner", name: "Rubichain", image: "https://cdn.sanity.io/images/0t57ra9c/production/a41a7618e8a540cee4d4a1d74c34073228c8eca7-129x81.png?auto=format&fit=max&q=90&w=64", href: "https://www.rubichain.io" },
//   { type: "empty" },
//   { type: "code", label: "ISTC" },
//   { type: "partner", name: "stay independent", image: "https://cdn.sanity.io/images/0t57ra9c/production/81bf98afb50bb57e19398ce701b71ea1223eeefb-177x43.png?auto=format&fit=max&q=90&w=64", href: "https://stayindependent.gr" },
// ];

// // --- MEMOIZED CIRCLE COMPONENT ---
// const CircleContent = React.memo(({ item }: { item: CircleItem }) => {
//   if (item.type === "empty") return null;

//   if (item.type === "code") {
//     return (
//       <code className="text-[10px] font-mono font-bold text-amber-50/80 tracking-wider">
//         {item.label}
//       </code>
//     );
//   }

//   if (item.type === "stat") {
//     return (
//       <dl className="text-center">
//         <dt className="text-sm font-bold text-amber-50 leading-tight">{item.value}</dt>
//         <dd className="text-[9px] text-amber-50/60 uppercase tracking-wider">{item.label}</dd>
//       </dl>
//     );
//   }

//   if (item.type === "artist" || item.type === "partner") {
//     const img = (
//       <img
//         src={item.image}
//         alt={item.name}
//         className={
//           item.type === "artist"
//             ? "w-full h-full object-cover rounded-full"
//             : "max-w-[36px] max-h-[36px] object-contain"
//         }
//         loading="lazy"
//         decoding="async"
//         // Add width/height for better performance
//         width={item.type === "artist" ? 52 : 36}
//         height={item.type === "artist" ? 52 : 36}
//       />
//     );

//     if ("href" in item && item.href) {
//       return (
//         <a
//           href={item.href}
//           title={item.name}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center w-full h-full"
//         >
//           {img}
//         </a>
//       );
//     }

//     return <div className="flex items-center justify-center w-full h-full">{img}</div>;
//   }

//   return null;
// });

// CircleContent.displayName = "CircleContent";

// --- DATA ---
type CircleItem =
  | { type: "front-end"; name: string; image: string; href?: string }
  | { type: "ui-ux"; name: string; image: string; href?: string }
  | { type: "backend"; name: string; image: string; href?: string }
  | { type: "database"; name: string; image: string; href?: string }
  | { type: "devops"; name: string; image: string; href?: string }
  | { type: "tools"; name: string; image: string; href?: string }
  | { type: "empty" };

const orbit1Items: CircleItem[] = [
  // Front-end
  { type: "front-end", name: "React", image: "/front-end/react.svg", href: "https://react.dev" },
  { type: "front-end", name: "Next.js", image: "/front-end/nextjs.svg", href: "https://nextjs.org" },
  { type: "front-end", name: "TypeScript", image: "/front-end/typescript.svg", href: "https://www.typescriptlang.org" },
  { type: "front-end", name: "JavaScript", image: "/front-end/javascript.svg", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { type: "front-end", name: "Tailwind CSS", image: "/front-end/tailwindcss.svg", href: "https://tailwindcss.com" },
  { type: "front-end", name: "HTML5", image: "/front-end/html5.svg", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { type: "front-end", name: "CSS3", image: "/front-end/css3.svg", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { type: "front-end", name: "Sass", image: "/front-end/sass.svg", href: "https://sass-lang.com" },
  
  // UI/UX
  { type: "ui-ux", name: "Figma", image: "/ui-ux/figma.svg", href: "https://www.figma.com" },
  { type: "ui-ux", name: "Framer", image: "/ui-ux/framer.svg", href: "https://www.framer.com" },
  { type: "ui-ux", name: "Adobe XD", image: "/ui-ux/adobe-xd.svg", href: "https://www.adobe.com/products/xd.html" },
  
  // Tools
  { type: "tools", name: "Git", image: "/tools/git.svg", href: "https://git-scm.com" },
  { type: "tools", name: "GitHub", image: "/tools/github.svg", href: "https://github.com" },
  { type: "tools", name: "VS Code", image: "/tools/vscode.svg", href: "https://code.visualstudio.com" },
  { type: "tools", name: "npm", image: "/tools/npm.svg", href: "https://www.npmjs.com" },
  { type: "tools", name: "Vite", image: "/tools/vite.svg", href: "https://vitejs.dev" },
];

const orbit2Items: CircleItem[] = [
  // Backend
  { type: "backend", name: "Node.js", image: "/backend/nodejs.svg", href: "https://nodejs.org" },
  { type: "backend", name: "Express", image: "/backend/express.svg", href: "https://expressjs.com" },
  { type: "backend", name: "Python", image: "/backend/python.svg", href: "https://www.python.org" },
  { type: "backend", name: "Django", image: "/backend/django.svg", href: "https://www.djangoproject.com" },
  { type: "empty" },
  
  // Database
  { type: "database", name: "MongoDB", image: "/database/mongodb.svg", href: "https://www.mongodb.com" },
  { type: "database", name: "PostgreSQL", image: "/database/postgresql.svg", href: "https://www.postgresql.org" },
  { type: "database", name: "MySQL", image: "/database/mysql.svg", href: "https://www.mysql.com" },
  { type: "database", name: "Redis", image: "/database/redis.svg", href: "https://redis.io" },
  { type: "database", name: "Firebase", image: "/database/firebase.svg", href: "https://firebase.google.com" },
  { type: "database", name: "Supabase", image: "/database/supabase.svg", href: "https://supabase.com" },
  { type: "empty" },
  
  // DevOps
  { type: "devops", name: "Docker", image: "/devops/docker.svg", href: "https://www.docker.com" },
  { type: "devops", name: "AWS", image: "/devops/aws.svg", href: "https://aws.amazon.com" },
  { type: "devops", name: "Vercel", image: "/devops/vercel.svg", href: "https://vercel.com" },
  { type: "devops", name: "Netlify", image: "/devops/netlify.svg", href: "https://www.netlify.com" },
  { type: "empty" },
  
  // More Front-end frameworks/libraries
  { type: "front-end", name: "Vue.js", image: "/front-end/vuejs.svg", href: "https://vuejs.org" },
  { type: "front-end", name: "Redux", image: "/front-end/redux.svg", href: "https://redux.js.org" },
  { type: "front-end", name: "Zustand", image: "/front-end/zustand.svg", href: "https://zustand-demo.pmnd.rs" },
  { type: "front-end", name: "React Query", image: "/front-end/react-query.svg", href: "https://tanstack.com/query" },
  { type: "front-end", name: "Framer Motion", image: "/front-end/framer-motion.svg", href: "https://www.framer.com/motion" },
  { type: "empty" },
  
  // Additional UI Libraries
  { type: "ui-ux", name: "Shadcn/ui", image: "/ui-ux/shadcn.svg", href: "https://ui.shadcn.com" },
  { type: "ui-ux", name: "Radix UI", image: "/ui-ux/radix.svg", href: "https://www.radix-ui.com" },
  { type: "ui-ux", name: "Material UI", image: "/ui-ux/mui.svg", href: "https://mui.com" },
];

// --- MEMOIZED CIRCLE COMPONENT ---
const CircleContent = React.memo(({ item }: { item: CircleItem }) => {
  if (item.type === "empty") return null;

  // Style mapping based on type
  const getItemStyles = (type: CircleItem["type"]) => {
    switch (type) {
      case "front-end":
        return "rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30";
      case "ui-ux":
        return "rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30";
      case "backend":
        return "rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30";
      case "database":
        return "rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-400/30";
      case "devops":
        return "rounded-full bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-400/30";
      case "tools":
        return "rounded-lg bg-gradient-to-br from-slate-500/20 to-gray-500/20 border border-slate-400/30";
      default:
        return "rounded-full";
    }
  };

  const img = (
    <img
      src={item.image}
      alt={item.name}
      className="max-w-[36px] max-h-[36px] object-contain transition-transform duration-300 group-hover:scale-110"
      loading="lazy"
      decoding="async"
      width={36}
      height={36}
    />
  );

  const containerClass = `
    flex items-center justify-center w-full h-full p-2
    ${getItemStyles(item.type)}
    transition-all duration-300 hover:scale-105
    group
  `;

  if ("href" in item && item.href) {
    return (
      <a
        href={item.href}
        title={item.name}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClass}
      >
        {img}
      </a>
    );
  }

  return <div className={containerClass}>{img}</div>;
});

CircleContent.displayName = "CircleContent";

// --- OPTIMIZED ORBIT COMPONENT ---
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
  const circleSize = 52;

  const orbitRotation = useMotionValue(0);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  // Memoize circle positions to avoid recalculating on every render
  const circlePositions = useMemo(() => {
    return items.map((_, i) => {
      const angle = (360 / total) * i - 90;
      const rad = (angle * Math.PI) / 180;
      const x = radius + radius * Math.cos(rad) - circleSize / 2;
      const y = radius + radius * Math.sin(rad) - circleSize / 2;
      return { x, y, angle };
    });
  }, [items.length, radius, circleSize, total]);

  // Optimized animation frame with throttling for mobile
  const lastUpdateRef = useRef(0);
  const throttleDelay = 16; // ~60fps, increase to 33 for ~30fps on slower devices

  useAnimationFrame((time, delta) => {
    if (!isInView) return;

    // Throttle updates for better performance
    if (time - lastUpdateRef.current < throttleDelay) return;
    lastUpdateRef.current = time;

    const velocity = Math.abs(scrollVelocity.get());
    const velocityBoost = Math.min(velocity / 500, 3); // Reduced from 5 to 3
    const speedMultiplier = 1 + velocityBoost;

    const increment = direction * baseSpeed * (delta / 1000) * speedMultiplier;
    orbitRotation.set(orbitRotation.get() + increment);
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
      <motion.div
        className="w-full h-full relative will-change-transform"
        style={{
          rotate: orbitRotation,
          // Use transform3d for hardware acceleration
          transform: "translateZ(0)",
        }}
      >
        {items.map((item, i) => {
          const { x, y, angle } = circlePositions[i];
          const isEmpty = item.type === "empty";

          return (
            <motion.div
              key={`${orbitIndex}-${i}`}
              className={`absolute flex items-center justify-center rounded-full will-change-transform
                ${isEmpty ? "" : "bg-amber-50/[0.06] backdrop-blur-sm border border-amber-50/[0.1]"}
                ${item.type === "front-end" ? "ring-2 ring-amber-50/20" : ""}
                ${item.type === "front-end" ? "bg-amber-50/[0.1]" : ""}
                ${!isEmpty ? "transition-transform duration-200 hover:scale-110 grayscale hover:grayscale-0" : ""}
              `}
              style={{
                width: isEmpty ? 6 : circleSize,
                height: isEmpty ? 6 : circleSize,
                left: isEmpty ? x + circleSize / 2 - 3 : x,
                top: isEmpty ? y + circleSize / 2 - 3 : y,
                // Use CSS transform instead of motion value for better performance
                transform: "translateZ(0)",
              }}
              // Counter-rotation using transform instead of motion value
              animate={{
                rotate: -(orbitRotation.get()),
              }}
              transition={{
                duration: 0,
                ease: "linear",
              }}
            >
              {isEmpty ? (
                <div className="w-full h-full rounded-full bg-amber-50/20" />
              ) : (
                <CircleContent item={item} />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

// --- OPTIMIZED CTA BUTTON ---
// const CTAButton = React.memo(({ isInView }: { isInView: boolean }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.a
//       href="#intro"
//       className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border text-amber-50 text-sm font-medium transition-all duration-300 ease-out cursor-pointer will-change-transform"
//       initial={{ opacity: 0, y: 20 }}
//       animate={
//         isInView
//           ? {
//             opacity: 1,
//             y: 0,
//             scale: isHovered ? 1.05 : 1,
//             backgroundColor: isHovered ? "rgba(255, 251, 235, 0.1)" : "rgba(255, 251, 235, 0)",
//             borderColor: isHovered ? "rgba(255, 251, 235, 0.4)" : "rgba(255, 251, 235, 0.2)",
//           }
//           : { opacity: 0, y: 20 }
//       }
//       transition={{ duration: 0.3 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onTouchStart={() => setIsHovered(true)}
//       onTouchEnd={() => setIsHovered(false)}
//     >
//       <span>Discover how</span>
//       <motion.svg
//         className="w-4 h-4"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//         animate={{ y: isHovered ? 2 : 0 }}
//         transition={{ duration: 0.2 }}
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//       </motion.svg>
//     </motion.a>
//   );
// });
const CTAButton = React.memo(({ isInView }: { isInView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="#intro"
      className="group relative inline-flex items-center gap-2 transition-all duration-300 ease-out cursor-pointer will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={
        isInView
          ? {
            opacity: 1,
            y: 0,
            scale: isHovered ? 1.05 : 1,
            // backgroundColor: isHovered ? "rgba(255, 251, 235, 0.1)" : "rgba(255, 251, 235, 0)",
            // borderColor: isHovered ? "rgba(255, 251, 235, 0.4)" : "rgba(255, 251, 235, 0.2)",
          }
          : { opacity: 0, y: 20 }
      }
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* <span>Discover how</span>
      <motion.svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        animate={{ y: isHovered ? 2 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </motion.svg> */}
      <Button className="btn-primary">Discover how</Button>
    </motion.a>
  );
});

CTAButton.displayName = "CTAButton";


// --- LOGO SVG ---
function Logo({ isInView }: { isInView: boolean }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="41" height="38"
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
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Detect if on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[200vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Subtle radial glow - reduce blur on mobile */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className={`w-[800px] h-[800px] rounded-full bg-green-600/10 ${isMobile ? 'blur-[80px]' : 'blur-[120px]'}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      {/* Orbits - reduce size on mobile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative"
          style={{
            width: isMobile ? 700 : 900,
            height: isMobile ? 700 : 900
          }}
        >
          <Orbit
            items={orbit2Items}
            radius={isMobile ? 340 : 440}
            baseSpeed={isMobile ? 2 : 3} // Slower on mobile
            direction={-1}
            orbitIndex={1}
            isInView={isInView}
            scrollVelocity={smoothVelocity}
          />
          <Orbit
            items={orbit1Items}
            radius={isMobile ? 240 : 340}
            baseSpeed={isMobile ? 3 : 4}
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