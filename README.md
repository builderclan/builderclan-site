# BuilderClan Site

**A home for people who love to build.**

The official open-source website for the [BuilderClan](https://builder-clan.org) community - a peer-to-peer tech community for hardware and software builders. This repository is built and maintained collaboratively by the community.

---

## What is BuilderClan?

BuilderClan is a pure-tech, peer-to-peer community where people come together to build projects, learn, experiment, and grow. Whether you work on software, hardware, open-source, or product experiments - there is a place for you here. Beginner-friendly, community-first, and 100% free.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) (App Router) | Framework with Turbopack dev server |
| [React 19](https://react.dev/) | UI rendering |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations and transitions |
| [Lucide React](https://lucide.dev/) | Icon library |

---

## Project Structure

```txt
builderclan-site/
├── app/
│   ├── campus/          # Campus Chapters page
│   ├── careers/         # Careers page
│   ├── signup/          # Signup and referral pages
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Home page entry
│   ├── globals.css      # Global styles
│   ├── robots.ts        # robots.txt generation
│   └── sitemap.ts       # sitemap.xml generation
│
├── components/
│   ├── campus/          # Campus page components
│   ├── signup/          # Signup flow components
│   ├── ui/              # Shared UI primitives
│   ├── Header.tsx       # Site navigation bar
│   ├── Footer.tsx       # Site footer
│   ├── Home.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Opportunity.tsx  # Opportunities section
│   ├── Faq.tsx          # FAQ section
│   ├── Contact.tsx      # Contact section
│   ├── CTA.tsx          # Call-to-action section
│   └── BackToTop.tsx    # Back to top button
│
├── lib/                 # Utility helpers
├── public/              # Static assets (images, icons)
├── CONTRIBUTING.md      # Contributor guide
├── CODE_OF_CONDUCT.md   # Community standards
└── LICENSE              # MIT License
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home - hero, about, opportunities, FAQ, contact |
| `/campus` | Campus Chapters directory and Campus Lead application |
| `/careers` | Open roles and volunteer opportunities |
| `/signup` | Community sign-up flow |

---

## Getting Started Locally

### 1. Fork and clone the repo

```bash
git clone https://github.com/<your-username>/builderclan-site.git
cd builderclan-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for production

```bash
npm run build
```

---

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production-ready source (protected) |
| `dev` | Active development and integration |
| `feat/<name>` | New features |
| `fix/<name>` | Bug fixes |
| `docs/<name>` | Documentation only |
| `chore/<name>` | Config or build changes |

> Always branch off from `dev`, not `main`.

---

## Commit Message Convention

```
type(scope): short description
```

| Type | When to use |
|---|---|
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `docs` | Documentation changes only |
| `style` | Formatting, spacing, no logic change |
| `refactor` | Code restructuring without feature/fix |
| `chore` | Build, config, or tooling updates |

**Examples:**

```bash
feat(campus): add campus chapter directory search
fix(navbar): resolve mobile menu close on route change
docs(readme): update project structure section
style(hero): improve heading spacing and typography
```

---

## Contributing

Contributions of all sizes are welcome - from fixing a typo to building a whole new feature.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full contribution guide.

Pull requests should target the **`dev`** branch.

---

## Community Guidelines

- Be respectful and inclusive - follow our [Code of Conduct](CODE_OF_CONDUCT.md).
- Ask questions freely by opening a [GitHub Issue](https://github.com/BuilderClan/builderclan-site/issues).
- First-time contributors are always welcome - look for `good first issue` labels.

---

## Maintainers

Maintained by the BuilderClan core team. Reach out at [main.builderclan@gmail.com](mailto:main.builderclan@gmail.com) or open an issue on GitHub.

---

> Built with love by the BuilderClan community. A home for people who love to build.
