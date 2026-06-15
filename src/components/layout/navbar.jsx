"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  Command,
} from "lucide-react";

/* ─── Navigation Data ─── */
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

/* ─── Smooth-scroll helper ─── */
function scrollToSection(href, callback) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  callback?.();
}

/* ─── Command Palette Trigger ─── */
function CommandButton({ onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "hidden sm:flex items-center gap-1.5 rounded-lg px-2.5 py-1.5",
        "bg-secondary/60 hover:bg-secondary",
        "border border-surface-glass-border",
        "text-muted-foreground hover:text-foreground",
        "text-xs font-mono transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-ring"
      )}
      aria-label="Open command palette"
      onClick={onClick}
    >
      <Command className="h-3 w-3" />
      <span>K</span>
    </motion.button>
  );
}

/* ─── Mobile Nav Overlay ─── */
function MobileMenu({ isOpen, onClose, activeSection }) {
  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={cn(
              "fixed right-0 top-0 z-50 h-full w-[min(85vw,320px)]",
              "bg-card/95 backdrop-blur-2xl",
              "border-l border-border",
              "flex flex-col",
              "shadow-2xl shadow-black/20"
            )}
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-sm font-medium text-muted-foreground">
                Navigation
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/80 hover:bg-secondary text-foreground transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Links */}
            <div className="flex flex-1 flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href, onClose);
                    }}
                    className={cn(
                      "flex items-center rounded-lg px-4 py-3",
                      "text-base font-medium transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                    )}
                  >
                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.span
                        layoutId="mobile-active-dot"
                        className="mr-3 h-1.5 w-1.5 rounded-full bg-primary"
                      />
                    )}
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

/* ════════════════════════════════════════════
   NAVBAR — Main Export
   ════════════════════════════════════════════ */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  
  /* ── Command palette shortcut ── */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section tracking via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-20% 0px -75% 0px", // triggers when section is near top
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500 ease-out"
        )}
      >
        {/* Navbar container */}
        <nav
          className={cn(
            "mx-4 sm:mx-6 lg:mx-auto max-w-6xl rounded-2xl",
            // Glass background — always visible
            "glass transition-all duration-500",
            scrolled
              ? "mt-3 bg-surface-glass/90 shadow-lg shadow-black/5 border-surface-glass-border"
              : "mt-4 bg-surface-glass/70 shadow-md shadow-black/3 border-surface-glass-border",
            // Padding
            scrolled ? "px-4 py-2.5 sm:px-6" : "px-5 py-3 sm:px-8"
          )}
        >
          <div className="flex items-center justify-between">
            {/* ── Logo / Monogram ── */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#hero");
              }}
              className="group relative flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* JD monogram */}
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg",
                  "bg-gradient-to-br from-primary to-accent",
                  "text-sm font-bold text-white",
                  "shadow-md shadow-primary/20",
                  "transition-shadow duration-300",
                  "group-hover:shadow-lg group-hover:shadow-primary/30"
                )}
              >
                JD
              </span>
              {/* Full name — visible on sm+ */}
              <span className="hidden sm:block text-sm font-semibold text-foreground tracking-tight">
                Jeel Donga
              </span>
            </motion.a>

            {/* ── Desktop navigation links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => {
                const isActive =
                  activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.05,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={cn(
                      "relative px-3 py-1.5 text-[13px] font-medium rounded-lg",
                      "transition-colors duration-200",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.name}

                    {/* Active underline indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* ── Right side actions ── */}
            <div className="flex items-center gap-2">
              {/* Command palette trigger — desktop only */}
              <CommandButton onClick={() => setCommandOpen(true)} />

              {/* Mobile hamburger */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "flex lg:hidden h-9 w-9 items-center justify-center rounded-lg",
                  "bg-secondary/60 hover:bg-secondary",
                  "border border-surface-glass-border",
                  "text-foreground transition-colors duration-200"
                )}
                aria-label="Open navigation menu"
              >
                <Menu className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />

      {/* Command palette overlay */}
      <AnimatePresence>
        {commandOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
              onClick={() => setCommandOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="fixed left-1/2 top-24 z-[101] w-full max-w-lg -translate-x-1/2 rounded-2xl border border-border bg-card p-4 shadow-2xl"
            >
              <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
                Quick Navigation
              </h3>

              <div className="space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      scrollToSection(link.href);
                      setCommandOpen(false);
                    }}
                    className="w-full rounded-lg px-4 py-3 text-left hover:bg-secondary"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
