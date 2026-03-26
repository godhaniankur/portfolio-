import { useState, useMemo } from "react";
import { Helmet } from 'react-helmet-async'
// ─── FAKE DATA GENERATORS ───────────────────────────────────────────────

const STATES = ["Gujarat", "Maharashtra", "Karnataka", "Delhi", "Tamil Nadu", "Telangana", "West Bengal", "Rajasthan", "Uttar Pradesh", "Kerala", "Punjab", "Haryana", "Madhya Pradesh", "Bihar", "Odisha"];
const CITIES = {
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  Karnataka: ["Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi"],
  Delhi: ["New Delhi", "Dwarka", "Rohini", "Saket", "Janakpuri"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Allahabad"],
  Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Palakkad"],
  Punjab: ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda"],
  Haryana: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Hisar"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
  Odisha: ["Bhubaneswar", "Cuttack", "Berhampur", "Sambalpur", "Rourkela"],
};
const STREETS = ["MG Road", "Station Road", "Gandhi Nagar", "Nehru Street", "Patel Marg", "Bose Colony", "Tilak Path", "Laxmi Nagar", "Sarojini Devi Road", "Rajendra Prasad Lane", "Civil Lines", "Subhash Chowk", "Market Road", "Old Town", "New Colony"];
const AREAS = ["Phase 1", "Phase 2", "Sector 12", "Sector 7", "Block A", "Block C", "Near Railway Station", "Opp. Bus Stand", "Behind City Mall", "Old Town Area"];
const DOMAINS = ["gmail.com", "yahoo.com", "outlook.com", "rediffmail.com", "hotmail.com", "protonmail.com", "icloud.com"];
const BIZ_DOMAINS = ["techsolutions.in", "infosys.in", "wipro.in", "tatagroup.in", "reliance.in", "mahindra.in", "hcltech.in", "infotech.co.in", "digitalworks.in", "startupstudio.in"];
const FIRST_NAMES = ["Aarav", "Aditi", "Amit", "Anjali", "Arjun", "Deepa", "Dhruv", "Divya", "Gaurav", "Kavita", "Kiran", "Manish", "Meena", "Mohit", "Neha", "Nikhil", "Pooja", "Rahul", "Ravi", "Rohit", "Sachin", "Shruti", "Sita", "Suresh", "Usha", "Vijay", "Vikram", "Vinita", "Yash", "Zara"];
const LAST_NAMES = ["Patel", "Shah", "Sharma", "Singh", "Kumar", "Mehta", "Joshi", "Gupta", "Agarwal", "Verma", "Mishra", "Rao", "Reddy", "Nair", "Iyer", "Chatterjee", "Bose", "Das", "Pillai", "Khanna"];
const GST_STATE_CODES = { Gujarat: "24", Maharashtra: "27", Karnataka: "29", Delhi: "07", "Tamil Nadu": "33", Telangana: "36", "West Bengal": "19", Rajasthan: "08", "Uttar Pradesh": "09", Kerala: "32", Punjab: "03", Haryana: "06", "Madhya Pradesh": "23", Bihar: "10", Odisha: "21" };
const COMPANY_TYPES = ["PVT LTD", "LLP", "PROPRIETORSHIP", "PARTNERSHIP", "OPC"];

function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function randStr(chars, len) { return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join(""); }
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const ALPHANUM = ALPHA + DIGITS;

function seedRandom(seed) {
  let s = seed;
  return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
}

// Generate consistent fake data
function generateAddresses(n = 120) {
  return Array.from({ length: n }, (_, i) => {
    const rng = seedRandom(i * 9999 + 1);
    const stateIdx = Math.floor(rng() * STATES.length);
    const state = STATES[stateIdx];
    const cities = CITIES[state];
    const city = cities[Math.floor(rng() * cities.length)];
    const street = STREETS[Math.floor(rng() * STREETS.length)];
    const area = AREAS[Math.floor(rng() * AREAS.length)];
    const houseNo = Math.floor(rng() * 999) + 1;
    const zip = String(Math.floor(rng() * 400000) + 100000);
    return {
      longaddress: `${houseNo}, ${street}, ${area}, ${city}, ${state} - ${zip}`,
      Zipcode: zip, state, city, country: "India", countrycode: "IN",
    };
  });
}

function generateGSTINs(n = 120) {
  return Array.from({ length: n }, (_, i) => {
    const rng = seedRandom(i * 7777 + 2);
    const stateIdx = Math.floor(rng() * STATES.length);
    const state = STATES[stateIdx];
    const city = CITIES[state][Math.floor(rng() * CITIES[state].length)];
    const stateCode = GST_STATE_CODES[state];
    const pan = randStr(ALPHA, 5) + randStr(DIGITS, 4) + randStr(ALPHA, 1);
    const entityNum = String(Math.floor(rng() * 9) + 1);
    const checksum = randStr(ALPHANUM, 1);
    const gstin = `${stateCode}${pan}${entityNum}Z${checksum}`;
    const companyType = COMPANY_TYPES[Math.floor(rng() * COMPANY_TYPES.length)];
    const fn = FIRST_NAMES[Math.floor(rng() * FIRST_NAMES.length)];
    const ln = LAST_NAMES[Math.floor(rng() * LAST_NAMES.length)];
    const companyName = `${ln} ${companyType === "PROPRIETORSHIP" ? "TRADERS" : ["SOLUTIONS", "ENTERPRISES", "INDUSTRIES", "SERVICES", "TECH"][Math.floor(rng() * 5)]} ${companyType}`;
    return { gstin, stateCode, state, city, companyName, companyType, pan, registrationDate: `${String(Math.floor(rng() * 28) + 1).padStart(2, "0")}/${String(Math.floor(rng() * 12) + 1).padStart(2, "0")}/${2017 + Math.floor(rng() * 7)}` };
  });
}

function generateEmails(n = 120) {
  return Array.from({ length: n }, (_, i) => {
    const rng = seedRandom(i * 5555 + 3);
    const fn = FIRST_NAMES[Math.floor(rng() * FIRST_NAMES.length)].toLowerCase();
    const ln = LAST_NAMES[Math.floor(rng() * LAST_NAMES.length)].toLowerCase();
    const sep = rand([".", "-", "_", ""]);
    const num = rng() > 0.5 ? String(Math.floor(rng() * 99) + 1) : "";
    const isBiz = rng() > 0.6;
    const domain = isBiz ? BIZ_DOMAINS[Math.floor(rng() * BIZ_DOMAINS.length)] : DOMAINS[Math.floor(rng() * DOMAINS.length)];
    const formats = [`${fn}${sep}${ln}${num}`, `${fn}${num}`, `${fn[0]}${ln}${num}`, `${ln}${sep}${fn[0]}${num}`, `${fn}${sep}${ln[0]}${num}`];
    const username = formats[Math.floor(rng() * formats.length)];
    const email = `${username}@${domain}`;
    const stateIdx = Math.floor(rng() * STATES.length);
    const state = STATES[stateIdx];
    return { email, username, domain, type: isBiz ? "Business" : "Personal", state, city: CITIES[state][Math.floor(rng() * CITIES[state].length)] };
  });
}

function generatePhones(n = 120) {
  const CODES = ["98", "99", "91", "92", "93", "94", "95", "96", "97", "70", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"];
  return Array.from({ length: n }, (_, i) => {
    const rng = seedRandom(i * 3333 + 4);
    const stateIdx = Math.floor(rng() * STATES.length);
    const state = STATES[stateIdx];
    const city = CITIES[state][Math.floor(rng() * CITIES[state].length)];
    const prefix = CODES[Math.floor(rng() * CODES.length)];
    const rest = Array.from({ length: 8 }, () => Math.floor(rng() * 10)).join("");
    const number = `+91 ${prefix}${rest}`;
    const plain = `${prefix}${rest}`;
    const fn = FIRST_NAMES[Math.floor(rng() * FIRST_NAMES.length)];
    const ln = LAST_NAMES[Math.floor(rng() * LAST_NAMES.length)];
    const isWhatsapp = rng() > 0.4;
    const carrier = rand(["Jio", "Airtel", "Vi", "BSNL", "MTNL"]);
    return { number, plain, fullName: `${fn} ${ln}`, state, city, whatsapp: isWhatsapp, carrier };
  });
}

function generatePANs(n = 120) {
  const PAN_TYPES = { P: "Individual", C: "Company", H: "HUF", F: "Firm", A: "AOP", T: "Trust", B: "BOI", L: "Local Authority", J: "Artificial Juridical Person", G: "Government" };
  return Array.from({ length: n }, (_, i) => {
    const rng = seedRandom(i * 1111 + 5);
    const stateIdx = Math.floor(rng() * STATES.length);
    const state = STATES[stateIdx];
    const city = CITIES[state][Math.floor(rng() * CITIES[state].length)];
    const typeKeys = Object.keys(PAN_TYPES);
    const typeKey = typeKeys[Math.floor(rng() * typeKeys.length)];
    const firstName = FIRST_NAMES[Math.floor(rng() * FIRST_NAMES.length)];
    const lastName = LAST_NAMES[Math.floor(rng() * LAST_NAMES.length)];
    const pan = randStr(ALPHA, 3) + typeKey + lastName[0].toUpperCase() + randStr(DIGITS, 4) + randStr(ALPHA, 1);
    return { pan, type: PAN_TYPES[typeKey], typeCode: typeKey, name: `${firstName} ${lastName}`, state, city, issuedYear: 2000 + Math.floor(rng() * 24) };
  });
}

const Address = generateAddresses(120);
const GSTINs = generateGSTINs(120);
const Emails = generateEmails(120);
const Phones = generatePhones(120);
const PANs = generatePANs(120);

// ─── COLOR MAPS ────────────────────────────────────────────────────────────

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
  Punjab: "bg-emerald-900 text-emerald-100 border-emerald-500",
  Haryana: "bg-teal-900 text-teal-100 border-teal-500",
  "Madhya Pradesh": "bg-green-900 text-green-100 border-green-500",
  Bihar: "bg-lime-900 text-lime-100 border-lime-500",
  Odisha: "bg-cyan-900 text-cyan-100 border-cyan-500",
};

// ─── TABS CONFIG ───────────────────────────────────────────────────────────

const TABS = [
  { id: "address", label: "Address", icon: "⌖", color: "text-green-400", accent: "bg-green-500", border: "border-green-500" },
  { id: "gstin", label: "GST IN", icon: "◈", color: "text-emerald-400", accent: "bg-emerald-500", border: "border-emerald-500" },
  { id: "email", label: "Email", icon: "✉", color: "text-teal-400", accent: "bg-teal-500", border: "border-teal-500" },
  { id: "phone", label: "Phone", icon: "☎", color: "text-cyan-400", accent: "bg-cyan-500", border: "border-cyan-500" },
  { id: "pan", label: "PAN", icon: "⬡", color: "text-lime-400", accent: "bg-lime-500", border: "border-lime-500" },
];

// ─── SHARED HELPERS ────────────────────────────────────────────────────────

function StateTag({ state }) {
  const cls = STATE_COLORS[state] || "bg-green-900 text-green-300 border-green-700";
  return <span className={`text-xs font-mono px-2 py-0.5 rounded border ${cls}`}>{state}</span>;
}

function CopyBtn({ text, label, copyKey, copied, onCopy, accent }) {
  const done = copied === copyKey;
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onCopy(text, copyKey); }}
      className={`flex-1 py-1.5 text-xs font-mono border rounded transition-all ${done ? `${accent} text-black border-transparent` : "border-green-900 text-green-600 hover:border-green-500 hover:text-green-300"}`}
    >
      {done ? "✓ Copied" : label}
    </button>
  );
}

