/**
 * Shared animation variants for Motion (formerly Framer Motion).
 * Import these in any component that uses motion animations.
 *
 * Usage:
 *   import { fadeInUp, staggerContainer } from '@/lib/animations';
 *   <motion.div variants={fadeInUp} initial="hidden" animate="visible" />
 */

// ─── Fade Variants ──────────────────────────────────────────────────────────

/** Simple opacity fade */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/** Fade in from below — great for scroll-triggered content */
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in from above */
export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in from the left */
export const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Fade in from the right */
export const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Scale Variants ─────────────────────────────────────────────────────────

/** Scale up from slightly smaller — good for cards & icons */
export const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Slide Variants ─────────────────────────────────────────────────────────

/** Slide up with a slightly larger distance — scroll-triggered sections */
export const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Container Variants ─────────────────────────────────────────────────────

/** Stagger children animations with a 100ms delay between each */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Faster stagger for smaller groups of items */
export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// ─── Utility: Direction-based variant factory ───────────────────────────────

/**
 * Generate a fade-in variant for a given direction.
 * @param {'up'|'down'|'left'|'right'} direction
 * @param {number} distance - px to travel (default 30)
 * @returns Motion variant object
 */
export function createDirectionalVariant(direction = "up", distance = 30) {
  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const value =
    direction === "up" || direction === "left" ? distance : -distance;

  return {
    hidden: { opacity: 0, [axis]: value },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };
}
