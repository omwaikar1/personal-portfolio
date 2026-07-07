import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

export default function LeftPanel() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'education', 'skills'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-mono text-primary"
        >
          Om Anant Waikar
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl"
        >
          Software Engineer & CS Graduate Student
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-sm leading-normal text-muted-foreground"
        >
          I build precise, scalable systems and data-driven applications with a focus on machine learning and robust engineering.
        </motion.p>
        <nav className="nav hidden lg:block mt-16">
          <ul className="mt-8 w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`group flex items-center py-3 ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none ${activeSection === item.id ? 'w-16 bg-primary' : 'w-8 bg-muted-foreground'}`}></span>
                  <span className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-foreground group-focus-visible:text-foreground ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="ml-1 mt-8 flex items-center gap-5"
      >
        <li className="text-muted-foreground flex items-center gap-2 text-sm mr-4">
          <MapPin size={16} /> Binghamton, NY
        </li>
        <li>
          <a href="https://github.com/omwaikar" target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">GitHub</span>
            <SiGithub className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/omwaikar" target="_blank" rel="noreferrer" className="block text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="tel:6073520760" className="block text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">Phone</span>
            <Phone className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a href="mailto:owaikar1@binghamton.edu" className="block text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </motion.ul>
    </header>
  );
}