// ─── CATEGORY PAGES ────────────────────────────────────────────────────────

function AddressPage({ copied, onCopy }) {
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState("All");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;
  const states = useMemo(() => ["All", ...Array.from(new Set(Address.map(a => a.state))).sort()], []);
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return Address.filter(a => {
      const ms = !q || a.longaddress.toLowerCase().includes(q) || a.city.toLowerCase().includes(q) || a.state.toLowerCase().includes(q) || String(a.Zipcode).includes(q);
      return ms && (filterState === "All" || a.state === filterState);
    });
  }, [search, filterState]);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <CategoryShell
      search={search} setSearch={(v) => { setSearch(v); setPage(1); }}
      filterState={filterState} setFilterState={(v) => { setFilterState(v); setPage(1); }}
      states={states} view={view} setView={setView}
      filtered={filtered} accent="bg-green-500"
    >
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((addr, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            return (
              <div key={idx} className="border border-green-900 rounded-lg p-4 hover:border-green-600 transition-all bg-black group relative cursor-pointer" onClick={() => setSelected(selected === idx ? null : idx)}>
                <div className="absolute top-3 right-3 text-green-800 text-xs font-mono">#{idx}</div>
                <div className="mb-2"><StateTag state={addr.state} /></div>
                <div className="text-green-300 font-bold text-sm mb-1">{addr.city}</div>
                <p className="text-green-700 text-xs leading-relaxed mb-3 line-clamp-2">{addr.longaddress}</p>
                <div className="grid grid-cols-2 gap-1 mb-3">
                  {[{ label: "ZIP", val: addr.Zipcode }, { label: "CODE", val: addr.countrycode }, { label: "STATE", val: addr.state }, { label: "COUNTRY", val: addr.country }].map(({ label, val }) => (
                    <div key={label} className="bg-green-950 rounded px-2 py-1">
                      <div className="text-green-700 text-xs leading-none mb-0.5">{label}</div>
                      <div className="text-green-300 text-xs font-mono truncate">{val}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <CopyBtn text={addr.longaddress} label="⎘ Address" copyKey={`addr-${idx}`} copied={copied} onCopy={onCopy} accent="bg-green-500" />
                  <CopyBtn text={JSON.stringify(addr, null, 2)} label="{ } JSON" copyKey={`json-addr-${idx}`} copied={copied} onCopy={onCopy} accent="bg-green-500" />
                </div>
                {selected === idx && <div className="mt-3 border-t border-green-900 pt-3"><pre className="text-xs text-green-500 leading-relaxed overflow-auto max-h-40">{JSON.stringify(addr, null, 2)}</pre></div>}
              </div>
            );
          })}
        </div>
      ) : (
        <TableShell headers={["#", "Address", "City", "State", "ZIP", "Code", "Actions"]}>
          {paginated.map((addr, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            return (
              <tr key={idx} className="border-b border-green-950 hover:bg-green-950 transition-colors">
                <td className="px-4 py-3 text-green-800">{idx}</td>
                <td className="px-4 py-3 text-green-300 max-w-xs truncate" title={addr.longaddress}>{addr.longaddress}</td>
                <td className="px-4 py-3 text-green-400">{addr.city}</td>
                <td className="px-4 py-3"><StateTag state={addr.state} /></td>
                <td className="px-4 py-3 text-green-400">{addr.Zipcode}</td>
                <td className="px-4 py-3 text-green-500">{addr.countrycode}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <IconCopyBtn text={addr.longaddress} copyKey={`addr-${idx}`} label="⎘" copied={copied} onCopy={onCopy} />
                    <IconCopyBtn text={JSON.stringify(addr, null, 2)} copyKey={`json-addr-${idx}`} label="{}" copied={copied} onCopy={onCopy} />
                  </div>
                </td>
              </tr>
            );
          })}
        </TableShell>
      )}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} total={filtered.length} />
    </CategoryShell>
  );
}

