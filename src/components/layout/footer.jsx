"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Mail,
  ArrowUp,
  Heart,
  ExternalLink,
} from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/shared/brand-icons";

/* ─── Static Data ─── */
const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  // { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  // { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/JEELDONGA18",
    icon: Github,
    hoverColor: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jeel-hasmukhbhai-donga-226441290/",
    icon: Linkedin,
    hoverColor: "hover:text-[#0A66C2]",
  },
  {
    name: "Email",
    href: "mailto:jeeldonga18@gmail.com",
    icon: Mail,
    hoverColor: "hover:text-accent",
  },
];

/* ─── Smooth-scroll helper ─── */
function scrollToSection(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ─── Back to Top Button ─── */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "fixed bottom-8 right-8 z-40",
            "flex h-11 w-11 items-center justify-center rounded-full",
            "bg-primary text-primary-foreground",
            "shadow-lg shadow-primary/25",
            "transition-shadow duration-300",
            "hover:shadow-xl hover:shadow-primary/30",
            "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ════════════════════════════════════════════
   FOOTER — Main Export
   ════════════════════════════════════════════ */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative mt-auto">
        {/* ── Top gradient divider ── */}
        <div
          className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          aria-hidden="true"
        />

        {/* ── Main footer content ── */}
        <div className="container-custom py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* ─── Column 1: Name + Tagline + Socials ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {/* Logo + name */}
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#hero");
                }}
                className="group inline-flex items-center gap-3"
              >
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl",
                    "bg-gradient-to-br from-primary to-accent",
                    "text-sm font-bold text-white",
                    "shadow-md shadow-primary/20",
                    "transition-shadow duration-300",
                    "group-hover:shadow-lg group-hover:shadow-primary/30"
                  )}
                >
                  JD
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Jeel Donga
                  </h3>
                </div>
              </a>

              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                AI Engineer &amp; Full-Stack Developer building production-ready
                systems that turn research into real-world impact.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg",
                        "bg-secondary/60 border border-surface-glass-border",
                        "text-muted-foreground transition-all duration-200",
                        social.hoverColor,
                        "hover:bg-secondary hover:border-border"
                      )}
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* ─── Column 2: Quick Links ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={cn(
                        "group inline-flex items-center gap-1.5",
                        "text-sm text-muted-foreground",
                        "transition-colors duration-200",
                        "hover:text-primary"
                      )}
                    >
                      <span
                        className="h-px w-0 bg-primary transition-all duration-200 group-hover:w-3"
                        aria-hidden="true"
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ─── Column 3: CTA / Contact ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-5"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Let&apos;s Connect
              </h4>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Interested in collaborating on AI research, building innovative
                products, or just want to chat? I&apos;d love to hear from you.
              </p>

              {/* CTA button */}
              <motion.a
                href="mailto:jeeldonga18@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-5 py-2.5",
                  "bg-gradient-to-r from-primary to-accent",
                  "text-sm font-medium text-white",
                  "shadow-md shadow-primary/20",
                  "transition-shadow duration-300",
                  "hover:shadow-lg hover:shadow-primary/30"
                )}
              >
                <Mail className="h-4 w-4" />
                Get in Touch
                <ExternalLink className="h-3 w-3 opacity-60" />
              </motion.a>

              {/* Status indicator */}
              <div className="flex items-center gap-2 pt-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs text-muted-foreground">
                  Available for opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-border">
          <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Jeel Donga. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              Built with
              <Heart className="h-3 w-3 text-red-400 fill-red-400" />
              using
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground/80 underline-offset-2 hover:underline hover:text-primary transition-colors duration-200"
              >
                Next.js
              </a>
              &amp;
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground/80 underline-offset-2 hover:underline hover:text-primary transition-colors duration-200"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Global back-to-top button */}
      <BackToTop />
    </>
  );
}

export default Footer;
