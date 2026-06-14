"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { TechBadge } from "@/components/shared/tech-badge";
import { projects } from "@/data/projects";
import { ProjectModal } from "@/components/sections/project-modal";
import {
  ExternalLink,
  ArrowRight,
  Layers,
  Brain,
  FlaskConical,
  Sparkles,
} from "lucide-react";
import { GithubIcon as Github } from "@/components/shared/brand-icons";

// ─── Category filter config ─────────────────────────────────────────────────

const categories = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "ai-ml", label: "AI / ML", icon: Brain },
  { id: "full-stack", label: "Full-Stack", icon: Layers },
  { id: "data-science", label: "Data Science", icon: FlaskConical },
  { id: "research", label: "Research", icon: FlaskConical },
];

// ─── Unique gradient for each project card header ────────────────────────────

const cardGradients = [
  "from-indigo-600/90 via-violet-600/80 to-purple-700/90",
  "from-cyan-600/90 via-blue-600/80 to-indigo-700/90",
  "from-emerald-600/90 via-teal-600/80 to-cyan-700/90",
  "from-rose-600/90 via-pink-600/80 to-violet-700/90",
  "from-amber-600/90 via-orange-600/80 to-red-700/90",
];

// Accent colors that match the gradients — used for borders & glows on hover
const cardAccents = [
  { border: "hover:border-violet-500/40", glow: "hover:shadow-violet-500/10" },
  { border: "hover:border-cyan-500/40", glow: "hover:shadow-cyan-500/10" },
  { border: "hover:border-teal-500/40", glow: "hover:shadow-teal-500/10" },
  { border: "hover:border-pink-500/40", glow: "hover:shadow-pink-500/10" },
  { border: "hover:border-amber-500/40", glow: "hover:shadow-amber-500/10" },
];

// Category label colors
const categoryColors = {
  "ai-ml": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "full-stack": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "data-science": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  research: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

// Status styles
const statusStyles = {
  completed: {
    dot: "bg-emerald-400",
    bg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    label: "Completed",
  },
  "in-progress": {
    dot: "bg-amber-400 animate-pulse",
    bg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    label: "In Progress",
  },
};

// ─── Animation variants ─────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.3 },
  },
};

// ─── Featured Projects Section ──────────────────────────────────────────────

