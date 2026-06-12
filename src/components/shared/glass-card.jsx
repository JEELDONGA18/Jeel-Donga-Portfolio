"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Glassmorphism card with backdrop-blur, subtle borders, and
 * optional hover lift + gradient border effects.
 *
 * @param {React.ReactNode} children - Card content
 * @param {string} [className] - Additional classes
 * @param {boolean} [hover=true] - Enable hover lift & glow effect
 * @param {boolean} [gradient=false] - Show gradient border accent
 */
export function GlassCard({
  children,
  className,
  hover = true,
  gradient = false,
}) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
      className={cn(
        "relative overflow-hidden rounded-xl",
        // Glassmorphism base
        "bg-white/70 backdrop-blur-xl dark:bg-white/5",
        "border border-gray-200/50 dark:border-white/10",
        // Hover glow effect
        hover && [
          "transition-shadow duration-300",
          "hover:shadow-lg hover:shadow-indigo-500/5",
          "dark:hover:shadow-indigo-500/10",
          "hover:border-gray-300/60 dark:hover:border-white/15",
        ],
        className
      )}
    >
      {/* Optional gradient border accent — renders as a top-edge glow */}
      {gradient && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
          aria-hidden="true"
        />
      )}

      {children}
    </motion.div>
  );
}
