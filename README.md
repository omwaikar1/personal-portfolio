# Personal Portfolio Website

Om Anant Waikar's personal portfolio site — a single-page resume showcasing experience, projects, education, and skills.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio site locally
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (only needed if/when the site starts using the API server)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Portfolio site: React 19 + Vite + Tailwind CSS, shadcn/ui components, Framer Motion
- API: Express 5 (scaffolded, not yet wired into the site)
- DB: PostgreSQL + Drizzle ORM (scaffolded, not yet in use)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle) for the API server, Vite for the site

## Where things live

- `artifacts/portfolio/` — the portfolio site itself
  - `src/pages/Portfolio.tsx` — page shell (navbar, cursor gradient, back-to-top)
  - `src/components/RightPanel.tsx` — all page content (About, Experience, Projects, Education, Skills)
  - `src/components/Navbar.tsx` — top navigation
  - `src/components/ui/` — shadcn/ui component library
- `artifacts/api-server/` — Express API scaffold (currently just a `/health` route; not used by the site yet)
- `artifacts/mockup-sandbox/` — Vite sandbox for previewing generated UI mockups
- `lib/db/` — Drizzle ORM schema (currently empty)
- `lib/api-spec/`, `lib/api-zod/`, `lib/api-client-react/` — OpenAPI spec and generated client code
- `scripts/` — repo maintenance scripts (e.g. `post-merge.sh`)

## Architecture decisions

- The site is currently static content — all resume data lives directly in `RightPanel.tsx` rather than being fetched from the API/DB. The API server and DB packages are scaffolded for future use but not yet connected.
- `LeftPanel.tsx` is an alternate sticky-sidebar layout that isn't currently rendered by `Portfolio.tsx` (only `Navbar` + `RightPanel` are used). Keep in mind if resurrecting a two-column layout.

## Product

A single-page personal portfolio: hero/about section, work experience, projects (grouped into Software Engineering and AI/ML tracks), education, and technical skills — with resume downloads (SWE and AI/ML variants) and links to GitHub/LinkedIn.

## Gotchas

- Project GitHub links in `RightPanel.tsx` were originally placeholders (`TODO: Replace with your actual GitHub repo URL`) — verify they point to real, existing repos before treating them as final.
- Resume PDFs (`/resume-swe.pdf`, `/resume-aiml.pdf`) must exist in `artifacts/portfolio/public/` for the download buttons to work.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
