"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Trophy, Award, Medal, Star, FileText, IndianRupee, Brain } from "lucide-react";

const achievements = [
  {
    id: 2,
    title: "Google Student Ambassador (GSA)",
    description:
      "Selected as a Google Student Ambassador, leading technical community initiatives, organizing workshops and technology-focused events, and mentoring students to foster learning, collaboration, and technology adoption across the campus ecosystem.",
    icon: Star,
    category: "Leadership",
    date: "2025",
    color: "from-emerald-500 to-green-500",
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    id: 1,
    title: "₹60,000 Innovation Grant Awarded",
    description:
      "Awarded ₹60,000 in project funding for TransitGuard, an AI-powered public transport analytics platform that uses Computer Vision to automate passenger monitoring, validate ticket issuance, and identify revenue leakage in public transportation systems.",
    icon: IndianRupee,
    value: 60000,
    prefix: "₹",
    category: "Grant",
    date: "2025",
    color: "from-amber-500 to-yellow-500",
    textColor: "text-amber-400",
    bgColor: "bg-amber-400/10 border-amber-400/20",
  },
  // {
  //   id: 3,
  //   title: "National Hackathon Finalist",
  //   description: "TransitGuard reached the finals at a major national hackathon, competing against 200+ teams with an AI-powered public safety solution.",
  //   icon: Medal,
  //   category: "Hackathon",
  //   date: "2024",
  //   color: "from-purple-500 to-violet-500",
  //   textColor: "text-purple-400",
  //   bgColor: "bg-purple-400/10 border-purple-400/20",
  // },
  {
    id: 4,
    title: "Core Organizer – VERVE 2K26 & Campus Events",
    description:
      "Recognized for organizing and executing major college events including VERVE 2K26, Exuberance, SCET Tech Fest 'Kshitij', and SSIP initiatives. Contributed to event planning, team coordination, logistics management, and successful execution across multiple cross-functional teams.",
    icon: Star,
    category: "Leadership",
    date: "2026",
    color: "from-emerald-500 to-green-500",
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    id: 5,
    title: "T-MOS: Transformer-Based Multi-Organ Segmentation Research",
    description:
      "Developed a deep learning framework for multi-organ segmentation from laparoscopic images, benchmarking CNN and Transformer-based architectures including U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR. The research paper based on this work is currently under review for publication.",
    icon: Brain,
    category: "Research",
    date: "2026",
    color: "from-cyan-500 to-teal-500",
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10 border-cyan-400/20",
  },
  {
    id: 6,
    title: "1st Prize – OEP Poster Presentation Competition",
    description:
      "Secured 1st Prize and won a cash award for presenting the T-MOS research project at the Open Ended Project Poster Presentation Competition.",
    icon: Trophy,
    category: "Award",
    date: "2026",
    color: "from-fuchsia-500 to-pink-500",
    textColor: "text-fuchsia-400",
    bgColor: "bg-fuchsia-400/10 border-fuchsia-400/20",
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

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal
                key={item.id}
                direction="up"
                delay={index * 0.1}
              >
                <div className="relative pl-16 pb-8">
                  {/* Timeline Icon */}
                  <div
                    className={cn(
                      "absolute left-0 top-2 h-10 w-10 rounded-full",
                      "bg-gradient-to-br flex items-center justify-center",
                      "shadow-lg",
                      item.color
                    )}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>

                  {/* Achievement Card */}
                  <GlassCard
                    hover
                    className="p-5 relative overflow-hidden group"
                  >
                    {/* Hover Gradient */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500",
                        item.color
                      )}
                    />

                    <div className="relative">
                      {/* Category + Date */}
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={cn(
                            "text-[10px] px-2 py-0.5 rounded-full font-medium border",
                            item.bgColor
                          )}
                        >
                          {item.category}
                        </span>

                        <span className="text-xs text-muted-foreground">
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {item.title}
                      </h3>

                      {/* Counter */}
                      {item.value && (
                        <div
                          className={cn(
                            "text-2xl font-bold mb-3",
                            item.textColor
                          )}
                        >
                          {item.prefix}{item.value.toLocaleString()}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}