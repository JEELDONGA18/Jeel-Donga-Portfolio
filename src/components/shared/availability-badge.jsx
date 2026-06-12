"use client";

import { cn } from "@/lib/utils";

/**
 * Small badge indicating availability status with a pulsing indicator dot.
 *
 * @param {boolean} [available=true] - Whether the person is available
 */
export function AvailabilityBadge({ available = true }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5",
        "text-xs font-medium",
        "border backdrop-blur-sm",
        available
          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-400"
          : "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-400"
      )}
    >
      {/* Pulsing dot indicator */}
      <span className="relative flex h-2 w-2">
        {/* Pulse ring — only shown when available */}
        {available && (
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
            aria-hidden="true"
          />
        )}
        {/* Solid dot */}
        <span
          className={cn(
            "relative inline-flex h-2 w-2 rounded-full",
            available ? "bg-emerald-500" : "bg-amber-500"
          )}
        />
      </span>

      {available ? "Available for opportunities" : "Currently busy"}
    </div>
  );
}
