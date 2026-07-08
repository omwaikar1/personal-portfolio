import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const SWE_PROJECTS = [
  {
    title: "Multi-Layered Security for Linux Auth",
    date: "Nov — Dec 2024",
    type: "Personal Project",
    bullets: [
      "Engineered a 2FA system with Google Authenticator and advanced PAM features — rate limiting, idle session detection, password strength enforcement, and time-based access control.",
      "Implemented RBAC mechanisms and automated session management scripts, reducing inactive session misuse by an estimated 25–40%."
    ],
    tags: ["Linux", "PAM", "Bash", "Google Authenticator"]
  }
];

const AIML_PROJECTS = [
  {
    title: "Optimization of Batch Normalization in Deep Residual Networks",
    date: "Nov 2025",
    type: "Academic Research",
    bullets: [
      "Reproduced CVPR 2022 findings on Estimation Shift in Batch Normalization; designed ablation studies on the XBNBlock architecture evaluating Layer Norm and Late-Stage Placement via a modular PyTorch pipeline.",
      "Achieved a 4.69% accuracy improvement over baseline on ImageNette."
    ],
    tags: ["Python", "PyTorch", "Google Colab", "Deep Learning", "ResNets"]
  },
  {
    title: "Cancer Chrono Predictor",
    date: "Oct — Nov 2023",
    type: "Personal Project",
    bullets: [
      "Built a survival prediction tool integrating medical, genetic, and lifestyle datasets across 1,000+ patient records using Random Forest, KNN, and Naive Bayes classifiers.",
      "Achieved 79% accuracy on clinical data and 67% on biological datasets through cross-validation and hyperparameter tuning."
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Random Forest"]
  }
];

export default function ColoredBorder() {
  return (
    <div className="min-h-screen bg-[#060c1a] text-slate-300 p-8 md:p-16 font-sans">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Projects</h2>
          <p className="font-mono text-sm text-slate-500 mt-3">Selected technical work.</p>
        </header>

        {/* SWE Group */}
        <div className="relative border-l-4 border-[#00cccc] pl-6 md:pl-8 py-6 rounded-r-xl bg-[#00cccc]/[0.02] shadow-[inset_0_1px_0_0_rgba(0,204,204,0.05)] border-t border-r border-b border-[#00cccc]/10">
          {/* Soft background glow */}
          <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-[#00cccc]/[0.07] to-transparent pointer-events-none" />
          
          <div className="font-mono text-xs font-semibold text-[#00cccc] uppercase tracking-widest mb-10 flex items-center gap-3">
            <span className="w-4 h-[1px] bg-[#00cccc]/50"></span>
            Software Engineering
          </div>
          
          <div className="space-y-12">
            {SWE_PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} accentColor="#00cccc" accentBg="bg-[#00cccc]/10" accentBorder="border-[#00cccc]/20" />
            ))}
          </div>
        </div>

        {/* AI/ML Group */}
        <div className="relative border-l-4 border-[#a78bfa] pl-6 md:pl-8 py-6 rounded-r-xl bg-[#a78bfa]/[0.02] shadow-[inset_0_1px_0_0_rgba(167,139,250,0.05)] border-t border-r border-b border-[#a78bfa]/10">
          {/* Soft background glow */}
          <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-[#a78bfa]/[0.07] to-transparent pointer-events-none" />
          
          <div className="font-mono text-xs font-semibold text-[#a78bfa] uppercase tracking-widest mb-10 flex items-center gap-3">
            <span className="w-4 h-[1px] bg-[#a78bfa]/50"></span>
            Artificial Intelligence & Machine Learning
          </div>
          
          <div className="space-y-12">
            {AIML_PROJECTS.map((project, idx) => (
              <ProjectCard key={idx} project={project} accentColor="#a78bfa" accentBg="bg-[#a78bfa]/10" accentBorder="border-[#a78bfa]/20" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function ProjectCard({ project, accentColor, accentBg, accentBorder }: { project: any, accentColor: string, accentBg: string, accentBorder: string }) {
  return (
    <div className="group relative relative z-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-3">
        <h3 className="text-xl md:text-2xl font-medium text-slate-100 flex items-center gap-3">
          {project.title}
          <div className="flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </h3>
        <div className="font-mono text-sm text-slate-400 shrink-0">
          {project.date}
        </div>
      </div>
      
      <div className="font-mono text-xs text-slate-500 mb-5 uppercase tracking-wider">
        {project.type}
      </div>
      
      <ul className="space-y-3 mb-6">
        {project.bullets.map((bullet: string, i: number) => (
          <li key={i} className="text-slate-300 leading-relaxed text-sm md:text-base flex gap-3">
            <span style={{ color: accentColor }} className="mt-1 opacity-70 text-xs">▹</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string, i: number) => (
          <span 
            key={i} 
            style={{ color: accentColor }}
            className={`font-mono text-xs px-3 py-1 rounded-full ${accentBg} border ${accentBorder} shadow-sm backdrop-blur-sm`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
