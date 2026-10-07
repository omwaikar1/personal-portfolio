import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Menu, X } from "lucide-react";
import { SiGithub } from "react-icons/si";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10 h-16 flex items-center justify-between gap-6">
        {/* Name + title */}
        <button
          onClick={() => scrollTo("about")}
          className="flex flex-col items-start shrink-0 text-left group"
        >
          <span className="text-base font-bold font-mono text-primary leading-tight group-hover:opacity-80 transition-opacity">
            Om Waikar
          </span>
          <span className="text-[11px] text-muted-foreground leading-tight hidden sm:block">
            MS CS @ Binghamton University
          </span>
        </button>

        {/* Desktop nav links — centre */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest rounded transition-colors ${
                activeSection === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
              {activeSection === id && (
                <motion.div
                  layoutId="nav-underline"
                  className="h-px bg-primary mt-0.5 w-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Social icons — right */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <span className="text-muted-foreground flex items-center gap-1 text-xs">
            <MapPin size={12} /> Binghamton, NY
          </span>
          <a
            href="https://github.com/omwaikar1"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/omwaikar"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:omwaikar1@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-3"
        >
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                scrollTo(id);
                setMenuOpen(false);
              }}
              className={`text-left text-sm font-bold uppercase tracking-widest py-1 ${
                activeSection === id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-border">
            <a
              href="https://github.com/omwaikar1"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/omwaikar"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:owaikar1@binghamton.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
