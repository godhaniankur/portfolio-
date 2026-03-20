import { useState } from "react";
import AdBanner from "../ads/AdBanner";


const endpoints = [
  {
    method: "GET",
    path: "/api/users",
    description: "Fetch all users",
    category: "Users",
    sampleResponse: { users: [{ id: 1, name: "Alice", role: "admin" }, { id: 2, name: "Bob", role: "user" }], total: 2 },
  },
  {
    method: "POST",
    path: "/api/users",
    description: "Create a new user",
    category: "Users",
    sampleBody: { name: "Charlie", email: "charlie@dev.io", role: "user" },
    sampleResponse: { id: 3, name: "Charlie", email: "charlie@dev.io", role: "user", createdAt: "2026-03-20T10:00:00Z" },
  },
  {
    method: "GET",
    path: "/api/products",
    description: "List all products",
    category: "Products",
    sampleResponse: { products: [{ id: 1, name: "Widget", price: 9.99 }], total: 1 },
  },
  {
    method: "DELETE",
    path: "/api/users/:id",
    description: "Delete a user by ID",
    category: "Users",
    sampleResponse: { success: true, message: "User deleted." },
  },
  {
    method: "PATCH",
    path: "/api/products/:id",
    description: "Update product details",
    category: "Products",
    sampleBody: { price: 14.99 },
    sampleResponse: { id: 1, name: "Widget", price: 14.99 },
  },
  {
    method: "GET",
    path: "/api/auth/token",
    description: "Retrieve auth token",
    category: "Auth",
    sampleResponse: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", expiresIn: 3600 },
  },
];

const stats = [
  { label: "Endpoints", value: "48", icon: "⬡" },
  { label: "Avg Latency", value: "38ms", icon: "◎" },
  { label: "Success Rate", value: "99.8%", icon: "◈" },
  { label: "Uptime", value: "99.99%", icon: "◉" },
];

const methodColors = {
  GET:    { bg: "#0d2b1e", text: "#00e676", border: "#00e676" },
  POST:   { bg: "#1a1e2e", text: "#7b8cff", border: "#7b8cff" },
  DELETE: { bg: "#2b0d0d", text: "#ff5252", border: "#ff5252" },
  PATCH:  { bg: "#2b1e0d", text: "#ffab40", border: "#ffab40" },
  PUT:    { bg: "#1e102b", text: "#ce93d8", border: "#ce93d8" },
};

