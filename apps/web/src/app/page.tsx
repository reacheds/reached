export default function HomePage() {
  return (
    <main className="container" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", maxWidth: "920px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            lineHeight: "1.08",
            letterSpacing: "-2.5px",
            color: "var(--text-primary)",
            marginBottom: "28px",
          }}
        >
          Engineered for Community. <br />
          Built with Modern TypeScript.
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "var(--text-secondary)",
            marginBottom: "44px",
            lineHeight: "1.6",
            maxWidth: "680px",
            margin: "0 auto 44px auto",
            letterSpacing: "-0.2px",
          }}
        >
          Dispare brings a modular Discord bot, a Next.js web application, and shared database models together under an open-source, production-ready architecture.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a href="https://github.com/disparee/disparee" target="_blank" rel="noreferrer" className="btn-pill-primary">
            Get Started
          </a>
          <a href="#about" className="btn-pill-secondary">
            Documentation
          </a>
        </div>
      </section>
    </main>
  );
}
