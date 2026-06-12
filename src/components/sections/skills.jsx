"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import {
  Brain,
  Sparkles,
  Layout,
  Server,
  Database,
  Cloud,
  ChevronDown,
} from "lucide-react";

const skillCategories = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "Python", level: "Advanced", proofs: ["Core language for all AI projects", "Used across Smart Doc AI, TransitGuard, and research"] },
      { name: "PyTorch", level: "Advanced", proofs: ["Multi-organ segmentation research", "Custom model training pipelines"] },
      { name: "TensorFlow", level: "Advanced", proofs: ["Kidney Healthcare prediction models", "Production ML serving"] },
      { name: "OpenCV", level: "Proficient", proofs: ["TransitGuard real-time video processing", "Image preprocessing pipelines"] },
      { name: "Scikit-Learn", level: "Proficient", proofs: ["Feature engineering and classical ML", "Data analysis across projects"] },
      { name: "MONAI", level: "Proficient", proofs: ["Medical image segmentation research", "3D volumetric data processing"] },
    ],
  },
  {
    name: "LLM & Generative AI",
    icon: Sparkles,
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "LangChain", level: "Advanced", proofs: ["Smart Doc AI RAG orchestration", "Multi-chain document processing"] },
      { name: "LlamaIndex", level: "Proficient", proofs: ["Document indexing experiments", "Alternative RAG pipeline testing"] },
      { name: "RAG Pipelines", level: "Advanced", proofs: ["Smart Doc AI core architecture", "Semantic search + retrieval systems"] },
      { name: "Vector Databases", level: "Advanced", proofs: ["Pinecone & ChromaDB integration", "Embedding storage and similarity search"] },
      { name: "Prompt Engineering", level: "Advanced", proofs: ["Custom prompt templates for doc Q&A", "Output parsing and chain-of-thought"] },
      { name: "Embeddings", level: "Proficient", proofs: ["OpenAI ada-002 integration", "Custom embedding evaluation"] },
    ],
  },
  {
    name: "Frontend",
    icon: Layout,
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "React", level: "Advanced", proofs: ["All project frontends built with React", "Complex state management"] },
      { name: "Next.js", level: "Advanced", proofs: ["This portfolio website", "Smart Doc AI dashboard"] },
      { name: "JavaScript", level: "Advanced", proofs: ["Primary frontend language", "Full-stack applications"] },
      { name: "Tailwind CSS", level: "Proficient", proofs: ["UI styling across all projects", "Custom design system creation"] },
      { name: "Framer Motion", level: "Proficient", proofs: ["Portfolio animations", "Interactive UI elements"] },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    color: "from-orange-500 to-red-600",
    skills: [
      { name: "FastAPI", level: "Advanced", proofs: ["Smart Doc AI backend", "TransitGuard inference API"] },
      { name: "Node.js", level: "Proficient", proofs: ["Internship production APIs", "Express.js microservices"] },
      { name: "Express.js", level: "Proficient", proofs: ["RESTful API development", "Middleware and auth systems"] },
      { name: "Flask", level: "Proficient", proofs: ["Kidney Healthcare API", "ML model serving"] },
    ],
  },
  {
    name: "Databases",
    icon: Database,
    color: "from-amber-500 to-yellow-600",
    skills: [
      { name: "PostgreSQL", level: "Proficient", proofs: ["TransitGuard data storage", "Complex query optimization"] },
      { name: "MongoDB", level: "Proficient", proofs: ["Kidney Healthcare patient data", "Document-based storage"] },
      { name: "Pinecone", level: "Proficient", proofs: ["Smart Doc AI vector store", "Embedding similarity search"] },
      { name: "ChromaDB", level: "Proficient", proofs: ["Local development vector DB", "RAG prototyping"] },
    ],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    color: "from-sky-500 to-indigo-600",
    skills: [
      { name: "Docker", level: "Proficient", proofs: ["Containerized deployments", "Multi-service orchestration"] },
      { name: "GitHub Actions", level: "Proficient", proofs: ["CI/CD pipeline setup", "Automated testing and deployment"] },
      { name: "Vercel", level: "Proficient", proofs: ["Frontend deployments", "Edge function integration"] },
      { name: "Render", level: "Familiar", proofs: ["Backend service hosting", "Database provisioning"] },
      { name: "AWS", level: "Familiar", proofs: ["S3 storage, EC2 instances", "Model deployment experiments"] },
    ],
  },
];

const levelColors = {
  Advanced: "text-emerald-400 bg-emerald-400/10",
  Proficient: "text-blue-400 bg-blue-400/10",
  Familiar: "text-amber-400 bg-amber-400/10",
};

function SkillCard({ category, index }) {
  const [expanded, setExpanded] = useState(null);
  const Icon = category.icon;

  return (
    <ScrollReveal direction="up" delay={index * 0.1}>
      <GlassCard hover className="p-5 h-full">
        {/* Category header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={cn(
            "h-10 w-10 rounded-lg bg-gradient-to-br flex items-center justify-center",
            category.color
          )}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-base font-semibold text-foreground">{category.name}</h3>
        </div>

        {/* Skills list */}
        <div className="space-y-1">
          {category.skills.map((skill, i) => (
            <div key={skill.name}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full flex items-center justify-between py-2 px-2 rounded-lg hover:bg-muted/30 transition-colors text-left group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded font-medium",
                    levelColors[skill.level]
                  )}>
                    {skill.level}
                  </span>
                </div>
                <ChevronDown className={cn(
                  "h-3.5 w-3.5 text-muted-foreground transition-transform",
                  expanded === i && "rotate-180"
                )} />
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-2 pb-2 space-y-1">
                      {skill.proofs.map((proof, j) => (
                        <p key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                          {proof}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I use daily, backed by real projects and research — not percentage bars"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
