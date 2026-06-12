"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
} from "@/lib/animations";

/**
 * Map direction prop to the corresponding animation variant.
 */
const directionVariants = {
  up: fadeInUp,
  down: fadeInDown,
  left: fadeInLeft,
  right: fadeInRight,
};

/**
 * Wrapper component that reveals children with a directional fade
 * animation when scrolled into view.
 *
 * @param {React.ReactNode} children - Content to reveal
 * @param {'up'|'down'|'left'|'right'} [direction='up'] - Animation direction
 * @param {number} [delay=0] - Delay in seconds before animation starts
 * @param {string} [className] - Additional classes
 */
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className,
}) {
  const variants = directionVariants[direction] || fadeInUp;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        ...variants.visible.transition,
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
