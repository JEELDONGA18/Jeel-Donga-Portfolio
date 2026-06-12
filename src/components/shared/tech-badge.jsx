import { cn } from "@/lib/utils";

/**
 * Small pill badge displaying a technology name.
 * No client directive needed — pure presentational component.
 *
 * @param {string} name - Technology name to display
 * @param {string} [className] - Additional classes
 * @param {'default'|'outline'} [variant='default'] - Visual variant
 */
export function TechBadge({ name, className, variant = "default" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1",
        "text-xs font-medium transition-colors duration-200",
        // Variant styles
        variant === "default" && [
          "bg-indigo-500/10 text-indigo-600",
          "dark:bg-indigo-500/15 dark:text-indigo-300",
          "hover:bg-indigo-500/20 dark:hover:bg-indigo-500/25",
        ],
        variant === "outline" && [
          "border border-gray-300 text-gray-600",
          "dark:border-white/15 dark:text-gray-400",
          "hover:border-indigo-500/40 hover:text-indigo-600",
          "dark:hover:border-indigo-400/40 dark:hover:text-indigo-300",
        ],
        className
      )}
    >
      {name}
    </span>
  );
}
