import Link from "next/link";

export function Navbar() {
  return (
    <nav className="framer-nav">
      <div className="framer-nav-grid">
        {/* Left Section: Brand & Main Navigation Links */}
        <div className="framer-nav-left">
          <Link
            href="/"
            className="framer-nav-logo-link"
            aria-label="Reached Home"
          >
            <span className="framer-nav-logo-text">Reached</span>
          </Link>

          <div className="framer-nav-links">
            <Link href="#mcp" className="framer-nav-link">
              MCP
            </Link>
            <Link href="#customers" className="framer-nav-link">
              Customers
            </Link>
            <Link href="#pricing" className="framer-nav-link">
              Pricing
            </Link>
          </div>
        </div>

        {/* Right Section: Social Links, Divider, Login & CTA */}
        <div className="framer-nav-right">
          <div className="framer-nav-actions">
            {/* YouTube Social Icon */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="framer-nav-icon-link"
              aria-label="Visit Reached on YouTube"
            >
              <svg
                className="framer-nav-icon-svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.615 6.184c-.23-.866-.91-1.547-1.776-1.777C16.275 4 10 4 10 4s-6.275 0-7.839.407c-.866.23-1.547.91-1.777 1.777C0 7.747 0 10 0 10s0 2.253.384 3.816c.23.866.91 1.547 1.777 1.777C3.725 16 10 16 10 16s6.275 0 7.839-.407c.866-.23 1.547-.91 1.776-1.777C20 12.253 20 10 20 10s0-2.253-.385-3.816zM8 12.667V7.333L13 10l-5 2.667z" />
              </svg>
              <span className="sr-only">Visit Reached on YouTube</span>
            </a>

            {/* X / Twitter Social Icon */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="framer-nav-icon-link"
              aria-label="Follow Reached on X"
            >
              <svg
                className="framer-nav-icon-svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M15.542 2H18.25L12.333 8.762L19.292 18H13.843L9.575 12.418L4.692 18H1.981L8.312 10.764L1.667 2H7.254L11.109 7.096L15.542 2ZM14.592 16.379H16.092L6.442 3.535H4.831L14.592 16.379Z" />
              </svg>
              <span className="sr-only">Follow Reached on X</span>
            </a>

            {/* Vertical 1px Divider */}
            <span className="framer-nav-divider" aria-hidden="true" />

            {/* Log In Link */}
            <Link href="/login" className="framer-nav-login">
              Log in
            </Link>

            {/* Join For Free Button */}
            <Link href="/signup" className="framer-nav-cta">
              <span>Join for free</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