export function FeaturedProjects({ className }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter projects: only featured, then by category
  const featuredProjects = projects.filter((p) => p.featured);
  const filteredProjects =
    activeCategory === "all"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  const openModal = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    // Delay clearing the project so exit animation plays with content intact
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  return (
    <section
      id="projects"
      className={cn("relative py-24 md:py-32", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section heading ──────────────────────────────────────────── */}
        <SectionHeading
          title="Featured Projects"
          subtitle="Projects focused on AI, Computer Vision, Full-Stack Development, and Data Analytics"          gradient
        />

        {/* ── Category filter tabs ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "group relative inline-flex items-center gap-2 rounded-full px-5 py-2.5",
                  "text-sm font-medium transition-all duration-300",
                  "border outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
                  isActive
                    ? [
                        "border-indigo-500/50 bg-indigo-500/15 text-white",
                        "shadow-md shadow-indigo-500/10",
                      ]
                    : [
                        "border-white/10 bg-white/5 text-gray-400",
                        "hover:border-white/20 hover:bg-white/10 hover:text-white",
                      ]
                )}
              >
                <Icon className="h-4 w-4" />
                {cat.label}
                {/* Active indicator dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryDot"
                    className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-indigo-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ── Project cards grid ───────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onExploreProject={() => openModal(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center text-gray-500"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>

      {/* ── Project Modal ──────────────────────────────────────────────── */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}

// ─── Project Card ───────────────────────────────────────────────────────────

function ProjectCard({ project, index, onExploreProject }) {
  const gradientIdx = index % cardGradients.length;
  const gradient = cardGradients[gradientIdx];
  const accent = cardAccents[gradientIdx];
  const status = statusStyles[project.status] || statusStyles.completed;
  const catColor = categoryColors[project.category] || categoryColors["ai-ml"];

  // Show first 3 metrics only
  const displayMetrics = (project.metrics || []).slice(0, 3);
  // Show first 5 tech items inline, rest as count
  const visibleTech = (project.techStack || []).slice(0, 7);
  const remainingTech = (project.techStack || []).length - visibleTech.length;

  return (
    <motion.div
      layout
      variants={cardVariants}
      exit="exit"
      className="group"
    >
      <GlassCard hover gradient className={cn(
        "flex h-full min-h-[420px] flex-col overflow-hidden",
        "transition-all duration-500",
        accent.border,
        accent.glow,
        "hover:shadow-xl",
      )}>
        {/* ── Gradient header area ──────────────────────────────────── */}
        <div
          className={cn(
            "relative flex min-h-[140px] flex-col justify-end",
            "bg-gradient-to-br p-6",
            gradient
          )}
        >
          {/* Abstract decorative pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-white/10 blur-xl" />
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          {/* Badges row */}
          <div className="relative mb-4 flex items-start justify-between">
            {/* Category badge */}
            <span
              className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-1",
                "text-xs font-medium backdrop-blur-sm",
                catColor
              )}
            >
              {project.category === "ai-ml"
                ? "AI / ML"
                : project.category === "full-stack"
                  ? "Full-Stack"
                  : project.category === "data-science"
                    ? "Data Science"
                    : "Research"}
            </span>

            {/* Status badge */}
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
                "text-xs font-medium backdrop-blur-sm",
                status.bg
              )}
            >
              <span className={cn("h-1.5 w-1.5 rounded-full", status.dot)} />
              {status.label}
            </span>
          </div>

          {/* Project title overlay */}
          <h3 className="relative text-xl font-bold text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>

        {/* ── Content area ──────────────────────────────────────────── */}
        <div className="flex flex-1 flex-col p-6">
          {/* Subtitle */}
          <p className="mb-2 text-sm font-medium text-indigo-400 dark:text-indigo-300">
            {project.subtitle}
          </p>

          <div
            className={cn(
              "mb-3 text-xs font-medium",
              project.category === "ai-ml" && "text-violet-400",
              project.category === "full-stack" && "text-cyan-400",
              project.category === "data-science" && "text-emerald-400"
            )}
          >
            {project.category === "ai-ml" &&
              "Computer Vision • Deep Learning • AI Systems"}

            {project.category === "full-stack" &&
              "Full-Stack • FastAPI • Authentication • AI Integration"}

            {project.category === "data-science" &&
              "Data Analytics • Forecasting • Geo-Spatial Analysis"}
          </div>

          {/* Description — clamp to 3 lines */}
          <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {project.description}
          </p>

          {/* ── Metrics row ──────────────────────────────────────── */}
          {displayMetrics.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {displayMetrics.map((metric, i) => (
                <span
                  key={i}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full",
                    "border border-white/10 bg-white/5 px-3 py-1.5",
                    "text-xs font-semibold text-white",
                    "transition-colors duration-200",
                    "hover:border-indigo-500/30 hover:bg-indigo-500/10"
                  )}
                  title={metric.description}
                >
                  <span className="text-indigo-400">{metric.value}</span>
                  <span className="text-gray-400">{metric.label}</span>
                </span>
              ))}
            </div>
          )}

          {/* ── Tech stack row ────────────────────────────────────── */}
          <div className="mb-6 flex flex-wrap gap-1.5">
            {visibleTech.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {remainingTech > 0 && (
              <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-xs text-gray-500">
                +{remainingTech} more
              </span>
            )}
          </div>

          {/* ── Spacer pushes footer to bottom ───────────────────── */}
          <div className="flex-1" />

          {/* ── Footer actions ─────────────────────────────────────── */}
          <div className="flex items-center gap-3 border-t border-white/5 pt-4">
            {/* View Case Study button */}
            <button
              onClick={onExploreProject}
              className={cn(
                "group/btn inline-flex items-center gap-2 rounded-lg",
                "bg-indigo-500/15 px-4 py-2.5 text-sm font-medium text-indigo-300",
                "border border-indigo-500/25 transition-all duration-300",
                "hover:bg-indigo-500/25 hover:border-indigo-500/40 hover:text-white",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              )}
            >
              Explore Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </button>

            {/* GitHub link */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className={cn(
                  "inline-flex items-center justify-center rounded-lg",
                  "h-10 w-10 border border-white/10 text-gray-400",
                  "transition-all duration-200",
                  "hover:border-white/25 hover:bg-white/5 hover:text-white"
                )}
              >
                <Github className="h-4 w-4" />
              </a>
            )}

            {/* Live demo link */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className={cn(
                  "inline-flex items-center justify-center rounded-lg",
                  "h-10 w-10 border border-white/10 text-gray-400",
                  "transition-all duration-200",
                  "hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400"
                )}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
