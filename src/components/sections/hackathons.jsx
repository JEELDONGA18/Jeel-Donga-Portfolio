"use client";

import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { TechBadge } from "@/components/shared/tech-badge";
import { Calendar, Users, Trophy, MapPin } from "lucide-react";

const hackathons = [
  {
    id: 1,
    name: "Smart India Hackathon 2024",
    organizer: "Government of India",
    date: "Dec 2024",
    location: "National Level",
    teamSize: 6,
    problem: "Building an intelligent document management system for government organizations",
    solution: "AI-powered document intelligence platform with semantic search and RAG-based Q&A capabilities",
    technologies: ["Python", "LangChain", "FastAPI", "React", "Pinecone"],
    outcome: "Finalist",
    outcomeColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    linkedProject: "smart-doc-ai",
  },
  {
    id: 2,
    name: "DDU Innovation Challenge 2024",
    organizer: "Dharmsinh Desai University",
    date: "Oct 2024",
    location: "University Level",
    teamSize: 4,
    problem: "Enhancing public transportation safety using AI-driven surveillance",
    solution: "Real-time computer vision system for anomaly detection and fraud prevention in transit",
    technologies: ["Python", "YOLOv8", "OpenCV", "FastAPI", "React"],
    outcome: "Winner 🏆",
    outcomeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    linkedProject: "transitguard",
  },
  {
    id: 3,
    name: "Google Solution Challenge 2024",
    organizer: "Google Developer Student Clubs",
    date: "Mar 2024",
    location: "Global",
    teamSize: 4,
    problem: "Improving healthcare accessibility and patient monitoring for kidney disease patients",
    solution: "AI-powered platform with predictive models for dialysis scheduling and patient risk assessment",
    technologies: ["Python", "TensorFlow", "Flask", "React", "MongoDB"],
    outcome: "Top 100 Globally 🌍",
    outcomeColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    linkedProject: "kidney-healthcare",
  },
  {
    id: 4,
    name: "HackTheChain 3.0",
    organizer: "IIIT Surat",
    date: "Jan 2024",
    location: "Regional Level",
    teamSize: 4,
    problem: "Automating legal document analysis for faster case resolution",
    solution: "AI-powered legal document analyzer using NLP for contract review and clause extraction",
    technologies: ["Python", "LangChain", "FastAPI", "Next.js"],
    outcome: "Runner Up 🥈",
    outcomeColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
  {
    id: 5,
    name: "Internal Hackathon DDU",
    organizer: "Dharmsinh Desai University",
    date: "Sep 2023",
    location: "University Level",
    teamSize: 3,
    problem: "Smart campus navigation and facility management",
    solution: "Interactive campus navigation app with real-time facility tracking and event management",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API"],
    outcome: "Winner 🏆",
    outcomeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
];

export function HackathonsSection() {
  return (
    <section id="hackathons" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Hackathon Journey"
          subtitle="Building solutions under pressure — from ideation to demo in hours"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {hackathons.map((hack, index) => (
            <ScrollReveal key={hack.id} direction="up" delay={index * 0.1}>
              <GlassCard hover className="p-5 h-full">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-base font-bold text-foreground leading-tight">{hack.name}</h3>
                  <span className={cn(
                    "text-[10px] px-2 py-0.5 rounded-full font-semibold border whitespace-nowrap",
                    hack.outcomeColor
                  )}>
                    {hack.outcome}
                  </span>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Trophy className="h-3 w-3" />
                    {hack.organizer}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {hack.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    Team of {hack.teamSize}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {hack.location}
                  </span>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-red-400">Problem</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{hack.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400">Solution</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{hack.solution}</p>
                  </div>
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {hack.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
