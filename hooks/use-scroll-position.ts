"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past a given threshold.
 * Used to toggle the navbar's background/blur state.
 */
export function useScrollPosition(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
