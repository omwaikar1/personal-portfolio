import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

type Tab = 'swe' | 'aiml';

interface Project {
  title: string;
  date: string;
  type: string;
  bullets: string[];
  tags: string[];
  github?: string;
  link?: string;
  accent: string;
}

const SWE_PROJECTS: Project[] = [
  {
    title: 'Multi-Layered Security for Linux Auth',
    date: 'Nov — Dec 2024',
    type: 'Personal Project',
    bullets: [
      'Engineered a 2FA system with Google Authenticator and advanced PAM features — rate limiting, idle session detection, password strength enforcement, and time-based access control.',
      'Implemented RBAC mechanisms and automated session management scripts, reducing inactive session misuse by an estimated 25–40%.'
    ],
    tags: ['Linux', 'PAM', 'Bash', 'Google Authenticator'],
    accent: '#00cccc'
  }
];

const AIML_PROJECTS: Project[] = [
  {
    title: 'Optimization of Batch Normalization in Deep Residual Networks',
    date: 'Nov 2025',
    type: 'Academic Research',
    bullets: [
      'Reproduced CVPR 2022 findings on Estimation Shift in Batch Normalization; designed ablation studies on the XBNBlock architecture evaluating Layer Norm and Late-Stage Placement via a modular PyTorch pipeline.',
      'Achieved a 4.69% accuracy improvement over baseline on ImageNette.'
    ],
    tags: ['Python', 'PyTorch', 'Google Colab', 'Deep Learning', 'ResNets'],
    accent: '#a78bfa'
  },
  {
    title: 'Cancer Chrono Predictor',
    date: 'Oct — Nov 2023',
    type: 'Personal Project',
    bullets: [
      'Built a survival prediction tool integrating medical, genetic, and lifestyle datasets across 1,000+ patient records using Random Forest, KNN, and Naive Bayes classifiers.',
      'Achieved 79% accuracy on clinical data and 67% on biological datasets through cross-validation and hyperparameter tuning.'
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Random Forest'],
    accent: '#a78bfa'
  }
];

export default function TabToggle() {
  const [activeTab, setActiveTab] = useState<Tab>('swe');

  const projects = activeTab === 'swe' ? SWE_PROJECTS : AIML_PROJECTS;

  return (
    <div className="min-h-screen bg-[#060c1a] text-slate-300 p-8 md:p-16 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-4">
          <h2 className="text-3xl font-bold text-white mb-6 md:mb-0">
            <span className="text-[#00cccc] font-mono text-xl mr-2">02.</span>
            Featured Projects
          </h2>

          <div className="flex space-x-8 font-mono text-sm">
            <button
              onClick={() => setActiveTab('swe')}
              className={`relative pb-4 transition-colors ${
                activeTab === 'swe' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              Software Engineering
              {activeTab === 'swe' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#00cccc]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab('aiml')}
              className={`relative pb-4 transition-colors ${
                activeTab === 'aiml' ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              AI / ML
              {activeTab === 'aiml' && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#a78bfa]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-12"
            >
              {projects.map((project, idx) => (
                <div key={idx} className="group flex flex-col gap-4 p-6 rounded-xl hover:bg-slate-800/30 transition-all duration-300 border border-transparent hover:border-slate-800/50">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-3 text-slate-400">
                        <a href="#" className="hover:text-white transition-colors" aria-label="GitHub Repository">
                          <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="External Link">
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-xs mt-2 sm:mt-0">
                      <span className="text-slate-400">{project.type}</span>
                      <span className="text-slate-600 hidden sm:inline">•</span>
                      <span style={{ color: project.accent }}>{project.date}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mt-2">
                    {project.bullets.map((bullet, bIdx) => (
                      <p key={bIdx} className="text-sm leading-relaxed text-slate-400">
                        <span style={{ color: project.accent }} className="mr-3 opacity-75 font-mono">▹</span>
                        {bullet}
                      </p>
                    ))}
                  </div>

                  <ul className="flex flex-wrap gap-3 font-mono text-xs mt-4">
                    {project.tags.map((tag, tIdx) => (
                      <li key={tIdx} style={{ color: project.accent }} className="bg-[#060c1a] px-3 py-1.5 rounded-full border border-slate-800/80 shadow-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
