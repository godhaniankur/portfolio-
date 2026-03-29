import { useState, useEffect, useRef } from "react";

const TYPING_PHRASES = [
  "Mock Data Generator",
  "Copy-Paste API Links",
  "JSON Faker Toolkit",
  "Test Payload Builder",
  "Dev Sandbox Tools",
];

const FEATURES = [
  {
    icon: "⚡",
    tag: "INSTANT",
    title: "One-Click Mock Data",
    desc: "Generate realistic JSON payloads for users, products, orders, and more — ready to paste into your API client.",
    color: "from-cyan-500/10 to-transparent border-cyan-500/30",
    accent: "text-cyan-400",
  },
  {
    icon: "🔗",
    tag: "SHARABLE",
    title: "Copy-Paste Endpoints",
    desc: "Pre-built REST endpoints that return live mock responses. Share URLs with your team, no setup needed.",
    color: "from-violet-500/10 to-transparent border-violet-500/30",
    accent: "text-violet-400",
  },
  {
    icon: "🛠",
    tag: "CUSTOM",
    title: "Schema Builder",
    desc: "Define your own data shape. Our schema engine generates perfectly typed data matching your model every time.",
    color: "from-emerald-500/10 to-transparent border-emerald-500/30",
    accent: "text-emerald-400",
  },
  {
    icon: "📋",
    tag: "HISTORY",
    title: "Clipboard History",
    desc: "Every copy is logged. Revisit, re-copy, or share any snippet from your session instantly.",
    color: "from-amber-500/10 to-transparent border-amber-500/30",
    accent: "text-amber-400",
  },
];

const MOCK_CATEGORIES = [
  { label: "Users & Auth", count: "24 templates", icon: "👤" },
  { label: "E-commerce", count: "18 templates", icon: "🛒" },
  { label: "Payments", count: "12 templates", icon: "💳" },
  { label: "Geo & Location", count: "9 templates", icon: "🌍" },
  { label: "Media & Files", count: "15 templates", icon: "🖼" },
  { label: "Analytics", count: "11 templates", icon: "📊" },
  { label: "Notifications", count: "8 templates", icon: "🔔" },
  { label: "Social Graph", count: "7 templates", icon: "🔗" },
];

