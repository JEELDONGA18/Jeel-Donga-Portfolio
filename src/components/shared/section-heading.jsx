"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Section heading with decorative accent line, optional gradient text,
 * and scroll-triggered fade-in animation.
 *
 * @param {string} title - Main heading text
 * @param {string} [subtitle] - Optional description below the heading
 * @param {'left'|'center'} [align='center'] - Text alignment
 * @param {boolean} [gradient=false] - Apply gradient text effect to title
 * @param {string} [className] - Additional classes
 */
export function SectionHeading({
  title,
  subtitle,
  align = "center",
  gradient = false,
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {/* Decorative accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mb-4 h-1 w-12 origin-left rounded-full bg-gradient-to-r from-indigo-500 to-violet-500",
          align === "center" && "mx-auto origin-center"
        )}
      />

      {/* Title */}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          gradient
            ? "bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
            : "text-gray-900 dark:text-white"
        )}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base text-gray-600 sm:text-lg dark:text-gray-400",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