function GSTINPage({ copied, onCopy }) {
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState("All");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;
  const states = useMemo(() => ["All", ...Array.from(new Set(GSTINs.map(a => a.state))).sort()], []);
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return GSTINs.filter(a => {
      const ms = !q || a.gstin.toLowerCase().includes(q) || a.companyName.toLowerCase().includes(q) || a.city.toLowerCase().includes(q) || a.state.toLowerCase().includes(q) || a.pan.toLowerCase().includes(q);
      return ms && (filterState === "All" || a.state === filterState);
    });
  }, [search, filterState]);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <CategoryShell search={search} setSearch={(v) => { setSearch(v); setPage(1); }} filterState={filterState} setFilterState={(v) => { setFilterState(v); setPage(1); }} states={states} view={view} setView={setView} filtered={filtered} accent="bg-emerald-500">
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((item, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            return (
              <div key={idx} className="border border-emerald-900 rounded-lg p-4 hover:border-emerald-600 transition-all bg-black cursor-pointer relative" onClick={() => setSelected(selected === idx ? null : idx)}>
                <div className="absolute top-3 right-3 text-emerald-800 text-xs font-mono">#{idx}</div>
                <div className="mb-2"><StateTag state={item.state} /></div>
                <div className="font-mono text-emerald-300 text-sm font-bold tracking-widest mb-1 break-all">{item.gstin}</div>
                <div className="text-emerald-600 text-xs mb-3 truncate">{item.companyName}</div>
                <div className="grid grid-cols-2 gap-1 mb-3">
                  {[{ label: "PAN", val: item.pan }, { label: "TYPE", val: item.companyType }, { label: "CITY", val: item.city }, { label: "REG DATE", val: item.registrationDate }].map(({ label, val }) => (
                    <div key={label} className="bg-emerald-950 rounded px-2 py-1">
                      <div className="text-emerald-700 text-xs leading-none mb-0.5">{label}</div>
                      <div className="text-emerald-300 text-xs font-mono truncate">{val}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <CopyBtn text={item.gstin} label="⎘ GSTIN" copyKey={`gstin-${idx}`} copied={copied} onCopy={onCopy} accent="bg-emerald-500" />
                  <CopyBtn text={JSON.stringify(item, null, 2)} label="{ } JSON" copyKey={`json-gstin-${idx}`} copied={copied} onCopy={onCopy} accent="bg-emerald-500" />
                </div>
                {selected === idx && <div className="mt-3 border-t border-emerald-900 pt-3"><pre className="text-xs text-emerald-500 leading-relaxed overflow-auto max-h-40">{JSON.stringify(item, null, 2)}</pre></div>}
              </div>
            );
          })}
        </div>
      ) : (
        <TableShell headers={["#", "GSTIN", "Company", "PAN", "Type", "State", "City", "Actions"]}>
          {paginated.map((item, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            return (
              <tr key={idx} className="border-b border-emerald-950 hover:bg-emerald-950 transition-colors">
                <td className="px-4 py-3 text-emerald-800">{idx}</td>
                <td className="px-4 py-3 text-emerald-300 font-mono tracking-wider">{item.gstin}</td>
                <td className="px-4 py-3 text-emerald-400 max-w-xs truncate">{item.companyName}</td>
                <td className="px-4 py-3 text-emerald-500 font-mono">{item.pan}</td>
                <td className="px-4 py-3 text-emerald-600 text-xs">{item.companyType}</td>
                <td className="px-4 py-3"><StateTag state={item.state} /></td>
                <td className="px-4 py-3 text-emerald-400">{item.city}</td>
                <td className="px-4 py-3"><div className="flex gap-1">
                  <IconCopyBtn text={item.gstin} copyKey={`gstin-${idx}`} label="⎘" copied={copied} onCopy={onCopy} />
                  <IconCopyBtn text={JSON.stringify(item, null, 2)} copyKey={`json-gstin-${idx}`} label="{}" copied={copied} onCopy={onCopy} />
                </div></td>
              </tr>
            );
          })}
        </TableShell>
      )}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} total={filtered.length} />
    </CategoryShell>
  );
}

