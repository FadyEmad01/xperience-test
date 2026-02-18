"use client";

import { createContext, useContext, useEffect, useState } from "react";

type IntroContextType = {
  hasLoaded: boolean;
  shouldAnimate: boolean;
  introCompleteTime: number | null;
};

const IntroContext = createContext<IntroContextType | null>(null);

// // Animation timing constants
// export const INTRO_DURATION = 2200; // Intro animation duration in ms
// export const HEADER_DELAY = 300; // Delay before header animations start (after intro)
// export const HEADER_DURATION = 600; // Header animation duration
// export const HERO_DELAY = 200; // Delay before hero animations start (after header)


// Animation timing constants
export const INTRO_DURATION = 2200;
export const HEADER_DELAY = 300;
export const HEADER_DURATION = 600;
export const HERO_DELAY = 200;
export const HERO_CONTENT_DURATION = 800; // NEW: Time for hero text content to animate
export const HERO_VISUAL_DELAY = HEADER_DELAY + HEADER_DURATION + HERO_DELAY + HERO_CONTENT_DURATION; // NEW: Total delay for visual

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [introCompleteTime, setIntroCompleteTime] = useState<number | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("xperience-intro-seen");

    if (seen) {
      setHasLoaded(true);
      setShouldAnimate(false);
      setIntroCompleteTime(Date.now());
    } else {
      setShouldAnimate(true);
      const startTime = Date.now();
      const timer = setTimeout(() => {
        const completeTime = Date.now();
        setHasLoaded(true);
        setIntroCompleteTime(completeTime);
        sessionStorage.setItem("xperience-intro-seen", "true");
      }, INTRO_DURATION);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <IntroContext.Provider value={{ hasLoaded, shouldAnimate, introCompleteTime }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  const ctx = useContext(IntroContext);
  if (!ctx) {
    throw new Error("useIntro must be used inside IntroProvider");
  }
  return ctx;
}