const categories = ["All", "Users", "Products", "Auth"];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedEndpoint, setSelectedEndpoint] = useState(endpoints[0]);
  const [apiBase, setApiBase] = useState("https://api.yourservice.dev/v1");
  const [authToken, setAuthToken] = useState("Bearer YOUR_TOKEN_HERE");
  const [responseVisible, setResponseVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("response");

  const filtered = activeCategory === "All"
    ? endpoints
    : endpoints.filter(e => e.category === activeCategory);

  const handleSend = () => {
    setLoading(true);
    setResponseVisible(false);
    setTimeout(() => { setLoading(false); setResponseVisible(true); }, 900);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(selectedEndpoint.sampleResponse, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #080b10;
          color: #e2e8f0;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
        }

        /* Grid background */
        .page-grid-bg {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,230,118,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,230,118,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        /* Layout wrapper: space for sticky header (62px) and footer (44px) */
        .page-wrapper {
          position: relative;
          z-index: 1;
          padding-top: 62px;
          padding-bottom: 44px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* ── Hero ── */
        .hero {
          text-align: center;
          padding: 52px 40px 36px;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-block;
          background: #0d2b1e;
          color: #00e676;
          font-size: 11px;
          padding: 4px 14px;
          border-radius: 20px;
          border: 1px solid #00e676;
          margin-bottom: 20px;
          letter-spacing: 0.06em;
        }

        .hero-title {
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
          color: ##00e676;
        }

        .hero-accent { color: #00e676; }

        .hero-sub {
          color: #7a8a9a;
          font-size: 14px;
          max-width: 440px;
          margin: 0 auto 32px;
          line-height: 1.7;
        }

        .stats-row {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #0d1117;
          border: 1px solid #1e2a3a;
          border-radius: 10px;
          padding: 14px 26px;
          gap: 3px;
          transition: border-color 0.2s;
        }

        .stat-card:hover { border-color: #00e67644; }

        .stat-icon { font-size: 16px; color: #00e676; }
        .stat-value { font-size: 22px; font-weight: 700; color: #f0f4ff; }
        .stat-label { font-size: 10px; color: #4a5a6a; letter-spacing: 0.1em; text-transform: uppercase; }

        /* ── Config Bar ── */
        .config-bar {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 14px;
          padding: 14px 40px;
          background: #0d1117;
          border-top: 1px solid #1e2a3a;
          border-bottom: 1px solid #1e2a3a;
          flex-wrap: wrap;
        }

        .config-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
          min-width: 220px;
        }

        .config-label {
          font-size: 9px;
          color: #4a5a6a;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .config-input {
          background: #080b10;
          border: 1px solid #1e2a3a;
          border-radius: 6px;
          color: #00e676;
          padding: 7px 12px;
          font-size: 12px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
        }

        .config-input:focus { border-color: #00e67666; }

        /* ── Main Layout ── */
        .main-layout {
          position: relative;
          z-index: 2;
          display: flex;
          flex: 1;
          min-height: 0;
        }

        /* ── Sidebar ── */
        .sidebar {
          width: 272px;
          border-right: 1px solid #1e2a3a;
          background: #0a0d13;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 62px;
          height: calc(100vh - 62px - 44px);
          overflow: hidden;
        }

        .cat-row {
          display: flex;
          gap: 6px;
          padding: 14px 12px 10px;
          flex-wrap: wrap;
          border-bottom: 1px solid #1e2a3a;
        }

        .cat-btn {
          background: transparent;
          border: 1px solid #1e2a3a;
          color: #7a8a9a;
          border-radius: 6px;
          padding: 3px 10px;
          font-size: 10px;
          cursor: pointer;
          font-family: inherit;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.2s;
        }

        .cat-btn:hover { color: #c5d0de; border-color: #2a3a4a; }
        .cat-btn.active { background: #0d2b1e; color: #00e676; border-color: #00e676; }

        .ep-list { overflow-y: auto; flex: 1; }

        .ep-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 12px;
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #1a2030;
          border-left: 2px solid transparent;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          transition: all 0.15s;
        }

        .ep-row:hover { background: #0d1117; }
        .ep-row.active { background: #0d1520; border-left-color: #00e676; }

        .method-badge {
          font-size: 9px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 4px;
          border: 1px solid;
          letter-spacing: 0.07em;
          min-width: 52px;
          text-align: center;
          flex-shrink: 0;
          font-family: inherit;
        }

        .ep-path {
          font-size: 11px;
          color: #c5d0de;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── Panel ── */
        .panel {
          flex: 1;
          padding: 26px 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
        }

        .panel-header {
          border-bottom: 1px solid #1e2a3a;
          padding-bottom: 14px;
        }

        .panel-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }

        .method-badge-lg {
          font-size: 12px;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 6px;
          border: 1px solid;
          letter-spacing: 0.06em;
          font-family: inherit;
        }

        .panel-path {
          font-size: 14px;
          color: #c5d0de;
          word-break: break-all;
        }

        .panel-desc { color: #7a8a9a; font-size: 12px; }

        /* ── Boxes ── */
        .info-box {
          background: #0a0d13;
          border: 1px solid #1e2a3a;
          border-radius: 8px;
          padding: 14px 16px;
        }

        .box-title {
          font-size: 9px;
          color: #4a5a6a;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .header-row {
          display: flex;
          gap: 12px;
          font-size: 11px;
          margin-bottom: 4px;
        }

        .h-key { color: #7b8cff; min-width: 160px; }
        .h-val { color: #c5d0de; }

        .code-block {
          margin: 0;
          font-size: 12px;
          color: #00e676;
          font-family: inherit;
          line-height: 1.6;
          overflow-x: auto;
        }

        /* ── Send Button ── */
        .send-btn {
          background: #00e676;
          color: #080b10;
          border: none;
          border-radius: 8px;
          padding: 11px 28px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          letter-spacing: 0.05em;
          align-self: flex-start;
          box-shadow: 0 0 20px #00e67633;
          transition: all 0.2s;
        }

        .send-btn:hover:not(:disabled) {
          background: #00ff88;
          box-shadow: 0 0 32px #00e67666;
        }

        .send-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .spinner-row { display: flex; align-items: center; gap: 8px; }

        /* ── Response ── */
        .response-box {
          background: #0a0d13;
          border: 1px solid #1e2a3a;
          border-radius: 8px;
          overflow: hidden;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .response-tabs {
          display: flex;
          gap: 2px;
          padding: 8px 12px;
          border-bottom: 1px solid #1e2a3a;
          align-items: center;
        }

        .tab-btn {
          background: transparent;
          border: 1px solid transparent;
          color: #4a5a6a;
          font-size: 10px;
          padding: 3px 10px;
          border-radius: 4px;
          cursor: pointer;
          font-family: inherit;
          letter-spacing: 0.08em;
          transition: all 0.15s;
        }

        .tab-btn:hover { color: #c5d0de; }
        .tab-btn.active { color: #f0f4ff; border-color: #2a3a4a; background: #10161f; }

        .status-pill {
          margin-left: auto;
          background: #0d2b1e;
          color: #00e676;
          font-size: 10px;
          padding: 2px 10px;
          border-radius: 12px;
          border: 1px solid #00e676;
        }

        .copy-btn {
          background: transparent;
          border: 1px solid #1e2a3a;
          color: #7a8a9a;
          font-size: 10px;
          padding: 2px 10px;
          border-radius: 4px;
          cursor: pointer;
          font-family: inherit;
          margin-left: 8px;
          transition: all 0.15s;
        }

        .copy-btn:hover { color: #00e676; border-color: #00e67644; }

        .response-code {
          margin: 0;
          padding: 14px 16px;
          font-size: 12px;
          color: #a3e6c5;
          font-family: inherit;
          line-height: 1.7;
          overflow-x: auto;
          max-height: 280px;
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .hero { padding: 36px 20px 28px; }
          .config-bar { padding: 12px 16px; }
          .sidebar { display: none; }
          .panel { padding: 18px 16px; }
        }
      `}</style>

     
      {/* Background grid */}
      <div className="page-grid-bg" />

      {/* Page Content */}
      <div className="page-wrapper">

        {/* Hero */}
        <section className="hero">
          <div className="hero-badge">🟢 All systems operational</div>
          <h1 className="hero-title ">
            API Testing<br />
            <span className="hero-accent">Developer Hub</span>
          </h1>
          <p className="hero-sub">
            Explore, test, and integrate endpoints with live mock data. Built for speed.
          </p>
          <div className="stats-row">
            {stats.map(s => (
              <div className="stat-card" key={s.label}>
                <span className="stat-icon">{s.icon}</span>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Config Bar */}
        <div className="config-bar">
          <div className="config-field">
            <label className="config-label">BASE URL</label>
            <input className="config-input" value={apiBase} onChange={e => setApiBase(e.target.value)} />
          </div>
          <div className="config-field">
            <label className="config-label">AUTH TOKEN</label>
            <input className="config-input" value={authToken} onChange={e => setAuthToken(e.target.value)} />
          </div>
        </div>

        {/* Main */}
        <div className="main-layout">
            
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="cat-row">
              {categories.map(c => (
                <button
                  key={c}
                  className={`cat-btn${activeCategory === c ? " active" : ""}`}
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="ep-list">
              {filtered.map((ep, i) => (
                <button
                  key={i}
                  className={`ep-row${selectedEndpoint === ep ? " active" : ""}`}
                  onClick={() => { setSelectedEndpoint(ep); setResponseVisible(false); }}
                >
                  <span
                    className="method-badge"
                    style={{
                      color: methodColors[ep.method]?.text,
                      borderColor: methodColors[ep.method]?.border,
                      background: methodColors[ep.method]?.bg,
                    }}
                  >
                    {ep.method}
                  </span>
                  <span className="ep-path">{ep.path}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Panel */}
          <section className="panel">
            {/* Endpoint Header */}
            <div className="panel-header">
              <div className="panel-title-row">
                <span
                  className="method-badge-lg"
                  style={{
                    color: methodColors[selectedEndpoint.method]?.text,
                    borderColor: methodColors[selectedEndpoint.method]?.border,
                    background: methodColors[selectedEndpoint.method]?.bg,
                  }}
                >
                  {selectedEndpoint.method}
                </span>
                <span className="panel-path">{apiBase}{selectedEndpoint.path}</span>
              </div>
              <p className="panel-desc">{selectedEndpoint.description}</p>
            </div>

            {/* Headers */}
            <div className="info-box">
              <div className="box-title">Request Headers</div>
              {[
                ["Authorization", authToken],
                ["Content-Type", "application/json"],
                ["Accept", "application/json"],
              ].map(([k, v]) => (
                <div className="header-row" key={k}>
                  <span className="h-key">{k}</span>
                  <span className="h-val">{v}</span>
                </div>
              ))}
            </div>

            {/* Body */}
            {selectedEndpoint.sampleBody && (
              <div className="info-box">
                <div className="box-title">Request Body</div>
                <pre className="code-block">{JSON.stringify(selectedEndpoint.sampleBody, null, 2)}</pre>
              </div>
            )}

            {/* Send */}
            <button className="send-btn" onClick={handleSend} disabled={loading}>
              {loading
                ? <span className="spinner-row">⟳ Sending…</span>
                : "▶ Send Request"
              }
            </button>

            {/* Response */}
            {responseVisible && (
              <div className="response-box">
                <div className="response-tabs">
                  {["response", "headers", "curl"].map(t => (
                    <button
                      key={t}
                      className={`tab-btn${activeTab === t ? " active" : ""}`}
                      onClick={() => setActiveTab(t)}
                    >
                      {t.toUpperCase()}
                    </button>
                  ))}
                  <div className="status-pill">200 OK</div>
                  <button className="copy-btn" onClick={handleCopy}>
                    {copied ? "✓ Copied" : "⧉ Copy"}
                  </button>
                </div>

                {activeTab === "response" && (
                  <pre className="response-code">
                    {JSON.stringify(selectedEndpoint.sampleResponse, null, 2)}
                  </pre>
                )}
                {activeTab === "headers" && (
                  <pre className="response-code">
                    {`Content-Type: application/json\nX-Request-ID: a3f92c1b\nX-RateLimit-Remaining: 998\nCache-Control: no-store`}
                  </pre>
                )}
                {activeTab === "curl" && (
                  <pre className="response-code">
                    {`curl -X ${selectedEndpoint.method} \\\n  "${apiBase}${selectedEndpoint.path}" \\\n  -H "Authorization: ${authToken}" \\\n  -H "Content-Type: application/json"`
                    + (selectedEndpoint.sampleBody ? ` \\\n  -d '${JSON.stringify(selectedEndpoint.sampleBody)}'` : "")}
                  </pre>
                )}
              </div>
            )}
          </section>
             

       
        </div>
        <AdBanner />
       
      </div>

     
    </>
  );
}
