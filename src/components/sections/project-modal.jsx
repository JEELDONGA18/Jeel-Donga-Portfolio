"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { TechBadge } from "@/components/shared/tech-badge";
import {
  X,
  ExternalLink,
  AlertCircle,
  Lightbulb,
  CheckCircle,
  Layers,
  Target,
  TrendingUp,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { GithubIcon as Github } from "@/components/shared/brand-icons";
import Image from "next/image";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "metrics", label: "Metrics" },
];

export function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  // Reset tab when project changes
  useEffect(() => {
    if (project) setActiveTab("overview");
  }, [project]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm p-4 pt-12 md:pt-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl rounded-2xl border border-border bg-card shadow-2xl mb-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Header ─────────────────────────────────────────────── */}
            <div className="flex items-start justify-between p-6 pb-4 border-b border-border">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">{project.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* ── Tabs ───────────────────────────────────────────────── */}
            <div className="flex gap-1 px-6 pt-4 border-b border-border overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap",
                    activeTab === tab.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeModalTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* ── Tab Content ────────────────────────────────────────── */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "overview" && <OverviewTab project={project} />}
                  {activeTab === "challenges" && <ChallengesTab project={project} />}
                  {activeTab === "metrics" && <MetricsTab project={project} />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Footer ─────────────────────────────────────────────── */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 pt-4 border-t border-border">
              <div className="flex flex-wrap gap-1.5">
                {(project.techStack || []).slice(0, 8).map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Tab Components ──────────────────────────────────────────────────────── */

function OverviewTab({ project }) {
  return (
    <div className="space-y-6">
      {/* Problem */}
      <div className="flex gap-3">
        <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <AlertCircle className="h-4 w-4 text-red-400" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1">Problem</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>
      </div>

      {/* Solution */}
      <div className="flex gap-3">
        <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <CheckCircle className="h-4 w-4 text-emerald-400" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Key Features */}
      {project.features && (
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <div key={i} className="p-3 rounded-lg bg-muted/20 border border-border">
                <h5 className="text-sm font-medium text-foreground mb-0.5">{feature.title}</h5>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-3">
          Screenshots
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.screenshots.map((shot, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />

              <div className="p-3 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  {shot.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
    </div>
  );
}

function ChallengesTab({ project }) {
  return (
    <div className="space-y-6">
      {/* Challenges */}
      {project.challenges && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-foreground">Challenges & Solutions</h4>
          {project.challenges.map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-muted/20 border border-border">
              <div className="flex items-start gap-2 mb-2">
                <Target className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm font-medium text-foreground">{item.challenge}</p>
              </div>
              <div className="flex items-start gap-2 ml-6">
                <ArrowRight className="h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MetricsTab({ project }) {
  if (!project.metrics || project.metrics.length === 0) {
    return <p className="text-sm text-muted-foreground">Metrics coming soon.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {project.metrics.map((metric, i) => (
        <div key={i} className="p-5 rounded-xl bg-muted/20 border border-border text-center">
          <TrendingUp className="h-5 w-5 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
          <div className="text-sm font-medium text-foreground">{metric.label}</div>
          <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
        </div>
      ))}
    </div>
  );
}