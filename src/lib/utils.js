import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 *
 * @param {...(string|object|array)} inputs - Class names, objects, or arrays
 * @returns {string} Merged class string
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-indigo-500", className)
 * cn("text-sm text-gray-500", { "font-bold": isBold })
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
