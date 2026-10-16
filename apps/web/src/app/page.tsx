import { Button } from "@/components/button";
import { PromptGrid } from "@/components/prompt-grid";

export default function HomePage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      {/* Hero Section (Report 1): 1864px x 700px, Padding 180px 0px 96px 0px, container-834, block-hero */}
      <section className="framer-hero-section">
        <div className="framer-container-834">
          <div className="framer-block-hero">
            <h1 className="framer-hero-title">
              Engineered for Community. <br />
              Built with Modern TypeScript.
            </h1>

            <p className="framer-hero-subtitle">
              Reached brings a modular Discord bot, a Next.js web application, and shared database models together under an open-source, production-ready architecture.
            </p>

            <div className="framer-hero-actions">
              <Button href="https://github.com/reached/reached" variant="primary">
                Connect MCP
              </Button>
              <Button href="#pricing" variant="secondary">
                See plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section (Report 2): section-wrapper (Bg: #FFFFFF, z: 2) -> section-content (Padding: 120px 0px, Gap: 80px) */}
      <section className="framer-section-wrapper">
        <div className="framer-section-content">
          {/* container-834: block-title -> text -> Title H2 + Subtitle H4 */}
          <div className="framer-container-834">
            <div className="framer-block-title">
              <div className="framer-title-text">
                <div className="framer-title-heading">
                  <h2 className="framer-section-h2">
                    Build faster with Reached. <br />
                    Engineered for communities.
                  </h2>
                </div>

                <div className="framer-subtitle-heading">
                  <h4 className="framer-section-h4">Copy a prompt to try it yourself.</h4>
                </div>
              </div>
            </div>
          </div>

          {/* container-1262: 3x2 Grid (Cols: 407.333px x 3, Rows: 194px x 2, Gap: 20px) */}
          <PromptGrid />
        </div>
      </section>
    </main>
  );
}
