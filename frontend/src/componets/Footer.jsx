export default function Footer() {
  const footerLinks = [
    { label: "Privacy", href: "/privacy" },
    { label: "About", href: "/About" },
    { label: "Support", href: "/contact" },
    { label: "GitHub", href: "#" }
  ];
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap');

        .footer-root {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: 'JetBrains Mono', monospace;
          background: rgba(8, 11, 16, 0.97);
          border-top: 1px solid #1a2030;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .footer-inner {
          display: flex;
          align-items: center;
          padding: 0 40px;
          height: 44px;
          gap: 20px;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1;
        }

        .footer-logo {
          font-size: 13px;
          font-weight: 700;
          color: #00e676;
          letter-spacing: 0.05em;
        }

        .footer-sep {
          color: #1e2a3a;
          font-size: 14px;
        }

        .footer-tagline {
          font-size: 10px;
          color: #2a3a4a;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .footer-center {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-metric {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 10px;
          color: #4a5a6a;
          background: #0d1117;
          border: 1px solid #1e2a3a;
          border-radius: 4px;
          padding: 2px 10px;
          letter-spacing: 0.06em;
        }

        .metric-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00e676;
        }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-link {
          font-size: 10px;
          color: #2a3a4a;
          cursor: pointer;
          letter-spacing: 0.08em;
          text-decoration: none;
          transition: color 0.2s;
          text-transform: uppercase;
        }

        .footer-link:hover {
          color: #00e676;
        }

        .footer-version {
          font-size: 10px;
          color: #1e2a3a;
          letter-spacing: 0.08em;
        }

        @media (max-width: 768px) {
          .footer-inner { padding: 0 16px; gap: 10px; }
          .footer-center, .footer-right { display: none; }
          .footer-tagline { display: none; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          {/* Left */}
          <div className="footer-left">
            <span className="footer-logo">⬡ Test Mode</span>
            <span className="footer-sep">·</span>
            <span className="footer-tagline">Mock data · Not for production</span>
          </div>

          {/* Center Metrics */}
          <div className="footer-center">
            <div className="footer-metric">
              <span className="metric-dot" />
              API UP
            </div>
            <div className="footer-metric">
              <span className="metric-dot" />
              38ms AVG
            </div>
            <div className="footer-metric">
              <span className="metric-dot" />
              99.99% UPTIME
            </div>
          </div>

          {/* Right Links */}
          <div className="footer-right">
           
            {footerLinks.map((link) => (
              <a
                key={link.label}
                className="footer-link"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <span className="footer-sep">·</span>
            <span className="footer-version">© 2026 devapi</span>
          </div>
        </div>
      </footer>
    </>
  );
}
