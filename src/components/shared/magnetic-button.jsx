"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Variant style maps for the button.
 */
const variantStyles = {
  primary: cn(
    "bg-gradient-to-r from-indigo-500 to-violet-600 text-white",
    "shadow-lg shadow-indigo-500/25",
    "hover:shadow-xl hover:shadow-indigo-500/30",
    "active:shadow-md"
  ),
  secondary: cn(
    "border border-indigo-500/30 text-indigo-400",
    "hover:bg-indigo-500/10 hover:border-indigo-500/50",
    "dark:border-indigo-400/30 dark:text-indigo-300",
    "dark:hover:bg-indigo-500/10"
  ),
  ghost: cn(
    "text-gray-700 dark:text-gray-300",
    "hover:bg-gray-100 dark:hover:bg-white/5"
  ),
};

/**
 * Button with a subtle magnetic attraction effect — the button
 * moves slightly towards the cursor on hover for a premium feel.
 *
 * @param {React.ReactNode} children - Button content
 * @param {string} [className] - Additional classes
 * @param {Function} [onClick] - Click handler
 * @param {string} [href] - If provided, renders as an anchor tag
 * @param {'primary'|'secondary'|'ghost'} [variant='primary'] - Style variant
 */
export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
  ...props
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  /** Max magnetic displacement in pixels — keep it subtle */
  const MAGNETIC_STRENGTH = 5;

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate offset as fraction of button dimensions, clamped
    const deltaX = ((e.clientX - centerX) / (rect.width / 2)) * MAGNETIC_STRENGTH;
    const deltaY = ((e.clientY - centerY) / (rect.height / 2)) * MAGNETIC_STRENGTH;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sharedProps = {
    ref: buttonRef,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: position.x, y: position.y },
    transition: { type: "spring", stiffness: 300, damping: 15, mass: 0.5 },
    className: cn(
      "inline-flex items-center justify-center gap-2",
      "rounded-lg px-6 py-3 text-sm font-medium",
      "transition-colors duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
      "dark:focus-visible:ring-offset-gray-900",
      "cursor-pointer select-none",
      variantStyles[variant],
      className
    ),
    ...props,
  };

  // Render as anchor if href is provided
  if (href) {
    return (
      <motion.a href={href} {...sharedProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...sharedProps}>
      {children}
    </motion.button>
  );
}
