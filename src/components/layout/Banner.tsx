"use client";

import { Copy, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useBanner } from "../context/banner-context";

export default function Banner() {
  const t = useTranslations('banner');

  const [isVisibleInRefresh, setIsVisibleInRefresh] = useState<boolean | null>(null);

  const { isVisible, closeBanner } = useBanner();

  useEffect(() => {
    const closed = sessionStorage.getItem("bannerClosed");
    setIsVisibleInRefresh(closed !== "true");
  }, []);

  const handleClose = () => {
    setIsVisibleInRefresh(false);
    sessionStorage.setItem("bannerClosed", "true");
  };

  if (isVisibleInRefresh === null) return null;

  return (

    <AnimatePresence>
      {isVisible && (
        <section className="px-2 md:px-4 pt-4 pb-2 md:pb-0">
          <motion.aside
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-50 w-full py-1 bg-chart-4 flex items-center justify-center gap-1 md:gap-2 rounded-md md:rounded-lg"
          >
            {/* Desktop text */}
            <p className="hidden md:flex items-center text-center text-sm">
              {t('discount-desktop')}
            </p>

            {/* Mobile text */}
            <p className="flex md:hidden items-center text-center text-xs">
              {t('discount-mobile')}
            </p>

            {/* Code */}
            <button className="py-0.5 px-1.5 text-xs md:text-sm font-medium text-white rounded-full border border-white/50">
              button
            </button>

            {/* Close button */}
            <button
              // onClick={handleClose}
              onClick={closeBanner}
              aria-label="Close banner"
              className="block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 cursor-pointer hover:opacity-70 transition-opacity"
            >
              <X className="size-3.5 md:size-4" />
            </button>
          </motion.aside>
        </section>
      )}
    </AnimatePresence>

  );
}