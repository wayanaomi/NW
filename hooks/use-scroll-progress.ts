"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current vertical scroll progress of the page as a 0-1 value.
 * Also exposes whether the user has scrolled far enough to show a
 * "back to top" button.
 */
export function useScrollProgress(showAfter = 400) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? scrollTop / max : 0);
      setVisible(scrollTop > showAfter);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  return { progress, visible };
}
