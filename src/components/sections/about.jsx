"use client";

import { GraduationCap, MapPin, Building } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import Image from "next/image";
import { Brain, Trophy, Code } from "lucide-react";

/* Quick info items with Lucide icons */
const quickInfo = [
  { icon: Code, text: "4+ Major Projects" },
  { icon: Trophy, text: "₹60K Innovation Grant" },
  { icon: Brain, text: "AI & Full-Stack Developer" },
];

/* Current areas of focus */
const focusTags = [
  "Artificial Intelligence",
  "Computer Vision",
  "Data Science",
  "Full-Stack Development",
  "Research",
  "Automation",
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Building intelligent software through AI, data science, research, and engineering."
          gradient
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left — story */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  I'm a Computer Engineering student passionate about building intelligent
                  software that solves practical problems. My interests span Artificial
                  Intelligence, Computer Vision, Data Science, and Full-Stack Development,
                  where I combine research, engineering, and product thinking to create
                  impactful solutions.
                </p>

                <p>
                  I've worked on AI-powered document intelligence platforms, computer vision
                  systems for public transportation analytics, EV trend forecasting dashboards,
                  and medical image segmentation research. I enjoy transforming ideas into
                  real-world applications through modern technologies and continuous learning.
                </p>

                <p>
                  Every project I build starts with a simple question:
                  <em className="text-foreground">
                    {" "}“Can this create meaningful value for someone?”
                  </em>
                </p>
              </div>
            </ScrollReveal>

            {/* Quick info — icons instead of emojis */}
            <ScrollReveal direction="right" delay={0.35}>
              <div className="my-3 grid w-full grid-cols-3 gap-3">
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

          {/* Right — photo */}
          <div className="flex flex-col items-center justify-center lg:col-span-2">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                
                {/* Soft Glow */}
                <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-3xl" />

                {/* Image */}
                <div className="relative mx-auto h-[470px] w-[340px] overflow-hidden rounded-2xl">
                  <Image
                    src="/Jeel_Donga.jpg"
                    alt="Jeel Donga"
                    fill
                    priority
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
