"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import {
  Brain,
  Sparkles,
  Monitor,
  Server,
  Database,
  Cloud,
} from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap = { Brain, Sparkles, Monitor, Server, Database, Cloud };

const gradients = [
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-amber-500 to-yellow-600",
  "from-sky-500 to-indigo-600",
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with daily"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Brain;
            return (
              <ScrollReveal key={category.category} direction="up" delay={index * 0.08}>
                <GlassCard hover className="p-5 h-full">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "h-10 w-10 rounded-lg bg-gradient-to-br flex items-center justify-center",
                        gradients[index % gradients.length]
                      )}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
