"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import {
  Brain,
  Monitor,
  Server,
  Database,
  Cloud,
  Code,
  Cpu,
  Eye,
  Layers,
  Globe,
  GitBranch,
  Zap,
  FileCode,
  Palette,
  Play,
  Triangle,
} from "lucide-react";

/* Icon map for individual skills */
const skillIconMap = {
  // AI & Machine Learning
  Python: Code,
  PyTorch: Zap,
  TensorFlow: Cpu,
  OpenCV: Eye,
  YOLOv8: Eye,
  "Scikit-Learn": Layers,

  // Data Science
  Pandas: Database,
  NumPy: Layers,
  Matplotlib: Monitor,
  Seaborn: Monitor,
  Plotly: Monitor,
  "Power BI": Database,

  // Frontend
  React: Globe,
  "Next.js": Globe,
  JavaScript: FileCode,
  "Tailwind CSS": Palette,
  "Framer Motion": Play,

  // Backend
  FastAPI: Zap,
  "Node.js": Server,
  Flask: Code,
  "REST APIs": Globe,

  // Databases
  MongoDB: Database,
  MySQL: Database,

  // Tools & Technologies
  Git: GitBranch,
  "GitHub Actions": GitBranch,
  Vercel: Triangle,
  "Automated Workflows (N8N)": Zap,
  IoT: Cpu,
  Robotics: Brain,
};

/* Category config */
const categories = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    gradient: "from-violet-500 to-purple-600",
    skills: ["Python", "PyTorch", "TensorFlow", "OpenCV", "YOLOv8", "Scikit-Learn"],
  },
  {
    name: "Data Science",
    icon: Database,
    gradient: "from-emerald-500 to-green-600",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Power BI"],
  },
  {
    name: "Frontend",
    icon: Monitor,
    gradient: "from-emerald-500 to-teal-600",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend & Databases",
    icon: Server,
    gradient: "from-orange-500 to-red-600",
    skills: ["FastAPI", "Node.js", "Flask", "REST APIs", "MongoDB", "MySQL"],
  },
  {
    name: "Automation & Emerging Tech",
    icon: Cloud,
    gradient: "from-sky-500 to-indigo-600",
    skills: ["Git", "GitHub Actions", "Vercel", "Automated Workflows (N8N)", "IoT", "Robotics"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="AI, Full-Stack, Data Science, and Emerging Technologies used across real-world projects and research"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <ScrollReveal key={category.name} direction="up" delay={index * 0.08}>
                <GlassCard hover className="p-6 h-full">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={cn(
                        "h-10 w-10 rounded-lg bg-gradient-to-br flex items-center justify-center",
                        category.gradient
                      )}
                    >
                      <CategoryIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skill tags with icons */}
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skillIconMap[skill] || Code;
                      return (
                        <motion.div
                          key={skill}
                          whileHover={{ scale: 1.03 }}
                          className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/40 px-3 py-2 text-[13px] transition-colors hover:bg-primary/5"
                        >
                          <SkillIcon className="h-4 w-4 text-primary" />
                          <span>{skill}</span>
                        </motion.div>
                      );
                    })}
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
