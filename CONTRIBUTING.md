# Contributing to Dispare

Welcome! We are thrilled that you want to contribute to Dispare. This project is fully open-source and community-driven.

---

## 🛠️ Development Setup

### Prerequisites
* **Node.js**: `>= 20.0.0`
* **pnpm**: `>= 9.0.0` (v10 recommended)
* **PostgreSQL**: Local instance, Docker container, or cloud service (Supabase/Neon).

### Quick Start in 5 Minutes

1. **Fork and clone the repository:**
   ```bash
   git clone https://github.com/disparee/disparee.git
   cd disparee
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Fill in your local PostgreSQL `DATABASE_URL` and Discord bot credentials.

4. **Prepare the database:**
   ```bash
   pnpm db:push
   ```

5. **Start development mode:**
   ```bash
   pnpm dev
   ```
   Turborepo will concurrently start both the Discord bot (`apps/bot`) and the Next.js web application (`apps/web` at `http://localhost:3000`).

---

## 📁 Repository Structure

```text
├── apps/
│   ├── bot/         # Discord bot client (TypeScript, discord.js)
│   └── web/         # Web dashboard & landing page (Next.js)
├── packages/
│   ├── config/      # Shared TypeScript and linter configs
│   ├── database/    # Drizzle ORM schema, migrations, and database client
│   └── types/       # Shared TypeScript types and contracts
```

---

## 📐 Architecture Rules

1. **Package Boundaries:**
   * Never import directly from internal source files of another package (e.g., `../packages/database/src/...`).
   * Always import through the package export entrypoint (e.g., `@dispare/database`, `@dispare/database/schema`, `@dispare/types`).
2. **Environment Variables:**
   * Never commit real secrets.
   * If you add a new environment variable, document it in `.env.example` and add validation in the corresponding `env.ts` (using Zod).
3. **Commit Messages:**
   * Follow the [Conventional Commits](https://www.conventionalcommits.org/) convention:
     * `feat: add coinflip command to bot`
     * `fix: correct discord oauth callback url in web`
     * `docs: update setup instructions in README`

---

## 🧪 Testing and Quality Checks

Before submitting a Pull Request, make sure your code passes all checks:

```bash
# Run linter
pnpm lint

# Check TypeScript types across all apps and packages
pnpm check-types

# Run tests
pnpm test

# Format code
pnpm format
```
