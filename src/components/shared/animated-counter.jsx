"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

/**
 * Animates a number from 0 to the target value when the element
 * enters the viewport. Uses requestAnimationFrame for butter-smooth counting.
 *
 * @param {number} target - The number to count up to
 * @param {string} [prefix=''] - Text before the number (e.g., '₹')
 * @param {string} [suffix=''] - Text after the number (e.g., '+', '%')
 * @param {number} [duration=2] - Animation duration in seconds
 * @param {string} [className] - Additional classes
 */
export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const frameRef = useRef(null);

  /**
   * easeOutExpo produces a fast start that decelerates —
   * feels satisfying for counting animations.
   */
  const easeOutExpo = useCallback((t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();
          const durationMs = duration * 1000;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            const easedProgress = easeOutExpo(progress);

            setCount(Math.floor(easedProgress * target));

            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate);
            } else {
              // Ensure we land exactly on target
              setCount(target);
            }
          };

          frameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, duration, hasAnimated, easeOutExpo]);

  /**
   * Format numbers with locale-aware comma separation.
   * e.g., 60000 → "60,000"
   */
  const formattedCount = count.toLocaleString("en-IN");

  return (
    <span ref={elementRef} className={cn("tabular-nums", className)}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
