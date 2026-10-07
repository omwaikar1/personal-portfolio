# Personal Portfolio Website

Source for my personal portfolio: a single-page site covering my experience, projects, education and technical skills.

## Sections
- **About:** short introduction, education highlights, and what I'm looking for.
- **Experience:** work history.
- **Projects:** grouped into Software Engineering and AI/ML tracks, with technology badges and links to the code.
- **Education** and **Technical Skills**.
- Navigation bar with links to GitHub, LinkedIn and email, plus a back-to-top button.

## Tech stack
- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui components, Framer Motion animations
- **Monorepo:** pnpm workspaces
- **Hosting:** configured for Vercel (`artifacts/portfolio/vercel.json`)

## Project structure
```
artifacts/
  portfolio/                 The website
    src/pages/Portfolio.tsx      Page shell: navbar, cursor gradient, back-to-top
    src/components/RightPanel.tsx  All page content (About, Experience, Projects, Education, Skills)
    src/components/Navbar.tsx      Top navigation and social links
    src/components/ui/             shadcn/ui component library
  api-server/                Express API scaffold (only a /health route; not used by the site yet)
  mockup-sandbox/            Vite sandbox for previewing UI component variants
lib/
  db/                        Drizzle ORM setup (scaffold, no tables yet)
  api-spec/, api-zod/, api-client-react/   OpenAPI spec and generated client/validation code
scripts/                     Workspace maintenance scripts
```

The site is static: all content lives in `RightPanel.tsx`. The API and database packages are scaffolding for possible future features (such as a contact form) and are not connected to the site.

## Running locally
Prerequisites: Node.js 24 or later and pnpm.

```bash
git clone https://github.com/omwaikar1/personal-portfolio.git
cd personal-portfolio
pnpm install
pnpm --filter @workspace/portfolio run dev
```

## Checks and build
```bash
pnpm run typecheck   # type-check every package
pnpm run build       # typecheck, then build all packages
```

To build only the site the way Vercel does:
```bash
cd artifacts/portfolio
npx vite build --config vite.config.ts   # output in dist/public
```