function EmailPage({ copied, onCopy }) {
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState("All");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;
  const states = useMemo(() => ["All", ...Array.from(new Set(Emails.map(a => a.state))).sort()], []);
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return Emails.filter(a => {
      const ms = !q || a.email.toLowerCase().includes(q) || a.domain.toLowerCase().includes(q) || a.city.toLowerCase().includes(q) || a.state.toLowerCase().includes(q);
      return ms && (filterState === "All" || a.state === filterState);
    });
  }, [search, filterState]);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <CategoryShell search={search} setSearch={(v) => { setSearch(v); setPage(1); }} filterState={filterState} setFilterState={(v) => { setFilterState(v); setPage(1); }} states={states} view={view} setView={setView} filtered={filtered} accent="bg-teal-500">
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((item, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            const [user, dom] = item.email.split("@");
            return (
              <div key={idx} className="border border-teal-900 rounded-lg p-4 hover:border-teal-600 transition-all bg-black cursor-pointer relative" onClick={() => setSelected(selected === idx ? null : idx)}>
                <div className="absolute top-3 right-3 text-teal-800 text-xs font-mono">#{idx}</div>
                <div className="mb-2 flex gap-2 items-center flex-wrap">
                  <StateTag state={item.state} />
                  <span className={`text-xs font-mono px-2 py-0.5 rounded border ${item.type === "Business" ? "bg-teal-900 text-teal-300 border-teal-600" : "bg-cyan-900 text-cyan-300 border-cyan-700"}`}>{item.type}</span>
                </div>
                <div className="mb-1">
                  <span className="text-teal-300 font-mono text-sm font-bold">{user}</span>
                  <span className="text-teal-700 font-mono text-sm">@{dom}</span>
                </div>
                <div className="grid grid-cols-2 gap-1 mb-3 mt-3">
                  {[{ label: "DOMAIN", val: item.domain }, { label: "TYPE", val: item.type }, { label: "CITY", val: item.city }, { label: "STATE", val: item.state }].map(({ label, val }) => (
                    <div key={label} className="bg-teal-950 rounded px-2 py-1">
                      <div className="text-teal-700 text-xs leading-none mb-0.5">{label}</div>
                      <div className="text-teal-300 text-xs font-mono truncate">{val}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <CopyBtn text={item.email} label="✉ Email" copyKey={`email-${idx}`} copied={copied} onCopy={onCopy} accent="bg-teal-500" />
                  <CopyBtn text={JSON.stringify(item, null, 2)} label="{ } JSON" copyKey={`json-email-${idx}`} copied={copied} onCopy={onCopy} accent="bg-teal-500" />
                </div>
                {selected === idx && <div className="mt-3 border-t border-teal-900 pt-3"><pre className="text-xs text-teal-500 leading-relaxed overflow-auto max-h-40">{JSON.stringify(item, null, 2)}</pre></div>}
              </div>
            );
          })}
        </div>
      ) : (
        <TableShell headers={["#", "Email", "Domain", "Type", "State", "City", "Actions"]}>
          {paginated.map((item, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            return (
              <tr key={idx} className="border-b border-teal-950 hover:bg-teal-950 transition-colors">
                <td className="px-4 py-3 text-teal-800">{idx}</td>
                <td className="px-4 py-3 text-teal-300 font-mono max-w-xs truncate">{item.email}</td>
                <td className="px-4 py-3 text-teal-500">{item.domain}</td>
                <td className="px-4 py-3 text-teal-600 text-xs">{item.type}</td>
                <td className="px-4 py-3"><StateTag state={item.state} /></td>
                <td className="px-4 py-3 text-teal-400">{item.city}</td>
                <td className="px-4 py-3"><div className="flex gap-1">
                  <IconCopyBtn text={item.email} copyKey={`email-${idx}`} label="✉" copied={copied} onCopy={onCopy} />
                  <IconCopyBtn text={JSON.stringify(item, null, 2)} copyKey={`json-email-${idx}`} label="{}" copied={copied} onCopy={onCopy} />
                </div></td>
              </tr>
            );
          })}
        </TableShell>
      )}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} total={filtered.length} />
    </CategoryShell>
  );
}

