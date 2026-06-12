"use client";

import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Building Production RAG Systems: Lessons from Smart Doc AI",
    excerpt: "A deep dive into the architecture decisions, pitfalls, and optimizations involved in building a real-world RAG pipeline with LangChain, Pinecone, and GPT-4.",
    date: "2025-05-15",
    readingTime: "12 min read",
    tags: ["RAG", "LangChain", "AI Engineering"],
    slug: "building-production-rag-systems",
  },
  {
    id: 2,
    title: "CNN vs Transformer for Medical Image Segmentation",
    excerpt: "Comparing U-Net, DeepLabV3+, Swin U-Net, and Swin UNETR architectures on laparoscopic datasets — what works, what doesn't, and why.",
    date: "2025-04-22",
    readingTime: "15 min read",
    tags: ["Deep Learning", "Research", "Computer Vision"],
    slug: "cnn-vs-transformer-segmentation",
  },
  {
    id: 3,
    title: "From Hackathon to Production: Shipping TransitGuard",
    excerpt: "How we took a hackathon prototype using YOLOv8 and turned it into a deployable public safety system with real-time inference capabilities.",
    date: "2025-03-10",
    readingTime: "10 min read",
    tags: ["Computer Vision", "Full-Stack", "DevOps"],
    slug: "hackathon-to-production-transitguard",
  },
];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogPreview() {
  return (
    <section id="blog" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Blog & Insights"
          subtitle="Technical deep-dives, research notes, and engineering lessons"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} direction="up" delay={index * 0.1}>
              <GlassCard hover className="p-5 h-full flex flex-col group cursor-pointer">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-8">
          <a
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            View All Posts <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
