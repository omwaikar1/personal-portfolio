import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import RightPanel from '@/components/RightPanel';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    handleScroll(); // set correct state on mount / history restore
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'instant' : 'smooth' });

  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground relative">
      {/* Cursor gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.04), transparent 80%)`
        }}
      />

      <Navbar />

      {/* Content — full width, padded below navbar */}
      <main className="mx-auto max-w-5xl px-6 md:px-10 pt-24 pb-20 relative z-10">
        <RightPanel />
      </main>

      {/* Back to top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-10 h-10 rounded-full border border-primary/40 bg-background/80 backdrop-blur-sm text-primary shadow-lg hover:bg-primary/10 hover:border-primary transition-all"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
