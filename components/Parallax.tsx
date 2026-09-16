"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Parallax({
  speed = 0.15,
  max = 60,
  className,
  children,
}: {
  speed?: number;
  max?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const wrapper = el?.parentElement;
    if (!el || !wrapper) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = wrapper.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const raw = -center * speed;
      const offset = Math.max(-max, Math.min(max, raw));
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed, max]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
