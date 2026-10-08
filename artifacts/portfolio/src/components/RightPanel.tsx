import React from "react";
import { Download, Code2, Sparkles } from "lucide-react";
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

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        <SectionHeading>{title}</SectionHeading>
        {children}
      </motion.div>
    </section>
  );
}

const techBadge = (tech: string) => (
  <li key={tech}>
    <div className="flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium leading-5 text-primary">
      {tech}
    </div>
  </li>
);

type EntryProps = {
  period: string;
  title: string;
  org?: string;
  subtitle?: string;
  repo?: string;
  bullets?: string[];
  tech?: string[];
  children?: React.ReactNode;
};

function Entry({ period, title, org, subtitle, repo, bullets, tech, children }: EntryProps) {
  return (
    <div className="group relative grid sm:grid-cols-8 sm:gap-8 gap-2 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-muted/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
      <header className="z-10 sm:col-span-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground font-mono pt-1">
        {period}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium text-foreground text-base">
          {title}
          {org && (
            <>
              <span className="text-muted-foreground mx-1.5">·</span>
              <span className="text-foreground/80">{org}</span>
            </>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repo"
              className="inline-block align-middle ml-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <SiGithub className="h-4 w-4" />
            </a>
          )}
        </h3>
        {subtitle && (
          <p className="mt-1 text-xs text-muted-foreground font-mono uppercase tracking-wide">
            {subtitle}
          </p>
        )}
        {children}
        {bullets && (
          <ul className="mt-2 text-sm text-muted-foreground list-disc pl-4 space-y-1.5">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {tech && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {tech.map(techBadge)}
          </ul>
        )}
      </div>
    </div>
  );
}

function TrackLabel({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-8">
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-mono text-xs tracking-widest uppercase ${color}`}>
        {icon}
        <span>{label}</span>
      </div>
    </div>
  );
}

const skills = [
  { label: "Languages", items: ["Python", "Java", "C", "JavaScript", "Dart", "SQL"] },
  { label: "Mobile & Backend", items: ["Flutter", "FastAPI", "REST APIs", "Offline-First Storage"] },
  { label: "Databases & Caching", items: ["PostgreSQL", "PostGIS", "Redis", "Realm"] },
  { label: "Cloud & Deployment", items: ["AWS EC2", "Amazon Bedrock AgentCore", "Docker"] },
  {
    label: "ML & NLP",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "DistilBERT",
      "TF-IDF",
      "Logistic Regression",
      "Hyperparameter Tuning",
      "Per-Class Error Analysis",
      "Weights & Biases",
    ],
  },
  {
    label: "LLMs & RAG",
    items: ["Retrieval-Augmented Generation", "LangChain", "Claude API", "FAISS", "Document Chunking"],
  },
  { label: "Algorithms", items: ["Graph Theory", "Heuristic Algorithms", "Constraint Modeling"] },
  {
    label: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "Pytest", "Android Studio", "Linux/Unix"],
  },
];

export default function RightPanel() {
  return (
    <div className="w-full">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-20 mb-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs font-semibold text-green-400 uppercase tracking-widest font-mono">
              Open to opportunities
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold font-mono text-primary tracking-tight leading-none mb-4">
            Om Anant Waikar
          </h1>
          <p className="text-xl text-foreground font-medium mb-6">
            Building Full-Stack Apps &amp; AI/ML Systems
          </p>
          <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              I'm Om, a Master's student in Computer Science at Binghamton
              University (3.96 GPA). I build software across mobile, backend,
              and AI/ML — from offline-first Flutter apps and FastAPI services
              to RAG pipelines and fine-tuned transformer models. I'm currently
              looking for Software Engineering and AI/ML internship
              opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/resume-swe.pdf"
              download="Om_Waikar_Resume_SWE.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm font-medium text-muted-foreground bg-card hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              SWE Resume
            </a>
            <a
              href="/resume-aiml.pdf"
              download="Om_Waikar_Resume_MLAI.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm font-medium text-muted-foreground bg-card hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              AI / ML Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Experience ────────────────────────────────────── */}
      <Section id="experience" title="Experience">
        <div className="group/list space-y-10">
          <Entry
            period="Jan — Jun 2025"
            title="Flutter Developer Intern"
            org="Catalyze Systems"
            subtitle="Remote"
            bullets={[
              "Shipped 15+ Flutter/Dart screens, including Add New Patient Visit, contributing to a 50–70% increase in active user engagement.",
              "Integrated 10+ RESTful APIs to exchange patient data between the mobile frontend and backend services.",
              "Designed and managed 15+ interrelated Realm database schemas for offline-first patient-record storage.",
              "Brought desktop prescription management to mobile, supporting custom medicine entries, dosage details, and on-device PDF generation.",
            ]}
            tech={["Flutter", "Dart", "Realm", "REST APIs"]}
          />
          <Entry
            period="Jun — Jul 2024"
            title="Summer Research Intern"
            org="IIIT Vadodara"
            subtitle="Gandhinagar, India"
            bullets={[
              "Implemented 3 routing heuristics based on distance and time-window opening/closing for electric-vehicle routing with time windows (EV-TSPTW) on a 6-node graph.",
              "Formulated a graph-based model with a travel-distance objective and 3 constraint categories across a 15-edge network.",
              "Benchmarked 3 heuristics on distance, waiting time, and feasibility: distance-based routing minimized travel, while time-window-closing achieved the highest feasibility at a higher distance cost.",
            ]}
            tech={["Graph Theory", "Heuristic Algorithms", "Constraint Modeling"]}
          />
        </div>
      </Section>

      {/* ── Projects ──────────────────────────────────────── */}
      <Section id="projects" title="Projects">
        <TrackLabel
          icon={<Code2 size={14} />}
          label="Software Engineering"
          color="bg-primary/10 border border-primary/30 text-primary"
        />
        <div className="group/list space-y-10 mb-12">
          <Entry
            period="Full-Stack"
            title="WaitWatch: Crowdsourced Wait-Time App"
            bullets={[
              "Built a Flutter app for reporting and viewing wait times across 5–8 dining locations, supported by 10–15 RESTful endpoints built with FastAPI and PostgreSQL.",
              "Used PostGIS for proximity validation and Redis caching to reduce repeated database queries by approximately 35%, with reports expiring after 45 minutes.",
              "Deployed the backend on AWS EC2 with Docker containers, maintaining 99%+ uptime across a two-week testing period.",
            ]}
            tech={["Flutter", "FastAPI", "PostgreSQL", "PostGIS", "Redis", "Docker", "AWS"]}
          />
          <Entry
            period="AI Agent"
            title="CloudOps Agent: Natural-Language Infrastructure Assistant"
            bullets={[
              "Built an AgentCore agent that searches operational documents and selects tools for checking logs, deployments, and service health from natural-language requests.",
              "Evaluated 50–75 requests with approximately 84% correct tool selection after refining tool descriptions, input validation, and approval controls.",
              "Documented the agent architecture and tool-call workflows, enabling reuse across 3+ internal automation demos.",
            ]}
            tech={["Amazon Bedrock AgentCore", "Python", "AWS"]}
          />
        </div>

        <TrackLabel
          icon={<Sparkles size={14} />}
          label="AI / ML"
          color="bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-[#a78bfa]"
        />
        <div className="group/list space-y-10">
          <Entry
            period="RAG"
            title="Evidence-Grounded Document Q&A System"
            bullets={[
              "Built a RAG pipeline that indexed 50–100 documents, retrieved relevant passages, and generated Claude-powered answers with supporting source references.",
              "Evaluated 75–100 questions across multiple chunking and retrieval settings, reaching 80–87% answer accuracy and 85–92% citation accuracy.",
              "Deployed the pipeline behind a FastAPI backend, achieving sub-second retrieval latency for interactive querying.",
            ]}
            tech={["Python", "LangChain", "Claude API", "FAISS", "FastAPI"]}
          />
          <Entry
            period="NLP"
            title="Support-Ticket Intent Classification"
            bullets={[
              "Fine-tuned DistilBERT on 13,000+ Banking77 examples covering 77 intent categories and compared its performance with a TF-IDF and logistic-regression baseline.",
              "Tracked 15–20 training runs with approximately 87% macro-F1, using hyperparameter tuning and per-class error analysis to improve weaker categories.",
              "Containerized the trained model with Docker and exposed it through a REST endpoint for real-time intent prediction.",
            ]}
            tech={["Python", "PyTorch", "Hugging Face Transformers", "Weights & Biases", "Docker"]}
          />
          <Entry
            period="Research"
            title="Optimization of Batch Normalization in Deep Residual Networks"
            subtitle="Academic Research Project · Nov 2025"
            repo="https://github.com/omwaikar1/xbnblock-normalization-study"
            bullets={[
              "Reproduced CVPR 2022 findings on Estimation Shift in Batch Normalization; designed ablation studies on the XBNBlock architecture evaluating Layer Norm and Late-Stage Placement via a modular PyTorch pipeline.",
              "Achieved a 4.69% accuracy improvement over baseline on ImageNette; Layer Norm (+0.23% vs. GN) and Late-Stage Placement (+1.1% vs. Uniform) confirmed as effective lightweight BN stabilization strategies.",
            ]}
            tech={["Python", "PyTorch", "Google Colab", "Deep Learning", "ResNets"]}
          />
        </div>
      </Section>

      {/* ── Education ─────────────────────────────────────── */}
      <Section id="education" title="Education">
        <div className="group/list space-y-10">
          <Entry period="Expected May 2027" title="Binghamton University, State University of New York">
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              Master of Science, Computer Science &nbsp;•&nbsp;{" "}
              <span className="text-primary font-mono">GPA: 3.96 / 4.0</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground/80">Coursework: </span>
              Machine Learning, Introduction to Artificial Intelligence, Visual
              Information Processing, Design and Analysis of Algorithms, Systems
              Programming, Computer Networks, Cloud Computing.
            </p>
          </Entry>
          <Entry period="May 2025" title="Indian Institute of Information Technology Vadodara">
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              B.Tech, Information Technology &nbsp;•&nbsp; Gujarat, India
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground/80">Coursework: </span>
              Operating Systems, Database Systems, Object-Oriented Programming
              (Java), Software Engineering.
            </p>
          </Entry>
        </div>
      </Section>

      {/* ── Leadership ────────────────────────────────────── */}
      <Section id="leadership" title="Leadership & Activities">
        <div className="group/list space-y-10">
          <Entry
            period="Feb 2026 — Present"
            title="Student Assistant"
            org="Office of International Students, Binghamton University"
            bullets={[
              "Supported 100+ international students weekly through front-desk check-ins, inquiry handling, and referrals to university services.",
              "Processed student e-forms and documentation in the Sunapsis portal, maintaining records and handling service requests.",
            ]}
          />
        </div>
      </Section>

      {/* ── Skills ────────────────────────────────────────── */}
      <Section id="skills" title="Technical Skills">
        <div className="space-y-6">
          {skills.map(({ label, items }) => (
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
      </Section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="pt-4 pb-12 text-xs text-muted-foreground border-t border-border">
        Designed with precision. Built with React, Vite &amp; Tailwind CSS.
        &nbsp;·&nbsp; © {new Date().getFullYear()} Om Anant Waikar.
      </footer>
    </div>
  );
}
