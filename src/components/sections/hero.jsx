"use client";

import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, ChevronDown, ArrowRight } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/brand-icons";
import { cn } from "@/lib/utils";
import { ParticleBackground } from "@/components/shared/particle-background";
import { AvailabilityBadge } from "@/components/shared/availability-badge";
import { GradientText } from "@/components/shared/gradient-text";
import { MagneticButton } from "@/components/shared/magnetic-button";

/* ─── Animation presets ─── */
function fadeUp(delay) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  };
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Ambient particles */}
      <ParticleBackground className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col items-center py-20 text-center">

        {/* Availability */}
        <motion.div {...fadeUp(0.1)}>
          <AvailabilityBadge available />
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.3)}
          className="mt-8 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          Jeel Donga
        </motion.h1>

        {/* Title rotator */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-6 h-10 text-xl font-medium text-muted-foreground md:text-2xl"
        >
          <TypeAnimation
            sequence={[
              "AI Engineer", 2000,
              "ML Researcher", 2000,
              "Backend Developer", 2000,
              "Data Science Enthusiast", 2000,
              "Full-Stack Developer", 2000,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            cursor
            className="text-primary"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.7)} className="mt-6 max-w-xl text-lg font-medium md:text-xl">
          <GradientText gradient="accent">
            Building Intelligent Systems That Solve Real-World Problems.
          </GradientText>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.9)}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton variant="primary" href="#projects">
            <ArrowRight className="h-4 w-4" />
            View Projects
          </MagneticButton>

          <MagneticButton variant="secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="h-4 w-4" />
            Resume
          </MagneticButton>

          <MagneticButton variant="secondary" href="https://github.com/JEELDONGA18" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            GitHub
          </MagneticButton>

          <MagneticButton variant="ghost" href="#contact">
            <Mail className="h-4 w-4" />
            Contact
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          {...fadeUp(1.1)}
          className="mt-16 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
