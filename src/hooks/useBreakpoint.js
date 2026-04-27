import { useState, useEffect } from "react";

/* ── BREAKPOINT HOOK ── */
export const useBreakpoint = () => {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return { isMob: w < 640, isTab: w < 900, w };
};