function PhonePage({ copied, onCopy }) {
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState("All");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;
  const states = useMemo(() => ["All", ...Array.from(new Set(Phones.map(a => a.state))).sort()], []);
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return Phones.filter(a => {
      const ms = !q || a.number.includes(q) || a.plain.includes(q) || a.fullName.toLowerCase().includes(q) || a.city.toLowerCase().includes(q) || a.state.toLowerCase().includes(q) || a.carrier.toLowerCase().includes(q);
      return ms && (filterState === "All" || a.state === filterState);
    });
  }, [search, filterState]);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const CARRIER_COLOR = { Jio: "bg-blue-900 text-blue-300 border-blue-700", Airtel: "bg-red-900 text-red-300 border-red-700", Vi: "bg-purple-900 text-purple-300 border-purple-700", BSNL: "bg-yellow-900 text-yellow-300 border-yellow-700", MTNL: "bg-orange-900 text-orange-300 border-orange-700" };

  return (
    <CategoryShell search={search} setSearch={(v) => { setSearch(v); setPage(1); }} filterState={filterState} setFilterState={(v) => { setFilterState(v); setPage(1); }} states={states} view={view} setView={setView} filtered={filtered} accent="bg-cyan-500">
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((item, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            const cc = CARRIER_COLOR[item.carrier] || "bg-gray-900 text-gray-300 border-gray-700";
            return (
              <div key={idx} className="border border-cyan-900 rounded-lg p-4 hover:border-cyan-600 transition-all bg-black cursor-pointer relative" onClick={() => setSelected(selected === idx ? null : idx)}>
                <div className="absolute top-3 right-3 text-cyan-800 text-xs font-mono">#{idx}</div>
                <div className="mb-2 flex gap-2 flex-wrap">
                  <StateTag state={item.state} />
                  <span className={`text-xs font-mono px-2 py-0.5 rounded border ${cc}`}>{item.carrier}</span>
                  {item.whatsapp && <span className="text-xs font-mono px-2 py-0.5 rounded border bg-green-900 text-green-300 border-green-700">WA</span>}
                </div>
                <div className="text-cyan-300 font-mono text-lg font-bold tracking-widest mb-1">{item.number}</div>
                <div className="text-cyan-700 text-xs mb-3">{item.fullName}</div>
                <div className="grid grid-cols-2 gap-1 mb-3">
                  {[{ label: "CARRIER", val: item.carrier }, { label: "WHATSAPP", val: item.whatsapp ? "Yes" : "No" }, { label: "CITY", val: item.city }, { label: "STATE", val: item.state }].map(({ label, val }) => (
                    <div key={label} className="bg-cyan-950 rounded px-2 py-1">
                      <div className="text-cyan-700 text-xs leading-none mb-0.5">{label}</div>
                      <div className="text-cyan-300 text-xs font-mono truncate">{val}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <CopyBtn text={item.number} label="☎ Number" copyKey={`phone-${idx}`} copied={copied} onCopy={onCopy} accent="bg-cyan-500" />
                  <CopyBtn text={item.plain} label="# Plain" copyKey={`plain-${idx}`} copied={copied} onCopy={onCopy} accent="bg-cyan-500" />
                </div>
                {selected === idx && <div className="mt-3 border-t border-cyan-900 pt-3"><pre className="text-xs text-cyan-500 leading-relaxed overflow-auto max-h-40">{JSON.stringify(item, null, 2)}</pre></div>}
              </div>
            );
          })}
        </div>
      ) : (
        <TableShell headers={["#", "Number", "Name", "Carrier", "WhatsApp", "State", "City", "Actions"]}>
          {paginated.map((item, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            const cc = CARRIER_COLOR[item.carrier] || "bg-gray-900 text-gray-300 border-gray-700";
            return (
              <tr key={idx} className="border-b border-cyan-950 hover:bg-cyan-950 transition-colors">
                <td className="px-4 py-3 text-cyan-800">{idx}</td>
                <td className="px-4 py-3 text-cyan-300 font-mono tracking-wider">{item.number}</td>
                <td className="px-4 py-3 text-cyan-400">{item.fullName}</td>
                <td className="px-4 py-3"><span className={`text-xs font-mono px-2 py-0.5 rounded border ${cc}`}>{item.carrier}</span></td>
                <td className="px-4 py-3 text-cyan-500">{item.whatsapp ? "✓" : "-"}</td>
                <td className="px-4 py-3"><StateTag state={item.state} /></td>
                <td className="px-4 py-3 text-cyan-400">{item.city}</td>
                <td className="px-4 py-3"><div className="flex gap-1">
                  <IconCopyBtn text={item.number} copyKey={`phone-${idx}`} label="☎" copied={copied} onCopy={onCopy} />
                  <IconCopyBtn text={item.plain} copyKey={`plain-${idx}`} label="#" copied={copied} onCopy={onCopy} />
                </div></td>
              </tr>
            );
          })}
        </TableShell>
      )}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} total={filtered.length} />
    </CategoryShell>
  );
}

