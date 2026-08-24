"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function ScrollResetter() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // Smoothly scroll to top on route change
      lenis.scrollTo(0, { duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      // Fallback in case lenis isn't ready yet
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: true,
        allowNestedScroll: true,
        lerp: 0.075,
        smoothWheel: true,
        touchMultiplier: 1.1,
        wheelMultiplier: 0.9,
      }}
    >
      <ScrollResetter />
      {children}
    </ReactLenis>
  );
}
