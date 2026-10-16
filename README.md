# 🌐 Dispare

> An advanced, clean, and community-driven open-source monorepo combining a modern **TypeScript Discord Bot** and a **Next.js Web Dashboard** powered by **Turborepo** and **pnpm workspaces**.

[![CI](https://github.com/dispare-org/dispare/actions/workflows/ci.yml/badge.svg)](https://github.com/dispare-org/dispare/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/package_manager-pnpm-orange.svg)](https://pnpm.io/)
[![Turborepo](https://img.shields.io/badge/built_with-Turborepo-000000.svg)](https://turbo.build/)

---

## 🚀 Key Features

* **Monorepo Architecture**: Clean separation between applications (`apps/*`) and shared internal packages (`packages/*`).
* **Discord Bot (`apps/bot`)**: Fast, modular slash command & event handling built with TypeScript and `discord.js`.
* **Web Dashboard (`apps/web`)**: Next.js App Router web application with modern aesthetics, OAuth integration, and server-side safety.
* **Shared Database (`packages/database`)**: Single source of truth using Drizzle ORM and PostgreSQL.
* **Strict Package Boundaries**: Node subpath exports prevent internal source leaks between packages.
* **Smart Pipelines**: Turborepo pipeline caching build outputs while keeping database migrations uncached.
* **Type-Safe Environment Variables**: Runtime Zod validation preventing runtime crashes from missing configs.

---

## 📂 Architecture Overview

```text
dispare/
├── .github/                 # CI/CD Workflows & Community templates
├── apps/
│   ├── bot/                 # Discord Bot (TypeScript + discord.js)
│   └── web/                 # Web Application (Next.js App Router)
├── packages/
│   ├── config/              # Shared tsconfig & tooling definitions
│   ├── database/            # Drizzle ORM database client & schema
│   └── types/               # Cross-cutting TypeScript contracts & types
├── .env.example             # Clean, commented environment variable template
├── turbo.json               # Turbo build cache & dependency pipelines
└── pnpm-workspace.yaml      # Monorepo workspace configuration
```

---

## ⚡ Quick Start

```bash
# 1. Clone repository
git clone https://github.com/dispare-org/dispare.git
cd dispare

# 2. Install dependencies
pnpm install

# 3. Configure environment
cp .env.example .env

# 4. Push database schema
pnpm db:push

# 5. Start dev server (both bot & web concurrently)
pnpm dev
```

---

## 📜 Contributing & Community

Dispare is fully open-source and welcoming to contributors of all skill levels.
* Please review [CONTRIBUTING.md](CONTRIBUTING.md) before submitting code.
* Read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to understand community standards.
* For security vulnerabilities, refer to [SECURITY.md](SECURITY.md).

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.
