"use client";

import { GraduationCap, MapPin, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";

/* Quick info items with Lucide icons */
const quickInfo = [
  { icon: GraduationCap, text: "B.Tech Computer Engineering" },
  { icon: MapPin, text: "Gujarat, India" },
  { icon: Building, text: "Dharmsinh Desai University" },
];

/* Current areas of focus */
const focusTags = [
  "AI/ML Systems",
  "Computer Vision",
  "RAG Pipelines",
  "FastAPI",
  "Full-Stack Development",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="The journey from curiosity to building real AI systems."
          gradient
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left — story */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  I&apos;m a Computer Engineering student at{" "}
                  <span className="font-medium text-foreground">
                    Dharmsinh Desai University
                  </span>
                  , specializing in AI/ML, Computer Vision, and scalable backend
                  systems. I build end-to-end intelligent systems — from research
                  prototypes to production-ready applications.
                </p>
                <p>
                  My work spans large language model applications, medical image
                  segmentation research, real-time computer vision systems, and
                  FastAPI backend services. Every project I take on is guided by a
                  simple question:{" "}
                  <em className="text-foreground">
                    &quot;Does this solve a real problem?&quot;
                  </em>
                </p>
              </div>
            </ScrollReveal>

            {/* Focus tags */}
            <ScrollReveal direction="up" delay={0.25}>
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Focus Areas
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

          {/* Right — photo + quick info */}
          <div className="flex flex-col items-center gap-6 lg:col-span-2">
            {/* Photo placeholder */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="gradient-border relative mx-auto h-[320px] w-[260px] overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-cyan-500/20" />
                <div className="relative flex h-full w-full flex-col items-center justify-center">
                  <span className="text-7xl font-black tracking-tighter bg-gradient-to-br from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    JD
                  </span>
                </div>
                <div className="absolute left-3 top-3 h-8 w-8 rounded-tl-lg border-l-2 border-t-2 border-primary/30" />
                <div className="absolute bottom-3 right-3 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-primary/30" />
              </div>
            </ScrollReveal>

            {/* Quick info — icons instead of emojis */}
            <ScrollReveal direction="right" delay={0.35}>
              <div className="flex w-full max-w-[260px] flex-col gap-3">
                {quickInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <GlassCard
                      key={item.text}
                      hover
                      className="flex items-center gap-3 px-5 py-3"
                    >
                      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {item.text}
                      </span>
                    </GlassCard>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
