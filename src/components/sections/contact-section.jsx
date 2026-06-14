"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/shared/glass-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/brand-icons";

const contactInfo = [
  { icon: Mail, label: "Email", value: "jeeldonga18@gmail.com", href: "mailto:jeeldonga18@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/JEELDONGA18", href: "https://github.com/JEELDONGA18" },
  { icon: Linkedin, label: "LinkedIn", value: "www.linkedin.com/in/jeel-hasmukhbhai-donga-226441290/", href: "https://www.linkedin.com/in/jeel-hasmukhbhai-donga-226441290/" },
  { icon: MapPin, label: "Location", value: "Gujarat, India", href: null },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    // Simulate sending
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Let's Connect"
          subtitle="Have a project idea, research collaboration, or just want to say hello?"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              return (
                <ScrollReveal key={item.label} direction="left" delay={index * 0.1}>
                  <Wrapper
                    {...(item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <GlassCard hover className="p-4 flex items-center gap-4 cursor-pointer">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    </GlassCard>
                  </Wrapper>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right">
              <GlassCard className="p-6">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", damping: 15 }}
                      >
                        <CheckCircle className="h-16 w-16 text-emerald-400 mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-sm text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5">Name *</label>
                          <input
                            id="name" name="name" type="text" value={form.name} onChange={handleChange}
                            className={cn(
                              "w-full rounded-lg border bg-muted/30 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors",
                              errors.name ? "border-red-500" : "border-border"
                            )}
                            placeholder="Your name"
                          />
                          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5">Email *</label>
                          <input
                            id="email" name="email" type="email" value={form.email} onChange={handleChange}
                            className={cn(
                              "w-full rounded-lg border bg-muted/30 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors",
                              errors.email ? "border-red-500" : "border-border"
                            )}
                            placeholder="your@email.com"
                          />
                          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-xs font-medium text-muted-foreground mb-1.5">Subject</label>
                        <input
                          id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-muted/30 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
                          placeholder="Project collaboration, research inquiry, etc."
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5">Message *</label>
                        <textarea
                          id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                          className={cn(
                            "w-full rounded-lg border bg-muted/30 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors resize-none",
                            errors.message ? "border-red-500" : "border-border"
                          )}
                          placeholder="Tell me about your project or idea..."
                        />
                        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                      </div>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-4 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