function PANPage({ copied, onCopy }) {
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState("All");
  const [view, setView] = useState("grid");
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;
  const states = useMemo(() => ["All", ...Array.from(new Set(PANs.map(a => a.state))).sort()], []);
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return PANs.filter(a => {
      const ms = !q || a.pan.toLowerCase().includes(q) || a.name.toLowerCase().includes(q) || a.type.toLowerCase().includes(q) || a.city.toLowerCase().includes(q) || a.state.toLowerCase().includes(q);
      return ms && (filterState === "All" || a.state === filterState);
    });
  }, [search, filterState]);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const TYPE_COLOR = { Individual: "bg-lime-900 text-lime-300 border-lime-700", Company: "bg-green-900 text-green-300 border-green-700", HUF: "bg-emerald-900 text-emerald-300 border-emerald-700", Firm: "bg-teal-900 text-teal-300 border-teal-700", Trust: "bg-cyan-900 text-cyan-300 border-cyan-700", AOP: "bg-lime-900 text-lime-200 border-lime-600" };

  return (
    <CategoryShell search={search} setSearch={(v) => { setSearch(v); setPage(1); }} filterState={filterState} setFilterState={(v) => { setFilterState(v); setPage(1); }} states={states} view={view} setView={setView} filtered={filtered} accent="bg-lime-500">
      {view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {paginated.map((item, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            const tc = TYPE_COLOR[item.type] || "bg-lime-900 text-lime-300 border-lime-700";
            return (
              <div key={idx} className="border border-lime-900 rounded-lg p-4 hover:border-lime-600 transition-all bg-black cursor-pointer relative" onClick={() => setSelected(selected === idx ? null : idx)}>
                <div className="absolute top-3 right-3 text-lime-800 text-xs font-mono">#{idx}</div>
                <div className="mb-2 flex gap-2 flex-wrap">
                  <StateTag state={item.state} />
                  <span className={`text-xs font-mono px-2 py-0.5 rounded border ${tc}`}>{item.type}</span>
                </div>
                <div className="text-lime-300 font-mono text-xl font-black tracking-[0.3em] mb-1">{item.pan}</div>
                <div className="text-lime-700 text-xs mb-3">{item.name}</div>
                <div className="grid grid-cols-2 gap-1 mb-3">
                  {[{ label: "TYPE", val: item.type }, { label: "CODE", val: item.typeCode }, { label: "CITY", val: item.city }, { label: "ISSUED", val: item.issuedYear }].map(({ label, val }) => (
                    <div key={label} className="bg-lime-950 rounded px-2 py-1">
                      <div className="text-lime-700 text-xs leading-none mb-0.5">{label}</div>
                      <div className="text-lime-300 text-xs font-mono truncate">{val}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <CopyBtn text={item.pan} label="⬡ PAN" copyKey={`pan-${idx}`} copied={copied} onCopy={onCopy} accent="bg-lime-500" />
                  <CopyBtn text={JSON.stringify(item, null, 2)} label="{ } JSON" copyKey={`json-pan-${idx}`} copied={copied} onCopy={onCopy} accent="bg-lime-500" />
                </div>
                {selected === idx && <div className="mt-3 border-t border-lime-900 pt-3"><pre className="text-xs text-lime-500 leading-relaxed overflow-auto max-h-40">{JSON.stringify(item, null, 2)}</pre></div>}
              </div>
            );
          })}
        </div>
      ) : (
        <TableShell headers={["#", "PAN", "Name", "Type", "State", "City", "Issued", "Actions"]}>
          {paginated.map((item, i) => {
            const idx = (page - 1) * PER_PAGE + i;
            const tc = TYPE_COLOR[item.type] || "bg-lime-900 text-lime-300 border-lime-700";
            return (
              <tr key={idx} className="border-b border-lime-950 hover:bg-lime-950 transition-colors">
                <td className="px-4 py-3 text-lime-800">{idx}</td>
                <td className="px-4 py-3 text-lime-300 font-mono font-black tracking-[0.25em]">{item.pan}</td>
                <td className="px-4 py-3 text-lime-400">{item.name}</td>
                <td className="px-4 py-3"><span className={`text-xs font-mono px-2 py-0.5 rounded border ${tc}`}>{item.type}</span></td>
                <td className="px-4 py-3"><StateTag state={item.state} /></td>
                <td className="px-4 py-3 text-lime-400">{item.city}</td>
                <td className="px-4 py-3 text-lime-600">{item.issuedYear}</td>
                <td className="px-4 py-3"><div className="flex gap-1">
                  <IconCopyBtn text={item.pan} copyKey={`pan-${idx}`} label="⬡" copied={copied} onCopy={onCopy} />
                  <IconCopyBtn text={JSON.stringify(item, null, 2)} copyKey={`json-pan-${idx}`} label="{}" copied={copied} onCopy={onCopy} />
                </div></td>
              </tr>
            );
          })}
        </TableShell>
      )}
      <Pagination page={page} totalPages={totalPages} setPage={setPage} total={filtered.length} />
    </CategoryShell>
  );
}

// ─── SHARED LAYOUT COMPONENTS ──────────────────────────────────────────────

function CategoryShell({ search, setSearch, filterState, setFilterState, states, view, setView, filtered, accent, children }) {
  return (
    <div>
      {/* Filters bar */}
      <div className="sticky top-[57px] z-10 bg-black border-b border-green-900 px-6 py-3 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-48">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full bg-black border border-green-800 px-3 py-1.5 text-xs font-mono text-green-200 placeholder-green-800 rounded focus:outline-none focus:border-green-500 transition-all"
          />
        </div>
        <select
          value={filterState}
          onChange={e => setFilterState(e.target.value)}
          className="bg-black border border-green-800 text-green-400 text-xs font-mono px-3 py-1.5 rounded focus:outline-none focus:border-green-500 transition-all"
        >
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <span className="text-green-700 text-xs font-mono">{filtered.length} results</span>
        <div className="flex border border-green-800 rounded overflow-hidden">
          <button onClick={() => setView("grid")} className={`px-3 py-1.5 text-xs font-mono transition-all ${view === "grid" ? `${accent} text-black` : "text-green-600 hover:text-green-400"}`}>⊞ Grid</button>
          <button onClick={() => setView("table")} className={`px-3 py-1.5 text-xs font-mono transition-all ${view === "table" ? `${accent} text-black` : "text-green-600 hover:text-green-400"}`}>☰ Table</button>
        </div>
      </div>
      <div className="px-6 py-6">{children}</div>
    </div>
  );
}

function TableShell({ headers, children }) {
  return (
    <div className="border border-green-900 rounded-lg overflow-hidden mb-6">
      <div className="overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <thead>
            <tr className="border-b border-green-900 bg-green-950">
              {headers.map(h => <th key={h} className="text-left px-4 py-3 text-green-500 uppercase tracking-widest">{h}</th>)}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

function IconCopyBtn({ text, copyKey, label, copied, onCopy }) {
  return (
    <button
      onClick={e => { e.stopPropagation(); onCopy(text, copyKey); }}
      className="px-2 py-1 border border-green-900 text-green-700 hover:text-green-300 hover:border-green-600 rounded transition-all"
    >
      {copied === copyKey ? "✓" : label}
    </button>
  );
}

function Pagination({ page, totalPages, setPage, total }) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex flex-wrap items-center justify-between mt-6 gap-3">
      <span className="text-green-700 text-xs font-mono">Page {page} of {totalPages} · {total} records</span>
      <div className="flex gap-1">
        <PBtn onClick={() => setPage(1)} disabled={page === 1}>«</PBtn>
        <PBtn onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>‹</PBtn>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const p = Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
          return <PBtn key={p} onClick={() => setPage(p)} active={p === page}>{p}</PBtn>;
        })}
        <PBtn onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</PBtn>
        <PBtn onClick={() => setPage(totalPages)} disabled={page === totalPages}>»</PBtn>
      </div>
    </div>
  );
}

