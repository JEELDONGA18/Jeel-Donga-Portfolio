"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { TechBadge } from "@/components/shared/tech-badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "AI/ML Research Intern",
    organization: "AI Research Lab",
    duration: "Jun 2025 – Aug 2025",
    type: "Internship",
    description:
      "Worked on multi-organ segmentation from laparoscopic images using state-of-the-art deep learning architectures. Conducted experiments, ablation studies, and contributed to research publication.",
    responsibilities: [
      "Implemented U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR architectures",
      "Conducted ablation studies across different model configurations",
      "Processed and augmented 2,000+ medical imaging datasets",
      "Achieved 84.7% Dice Score with the best-performing model",
      "Co-authored research findings for publication",
    ],
    technologies: ["Python", "PyTorch", "MONAI", "Weights & Biases", "NumPy"],
    impact: [
      { metric: "84.7%", label: "Dice Score" },
      { metric: "2,000+", label: "Images Processed" },
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    organization: "TechStartup Inc.",
    duration: "Dec 2024 – Mar 2025",
    type: "Internship",
    description:
      "Built production web applications for enterprise clients. Focused on frontend development with React/Next.js and backend API development with Node.js.",
    responsibilities: [
      "Developed responsive React/Next.js frontends for enterprise dashboards",
      "Built RESTful APIs with Node.js and Express.js",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Optimized database queries reducing response times by 40%",
      "Shipped 3 production features used by 500+ users",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "GitHub Actions"],
    impact: [
      { metric: "40%", label: "Faster APIs" },
      { metric: "3", label: "Features Shipped" },
    ],
  },
  {
    id: 3,
    role: "Technical Lead",
    organization: "University AI/ML Club",
    duration: "Aug 2023 – Present",
    type: "Leadership",
    description:
      "Leading technical initiatives, organizing workshops, and mentoring junior students in AI/ML. Built a thriving community of aspiring AI engineers.",
    responsibilities: [
      "Organized 10+ hands-on workshops on AI/ML topics",
      "Mentored 25+ students on their AI projects and career paths",
      "Led hackathon teams to 3 inter-college competition wins",
      "Curated learning resources and project-based curriculum",
      "Grew club membership by 60% through engaging technical events",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "LangChain"],
    impact: [
      { metric: "60%", label: "Membership Growth" },
      { metric: "25+", label: "Students Mentored" },
    ],
  },
];

const typeColors = {
  Internship: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Leadership: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey — from research labs to production codebases"
          align="center"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/10 md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal
                key={exp.id}
                direction={isEven ? "left" : "right"}
                delay={index * 0.15}
              >
                <div
                  className={cn(
                    "relative flex items-start gap-6 mb-12",
                    "pl-16 md:pl-0",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <GlassCard hover className="p-5 md:p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <span className={cn(
                            "inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium border mb-2",
                            typeColors[exp.type] || typeColors.Internship
                          )}>
                            {exp.type}
                          </span>
                          <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-3 w-3" />
                              {exp.organization}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {exp.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <ul className="space-y-1.5 mb-4">
                        {exp.responsibilities.slice(0, 4).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Impact metrics */}
                      <div className="flex gap-4 mb-4">
                        {exp.impact.map((item, i) => (
                          <div key={i} className="text-center">
                            <div className="text-lg font-bold text-primary">{item.metric}</div>
                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                        {exp.technologies.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                    </GlassCard>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                  </div>

                  {/* Spacer */}
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