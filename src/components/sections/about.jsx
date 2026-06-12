"use client";

import { motion } from "motion/react";
import { GraduationCap, MapPin, School, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";

/* ============================================
   ABOUT SECTION
   Storytelling-first introduction with personal
   narrative, philosophy quote, focus tags, photo
   placeholder, and a mission statement.
   ============================================ */

// --- Current areas of focus ---
const focusTags = [
  "Agentic AI",
  "RAG Optimization",
  "Deep Search Systems",
  "Computer Vision",
  "AI Infrastructure",
];

// --- Quick info items beside the photo ---
const quickInfo = [
  { emoji: "🎓", text: "B.Tech Computer Engineering" },
  { emoji: "📍", text: "Gujarat, India" },
  { emoji: "🏫", text: "Dharmsinh Desai University" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-custom">
        {/* ---- Section header ---- */}
        <SectionHeading
          title="About Me"
          subtitle="The journey from curiosity to building real AI systems."
          gradient
        />

        {/* ---- Two-column layout ---- */}
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

          {/* === Left column — story (3/5 width on desktop) === */}
          <div className="lg:col-span-3">

            {/* Narrative paragraphs */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  My journey into technology began during high school, when I
                  wrote my first lines of code and immediately felt the thrill
                  of bringing ideas to life. What started as simple curiosity
                  quickly became a deep fascination — especially once I
                  discovered the world of artificial intelligence and its
                  potential to transform how we solve problems.
                </p>
                <p>
                  Today, I&apos;m a Computer Engineering student at{" "}
                  <span className="font-medium text-foreground">
                    Dharmsinh Desai University
                  </span>
                  , where I channel that fascination into building real systems.
                  From designing retrieval-augmented generation pipelines to
                  developing agentic workflows, I&apos;m constantly pushing
                  myself to bridge the gap between academic research and
                  production-grade software.
                </p>
                <p>
                  What drives me isn&apos;t just the technology itself — it&apos;s
                  the impact. I&apos;m passionate about turning cutting-edge
                  research into tangible products that people can actually use.
                  Every project I take on is guided by a simple question:{" "}
                  <em className="text-foreground">&quot;Does this solve a real problem?&quot;</em>
                </p>
                <p>
                  I believe the best AI isn&apos;t the most complex — it&apos;s
                  the most useful. My goal is to build AI systems that ship,
                  scale, and make a genuine difference, not just impressive
                  demos that never leave a notebook.
                </p>
              </div>
            </ScrollReveal>

            {/* Philosophy quote */}
            <ScrollReveal direction="up" delay={0.25}>
              <GlassCard
                gradient
                hover={false}
                className="mt-8 p-6 md:p-8"
              >
                <div className="flex gap-4">
                  <Quote className="mt-1 h-8 w-8 shrink-0 text-primary opacity-60" />
                  <blockquote className="text-base font-medium italic leading-relaxed text-foreground md:text-lg">
                    &ldquo;I believe the best AI engineers are those who can
                    bridge the gap between cutting-edge research and
                    production-ready systems.&rdquo;
                  </blockquote>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Current focus tags */}
            <ScrollReveal direction="up" delay={0.35}>
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Current Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {focusTags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "rounded-full px-4 py-1.5 text-xs font-medium",
                        "border border-primary/20 bg-primary/5 text-primary",
                        "transition-colors hover:border-primary/40 hover:bg-primary/10"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* === Right column — visual elements (2/5 width on desktop) === */}
          <div className="flex flex-col items-center gap-6 lg:col-span-2">

            {/* Photo placeholder */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="gradient-border relative mx-auto h-[400px] w-[300px] overflow-hidden rounded-2xl">
                {/* Gradient background fill */}
                <div
                  className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-cyan-500/20"
                  )}
                />

                {/* Initials centrepiece */}
                <div className="relative flex h-full w-full flex-col items-center justify-center">
                  <span
                    className={cn(
                      "text-7xl font-black tracking-tighter",
                      "bg-gradient-to-br from-indigo-400 via-violet-400 to-cyan-400",
                      "bg-clip-text text-transparent"
                    )}
                  >
                    JD
                  </span>
                  <span className="mt-2 text-xs font-medium text-muted-foreground">
                    Photo Coming Soon
                  </span>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute left-3 top-3 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-primary/30" />
                <div className="absolute bottom-3 right-3 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-primary/30" />
              </div>
            </ScrollReveal>

            {/* Quick info cards */}
            <ScrollReveal direction="right" delay={0.35}>
              <div className="flex w-full max-w-[300px] flex-col gap-3">
                {quickInfo.map((item, i) => (
                  <GlassCard
                    key={item.text}
                    hover
                    className="flex items-center gap-3 px-5 py-3"
                  >
                    <span className="text-lg" role="img" aria-hidden="true">
                      {item.emoji}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {item.text}
                    </span>
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ---- Full-width mission statement ---- */}
        <ScrollReveal direction="up" delay={0.15}>
          <GlassCard
            gradient
            hover={false}
            className="mt-16 p-8 text-center md:mt-20 md:p-12"
          >
            <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
              My Mission
            </h3>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              To build AI systems that move beyond the prototype stage and into
              the hands of people who need them. I&apos;m driven by the
              conviction that the most meaningful breakthroughs happen at the
              intersection of{" "}
              <GradientText gradient="primary">deep technical skill</GradientText>,{" "}
              <GradientText gradient="accent">real-world empathy</GradientText>,
              and the discipline to ship. Whether it&apos;s a smart search
              engine, an automated research pipeline, or a computer-vision
              system — if it solves a genuine problem, I want to build it.
            </p>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
