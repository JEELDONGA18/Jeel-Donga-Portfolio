"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Trophy, Award, Medal, Star, FileText, IndianRupee } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "₹60,000 Project Grant Winner",
    description: "Smart Doc AI won a competitive project grant from the university innovation fund, selected from 50+ competing projects for its technical innovation and real-world applicability.",
    icon: IndianRupee,
    value: 60000,
    prefix: "₹",
    category: "Grant",
    date: "2024",
    color: "from-amber-500 to-yellow-500",
    textColor: "text-amber-400",
    bgColor: "bg-amber-400/10 border-amber-400/20",
  },
  {
    id: 2,
    title: "OEP Research Competition Winner",
    description: "Multi-organ segmentation research was selected as the best project at the Open-Ended Project Research Competition for its rigorous methodology and impactful results.",
    icon: Award,
    category: "Research",
    date: "2025",
    color: "from-blue-500 to-indigo-500",
    textColor: "text-blue-400",
    bgColor: "bg-blue-400/10 border-blue-400/20",
  },
  {
    id: 3,
    title: "National Hackathon Finalist",
    description: "TransitGuard reached the finals at a major national hackathon, competing against 200+ teams with an AI-powered public safety solution.",
    icon: Medal,
    category: "Hackathon",
    date: "2024",
    color: "from-purple-500 to-violet-500",
    textColor: "text-purple-400",
    bgColor: "bg-purple-400/10 border-purple-400/20",
  },
  {
    id: 4,
    title: "Technical Leadership Award",
    description: "Recognized for outstanding contributions to the university AI/ML Club — organizing workshops, mentoring students, and leading successful hackathon teams.",
    icon: Star,
    category: "Leadership",
    date: "2024",
    color: "from-emerald-500 to-green-500",
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    id: 5,
    title: "Best Research Poster",
    description: "Awarded Best Research Poster at the University Research Symposium 2025 for the multi-organ segmentation study and its potential clinical applications.",
    icon: FileText,
    category: "Research",
    date: "2025",
    color: "from-cyan-500 to-teal-500",
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10 border-cyan-400/20",
  },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Achievements & Recognition"
          subtitle="Grants, awards, and milestones earned through building and shipping"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} direction="up" delay={index * 0.1}>
                <GlassCard hover className="p-5 h-full relative overflow-hidden group">
                  {/* Subtle gradient accent on hover */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500",
                    item.color
                  )} />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={cn(
                        "h-11 w-11 rounded-xl bg-gradient-to-br flex items-center justify-center flex-shrink-0",
                        item.color
                      )}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={cn(
                            "text-[10px] px-2 py-0.5 rounded-full font-medium border",
                            item.bgColor
                          )}>
                            {item.category}
                          </span>
                          <span className="text-[10px] text-muted-foreground">{item.date}</span>
                        </div>
                        <h3 className="text-base font-bold text-foreground leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Value counter */}
                    {item.value && (
                      <div className={cn("text-2xl font-bold mb-2", item.textColor)}>
                        <AnimatedCounter
                          target={item.value}
                          prefix={item.prefix}
                          duration={2}
                        />
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
