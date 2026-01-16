"use client";

import { MathJaxContext } from "better-react-mathjax";
import { ReactNode, useMemo } from "react";

const mathJaxConfig = {
  loader: { load: ["[tex]/ams"] },
  tex: {
    packages: { "[+]": ["ams"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
  startup: {
    ready: () => {
      // Optimize MathJax startup
      if (typeof window !== 'undefined' && (window as any).MathJax) {
        (window as any).MathJax.startup.defaultReady();
      }
    },
  },
};

interface MathJaxProviderProps {
  children: ReactNode;
}

export function MathJaxProvider({ children }: MathJaxProviderProps) {
  // Memoize config to prevent re-renders
  const memoizedConfig = useMemo(() => mathJaxConfig, []);
  
  return (
    <MathJaxContext config={memoizedConfig}>{children}</MathJaxContext>
  );
}
