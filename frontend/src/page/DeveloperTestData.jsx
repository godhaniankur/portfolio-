import { useState, useMemo } from "react";
import { Address } from "../Provider/fake";



const FIELDS = ["longaddress", "Zipcode", "state", "city", "country", "countrycode"];

const STATE_COLORS = {
  Gujarat: "bg-emerald-900 text-emerald-300 border-emerald-700",
  Maharashtra: "bg-teal-900 text-teal-300 border-teal-700",
  Karnataka: "bg-green-900 text-green-300 border-green-700",
  Delhi: "bg-lime-900 text-lime-300 border-lime-700",
  "Tamil Nadu": "bg-cyan-900 text-cyan-300 border-cyan-700",
  Telangana: "bg-emerald-900 text-emerald-200 border-emerald-600",
  "West Bengal": "bg-teal-900 text-teal-200 border-teal-600",
  Rajasthan: "bg-green-900 text-green-200 border-green-600",
  "Uttar Pradesh": "bg-lime-900 text-lime-200 border-lime-600",
  Kerala: "bg-cyan-900 text-cyan-200 border-cyan-600",
};

export default function DeveloperTestData() {
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState("All");
  const [view, setView] = useState("grid"); // grid | table
  const [copied, setCopied] = useState(null);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;

  const states = useMemo(() => ["All", ...Array.from(new Set(Address.map((a) => a.state))).sort()], []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return Address.filter((a) => {
      const matchSearch =
        !q ||
        a.longaddress.toLowerCase().includes(q) ||
        a.city.toLowerCase().includes(q) ||
        a.state.toLowerCase().includes(q) ||
        String(a.Zipcode).includes(q);
      const matchState = filterState === "All" || a.state === filterState;
      return matchSearch && matchState;
    });
  }, [search, filterState]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  const copyEntryJSON = (entry, idx) => {
    copy(JSON.stringify(entry, null, 2), `json-${idx}`);
  };

  const stateTag = (state) => {
    const cls = STATE_COLORS[state] || "bg-green-900 text-green-300 border-green-700";
    return (
      <span className={`text-xs font-mono px-2 py-0.5 rounded border ${cls}`}>{state}</span>
    );
  };

  return (
    <div className="min-h-screen bg-black text-green-100" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>

      {/* ── HEADER ── */}
      <div className="border-b border-green-900 px-6 py-4 flex items-center justify-between sticky top-0 bg-black z-20">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-green-500 rounded-sm flex items-center justify-center text-black font-black text-sm tracking-tight">ADR</div>
          <div>
            <h1 className="text-green-300 font-bold text-base tracking-tight leading-none">Address Test Data</h1>
            <p className="text-green-700 text-xs mt-0.5">{Address.length} records · India</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-green-600 text-xs font-mono hidden sm:block">{filtered.length} results</span>
          <div className="flex border border-green-800 rounded overflow-hidden">
            <button onClick={() => setView("grid")} className={`px-3 py-1.5 text-xs font-mono transition-all ${view === "grid" ? "bg-green-500 text-black" : "text-green-600 hover:text-green-400"}`}>⊞ Grid</button>
            <button onClick={() => setView("table")} className={`px-3 py-1.5 text-xs font-mono transition-all ${view === "table" ? "bg-green-500 text-black" : "text-green-600 hover:text-green-400"}`}>☰ Table</button>
          </div>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="  min-h-10  ">
        <div className=" flex-1 min-w-48 w-full px-6 py-3 fixed border-y min-h-10 my-auto flex flex-wrap items-center justify-center z-10 border-green-900 bg-black ">
          {/* <span className="absolute left-3 top-2 text-green-700 text-xs">⌕</span>  */}
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search city, address, zip..."
            className="w-full my-auto+ bg-black border border-green-800 pl-7 pr-3 py-1.5 text-xs font-mono text-green-200 placeholder-green-800 rounded focus:outline-none focus:border-green-500 transition-all"
          />
        </div>
       
      </div>

      <div className="px-6 py-6">

        {/* ── GRID VIEW ── */}
        {view === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {paginated.map((addr, i) => {
              const idx = (page - 1) * PER_PAGE + i;
              return (
                <div
                  key={idx}
                  className="border border-green-900 rounded-lg p-4 hover:border-green-600 transition-all bg-black group relative cursor-pointer"
                  onClick={() => setSelected(selected === idx ? null : idx)}
                >
                  {/* Index badge */}
                  <div className="absolute top-3 right-3 text-green-800 text-xs font-mono">#{idx}</div>

                  {/* State tag */}
                  <div className="mb-2">{stateTag(addr.state)}</div>

                  {/* City */}
                  <div className="text-green-300 font-bold text-sm mb-1">{addr.city}</div>

                  {/* Address */}
                  <p className="text-green-700 text-xs leading-relaxed mb-3 line-clamp-2">{addr.longaddress}</p>

                  {/* Fields row */}
                  <div className="grid grid-cols-2 gap-1 mb-3">
                    {[
                      { label: "ZIP", val: addr.Zipcode },
                      { label: "CODE", val: addr.countrycode },
                      { label: "STATE", val: addr.state },
                      { label: "COUNTRY", val: addr.country },
                    ].map(({ label, val }) => (
                      <div key={label} className="bg-green-950 rounded px-2 py-1">
                        <div className="text-green-700 text-xs leading-none mb-0.5">{label}</div>
                        <div className="text-green-300 text-xs font-mono truncate">{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => { e.stopPropagation(); copy(addr.longaddress, `addr-${idx}`); }}
                      className="flex-1 py-1.5 text-xs font-mono border border-green-900 text-green-600 hover:border-green-500 hover:text-green-300 rounded transition-all"
                    >
                      {copied === `addr-${idx}` ? "✓ Copied" : "⎘ Address"}
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); copyEntryJSON(addr, idx); }}
                      className="flex-1 py-1.5 text-xs font-mono border border-green-900 text-green-600 hover:border-green-500 hover:text-green-300 rounded transition-all"
                    >
                      {copied === `json-${idx}` ? "✓ Copied" : "{ } JSON"}
                    </button>
                  </div>

                  {/* Expanded JSON */}
                  {selected === idx && (
                    <div className="mt-3 border-t border-green-900 pt-3">
                      <pre className="text-xs text-green-500 leading-relaxed overflow-auto max-h-40">
                        {JSON.stringify(addr, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ── TABLE VIEW ── */}
        {view === "table" && (
          <div className="border border-green-900 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono">
                <thead>
                  <tr className="border-b border-green-900 bg-green-950">
                    <th className="text-left px-4 py-3 text-green-500 uppercase tracking-widest">#</th>
                    <th className="text-left px-4 py-3 text-green-500 uppercase tracking-widest">Address</th>
                    <th className="text-left px-4 py-3 text-green-500 uppercase tracking-widest">City</th>
                    <th className="text-left px-4 py-3 text-green-500 uppercase tracking-widest">State</th>
                    <th className="text-left px-4 py-3 text-green-500 uppercase tracking-widest">ZIP</th>
                    <th className="text-left px-4 py-3 text-green-500 uppercase tracking-widest">Code</th>
                    <th className="text-left px-4 py-3 text-green-500 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((addr, i) => {
                    const idx = (page - 1) * PER_PAGE + i;
                    return (
                      <tr key={idx} className="border-b border-green-950 hover:bg-green-950 transition-colors">
                        <td className="px-4 py-3 text-green-800">{idx}</td>
                        <td className="px-4 py-3 text-green-300 max-w-xs truncate" title={addr.longaddress}>{addr.longaddress}</td>
                        <td className="px-4 py-3 text-green-400">{addr.city}</td>
                        <td className="px-4 py-3">{stateTag(addr.state)}</td>
                        <td className="px-4 py-3 text-green-400">{addr.Zipcode}</td>
                        <td className="px-4 py-3 text-green-500">{addr.countrycode}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-1">
                            <button
                              onClick={() => copy(addr.longaddress, `addr-${idx}`)}
                              className="px-2 py-1 border border-green-900 text-green-700 hover:text-green-300 hover:border-green-600 rounded transition-all"
                              title="Copy address"
                            >
                              {copied === `addr-${idx}` ? "✓" : "⎘"}
                            </button>
                            <button
                              onClick={() => copyEntryJSON(addr, idx)}
                              className="px-2 py-1 border border-green-900 text-green-700 hover:text-green-300 hover:border-green-600 rounded transition-all"
                              title="Copy JSON"
                            >
                              {copied === `json-${idx}` ? "✓" : "{}"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ── PAGINATION ── */}
        {totalPages > 1 && (
          <div className="flex flex-wrap  items-center justify-between mt-6">
            <span className="text-green-700 text-xs font-mono">
              Page {page} of {totalPages} · {filtered.length} records
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setPage(1)}
                disabled={page === 1}
                className="px-3 py-1.5 text-xs font-mono border border-green-900 text-green-600 hover:border-green-500 disabled:opacity-30 rounded transition-all"
              >«</button>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 text-xs font-mono border border-green-900 text-green-600 hover:border-green-500 disabled:opacity-30 rounded transition-all"
              >‹</button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const p = Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
                return (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-3 py-1.5 text-xs font-mono border rounded transition-all ${p === page ? "bg-green-500 text-black border-green-500" : "border-green-900 text-green-600 hover:border-green-500"}`}
                  >{p}</button>
                );
              })}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 text-xs font-mono border border-green-900 text-green-600 hover:border-green-500 disabled:opacity-30 rounded transition-all"
              >›</button>
              <button
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
                className="px-3 py-1.5 text-xs font-mono border border-green-900 text-green-600 hover:border-green-500 disabled:opacity-30 rounded transition-all"
              >»</button>
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-green-800 font-mono">
            <div className="text-4xl mb-3">⊘</div>
            <p className="text-sm">No records match your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}