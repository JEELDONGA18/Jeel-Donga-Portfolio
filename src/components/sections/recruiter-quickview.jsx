"use client";

import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { GradientText } from "@/components/shared/gradient-text";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { TechBadge } from "@/components/shared/tech-badge";
import {
  Brain,
  FlaskConical,
  Trophy,
  Download,
  ArrowRight,
  Sparkles,
  Rocket,
} from "lucide-react";

const quickStats = [
  { target: 8, suffix: "+", label: "AI Projects", icon: Brain },
  { target: 3, label: "Research Papers", icon: FlaskConical },
  { target: 60, prefix: "₹", suffix: "K", label: "Grant Won", icon: Trophy },
  { target: 5, suffix: "+", label: "Hackathons", icon: Rocket },
];

const topSkills = ["Python", "LLMs", "RAG", "Computer Vision", "React", "Next.js", "PyTorch", "FastAPI"];

export function RecruiterQuickView() {
  return (
    <section className="py-12 relative">
      <div className="container-custom">
        <ScrollReveal direction="up">
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient" />

            <div className="relative rounded-2xl bg-card m-px">
              <GlassCard className="p-6 md:p-8 rounded-2xl">
                {/* Title */}
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">
                    <GradientText gradient="primary">At a Glance</GradientText>
                  </h3>
                  <span className="ml-auto text-xs text-muted-foreground">For Recruiters</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Column 1: Stats */}
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Key Numbers</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {quickStats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                          <div key={stat.label} className="text-center p-3 rounded-lg bg-muted/20">
                            <Icon className="h-4 w-4 text-primary mx-auto mb-1" />
                            <div className="text-lg font-bold text-foreground">
                              <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} duration={1.5} />
                            </div>
                            <div className="text-[10px] text-muted-foreground">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Column 2: Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Highlights</h4>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-muted/20">
                        <p className="text-xs text-muted-foreground mb-0.5">Featured Project</p>
                        <p className="text-sm font-semibold text-foreground">Smart Doc AI</p>
                        <p className="text-xs text-muted-foreground">RAG-powered document intelligence platform</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/20">
                        <p className="text-xs text-muted-foreground mb-0.5">Latest Research</p>
                        <p className="text-sm font-semibold text-foreground">Multi-Organ Segmentation</p>
                        <p className="text-xs text-muted-foreground">84.7% Dice Score with Swin U-Net</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/20">
                        <p className="text-xs text-muted-foreground mb-0.5">Current Focus</p>
                        <p className="text-sm font-medium text-primary">Agentic AI • RAG Optimization</p>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Skills + CTA */}
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Core Skills</h4>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {topSkills.map((skill) => (
                        <TechBadge key={skill} name={skill} />
                      ))}
                    </div>
                    <MagneticButton variant="primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full justify-center">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </MagneticButton>
                    <a
                      href="#projects"
                      className="mt-3 flex items-center justify-center gap-1 text-xs text-primary hover:underline"
                    >
                      View Projects <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
