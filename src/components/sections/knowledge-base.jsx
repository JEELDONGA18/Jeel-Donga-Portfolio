"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { suggestedQuestions, getAnswer, categories } from "@/data/knowledgeBase";
import {
  Folder,
  BookOpen,
  Wrench,
  Briefcase,
  Trophy,
  ArrowLeft,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const categoryIcons = {
  Projects: Folder,
  Research: BookOpen,
  Skills: Wrench,
  Experience: Briefcase,
  Achievements: Trophy,
};

const categoryColors = {
  Projects: "from-violet-500 to-purple-600",
  Research: "from-cyan-500 to-blue-600",
  Skills: "from-emerald-500 to-teal-600",
  Experience: "from-orange-500 to-amber-600",
  Achievements: "from-rose-500 to-pink-600",
};

export function KnowledgeBase() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);

  function handleCategoryClick(category) {
    setActiveCategory(category);
    setSelectedQuestion(null);
    setAnswer(null);
  }

  function handleQuestionClick(question) {
    setSelectedQuestion(question);
    setAnswer(getAnswer(question));
  }

  function handleBack() {
    if (answer) {
      setAnswer(null);
      setSelectedQuestion(null);
    } else if (activeCategory) {
      setActiveCategory(null);
    }
  }

  return (
    <section id="knowledge-base" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Explore My Work"
          subtitle="Ask anything about my projects, research, and experience"
          align="center"
        />

        <ScrollReveal direction="up">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-6 md:p-8 min-h-[400px]">
              {/* Header bar */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                {(activeCategory || answer) && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back
                  </button>
                )}
                <div className="flex items-center gap-2 ml-auto">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">AI Knowledge Base</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* Level 1: Category selection */}
                {!activeCategory && (
                  <motion.div
                    key="categories"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-sm text-muted-foreground mb-6 text-center">
                      Select a category to explore
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {categories.map((category) => {
                        const Icon = categoryIcons[category] || Folder;
                        return (
                          <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                          >
                            <div className={cn(
                              "h-10 w-10 rounded-lg bg-gradient-to-br flex items-center justify-center",
                              categoryColors[category]
                            )}>
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xs font-medium text-foreground">{category}</span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Level 2: Questions for selected category */}
                {activeCategory && !answer && (
                  <motion.div
                    key="questions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {(() => {
                        const Icon = categoryIcons[activeCategory] || Folder;
                        return <Icon className="h-4 w-4 text-primary" />;
                      })()}
                      <span className="text-sm font-semibold text-foreground">{activeCategory}</span>
                    </div>
                    <div className="space-y-2">
                      {suggestedQuestions[activeCategory]?.map((question, i) => (
                        <button
                          key={i}
                          onClick={() => handleQuestionClick(question)}
                          className="w-full text-left p-3 rounded-lg border border-border bg-card/30 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                        >
                          <div className="flex items-start gap-3">
                            <MessageSquare className="h-4 w-4 text-muted-foreground group-hover:text-primary mt-0.5 flex-shrink-0 transition-colors" />
                            <span className="text-sm text-foreground">{question}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Level 3: Answer */}
                {answer && (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-sm font-medium text-foreground flex items-start gap-2">
                        <MessageSquare className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {selectedQuestion}
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/20">
                      <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
                    </div>
                    <button
                      onClick={handleBack}
                      className="mt-4 text-xs text-primary hover:underline"
                    >
                      ← Ask another question
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
