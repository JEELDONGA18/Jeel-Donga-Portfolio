"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { researchProjects, researchMindset } from "@/data/research";
import {
  Search,
  BookOpen,
  Lightbulb,
  FlaskConical,
  Code,
  BarChart3,
  RefreshCw,
  FileText,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Search,
  BookOpen,
  Lightbulb,
  FlaskConical,
  Code,
  BarChart3,
  RefreshCw,
  FileText,
};

/* ---- Animated circular progress ring ---- */
function MetricRing({ percentage, label, value, description, delay = 0 }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative h-36 w-36">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
          {/* Background ring */}
          <circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            className="text-muted/50"
          />
          {/* Animated progress ring */}
          <motion.circle
            cx="60" cy="60" r={radius}
            fill="none"
            stroke="url(#metricGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="metricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--accent)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{value}</span>
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</span>
        </div>
      </div>
      <p className="max-w-[180px] text-center text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

export function ResearchSection() {
  const research = researchProjects[0];

  return (
    <section id="research" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Research"
          subtitle="From hypothesis to publication — rigorous experimentation driving real impact"
          align="center"
        />

        {/* ─── Main Research Project ─── */}
        <ScrollReveal direction="up">
          <GlassCard className="p-6 md:p-10 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-3 py-1 text-xs font-medium text-amber-400 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-slow" />
                  {research.status}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {research.title}
                </h3>
              </div>
            </div>

            {/* Abstract */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {research.abstract}
            </p>

            {/* Models Comparison */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Models Benchmarked
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {research.models.map((model) => (
                  <div
                    key={model.name}
                    className="rounded-xl bg-muted/30 border border-border p-4"
                  >
                    <h5 className="text-sm font-semibold text-foreground">{model.name}</h5>
                    <p className="text-xs text-muted-foreground mt-1">{model.description}</p>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Dice Score</span>
                        <span className="font-mono font-medium text-foreground">{model.diceScore}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(model.diceScore / 0.847) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation Metrics — animated rings */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
                Key Metrics
              </h4>
              <div className="flex flex-wrap justify-center gap-10">
                {research.evaluationMetrics.map((metric, i) => (
                  <MetricRing
                    key={metric.name}
                    percentage={metric.percentage}
                    label={metric.name}
                    value={metric.value}
                    description={metric.description}
                    delay={i * 0.2}
                  />
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                Key Contributions
              </h4>
              <ul className="space-y-2">
                {research.contributions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {research.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* ─── Research Mindset / Workflow ─── */}
        <div className="mt-20">
          <ScrollReveal direction="up">
            <h3 className="text-center text-lg font-semibold text-foreground mb-2">
              <GradientText gradient="accent">Research Workflow</GradientText>
            </h3>
            <p className="text-center text-sm text-muted-foreground mb-10 max-w-lg mx-auto">
              {researchMindset.description}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {researchMindset.steps.map((step, i) => {
              const Icon = iconMap[step.icon] || Search;
              return (
                <ScrollReveal key={i} direction="up" delay={i * 0.08}>
                  <div className="group relative flex flex-col items-center text-center p-4 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-colors">
                    {/* Step number */}
                    <span className="absolute -top-2.5 right-3 bg-primary/10 text-primary text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {i + 1}
                    </span>
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
