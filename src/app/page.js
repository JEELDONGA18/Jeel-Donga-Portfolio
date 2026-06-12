import dynamic from "next/dynamic";

// Static imports for above-the-fold sections (critical rendering path)
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";

// Dynamic imports for below-the-fold sections (code-split for performance)
const BuildJourney = dynamic(
  () => import("@/components/sections/build-journey").then((m) => ({ default: m.BuildJourney })),
  { ssr: true }
);

const CurrentFocus = dynamic(
  () => import("@/components/sections/current-focus").then((m) => ({ default: m.CurrentFocus })),
  { ssr: true }
);

const RecruiterQuickView = dynamic(
  () => import("@/components/sections/recruiter-quickview").then((m) => ({ default: m.RecruiterQuickView })),
  { ssr: true }
);

const FeaturedProjects = dynamic(
  () => import("@/components/sections/projects").then((m) => ({ default: m.FeaturedProjects })),
  { ssr: true }
);

const ResearchSection = dynamic(
  () => import("@/components/sections/research").then((m) => ({ default: m.ResearchSection })),
  { ssr: true }
);

const ExperienceSection = dynamic(
  () => import("@/components/sections/experience").then((m) => ({ default: m.ExperienceSection })),
  { ssr: true }
);

const SkillsSection = dynamic(
  () => import("@/components/sections/skills").then((m) => ({ default: m.SkillsSection })),
  { ssr: true }
);

const AchievementsSection = dynamic(
  () => import("@/components/sections/achievements").then((m) => ({ default: m.AchievementsSection })),
  { ssr: true }
);

const HackathonsSection = dynamic(
  () => import("@/components/sections/hackathons").then((m) => ({ default: m.HackathonsSection })),
  { ssr: true }
);

const BlogPreview = dynamic(
  () => import("@/components/sections/blog-preview").then((m) => ({ default: m.BlogPreview })),
  { ssr: true }
);

const KnowledgeBase = dynamic(
  () => import("@/components/sections/knowledge-base").then((m) => ({ default: m.KnowledgeBase })),
  { ssr: true }
);

const ResumeSection = dynamic(
  () => import("@/components/sections/resume-section").then((m) => ({ default: m.ResumeSection })),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import("@/components/sections/contact-section").then((m) => ({ default: m.ContactSection })),
  { ssr: true }
);

export default function HomePage() {
  return (
    <>
      {/* ── Hero: Full-screen immersive landing ── */}
      <HeroSection />

      {/* ── About: Personal story & philosophy ── */}
      <AboutSection />

      {/* ── Build Journey: Timeline from learning to production ── */}
      <BuildJourney />

      {/* ── Current Focus: Active areas of interest ── */}
      <CurrentFocus />

      {/* ── Recruiter Quick View: At-a-glance summary card ── */}
      <RecruiterQuickView />

      {/* ── Featured Projects: Centerpiece case studies (40% weight) ── */}
      <FeaturedProjects />

      {/* ── Research: Academic work + research mindset (20% weight) ── */}
      <ResearchSection />

      {/* ── Experience: Professional timeline ── */}
      <ExperienceSection />

      {/* ── Skills: Proof-based, not percentage bars ── */}
      <SkillsSection />

      {/* ── Achievements: Grants, awards, recognition (15% weight) ── */}
      <AchievementsSection />

      {/* ── Hackathons: Competition journey ── */}
      <HackathonsSection />

      {/* ── Blog: Latest articles preview ── */}
      <BlogPreview />

      {/* ── Knowledge Base: Guided Q&A explorer ── */}
      <KnowledgeBase />

      {/* ── Resume: Download options ── */}
      <ResumeSection />

      {/* ── Contact: Form & social links ── */}
      <ContactSection />
    </>
  );
}
