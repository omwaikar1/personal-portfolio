import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-bold uppercase tracking-widest text-primary font-mono mb-8 flex items-center gap-3">
      <span className="block h-px w-8 bg-primary/60" />
      {children}
    </h2>
  );
}

const techBadge = (tech: string) => (
  <li key={tech}>
    <div className="flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium leading-5 text-primary">
      {tech}
    </div>
  </li>
);

export default function RightPanel() {
  return (
    <div className="w-full">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-20 mb-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="text-5xl sm:text-6xl font-bold font-mono text-primary tracking-tight leading-none mb-4">
            Om Anant Waikar
          </h1>
          <p className="text-xl text-foreground font-medium mb-6">
            Building Full-Stack Apps & ML Systems
          </p>
          <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Om, a Master's student in Computer Science at Binghamton
              University (4.0 GPA), with a passion for building software that
              spans mobile, backend, and machine learning. I like turning ideas
              into working systems and I'm currently looking for Software
              Engineering and AI/ML internship opportunities to keep doing that.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Experience ────────────────────────────────────── */}
      <section id="experience" className="scroll-mt-20 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading>Experience</SectionHeading>
          <div className="group/list space-y-10">
            {/* Catalyze Systems */}
            <div className="group relative grid sm:grid-cols-8 sm:gap-8 gap-2 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
              <header className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground font-mono pt-1">
                Jan — Jun 2025
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-foreground text-base">
                  Flutter Developer Intern
                  <span className="text-muted-foreground mx-1.5">·</span>
                  <span className="text-foreground/80">Catalyze Systems</span>
                </h3>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-4 space-y-1.5">
                  <li>
                    Built 15+ Flutter screens and integrated 10+ RESTful APIs
                    for the MyOPD mobile app, covering patient records,
                    prescriptions, and visit workflows.
                  </li>
                  <li>
                    Designed 15+ Realm database schemas for offline-first
                    storage; new &quot;Add New Patient Visit&quot; feature drove
                    an estimated 50–70% increase in active user engagement.
                  </li>
                </ul>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {["Flutter", "Dart", "Realm DB", "REST APIs"].map(techBadge)}
                </ul>
              </div>
            </div>

            {/* IIITV */}
            <div className="group relative grid sm:grid-cols-8 sm:gap-8 gap-2 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
              <header className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground font-mono pt-1">
                Jun — Jul 2024
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-foreground text-base">
                  Summer Research Intern
                  <span className="text-muted-foreground mx-1.5">·</span>
                  <span className="text-foreground/80">IIITV, India</span>
                </h3>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-4 space-y-1.5">
                  <li>
                    Developed heuristic algorithms for EV delivery route
                    optimization using a graph-theory mathematical model with
                    time-window constraints.
                  </li>
                  <li>
                    Reduced waiting times by 15–25% in test scenarios through
                    comparative analysis of distance-based and time-window
                    heuristics.
                  </li>
                </ul>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {[
                    "Python",
                    "Graph Theory",
                    "Algorithm Design",
                    "Data Analytics",
                  ].map(techBadge)}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Projects ──────────────────────────────────────── */}
      <section id="projects" className="scroll-mt-20 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading>Projects</SectionHeading>
          <div className="group/list space-y-10">
            {/* Batch Normalization Research */}
            <div className="group relative grid sm:grid-cols-8 sm:gap-8 gap-2 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
              <header className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground font-mono pt-1">
                Nov 2025
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-foreground text-base flex items-center gap-2">
                  Optimization of Batch Normalization in Deep Residual Networks
                  {/* TODO: Replace with your actual GitHub repo URL */}
                  <a
                    href="https://github.com/omwaikar/batch-norm-optimization"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repo"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <SiGithub className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/omwaikar/batch-norm-optimization"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View project"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </h3>
                <p className="mt-1 text-xs text-muted-foreground font-mono uppercase tracking-wide">
                  Academic Research Project
                </p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-4 space-y-1.5">
                  <li>
                    Reproduced CVPR 2022 findings on Estimation Shift in Batch
                    Normalization; designed ablation studies on the XBNBlock
                    architecture evaluating Layer Norm and Late-Stage Placement
                    via a modular PyTorch pipeline.
                  </li>
                  <li>
                    Achieved a 4.69% accuracy improvement over baseline on
                    ImageNette; Layer Norm (+0.23% vs. GN) and Late-Stage
                    Placement (+1.1% vs. Uniform) confirmed as effective
                    lightweight BN stabilization strategies.
                  </li>
                </ul>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {[
                    "Python",
                    "PyTorch",
                    "Google Colab",
                    "Deep Learning",
                    "ResNets",
                  ].map(techBadge)}
                </ul>
              </div>
            </div>

            {/* Linux Auth */}
            <div className="group relative grid sm:grid-cols-8 sm:gap-8 gap-2 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
              <header className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground font-mono pt-1">
                Nov — Dec 2024
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-foreground text-base flex items-center gap-2">
                  Multi-Layered Security for Linux Auth
                  {/* TODO: Replace with your actual GitHub repo URL */}
                  <a
                    href="https://github.com/omwaikar/linux-auth-security"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repo"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <SiGithub className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/omwaikar/linux-auth-security"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View project"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </h3>
                <p className="mt-1 text-xs text-muted-foreground font-mono uppercase tracking-wide">
                  Personal Project
                </p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-4 space-y-1.5">
                  <li>
                    Engineered a 2FA system with Google Authenticator and
                    advanced PAM features — rate limiting, idle session
                    detection, password strength enforcement, and time-based
                    access control.
                  </li>
                  <li>
                    Implemented RBAC mechanisms and automated session management
                    scripts, reducing inactive session misuse by an estimated
                    25–40%.
                  </li>
                </ul>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {["Linux", "PAM", "Bash", "Google Authenticator"].map(
                    techBadge,
                  )}
                </ul>
              </div>
            </div>

            {/* Cancer Chrono Predictor */}
            <div className="group relative grid sm:grid-cols-8 sm:gap-8 gap-2 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
              <header className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground font-mono pt-1">
                Oct — Nov 2023
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-foreground text-base flex items-center gap-2">
                  Cancer Chrono Predictor
                  {/* TODO: Replace with your actual GitHub repo URL */}
                  <a
                    href="https://github.com/omwaikar/cancer-chrono-predictor"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub repo"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <SiGithub className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/omwaikar/cancer-chrono-predictor"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View project"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </h3>
                <p className="mt-1 text-xs text-muted-foreground font-mono uppercase tracking-wide">
                  Personal Project
                </p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-4 space-y-1.5">
                  <li>
                    Built a survival prediction tool integrating medical,
                    genetic, and lifestyle datasets across 1,000+ patient
                    records using Random Forest, KNN, and Naive Bayes
                    classifiers.
                  </li>
                  <li>
                    Achieved 79% accuracy on clinical data and 67% on biological
                    datasets through cross-validation and hyperparameter tuning.
                  </li>
                </ul>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {[
                    "Python",
                    "Scikit-learn",
                    "Pandas",
                    "NumPy",
                    "Random Forest",
                    "KNN",
                    "Naive Bayes",
                  ].map(techBadge)}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Education ─────────────────────────────────────── */}
      <section id="education" className="scroll-mt-20 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading>Education</SectionHeading>
          <div className="group/list space-y-10">
            <div className="group relative grid sm:grid-cols-8 sm:gap-8 gap-2 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
              <header className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground font-mono pt-1">
                Expected May 2027
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-foreground text-base">
                  Binghamton University, SUNY
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  MS Computer Science &nbsp;•&nbsp;{" "}
                  <span className="text-primary font-mono">
                    GPA: 3.96 / 4.0
                  </span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground/80">
                    Courses:{" "}
                  </span>
                  Design and Analysis of Algorithms, Programming Languages,
                  Intro to ML, Intro to AI, Systems Programming, Computer
                  Networks, Design Patterns.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/80">
                    Leadership:{" "}
                  </span>
                  Student Assistant, Office of International Student and Scholar
                  Services (ISSS) — Feb 2026–Present.
                </p>
              </div>
            </div>

            <div className="group relative grid sm:grid-cols-8 sm:gap-8 gap-2 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
              <header className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground font-mono pt-1">
                May 2025
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium text-foreground text-base">
                  IIITV, Gujarat, India
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  BTech Information Technology &nbsp;•&nbsp;{" "}
                  <span className="text-primary font-mono">GPA: 7.65 / 10</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground/80">
                    Courses:{" "}
                  </span>
                  Operating Systems, Database Systems, OOP (Java), Software
                  Engineering, Data Analytics and Visualization, System
                  Administration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Skills ────────────────────────────────────────── */}
      <section id="skills" className="scroll-mt-20 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="space-y-6">
            {[
              {
                label: "Languages",
                items: ["C", "Java", "Python", "JavaScript", "Dart"],
              },
              {
                label: "Development",
                items: [
                  "Flutter",
                  "Realm",
                  "Firebase",
                  "ReactJS",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "MySQL",
                  "REST APIs",
                  "AWS",
                  "Docker",
                ],
              },
              {
                label: "Machine Learning",
                items: [
                  "NumPy",
                  "Pandas",
                  "Matplotlib",
                  "TensorFlow",
                  "PyTorch",
                ],
              },
              {
                label: "Tools & OS",
                items: [
                  "Git",
                  "GitHub",
                  "Postman",
                  "Android Studio",
                  "Linux",
                  "MacOS",
                ],
              },
            ].map(({ label, items }) => (
              <div key={label}>
                <h3 className="text-xs font-semibold tracking-wider text-muted-foreground mb-3 font-mono">
                  {label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground/80 shadow-sm transition hover:border-primary/50 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="pt-4 pb-12 text-xs text-muted-foreground border-t border-border">
        Designed with precision. Built with React, Vite &amp; Tailwind CSS.
        &nbsp;·&nbsp; © {new Date().getFullYear()} Om Anant Waikar.
      </footer>
    </div>
  );
}
