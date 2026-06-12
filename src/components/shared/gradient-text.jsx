"use client";

import { cn } from "@/lib/utils";

/**
 * Gradient color maps for different moods/contexts.
 */
const gradientMap = {
  primary: "from-indigo-400 via-violet-400 to-purple-500",
  accent: "from-cyan-400 via-blue-400 to-indigo-500",
  warm: "from-amber-400 via-orange-400 to-red-500",
};

/**
 * Renders text with an animated gradient color effect.
 * Uses Tailwind's bg-clip-text technique for performant gradient text.
 *
 * @param {React.ReactNode} children - Text content
 * @param {string} [className] - Additional classes
 * @param {'primary'|'accent'|'warm'} [gradient='primary'] - Gradient preset
 */
export function GradientText({
  children,
  className,
  gradient = "primary",
}) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r bg-clip-text text-transparent",
        gradientMap[gradient] || gradientMap.primary,
        className
      )}
    >
      {children}
    </span>
  );
}
