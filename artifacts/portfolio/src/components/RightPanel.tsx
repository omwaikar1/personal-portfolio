import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function RightPanel() {
  return (
    <main className="pt-24 lg:w-[52%] lg:py-24">
      {/* About */}
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">About</h2>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            I am a precise, systems-oriented <span className="text-foreground font-medium">Software Engineer</span> and Computer Science graduate student at Binghamton University with a sharp eye for scalable architectures and machine learning integrations. 
          </p>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            With a strong academic foundation (<span className="text-primary font-mono text-sm">3.96 GPA</span>) and real-world internship experience, I specialize in building full-stack applications, mobile experiences with Flutter, and data-driven ML tools. My approach is methodical—I care deeply about code quality, performance constraints, and creating software that feels robust from the inside out.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not studying Design Patterns or optimizing algorithms, I'm building tools like predictive healthcare models and advanced authentication systems for Linux.
          </p>
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">Experience</h2>
        </div>
        <div className="group/list">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 font-mono">
              Jan — Jun 2025
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <span className="inline-flex items-baseline font-medium leading-tight text-foreground text-base">
                  Flutter Developer Intern <span className="inline-block text-muted-foreground mx-1">·</span> Catalyze Systems
                </span>
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                Programmed 15+ frontend screens for the MyOPD All-in-One mobile app using Flutter and Dart. Integrated 10+ RESTful APIs for processing patient records, prescriptions, and visit information. Designed 15+ interrelated Realm database schemas for robust offline-first functionality.
              </p>
              <ul className="mt-2 text-sm leading-normal text-muted-foreground list-disc pl-4 space-y-1">
                <li>Spearheaded a new "Add New Patient Visit" feature, resulting in an estimated 50–70% increase in active user engagement.</li>
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {['Flutter', 'Dart', 'Realm DB', 'REST APIs'].map(tech => (
                  <li key={tech}>
                    <div className="flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium leading-5 text-primary">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 font-mono">
              Jun — Jul 2024
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <span className="inline-flex items-baseline font-medium leading-tight text-foreground text-base">
                  Summer Research Intern <span className="inline-block text-muted-foreground mx-1">·</span> IIITV
                </span>
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                Developed heuristic algorithms for EV delivery route optimization under stringent time constraints. Created a mathematical model utilizing graph theory for complex routing with time windows.
              </p>
              <ul className="mt-2 text-sm leading-normal text-muted-foreground list-disc pl-4 space-y-1">
                <li>Reduced waiting times by 15–25% across test scenarios with comparative heuristic analysis.</li>
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {['Python', 'Graph Theory', 'Algorithm Design', 'Data Analytics'].map(tech => (
                  <li key={tech}>
                    <div className="flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium leading-5 text-primary">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">Projects</h2>
        </div>
        <div className="group/list">
          
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:col-span-8">
              <h3 className="font-medium leading-snug text-foreground text-base">
                Cancer Chrono Predictor
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                Breast Cancer Survival Prediction Tool engineered to predict survival periods from medical, genetic, and lifestyle datasets encompassing over 1,000 patient records.
              </p>
              <ul className="mt-2 text-sm leading-normal text-muted-foreground list-disc pl-4 space-y-1">
                <li>Achieved 79% accuracy on clinical data and 67% on biological datasets using advanced ensemble models.</li>
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Random Forest', 'KNN'].map(tech => (
                  <li key={tech}>
                    <div className="flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium leading-5 text-primary">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:col-span-8">
              <h3 className="font-medium leading-snug text-foreground text-base">
                Multi-Layered Security for Linux Auth
              </h3>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                Engineered a comprehensive 2FA system utilizing Google Authenticator and advanced PAM features including rate limiting, idle session detection, password strength validation, and time-based access control.
              </p>
              <ul className="mt-2 text-sm leading-normal text-muted-foreground list-disc pl-4 space-y-1">
                <li>Implemented RBAC mechanisms and session management scripts, yielding a ~25–40% reduction in inactive session misuse.</li>
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                {['Linux', 'PAM', 'Bash', 'Google Authenticator'].map(tech => (
                  <li key={tech}>
                    <div className="flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium leading-5 text-primary">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">Education</h2>
        </div>
        <div className="group/list">
          
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-8">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 font-mono">
              Expected 2027
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground text-base">
                Binghamton University, SUNY
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">MS Computer Science • <span className="text-primary font-mono">GPA: 3.96/4.0</span></p>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                <span className="font-medium text-foreground/80">Key Courses:</span> Design and Analysis of Algorithms, Programming Languages, Intro to ML, Intro to AI, Systems Programming, Computer Networks, Design Patterns.
              </p>
              <div className="mt-3 text-sm leading-normal text-muted-foreground">
                <span className="font-medium text-foreground/80">Leadership:</span> Student Assistant, Office of International Student and Scholar Services (ISSS) (Feb 2026–Present).
              </div>
            </div>
          </div>

          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2 font-mono">
              May 2025
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground text-base">
                IIITV, India
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">BTech Information Technology • <span className="text-primary font-mono">GPA: 7.65/10</span></p>
              <p className="mt-2 text-sm leading-normal text-muted-foreground">
                <span className="font-medium text-foreground/80">Key Courses:</span> Operating Systems, Database Systems, OOP (Java), Software Engineering, Data Analytics and Visualization, System Administration.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only font-mono">Technical Skills</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-muted-foreground mb-3 font-mono">Languages</h3>
            <ul className="flex flex-wrap gap-2">
              {['C', 'Java', 'Python', 'JavaScript', 'Dart'].map(skill => (
                <li key={skill} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 shadow-sm transition hover:border-primary/50 hover:text-primary">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-muted-foreground mb-3 font-mono">Development</h3>
            <ul className="flex flex-wrap gap-2">
              {['Flutter', 'Realm', 'Firebase', 'ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'AWS', 'Docker'].map(skill => (
                <li key={skill} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 shadow-sm transition hover:border-primary/50 hover:text-primary">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-muted-foreground mb-3 font-mono">Machine Learning</h3>
            <ul className="flex flex-wrap gap-2">
              {['NumPy', 'Pandas', 'Matplotlib', 'TensorFlow', 'PyTorch'].map(skill => (
                <li key={skill} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 shadow-sm transition hover:border-primary/50 hover:text-primary">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-muted-foreground mb-3 font-mono">Tools & OS</h3>
            <ul className="flex flex-wrap gap-2">
              {['Git', 'GitHub', 'Postman', 'Android Studio', 'Linux', 'MacOS'].map(skill => (
                <li key={skill} className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 shadow-sm transition hover:border-primary/50 hover:text-primary">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
        <p>
          Designed with precision. Built with React, Vite, and Tailwind CSS.
          <br/>© {new Date().getFullYear()} Om Anant Waikar.
        </p>
      </footer>
    </main>
  );
}