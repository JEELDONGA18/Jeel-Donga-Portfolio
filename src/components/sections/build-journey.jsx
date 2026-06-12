"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import {
  Code,
  BookOpen,
  Rocket,
  GraduationCap,
  Brain,
  Trophy,
  Lightbulb,
  Zap,
  Target,
  FlaskConical,
} from "lucide-react";

const journeyMilestones = [
  {
    year: "2021",
    title: "The Spark",
    description: "Started programming journey with Python and C++. Built first CLI tools and fell in love with problem-solving.",
    icon: Code,
    category: "learning",
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2022",
    title: "Entering AI",
    description: "Discovered machine learning through Andrew Ng's courses. Built first image classifier and understood the power of data-driven systems.",
    icon: Brain,
    category: "learning",
    color: "from-violet-500 to-purple-500",
  },
  {
    year: "2023",
    title: "Full-Stack Foundations",
    description: "Mastered React, Next.js, Node.js. Started building complete web applications and understanding system design.",
    icon: Rocket,
    category: "engineering",
    color: "from-emerald-500 to-teal-500",
  },
  {
    year: "2023",
    title: "First Hackathon Win",
    description: "Won university hackathon with an AI-powered campus solution. Learned the value of building under pressure.",
    icon: Trophy,
    category: "engineering",
    color: "from-amber-500 to-orange-500",
  },
  {
    year: "2024",
    title: "LLM & RAG Deep Dive",
    description: "Built Smart Doc AI — a production-grade RAG system with semantic search, vector databases, and conversational AI.",
    icon: Zap,
    category: "engineering",
    color: "from-indigo-500 to-violet-500",
  },
  {
    year: "2024",
    title: "Computer Vision Systems",
    description: "Developed TransitGuard using YOLOv8 for real-time detection. Secured ₹60,000 project grant for innovation.",
    icon: Target,
    category: "engineering",
    color: "from-rose-500 to-pink-500",
  },
  {
    year: "2025",
    title: "Research Journey Begins",
    description: "Started multi-organ segmentation research. Implemented U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR architectures.",
    icon: FlaskConical,
    category: "research",
    color: "from-cyan-500 to-blue-500",
  },
  {
    year: "2025",
    title: "Building the Future",
    description: "Exploring Agentic AI, RAG optimization, and deep search systems. Focused on bridging research and production.",
    icon: Lightbulb,
    category: "research",
    color: "from-yellow-500 to-amber-500",
  },
];

const categoryColors = {
  learning: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  engineering: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  research: "text-violet-400 bg-violet-400/10 border-violet-400/20",
};

const categoryLabels = {
  learning: "Learning",
  engineering: "Engineering",
  research: "Research",
};

export function BuildJourney() {
  return (
    <section id="journey" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Build Journey"
          subtitle="From writing my first line of code to building production AI systems"
          align="center"
        />

        {/* Category Legend */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <span
              key={key}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-medium border",
                categoryColors[key]
              )}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:-translate-x-px" />

          {journeyMilestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal
                key={index}
                direction={isEven ? "left" : "right"}
                delay={index * 0.1}
              >
                <div
                  className={cn(
                    "relative flex items-start gap-6 mb-10",
                    "pl-16 md:pl-0",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Content Card */}
                  <div className={cn("flex-1", isEven ? "md:text-right" : "md:text-left")}>
                    <GlassCard hover className="p-5">
                      <div className={cn(
                        "flex items-center gap-2 mb-2",
                        isEven ? "md:justify-end" : "md:justify-start"
                      )}>
                        <span className={cn(
                          "px-2 py-0.5 rounded text-xs font-medium border",
                          categoryColors[milestone.category]
                        )}>
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </GlassCard>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex-shrink-0">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br shadow-lg",
                      milestone.color
                    )}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
