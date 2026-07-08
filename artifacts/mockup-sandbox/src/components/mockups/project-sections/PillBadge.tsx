import React from 'react';
import { Code2, Sparkles, Github, ArrowUpRight } from 'lucide-react';

const SWEProject = {
  title: "Multi-Layered Security for Linux Auth",
  date: "Nov — Dec 2024",
  type: "Personal Project",
  bullets: [
    "Engineered a 2FA system with Google Authenticator and advanced PAM features — rate limiting, idle session detection, password strength enforcement, and time-based access control.",
    "Implemented RBAC mechanisms and automated session management scripts, reducing inactive session misuse by an estimated 25–40%."
  ],
  tags: ["Linux", "PAM", "Bash", "Google Authenticator"]
};

const AIMLProjects = [
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

export default function PillBadge() {
  return (
    <div className="min-h-screen bg-[#060c1a] p-8 font-sans text-slate-300 selection:bg-[#00cccc]/30">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* SWE Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00cccc]/10 border border-[#00cccc]/30 text-[#00cccc] font-mono text-sm tracking-widest uppercase">
              <Code2 size={16} />
              <span>Software Engineering</span>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
              <div className="md:col-span-3 text-sm font-mono text-slate-500 mt-1">
                {SWEProject.date}
              </div>
              <div className="md:col-span-9 space-y-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#00cccc] transition-colors">
                      {SWEProject.title}
                    </h3>
                    <div className="flex gap-2 text-slate-500">
                      <a href="#" className="hover:text-white transition-colors" aria-label="GitHub Repository">
                        <Github size={18} />
                      </a>
                      <a href="#" className="hover:text-white transition-colors" aria-label="Live Demo">
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                  <div className="text-sm font-mono text-slate-500 mt-1 uppercase tracking-wider">{SWEProject.type}</div>
                </div>
                
                <ul className="space-y-3 text-slate-400 leading-relaxed list-disc list-outside ml-4">
                  {SWEProject.bullets.map((bullet, i) => (
                    <li key={i} className="pl-1">{bullet}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {SWEProject.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-mono text-[#00cccc] bg-[#00cccc]/10 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI/ML Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-[#a78bfa] font-mono text-sm tracking-widest uppercase">
              <Sparkles size={16} />
              <span>AI / Machine Learning</span>
            </div>
          </div>
          
          <div className="space-y-12">
            {AIMLProjects.map((project, idx) => (
              <div key={idx} className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline">
                <div className="md:col-span-3 text-sm font-mono text-slate-500 mt-1">
                  {project.date}
                </div>
                <div className="md:col-span-9 space-y-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#a78bfa] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2 text-slate-500">
                        <a href="#" className="hover:text-white transition-colors" aria-label="GitHub Repository">
                          <Github size={18} />
                        </a>
                        <a href="#" className="hover:text-white transition-colors" aria-label="Live Demo">
                          <ArrowUpRight size={18} />
                        </a>
                      </div>
                    </div>
                    <div className="text-sm font-mono text-slate-500 mt-1 uppercase tracking-wider">{project.type}</div>
                  </div>
                  
                  <ul className="space-y-3 text-slate-400 leading-relaxed list-disc list-outside ml-4">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="pl-1">{bullet}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-mono text-[#a78bfa] bg-[#a78bfa]/10 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
