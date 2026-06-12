"use client";

import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";

/**
 * Wrapper around react-type-animation for a cycling typewriter effect.
 * Displays strings one at a time with typing and deleting transitions.
 *
 * @param {string[]} strings - Array of strings to cycle through
 * @param {string} [className] - Additional classes
 * @param {number} [speed=50] - Typing speed in ms per character
 * @param {number} [deletionSpeed=40] - Deletion speed in ms per character
 * @param {number} [pauseDuration=2000] - Pause between strings in ms
 */
export function TypingAnimation({
  strings = [],
  className,
  speed = 50,
  deletionSpeed = 40,
  pauseDuration = 2000,
}) {
  /**
   * react-type-animation expects a flat array alternating between
   * strings and pause durations: ['Hello', 2000, 'World', 2000]
   */
  const sequence = strings.flatMap((str) => [str, pauseDuration]);

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={speed}
      deletionSpeed={deletionSpeed}
      repeat={Infinity}
      cursor={true}
      className={cn(
        "inline-block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent",
        className
      )}
    />
  );
}
