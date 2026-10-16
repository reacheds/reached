export default function HomePage() {
  return (
    <main className="container" style={{ paddingTop: "80px" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", maxWidth: "880px", margin: "0 auto", paddingBottom: "72px" }}>
        <div style={{ marginBottom: "24px" }}>
          <span className="badge-subtle">Turborepo &bull; Next.js &bull; Discord.js &bull; Drizzle</span>
        </div>

        <h1 style={{ fontSize: "56px", fontWeight: "800", lineHeight: "1.12", letterSpacing: "-2px", color: "var(--text-primary)", marginBottom: "24px" }}>
          Engineered for Community. <br />
          Built with Modern TypeScript.
        </h1>

        <p style={{ fontSize: "20px", color: "var(--text-secondary)", marginBottom: "40px", lineHeight: "1.6", maxWidth: "700px", margin: "0 auto 40px auto" }}>
          Dispare brings a modular Discord bot, a Next.js web application, and shared database models together under an open-source, production-ready architecture.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a href="#quickstart" className="btn-pill-primary">
            Get Started
          </a>
          <a href="#architecture" className="btn-pill-secondary">
            Explore Architecture
          </a>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "80px" }}>
        <div className="bento-card">
          <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-secondary)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Application
          </div>
          <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>
            apps/bot
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
            Modular slash command architecture built with Discord.js v14 and tsup. Scalable event pipelines, automatic database synchronization, and clean Unix-style logging.
          </p>
          <div style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "500" }}>
            TypeScript &bull; tsup &bull; tsx watch &bull; Discord Gateway
          </div>
        </div>

        <div className="bento-card">
          <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-secondary)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Interface
          </div>
          <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>
            apps/web
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
            Next.js App Router web platform with server-side safety, clean Framer Bento aesthetic, fast static rendering, and authentication scaffolding.
          </p>
          <div style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "500" }}>
            Next.js 15 &bull; App Router &bull; Zod &bull; Vanilla Design System
          </div>
        </div>

        <div className="bento-card">
          <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-secondary)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Persistence
          </div>
          <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "12px", color: "var(--text-primary)" }}>
            packages/database
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
            Single source of truth powered by Drizzle ORM and PostgreSQL. Strict package boundary exports prevent deep source leakages across applications.
          </p>
          <div style={{ fontSize: "13px", color: "var(--text-muted)", fontWeight: "500" }}>
            Drizzle ORM &bull; PostgreSQL &bull; Subpath Exports
          </div>
        </div>
      </section>

      {/* Architecture Highlights */}
      <section id="architecture" className="bento-card" style={{ padding: "48px", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-1px", marginBottom: "32px", color: "var(--text-primary)" }}>
          Technical Architecture & Standards
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
              1. Package Boundaries
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>
              Internal file leakages are prohibited. Modules export explicitly via <code>package.json</code> subpaths and modern TypeScript bundler resolution.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
              2. Smart Pipeline Caching
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>
              Turborepo caches pure compilation artifacts while database migrations and sync commands bypass cache safely.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "18px", fontWeight: "700", color: "var(--text-primary)", marginBottom: "8px" }}>
              3. Decoupled CI/CD
            </h4>
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6" }}>
              Continuous integration (<code>ci.yml</code>), release management (<code>release.yml</code>), and deployment pipelines run under isolated workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Quickstart Code Block */}
      <section id="quickstart" style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-1px", marginBottom: "16px", color: "var(--text-primary)" }}>
          Get Started in 5 Minutes
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "16px", marginBottom: "28px" }}>
          Clone the repository, configure your database, and launch both services concurrently.
        </p>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "left", background: "#141414", padding: "24px 28px", borderRadius: "16px", fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace", fontSize: "14px", color: "#e5e7eb", lineHeight: "1.8", boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.2)" }}>
          <p style={{ color: "#737373" }}># 1. Clone repository and install dependencies</p>
          <p style={{ color: "#f3f4f6" }}>git clone https://github.com/disparee/disparee.git</p>
          <p style={{ color: "#f3f4f6" }}>cd disparee && pnpm install</p>
          <br />
          <p style={{ color: "#737373" }}># 2. Configure environment and push database schema</p>
          <p style={{ color: "#f3f4f6" }}>cp .env.example .env</p>
          <p style={{ color: "#f3f4f6" }}>pnpm db:push</p>
          <br />
          <p style={{ color: "#737373" }}># 3. Launch both bot and web dashboard</p>
          <p style={{ color: "#34d399", fontWeight: "600" }}>pnpm dev</p>
        </div>
      </section>
    </main>
  );
}
