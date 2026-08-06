"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { LogoAvatar } from "@/components/logo-avatar";

/**
 * A brief, premium loading screen shown on first load. Purely decorative
 * and skipped entirely for users who prefer reduced motion.
 */
export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- skip loader for reduced motion
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative flex size-14 items-center justify-center">
              <LogoAvatar sizeClassName="size-14" />
              <span className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" />
            </div>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              Naomi Waya
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
