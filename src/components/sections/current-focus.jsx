"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import {
  Bot,
  Search,
  Eye,
  Network,
  Cpu,
  ArrowRight,
} from "lucide-react";

const focusAreas = [
  {
    title: "Agentic AI",
    description: "Building autonomous AI agents that can reason, plan, and take actions across complex multi-step workflows",
    icon: Bot,
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "RAG Optimization",
    description: "Advancing retrieval-augmented generation with hybrid search, re-ranking, and context-aware chunking strategies",
    icon: Search,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Deep Search Systems",
    description: "Creating intelligent search pipelines that understand intent and deliver precise, contextual results",
    icon: Network,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Computer Vision",
    description: "Applying detection, segmentation, and tracking models to solve real-world safety and healthcare challenges",
    icon: Eye,
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "AI Infrastructure",
    description: "Designing scalable systems for model serving, experiment tracking, and production ML deployment",
    icon: Cpu,
    color: "from-amber-500 to-orange-600",
  },
];

export function CurrentFocus() {
  return (
    <section className="py-16 relative">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              <GradientText gradient="primary">What I'm Working On</GradientText>
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Current areas of deep interest and active exploration
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <ScrollReveal key={area.title} direction="up" delay={index * 0.08}>
                <GlassCard hover className="p-4 text-center h-full group">
                  <div className={cn(
                    "h-10 w-10 rounded-xl bg-gradient-to-br flex items-center justify-center mx-auto mb-3",
                    area.color
                  )}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{area.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{area.description}</p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
