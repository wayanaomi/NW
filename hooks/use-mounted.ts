"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the component has mounted on the client.
 * Useful for guarding UI that depends on browser-only APIs (theme, window size).
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional client-mount flag
    setMounted(true);
  }, []);

  return mounted;
}
