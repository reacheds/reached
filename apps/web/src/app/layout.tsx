import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dispare | Open-Source Discord Bot & Web Dashboard",
  description: "Modern, high-performance community monorepo powered by Next.js, Discord.js, and Turborepo.",
  keywords: ["Discord Bot", "Next.js", "Monorepo", "Turborepo", "TypeScript", "Drizzle ORM"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ borderBottom: "1px solid var(--border-color)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 50 }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "70px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "var(--accent-gradient)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "18px" }}>
                D
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700", letterSpacing: "-0.5px" }}>Dispare</span>
              <span className="badge">Open Source</span>
            </div>
            <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <a href="#features" style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "500" }}>Features</a>
              <a href="#architecture" style={{ color: "var(--text-muted)", fontSize: "14px", fontWeight: "500" }}>Architecture</a>
              <a href="https://github.com/disparee/disparee" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: "8px 16px", fontSize: "13px" }}>
                GitHub ⭐
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer style={{ borderTop: "1px solid var(--border-color)", padding: "40px 0", marginTop: "80px", color: "var(--text-muted)", fontSize: "14px" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <p><strong>Dispare</strong> &copy; 2026. Fully open-source under the MIT License.</p>
              <p style={{ marginTop: "4px" }}>Community-driven, modular, and secure ecosystem.</p>
            </div>
            <div style={{ display: "flex", gap: "24px" }}>
              <a href="/CONTRIBUTING.md">Contributing</a>
              <a href="/SECURITY.md">Security</a>
              <a href="/CODE_OF_CONDUCT.md">Code of Conduct</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
