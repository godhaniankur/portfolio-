import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&display=swap');

        .header-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.3s ease;
        }

        .header-root.scrolled {
          box-shadow: 0 4px 32px rgba(0, 230, 118, 0.08);
        }

        .header-inner {
          display: flex;
          align-items: center;
          padding: 0 40px;
          height: 62px;
          background: rgba(8, 11, 16, 0.97);
          border-bottom: 1px solid #1a2030;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          gap: 24px;
          transition: background 0.3s ease;
        }

        .header-root.scrolled .header-inner {
          background: rgba(6, 8, 12, 0.99);
          border-bottom-color: #00e67622;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex: 1;
          text-decoration: none;
        }

        .logo-icon {
          font-size: 22px;
          color: #00e676;
          line-height: 1;
        }

        .logo-text {
          font-size: 18px;
          font-weight: 800;
          color: #00e676;
          letter-spacing: 0.04em;
        }

        .logo-badge {
          background: #0d2b1e;
          color: #00e676;
          font-size: 10px;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid #00e67644;
          letter-spacing: 0.08em;
        }

        .header-divider {
          width: 1px;
          height: 22px;
          background: #1e2a3a;
        }

        .header-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          color: #4a5a6a;
          letter-spacing: 0.06em;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00e676;
          box-shadow: 0 0 6px #00e676;
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          color: #7a8a9a;
          font-size: 12px;
          padding: 6px 14px;
          border-radius: 6px;
          cursor: pointer;
          letter-spacing: 0.05em;
          text-decoration: none;
          border: 1px solid transparent;
          transition: all 0.2s;
          background: transparent;
          font-family: inherit;
        }

        .nav-link:hover {
          color: #c5d0de;
          background: #0d1520;
          border-color: #1e2a3a;
        }

        .nav-link.active {
          color: #00e676;
          background: #0d2b1e;
          border-color: #00e67633;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid #1e2a3a;
          color: #7a8a9a;
          font-size: 12px;
          padding: 7px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-family: inherit;
          letter-spacing: 0.05em;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          border-color: #00e67644;
          color: #c5d0de;
        }

        .btn-primary {
          background: #00e676;
          color: #080b10;
          border: none;
          font-size: 12px;
          padding: 8px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-family: inherit;
          font-weight: 700;
          letter-spacing: 0.05em;
          transition: all 0.2s;
          box-shadow: 0 0 16px #00e67633;
        }

        .btn-primary:hover {
          background: #00ff88;
          box-shadow: 0 0 24px #00e67666;
        }

        /* Mobile hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }

        .ham-line {
          width: 22px;
          height: 2px;
          background: #7a8a9a;
          border-radius: 2px;
          transition: all 0.2s;
        }

        /* Mobile drawer */
        .mobile-menu {
          position: fixed;
          top: 62px;
          left: 0;
          right: 0;
          background: rgba(8, 11, 16, 0.99);
          border-bottom: 1px solid #1e2a3a;
          padding: 16px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 999;
          transform: translateY(-110%);
          transition: transform 0.3s ease;
          display: none;
        }

        .mobile-menu.open {
          transform: translateY(0);
        }

        .mobile-nav-link {
          color: #7a8a9a;
          font-size: 13px;
          padding: 10px 14px;
          border-radius: 6px;
          cursor: pointer;
          letter-spacing: 0.05em;
          border: 1px solid transparent;
          font-family: 'JetBrains Mono', monospace;
          background: transparent;
          text-align: left;
          transition: all 0.2s;
        }

        .mobile-nav-link:hover {
          color: #00e676;
          background: #0d2b1e;
          border-color: #00e67633;
        }

        @media (max-width: 768px) {
          .header-nav, .header-actions, .header-divider, .header-status { display: none; }
          .hamburger { display: flex; }
          .header-inner { padding: 0 20px; }
        }
      `}</style>

      <header className={`header-root${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          {/* Logo */}
          <a className="header-logo" href="#">
            <span className="logo-icon">⬡</span>
            <span className="logo-text"><a href="/">Test Mode</a></span>
            <span className="logo-badge">v2.4.1</span>
          </a>

          <div className="header-divider" />

          {/* Status */}
          <div className="header-status">
            <span className="status-dot" />
            OPERATIONAL
          </div>

          <div className="header-divider" />

          {/* Nav Links */}
          <nav className="header-nav">
            {[
              { label: "Playground", active: true },
              { label: "Docs" },
              { label: "Changelog" },
              { label: "Status" },
              { label: "SDKs" },
            ].map(({ label, active }) => (
              <a key={label} className={`nav-link${active ? " active" : ""}`} href="#">
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button className="btn-secondary">Sign In</button>
            <button className="text-green-600">Get API Key</button>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
            <span className="ham-line" />
            <span className="ham-line" />
            <span className="ham-line" />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={` sm:hidden mobile-menu ${menuOpen ? " open" : ""}`}>
          {["Playground", "Docs", "Changelog", "Status", "SDKs", "Sign In"].map(l => (
            <button key={l} className="mobile-nav-link">{l}</button>
          ))}
          <button className=" text-green-600" style={{ marginTop: 8 }}>Get API Key</button>
        </div>
      </header>
    </>
  );
}
