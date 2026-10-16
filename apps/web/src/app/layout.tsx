import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
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
        <Navbar />

        {children}

        <footer style={{ borderTop: "1px solid var(--border-color)", padding: "48px 0", marginTop: "120px", color: "var(--text-secondary)", fontSize: "14px" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p><strong>Dispare</strong> &copy; 2026. Fully open-source under the MIT License.</p>
              <p style={{ marginTop: "4px", color: "var(--text-muted)" }}>Community-driven, modular, and secure ecosystem.</p>
            </div>
            <div style={{ display: "flex", gap: "28px" }}>
              <a href="/CONTRIBUTING.md" style={{ transition: "color 0.2s" }}>Contributing</a>
              <a href="/SECURITY.md" style={{ transition: "color 0.2s" }}>Security</a>
              <a href="/CODE_OF_CONDUCT.md" style={{ transition: "color 0.2s" }}>Code of Conduct</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
