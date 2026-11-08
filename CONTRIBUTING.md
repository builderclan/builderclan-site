# Contributing to BuilderClan Site

🎉 Thanks for considering contributing to **BuilderClan Site**!
We're building this project together as a community, and every contribution matters - from fixing a typo to implementing a full new feature.

This document will guide you through the process.

---

## 🛠 How Can I Contribute?

- **Report bugs** via [GitHub Issues](https://github.com/BuilderClan/builderclan-site/issues).
- **Suggest features** or improvements.
- **Fix bugs** and open Pull Requests.
- **Improve documentation** (README, wiki, inline docs).
- **Help review PRs** and give constructive feedback.

---

## 🚀 Getting Started

1. **Fork** the repository on GitHub.

2. **Clone** your fork:

   ```bash
   git clone https://github.com/<your-username>/builderclan-site.git
   cd builderclan-site
   ```

3. **Create a branch** for your change:

   ```bash
   git switch -c feat/your-feature-name
   ```

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Run the development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view your changes live.

6. **Make your changes** and commit them following the commit convention below.

7. **Verify the build** before pushing:

   ```bash
   npm run build
   ```

   Fix any type or lint errors before opening a PR.

8. **Push** to your fork:

   ```bash
   git push origin feat/your-feature-name
   ```

9. Open a **Pull Request** targeting the **`dev`** branch.

---

## 📝 Branch Naming

Follow this convention:

- `feat/<short-description>` → new feature
- `fix/<short-description>` → bug fix
- `docs/<short-description>` → documentation only
- `chore/<short-description>` → config or build changes
- `style/<short-description>` → visual or formatting changes

Examples:

- `feat/campus-chapter-search`
- `fix/navbar-mobile-toggle`
- `docs/update-contributing`
- `style/hero-section-spacing`

> Always branch off from `dev`, not `main`.

---

## ✨ Commit Messages

```
type(scope): short description
```

| Type | When to use |
| --- | --- |
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `docs` | Documentation changes only |
| `style` | Formatting, spacing, no logic change |
| `refactor` | Code restructuring without feature/fix |
| `chore` | Build, config, or tooling updates |

Examples:

- `feat(campus): add chapter directory search filter`
- `fix(navbar): resolve mobile menu not closing on route change`
- `docs(readme): update project structure section`
- `style(hero): improve heading spacing and line height`

---

## 🔀 Pull Requests

When opening a PR:

- Target the **`dev`** branch (not `main`).
- Keep changes focused - one feature or fix per PR.
- Describe **what** you changed and **why**.
- Include screenshots for any UI changes.
- Run `npm run build` locally and confirm it passes before submitting.
- Mark the PR as **draft** if it is still in progress.

---

## 📂 Project Structure

```
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
```

---

## 🐛 Reporting Issues

When reporting a bug:

1. **Check existing issues** to avoid duplicates.
2. Use the correct issue template (Bug / Feature / Question).
3. Include:
   - Steps to reproduce
   - Expected vs. actual behavior
   - Environment details (OS, browser, Node version)

---

## 💬 Community Guidelines

- Be respectful and inclusive - follow our [Code of Conduct](CODE_OF_CONDUCT.md).
- Use clear, welcoming language in issues and PRs.
- Ask for help freely - open a discussion or comment on an issue.
- We actively welcome first-time contributors! Look for `good first issue` labels.

---

## 🌱 First-Time Contributors

Not sure where to start?

- Fix a typo in the docs.
- Try a **good first issue** from the issue tracker.
- Improve a component's accessibility or responsiveness.

Even small contributions are valuable and appreciated!

---

## 📧 Need Help?

- Open a [GitHub Issue](https://github.com/BuilderClan/builderclan-site/issues)
- Email the maintainers: [hello@builder-clan.org](mailto:hello@builder-clan.org)

---

💚 Thanks for contributing to **BuilderClan Site**!
Together, we're building a home for people who love to build.