const LINKS = [
  { method: "GET", url: "/api/mock/users?count=10", badge: "JSON", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
  { method: "POST", url: "/api/mock/orders/generate", badge: "JSON", color: "bg-violet-500/20 text-violet-300 border-violet-500/40" },
  { method: "GET", url: "/api/mock/products?category=electronics", badge: "JSON", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" },
  { method: "DELETE", url: "/api/mock/session/clear", badge: "204", color: "bg-red-500/20 text-red-300 border-red-500/40" },
];

function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    let timeout;
    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPING_PHRASES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <span className="text-cyan-400">
      {displayed}
      <span className="animate-pulse text-cyan-300">|</span>
    </span>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-auto text-xs px-2 py-1 rounded border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-slate-400 hover:text-white font-mono"
    >
      {copied ? "✓ copied" : "copy"}
    </button>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("json");
  const codeSnippets = {
    json: `{
  "id": "usr_8f3kA9",
  "name": "Lena Hartwell",
  "email": "lena.h@devmail.io",
  "role": "admin",
  "createdAt": "2025-11-03T08:22:19Z",
  "avatar": "https://mock.dev/avatars/lena"
}`,
    curl: `curl -X GET \\
  "https://toolkit.mock/api/users?count=1" \\
  -H "X-Mock-Key: demo_key_abc123" \\
  -H "Accept: application/json"`,
    fetch: `const res = await fetch(
  "https://toolkit.mock/api/users?count=1",
  {
    headers: {
      "X-Mock-Key": "demo_key_abc123",
    },
  }
);
const data = await res.json();`,
  };

  return (
    <div
      className="min-h-screen bg-[#0b0f14] text-slate-100"
      style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@400;500;600&display=swap');
        .sans { font-family: 'Inter', sans-serif; }
        .glow-cyan { text-shadow: 0 0 18px rgba(34,211,238,0.5); }
        .card-hover { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(0,0,0,0.4); }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0b0f14; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
        .grid-bg {
          background-image: linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .method-get { color: #4ade80; }
        .method-post { color: #a78bfa; }
        .method-delete { color: #f87171; }
      `}</style>

      {/* ── HERO ────────────────────────────────── */}
      <section className="relative grid-bg px-6 pt-24 pb-20 text-center overflow-hidden">
        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs mb-8 sans">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            v2.4 — Now with Schema Builder
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
            Developer Testing Toolkit
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 min-h-[2.5rem]">
            <TypingText />
          </h2>
          <p className="sans text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Stop hand-crafting test payloads. Generate realistic mock data and
            shareable copy-paste API links in seconds — built for developers who
            move fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="sans px-7 py-3 bg-cyan-500 text-[#0b0f14] font-semibold rounded text-sm hover:bg-cyan-400 transition-all w-full sm:w-auto">
              Start Generating Free →
            </button>
            <button className="sans px-7 py-3 border border-white/15 text-slate-300 rounded text-sm hover:border-white/30 hover:text-white transition-all w-full sm:w-auto">
              View Docs
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-14 text-center">
            {[["48+", "Data Templates"], ["∞", "Requests / mo Free"], ["< 50ms", "Response Time"]].map(([val, label]) => (
              <div key={label}>
                <div className="text-xl font-bold text-white glow-cyan">{val}</div>
                <div className="sans text-xs text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CODE PREVIEW ────────────────────────── */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="rounded-xl border border-white/8 bg-[#0e1420] overflow-hidden shadow-2xl">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0a0d13]">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-slate-500">response preview</span>

            {/* Tabs */}
            <div className="ml-auto flex items-center gap-1">
              {["json", "curl", "fetch"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs px-3 py-1 rounded transition-all ${
                    activeTab === tab
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Code body */}
          <div className="p-5 relative">
            <pre className="text-sm text-slate-300 leading-relaxed overflow-x-auto">
              <code>{codeSnippets[activeTab]}</code>
            </pre>
            <div className="absolute top-4 right-4">
              <CopyButton text={codeSnippets[activeTab]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────── */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs text-cyan-400 tracking-widest mb-2">// WHAT WE OFFER</p>
          <h2 className="sans text-3xl font-semibold text-white">Everything you need to test faster</h2>
          <p className="sans text-slate-500 mt-3 text-sm max-w-lg mx-auto">
            From data generation to live endpoints — all the tools that belong in your
            dev workflow, finally in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className={`card-hover rounded-xl border bg-gradient-to-b p-5 ${f.color}`}
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <div className={`text-[10px] font-bold tracking-widest mb-2 ${f.accent}`}>
                {f.tag}
              </div>
              <h3 className="sans font-semibold text-white text-sm mb-2">{f.title}</h3>
              <p className="sans text-xs text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MOCK CATEGORIES ──────────────────────── */}
      <section className="px-6 py-16 bg-[#0e1218] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs text-violet-400 tracking-widest mb-2">// MOCK DATA CATALOG</p>
            <h2 className="sans text-3xl font-semibold text-white">Browse by category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MOCK_CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="card-hover flex flex-col items-start gap-2 rounded-lg border border-white/8 bg-white/[0.02] p-4 cursor-pointer hover:border-violet-500/40 hover:bg-violet-500/5 transition-all"
              >
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <p className="sans text-sm font-medium text-white">{cat.label}</p>
                  <p className="text-xs text-slate-500">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COPY-PASTE LINKS ─────────────────────── */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs text-emerald-400 tracking-widest mb-2">// COPY-PASTE LINKS</p>
          <h2 className="sans text-3xl font-semibold text-white">Shareable mock endpoints</h2>
          <p className="sans text-slate-500 mt-3 text-sm max-w-md mx-auto">
            Paste into Postman, Insomnia, or your browser — they just work.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <div
              key={link.url}
              className={`flex items-center gap-3 rounded-lg border p-3 ${link.color} bg-opacity-10 font-mono text-sm`}
            >
              <span className={`text-xs font-bold w-14 text-center ${
                link.method === "GET" ? "text-emerald-400" :
                link.method === "POST" ? "text-violet-400" :
                "text-red-400"
              }`}>
                {link.method}
              </span>
              <span className="text-slate-300 flex-1 truncate text-xs">{link.url}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full border ${link.color}`}>
                {link.badge}
              </span>
              <CopyButton text={`https://toolkit.mock${link.url}`} />
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="sans text-sm text-slate-500 hover:text-cyan-400 transition-colors">
            View all 200+ endpoints →
          </button>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="px-6 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[200px] rounded-full bg-violet-500/8 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="sans text-3xl md:text-4xl font-semibold text-white mb-4">
            Ship tests faster.<br />
            <span className="text-cyan-400">Stop mocking around.</span>
          </h2>
          <p className="sans text-slate-500 mb-8 text-sm">
            Free forever for individuals. No credit card. No setup. Just open and build.
          </p>
          <button className="sans px-8 py-4 bg-cyan-500 text-[#0b0f14] font-bold rounded text-sm hover:bg-cyan-400 transition-all">
            Open the Toolkit — It's Free →
          </button>
        </div>
      </section>


    </div>
  );
}
