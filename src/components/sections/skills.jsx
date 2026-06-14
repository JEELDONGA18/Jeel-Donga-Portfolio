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
  Code,
  Cpu,
  Eye,
  Layers,
  Globe,
  GitBranch,
  Box,
  Zap,
  Search,
  MessageSquare,
  FileCode,
  Palette,
  Play,
  Triangle,
} from "lucide-react";

/* Icon map for individual skills */
const skillIconMap = {
  Python: Code,
  PyTorch: Zap,
  TensorFlow: Cpu,
  OpenCV: Eye,
  "Scikit-Learn": Layers,
  MONAI: Brain,
  LangChain: Sparkles,
  "RAG Pipelines": Search,
  "Vector Databases": Database,
  "Prompt Engineering": MessageSquare,
  Embeddings: Layers,
  React: Globe,
  "Next.js": Globe,
  JavaScript: FileCode,
  "Tailwind CSS": Palette,
  "Framer Motion": Play,
  FastAPI: Zap,
  "Node.js": Server,
  "Express.js": Server,
  Flask: Code,
  "REST APIs": Globe,
  PostgreSQL: Database,
  MongoDB: Database,
  Pinecone: Search,
  ChromaDB: Database,
  Docker: Box,
  Git: GitBranch,
  "GitHub Actions": GitBranch,
  Vercel: Triangle,
  AWS: Cloud,
};

/* Category config */
const categories = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    gradient: "from-violet-500 to-purple-600",
    skills: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Scikit-Learn", "MONAI"],
  },
  {
    name: "LLM & Generative AI",
    icon: Sparkles,
    gradient: "from-cyan-500 to-blue-600",
    skills: ["LangChain", "RAG Pipelines", "Vector Databases", "Prompt Engineering", "Embeddings"],
  },
  {
    name: "Frontend",
    icon: Monitor,
    gradient: "from-emerald-500 to-teal-600",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    icon: Server,
    gradient: "from-orange-500 to-red-600",
    skills: ["FastAPI", "Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    gradient: "from-amber-500 to-yellow-600",
    skills: ["PostgreSQL", "MongoDB", "Pinecone", "ChromaDB"],
  },
  {
    name: "DevOps & Tools",
    icon: Cloud,
    gradient: "from-sky-500 to-indigo-600",
    skills: ["Docker", "Git", "GitHub Actions", "Vercel", "AWS"],
  },
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
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <ScrollReveal key={category.name} direction="up" delay={index * 0.08}>
                <GlassCard hover className="p-5 h-full">
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
                    <h3 className="text-base font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skill tags with icons */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skillIconMap[skill] || Code;
                      return (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-default"
                        >
                          <SkillIcon className="h-3.5 w-3.5 text-primary/70" />
                          {skill}
                        </motion.span>
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
