import Link from "next/link";

export function Footer() {
  return (
    <footer className="framer-footer">
      <div className="framer-footer-grid">
        {/* Brand Column & Copyright */}
        <div className="framer-footer-brand-col">
          <Link href="/" className="framer-footer-logo-link" aria-label="Reached Home">
            <span className="framer-footer-logo-text">Reached</span>
          </Link>

          <p className="framer-footer-copyright">
            &copy; Reached 2024&ndash;2026.
          </p>
        </div>

        {/* Products Column */}
        <div className="framer-footer-col framer-footer-col-products">
          <p className="framer-footer-col-title">Products</p>
          <ul className="framer-footer-list">
            <li>
              <Link href="#pricing" className="framer-footer-link">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#bot" className="framer-footer-link">
                <span>Discord Bot</span>
                <span className="framer-footer-badge">New</span>
              </Link>
            </li>
            <li>
              <Link href="#dashboard" className="framer-footer-link">
                <span>Dashboard</span>
                <span className="framer-footer-badge">New</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="framer-footer-col framer-footer-col-resources">
          <p className="framer-footer-col-title">Resources</p>
          <ul className="framer-footer-list">
            <li>
              <Link href="/blog" className="framer-footer-link">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="framer-footer-link">
                Changelog
              </Link>
            </li>
            <li>
              <Link href="/explore" className="framer-footer-link">
                Explore
              </Link>
            </li>
            <li>
              <Link href="/colors" className="framer-footer-link">
                Colors
              </Link>
            </li>
            <li>
              <Link href="/glossary" className="framer-footer-link">
                Glossary
              </Link>
            </li>
            <li>
              <Link href="/merch" className="framer-footer-link">
                Merch
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="framer-footer-col framer-footer-col-company">
          <p className="framer-footer-col-title">Company</p>
          <ul className="framer-footer-list">
            <li>
              <Link href="/contact" className="framer-footer-link">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="framer-footer-link">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/help" className="framer-footer-link">
                Help center
              </Link>
            </li>
          </ul>
        </div>

        {/* Bottom Legal & Socials Row */}
        <div className="framer-footer-bottom-row">
          <div className="framer-footer-legal-links">
            <Link href="/privacy" className="framer-footer-legal-link">
              Privacy
            </Link>
            <Link href="/terms" className="framer-footer-legal-link">
              Terms
            </Link>
            <Link href="/copyright" className="framer-footer-legal-link">
              Copyright
            </Link>
          </div>

          <span className="framer-footer-bottom-divider" aria-hidden="true" />

          <div className="framer-footer-socials">
            {/* YouTube Icon */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="framer-footer-social-link"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="framer-footer-social-svg" aria-hidden="true">
                <path d="M19.615 6.184c-.23-.866-.91-1.547-1.776-1.777C16.275 4 10 4 10 4s-6.275 0-7.839.407c-.866.23-1.547.91-1.777 1.777C0 7.747 0 10 0 10s0 2.253.384 3.816c.23.866.91 1.547 1.777 1.777C3.725 16 10 16 10 16s6.275 0 7.839-.407c.866-.23 1.547-.91 1.776-1.777C20 12.253 20 10 20 10s0-2.253-.385-3.816zM8 12.667V7.333L13 10l-5 2.667z" />
              </svg>
              <span className="sr-only">YouTube</span>
            </a>

            {/* X / Twitter Icon */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="framer-footer-social-link"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="framer-footer-social-svg" aria-hidden="true">
                <path d="M15.542 2H18.25L12.333 8.762L19.292 18H13.843L9.575 12.418L4.692 18H1.981L8.312 10.764L1.667 2H7.254L11.109 7.096L15.542 2ZM14.592 16.379H16.092L6.442 3.535H4.831L14.592 16.379Z" />
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="framer-footer-social-link"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="framer-footer-social-svg" aria-hidden="true">
                <path d="M18.5 2h-17A1.5 1.5 0 0 0 0 3.5v13A1.5 1.5 0 0 0 1.5 18h17a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 18.5 2zM6 15H3.5V7.5H6V15zM4.75 6.35a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM16.5 15H14v-4c0-.95-.02-2.18-1.33-2.18-1.33 0-1.53 1.04-1.53 2.11V15H8.64V7.5h2.4v1.03h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.66 3 3.83V15z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
