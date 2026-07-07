import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import RightPanel from '@/components/RightPanel';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    </div>
  );
}
