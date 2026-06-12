"use client";

import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import {
  Download,
  Mail,
  ChevronDown,
  Brain,
  BookOpen,
  Trophy,
  Award,
} from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/brand-icons";
import { cn } from "@/lib/utils";
import { ParticleBackground } from "@/components/shared/particle-background";
import { AvailabilityBadge } from "@/components/shared/availability-badge";
import { GradientText } from "@/components/shared/gradient-text";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { GlassCard } from "@/components/shared/glass-card";

/* ============================================
   HERO SECTION
   Full-screen immersive landing with staggered
   entrance animations & ambient particles.
   ============================================ */

// --- Name animation: letter-by-letter staggered reveal ---
const nameText = "Jeel Donga";
const nameLetters = nameText.split("");

const nameContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.6, // wait for badge to settle
    },
  },
};

const nameLetterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 200,
    },
  },
};

// --- Orchestrated entrance delays (seconds after mount) ---
const DELAYS = {
  badge: 0.1,
  name: 0.6,
  subtitle: 1.4,
  tagline: 1.8,
  intro: 2.1,
  buttons: 2.5,
  stats: 2.9,
  scroll: 3.4,
};

// --- Stat items for the counter bar ---
const stats = [
  { target: 8, suffix: "+", label: "AI Projects Built", icon: Brain },
  { target: 3, suffix: "+", label: "Research Projects", icon: BookOpen },
  { target: 5, suffix: "+", label: "Hackathons", icon: Trophy },
  { target: 4, suffix: "+", label: "Awards Won", icon: Award },
];

// --- Reusable fade-up preset ---
function fadeUp(delay) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  };
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* ---- Ambient particle layer ---- */}
      <ParticleBackground className="absolute inset-0 z-0" />

      {/* ---- Content ---- */}
      <div className="container-custom relative z-10 flex flex-col items-center py-20 text-center">

        {/* 1 · Availability Badge */}
        <motion.div {...fadeUp(DELAYS.badge)}>
          <AvailabilityBadge available />
        </motion.div>

        {/* 2 · Name — staggered letter reveal */}
        <motion.h1
          variants={nameContainerVariants}
          initial="hidden"
          animate="visible"
          aria-label={nameText}
          className={cn(
            "mt-8 flex flex-wrap justify-center",
            "text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl",
            "text-foreground"
          )}
          style={{
            textShadow:
              "0 0 40px rgba(99, 102, 241, 0.15), 0 0 80px rgba(99, 102, 241, 0.08)",
          }}
        >
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              variants={nameLetterVariants}
              className={cn(
                "inline-block",
                letter === " " && "w-4 md:w-6"
              )}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* 3 · Subtitle — TypeAnimation */}
        <motion.div
          {...fadeUp(DELAYS.subtitle)}
          className="mt-6 h-10 text-xl font-medium text-muted-foreground md:text-2xl lg:text-3xl"
        >
          <TypeAnimation
            sequence={[
              "AI Engineer",
              2000,
              "Full-Stack Developer",
              2000,
              "Research Enthusiast",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            cursor
            className="text-primary"
          />
        </motion.div>

        {/* 4 · Tagline — gradient text */}
        <motion.p
          {...fadeUp(DELAYS.tagline)}
          className="mt-6 max-w-2xl text-lg font-medium md:text-xl"
        >
          <GradientText gradient="accent">
            Building Production-Ready AI Systems That Solve Real-World Problems.
          </GradientText>
        </motion.p>

        {/* 5 · Short intro paragraph */}
        <motion.p
          {...fadeUp(DELAYS.intro)}
          className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          Computer Engineering student and AI enthusiast turning cutting-edge
          research into real-world products. From RAG pipelines and agentic
          workflows to full-stack applications — I build AI systems that
          actually ship.
        </motion.p>

        {/* 6 · CTA Buttons */}
        <motion.div
          {...fadeUp(DELAYS.buttons)}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          <MagneticButton
            variant="primary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            href="https://github.com/jeeldonga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            GitHub
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            href="https://linkedin.com/in/jeeldonga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </MagneticButton>

          <MagneticButton
            variant="ghost"
            href="#contact"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </MagneticButton>
        </motion.div>

        {/* 7 · Stats bar */}
        <motion.div
          {...fadeUp(DELAYS.stats)}
          className="mt-14 w-full max-w-3xl"
        >
          <GlassCard hover={false} gradient className="px-4 py-6 md:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-2xl font-bold text-foreground md:text-3xl">
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        duration={2}
                      />
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        {/* 8 · Scroll indicator */}
        <motion.a
          href="#about"
          {...fadeUp(DELAYS.scroll)}
          className="mt-14 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
