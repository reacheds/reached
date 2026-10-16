export default function HomePage() {
  return (
    <main className="container" style={{ paddingTop: "60px" }}>
      {/* Hero Section */}
      <section style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", paddingBottom: "60px" }}>
        <div style={{ marginBottom: "20px" }}>
          <span className="badge">🚀 Turborepo + pnpm + Next.js + Discord.js</span>
        </div>
        <h1 style={{ fontSize: "52px", fontWeight: "800", lineHeight: "1.15", letterSpacing: "-1.5px", marginBottom: "24px" }}>
          Topluluk Odaklı, Gelişmiş <br />
          <span className="gradient-text">Discord & Web Monoreposu</span>
        </h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", marginBottom: "36px", lineHeight: "1.7" }}>
          Dispare; TypeScript ile geliştirilmiş modern bir Discord botunu, Next.js web yönetim panelini ve paylaşılan veritabanı paketini tek bir çatı altında birleştiren, tamamen açık kaynaklı bir ekosistemdir.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <a href="#quickstart" className="btn btn-primary">
            Hemen Katkıda Bulunun ⚡
          </a>
          <a href="#architecture" className="btn btn-secondary">
            Mimariyi İnceleyin 🔍
          </a>
        </div>
      </section>

      {/* Live System Specs Cards */}
      <section id="features" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "80px" }}>
        <div className="glass-card">
          <div style={{ fontSize: "28px", marginBottom: "12px" }}>🤖</div>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>apps/bot</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "16px" }}>
            TypeScript ve Discord.js v14 ile geliştirilmiş, modüler slash komut mimarisine sahip bağımsız bot uygulaması.
          </p>
          <div style={{ fontSize: "12px", color: "var(--accent-discord)", fontWeight: "600" }}>
            tsup &bull; tsx watch &bull; Modüler Commands &bull; Shared DB
          </div>
        </div>

        <div className="glass-card">
          <div style={{ fontSize: "28px", marginBottom: "12px" }}>🌐</div>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>apps/web</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "16px" }}>
            Next.js App Router ile güçlendirilmiş, sunucu taraflı tip güvenliği ve modern dashboard altyapısı sunan web arayüzü.
          </p>
          <div style={{ fontSize: "12px", color: "#a855f7", fontWeight: "600" }}>
            App Router &bull; SSR/RSC &bull; OAuth2 &bull; Zod Validation
          </div>
        </div>

        <div className="glass-card">
          <div style={{ fontSize: "28px", marginBottom: "12px" }}>🗄️</div>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>packages/database</h3>
          <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "16px" }}>
            Drizzle ORM ile ortak veritabanı şeması ve istemcisi. Hem bot hem web aynı modelleri güvenle okur ve yazar.
          </p>
          <div style={{ fontSize: "12px", color: "#ec4899", fontWeight: "600" }}>
            Drizzle ORM &bull; PostgreSQL &bull; Subpath Exports &bull; Zero Leaks
          </div>
        </div>
      </section>

      {/* Technical Highlights Section */}
      <section id="architecture" className="glass-card" style={{ padding: "40px", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
          📐 Açık Kaynak Standartları & Teknik Mimari
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          <div>
            <h4 style={{ color: "#818cf8", marginBottom: "8px" }}>1. Paket İzolasyonu</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Paketlerin iç dosyalarına doğrudan erişim yasaktır. Her paket <code>package.json</code> üzerindeki resmi <code>exports</code> alanından beslenir.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#c084fc", marginBottom: "8px" }}>2. Akıllı Pipeline Caching</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Turborepo ile build, lint ve type-check çıktıları akıllıca önbelleklenir. Database migration komutları ise cache dışı bırakılır.
            </p>
          </div>

          <div>
            <h4 style={{ color: "#f472b6", marginBottom: "8px" }}>3. Güvenli CI/CD Ayrımı</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              <code>ci.yml</code>, <code>release.yml</code> ve dağıtım iş akışları (web / bot) ayrı dosyalarda izole sorumluluklarla çalışır.
            </p>
          </div>
        </div>
      </section>

      {/* Quickstart Code Block */}
      <section id="quickstart" style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "16px" }}>5 Dakikada Geliştirmeye Başlayın</h2>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left", background: "#06080c", padding: "20px 24px", borderRadius: "12px", border: "1px solid var(--border-color)", fontFamily: "monospace", fontSize: "14px", color: "#7dd3fc", lineHeight: "1.8" }}>
          <p style={{ color: "#8b949e" }}># 1. Depoyu klonlayın ve bağımlılıkları yükleyin</p>
          <p>git clone https://github.com/dispare-org/dispare.git</p>
          <p>cd dispare && pnpm install</p>
          <br />
          <p style={{ color: "#8b949e" }}># 2. Ortam değişkenlerini hazırlayın ve dev modunu başlatın</p>
          <p>cp .env.example .env</p>
          <p style={{ color: "#34d399" }}>pnpm dev</p>
        </div>
      </section>
    </main>
  );
}
