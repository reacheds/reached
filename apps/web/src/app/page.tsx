export default function HomePage() {
  return (
    <main className="container" style={{ paddingTop: "60px" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", paddingBottom: "60px" }}>
        <div style={{ marginBottom: "20px" }}>
          <span className="badge">🚀 Turborepo + pnpm + Next.js + Discord.js</span>
        </div>
        <h1 style={{ fontSize: "52px", fontWeight: "800", lineHeight: "1.15", letterSpacing: "-1.5px", marginBottom: "24px" }}>
          Community-Driven, Advanced <br />
          <span className="gradient-text">Discord & Web Monorepo</span>
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", marginBottom: "36px", lineHeight: "1.7" }}>
          Dispare is a fully open-source ecosystem uniting a modern TypeScript Discord bot, a Next.js web dashboard, and a shared database package under a single, unified architecture.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a href="#quickstart" className="btn btn-primary">
            Start Contributing ⚡
          </a>
          <a href="#architecture" className="btn btn-secondary">
            Explore Architecture 🔍
          </a>
        </div>
      </section>

      {/* Live System Specs Cards */}
      <section id="features" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "80px" }}>
        <div className="glass-card">
          <div style={{ fontSize: "28px", marginBottom: "12px" }}>🤖</div>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>apps/bot</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "16px" }}>
            Modular slash command architecture built with TypeScript and Discord.js v14, decoupled and ready for production.
          </p>
          <div style={{ fontSize: "12px", color: "var(--accent-discord)", fontWeight: "600" }}>
            tsup &bull; tsx watch &bull; Modular Commands &bull; Shared DB
          </div>
        </div>

        <div className="glass-card">
          <div style={{ fontSize: "28px", marginBottom: "12px" }}>🌐</div>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>apps/web</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "16px" }}>
            Next.js App Router web application providing modern aesthetics, server-side type safety, and dashboard authentication.
          </p>
          <div style={{ fontSize: "12px", color: "#a855f7", fontWeight: "600" }}>
            App Router &bull; SSR/RSC &bull; OAuth2 &bull; Zod Validation
          </div>
        </div>

        <div className="glass-card">
          <div style={{ fontSize: "28px", marginBottom: "12px" }}>🗄️</div>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>packages/database</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "16px" }}>
            Single source of truth powered by Drizzle ORM and PostgreSQL. Both bot and web access synchronized data models safely.
          </p>
          <div style={{ fontSize: "12px", color: "#ec4899", fontWeight: "600" }}>
            Drizzle ORM &bull; PostgreSQL &bull; Subpath Exports &bull; Zero Leaks
          </div>
        </div>
      </section>

      {/* Technical Highlights Section */}
      <section id="architecture" className="glass-card" style={{ padding: "40px", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
          📐 Open Source Standards & Technical Architecture
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          <div>
            <h4 style={{ color: "#818cf8", marginBottom: "8px" }}>1. Package Boundaries</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Direct access to internal source files is strictly prohibited. Every package is consumed via explicit <code>package.json</code> subpath exports.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#c084fc", marginBottom: "8px" }}>2. Smart Pipeline Caching</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Turborepo intelligently caches build, lint, and type-check outputs while keeping database migration tasks completely uncached.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#f472b6", marginBottom: "8px" }}>3. Decoupled CI/CD</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Workflows for <code>ci.yml</code>, <code>release.yml</code>, and deployment targets (web / bot) are isolated into dedicated, modular pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Quickstart Code Block */}
      <section id="quickstart" style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "16px" }}>Get Started in 5 Minutes</h2>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left", background: "#06080c", padding: "20px 24px", borderRadius: "12px", border: "1px solid var(--border-color)", fontFamily: "monospace", fontSize: "14px", color: "#7dd3fc", lineHeight: "1.8" }}>
          <p style={{ color: "#8b949e" }}># 1. Clone repository and install dependencies</p>
          <p>git clone https://github.com/disparee/disparee.git</p>
          <p>cd disparee && pnpm install</p>
          <br />
          <p style={{ color: "#8b949e" }}># 2. Configure environment and launch dev servers</p>
          <p>cp .env.example .env</p>
          <p style={{ color: "#34d399" }}>pnpm dev</p>
        </div>
      </section>
    </main>
  );
}
