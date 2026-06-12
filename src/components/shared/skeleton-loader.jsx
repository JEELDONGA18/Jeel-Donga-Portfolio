import { cn } from "@/lib/utils";

/**
 * Variant presets define shape and sizing for different content types.
 */
const variants = {
  /** Rectangular card placeholder */
  card: "h-48 w-full rounded-xl",
  /** Single line of text */
  text: "h-4 w-3/4 rounded-md",
  /** Circular avatar or icon placeholder */
  circle: "h-12 w-12 rounded-full",
  /** Large image/media placeholder */
  image: "aspect-video w-full rounded-xl",
};

/**
 * Skeleton loading placeholder with shimmer animation.
 * Uses the shimmer keyframe defined in globals.css with a moving
 * gradient background for a polished loading state.
 *
 * @param {string} [className] - Additional classes
 * @param {'card'|'text'|'circle'|'image'} [variant='text'] - Shape preset
 *
 * @example
 * // Loading state for a card grid
 * <div className="grid grid-cols-3 gap-4">
 *   {[1, 2, 3].map(i => <SkeletonLoader key={i} variant="card" />)}
 * </div>
 */
export function SkeletonLoader({ className, variant = "text" }) {
  return (
    <div
      className={cn(
        "animate-shimmer bg-[length:200%_100%]",
        "bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200",
        "dark:from-white/5 dark:via-white/10 dark:to-white/5",
        variants[variant],
        className
      )}
      role="status"
      aria-label="Loading..."
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
