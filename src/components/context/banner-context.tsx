"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type BannerContextType = {
  isVisible: boolean;
  closeBanner: () => void;
};

const BannerContext = createContext<BannerContextType | undefined>(undefined);

export function BannerProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const closed = sessionStorage.getItem("bannerClosed");
    setIsVisible(closed !== "true");
  }, []);

  const closeBanner = () => {
    sessionStorage.setItem("bannerClosed", "true");
    setIsVisible(false);
  };

  return (
    <BannerContext.Provider value={{ isVisible, closeBanner }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBanner must be used within BannerProvider");
  }
  return context;
}