function PBtn({ onClick, disabled, active, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1.5 text-xs font-mono border rounded transition-all ${active ? "bg-green-500 text-black border-green-500" : disabled ? "border-green-900 text-green-800 opacity-30" : "border-green-900 text-green-600 hover:border-green-500"}`}
    >{children}</button>
  );
}

// ─── ROOT COMPONENT ────────────────────────────────────────────────────────

const DATA_COUNTS = { address: Address.length, gstin: GSTINs.length, email: Emails.length, phone: Phones.length, pan: PANs.length };

export default function DeveloperTestData() {
  const [activeTab, setActiveTab] = useState("address");
  const [copied, setCopied] = useState(null);

  const onCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  const activeTabMeta = TABS.find(t => t.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Fake Data Generator</title>
        <meta name="description" content="Branded navigational search for Mockaroo — the leading web-based fake data generator with 40+ field types.Classic placeholder text tools producing Latin dummy copy used in layouts to simulate real content before copywriting." />
        <meta name="keywords" content="dummy data generator, dummy data for testing, free dummy data generator, dummy data generator online free, fake name generator, fake email generator, fake phone number generator, random address generator, random email generator, random pan no generator, dummy json data, fake user data generator, mockaroo" />
        <link rel="canonical" href="https://test-mode.com" />
      </Helmet>
      <div className="min-h-screen bg-black text-green-100" style={{ fontFamily: "'JetBrains Mono','Fira Code',monospace" }}>

        {/* HEADER */}
        <div className="border-b border-green-900 px-6 py-4 flex items-center justify-between sticky top-0 bg-black z-20">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 ${activeTabMeta.accent} rounded-sm flex items-center justify-center text-black font-black text-sm tracking-tight transition-all`}>
              {activeTabMeta.icon}
            </div>
            <div>
              <h1 className={`${activeTabMeta.color} font-bold text-base tracking-tight leading-none transition-colors`}>
                {activeTabMeta.label} Test Data
              </h1>
              <p className="text-green-700 text-xs mt-0.5">{DATA_COUNTS[activeTab]} records · India</p>
            </div>
          </div>
          <div className="text-green-800 text-xs font-mono hidden sm:block">DEV TOOLKIT v2</div>
        </div>

        {/* TAB NAV */}
        <div className="sticky top-[57px] z-20 bg-black border-b border-green-900 px-6 flex gap-0 overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-xs font-mono whitespace-nowrap transition-all border-b-2 ${activeTab === tab.id
                  ? `${tab.color} ${tab.border}`
                  : "text-green-800 border-transparent hover:text-green-500"
                }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded font-mono ${activeTab === tab.id ? "bg-green-900 text-green-500" : "bg-green-950 text-green-800"}`}>
                {DATA_COUNTS[tab.id]}
              </span>
            </button>
          ))}
        </div>

        {/* PAGE CONTENT */}
        {activeTab === "address" && <AddressPage copied={copied} onCopy={onCopy} />}
        {activeTab === "gstin" && <GSTINPage copied={copied} onCopy={onCopy} />}
        {activeTab === "email" && <EmailPage copied={copied} onCopy={onCopy} />}
        {activeTab === "phone" && <PhonePage copied={copied} onCopy={onCopy} />}
        {activeTab === "pan" && <PANPage copied={copied} onCopy={onCopy} />}
      </div>
    </>
  );
}