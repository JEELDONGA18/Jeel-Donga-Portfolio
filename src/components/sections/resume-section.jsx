"use client";

import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { Download, ExternalLink, FileText, Calendar } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Resume"
          subtitle="Get a comprehensive overview of my experience, skills, and achievements"
          align="center"
        />

        <ScrollReveal direction="up">
          <div className="max-w-2xl mx-auto">
            <GlassCard gradient className="p-8 md:p-10 text-center">
              {/* Icon */}
              <div className="mx-auto mb-6 h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <FileText className="h-10 w-10 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">Download My Resume</h3>
              <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
                A detailed overview of my AI engineering experience, research contributions,
                technical skills, and project portfolio.
              </p>

              {/* Download buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <MagneticButton variant="primary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  ATS Resume
                </MagneticButton>
                <MagneticButton variant="secondary" href="/resume-research.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Research Resume
                </MagneticButton>
                <MagneticButton variant="ghost" href="/resume" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  View Online
                </MagneticButton>
              </div>

              {/* Last updated */}
              <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                Last updated: June 2025
              </p>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
