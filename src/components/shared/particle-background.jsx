"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";

/**
 * Subtle constellation/neural network particle background.
 * Low particle count and slow movement — designed as an ambient
 * background accent, not a focal point.
 *
 * @param {string} [className] - Additional classes for the container
 */
export function ParticleBackground({ className }) {
  const [init, setInit] = useState(false);

  /** Initialize the tsParticles engine once */
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    setInit(true);
  }, []);

  /**
   * Particle configuration — tuned for subtlety:
   * - 45 particles, very slow drift
   * - Thin connecting lines between nearby particles
   * - Low opacity so it doesn't compete with content
   */
  const options = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.3,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#818cf8", // indigo-400
        },
        links: {
          enable: true,
          color: "#818cf8",
          distance: 150,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          value: 45,
          density: {
            enable: true,
            area: 900,
          },
        },
        opacity: {
          value: { min: 0.1, max: 0.3 },
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2.5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        className
      )}
      aria-hidden="true"
    >
      <Particles
        id="portfolio-particles"
        options={options}
        init={particlesInit}
        className="h-full w-full"
      />
    </div>
  );
}
