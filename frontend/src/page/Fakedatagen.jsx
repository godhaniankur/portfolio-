import { useState, useCallback } from "react";
import AdBanner from "../ads/AdBanner";

const firstNames = ["Aisha", "Rohan", "Sofia", "Liam", "Priya", "Marcus", "Elena", "Dev", "Zara", "Omar", "Chloe", "Arjun", "Nina", "Ethan", "Leila", "Sam", "Mei", "Jake", "Fatima", "Lucas"];
const lastNames = ["Sharma", "Chen", "Rivera", "Okafor", "Patel", "Williams", "Nakamura", "Mueller", "Hassan", "Kowalski", "Osei", "Bergman", "Diallo", "Reyes", "Ivanova", "Kim", "Adebayo", "Russo", "Andersen", "Bhat"];
const domains = ["gmail.com", "outlook.com", "yahoo.com", "proton.me", "icloud.com", "hey.com", "fastmail.com"];
const companies = ["Axiom Labs", "Drift Systems", "Neon Stack", "Cobalt IO", "Vanta Works", "Lumio Tech", "Forge AI", "Nexus Build", "Slate Digital", "Arc Studio"];
const streets = ["Maple Ave", "Oak Street", "Elm Blvd", "Pine Rd", "Cedar Ln", "Birch Way", "Walnut Dr", "Spruce Ct", "Willow Pl", "Ash Terrace"];
const cities = ["Mumbai", "Bangalore", "Delhi", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Surat"];
const states = ["Maharashtra", "Karnataka", "Delhi", "Telangana", "Tamil Nadu", "Gujarat", "West Bengal", "Rajasthan"];
const jobTitles = ["Senior Engineer", "Product Designer", "Data Scientist", "DevOps Lead", "Frontend Dev", "Backend Dev", "ML Engineer", "UX Researcher", "Tech Lead", "QA Engineer"];
const avatarColors = ["bg-violet-100 text-violet-700", "bg-sky-100 text-sky-700", "bg-emerald-100 text-emerald-700", "bg-amber-100 text-amber-700", "bg-rose-100 text-rose-700", "bg-cyan-100 text-cyan-700", "bg-fuchsia-100 text-fuchsia-700", "bg-orange-100 text-orange-700"];

const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randDate = (startYear, endYear) => {
    const y = randNum(startYear, endYear);
    const m = String(randNum(1, 12)).padStart(2, "0");
    const d = String(randNum(1, 28)).padStart(2, "0");
    return `${y}-${m}-${d}`;
};

function generatePerson() {
    const first = rand(firstNames);
    const last = rand(lastNames);
    const company = rand(companies);
    return {
        id: Math.random().toString(36).slice(2, 8).toUpperCase(),
        name: `${first} ${last}`,
        initials: `${first[0]}${last[0]}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}${randNum(1, 99)}@${rand(domains)}`,
        phone: `+91 ${randNum(7, 9)}${String(randNum(0, 999999999)).padStart(9, "0")}`,
        dob: randDate(1980, 2000),
        address: `${randNum(1, 999)} ${rand(streets)}, ${rand(cities)}, ${rand(states)} ${randNum(100000, 999999)}`,
        company,
        job: rand(jobTitles),
        username: `${first.toLowerCase()}_${last.toLowerCase()}${randNum(10, 99)}`,
        avatar: rand(avatarColors),
        uuid: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
            const r = Math.random() * 16 | 0;
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        }),
        ip: `${randNum(10, 200)}.${randNum(0, 255)}.${randNum(0, 255)}.${randNum(1, 254)}`,
        creditCard: `${randNum(4000, 4999)} ${randNum(1000, 9999)} ${randNum(1000, 9999)} ${randNum(1000, 9999)}`,
        cvv: String(randNum(100, 999)),
        cardExpiry: `${String(randNum(1, 12)).padStart(2, "0")}/${randNum(26, 30)}`,
        salary: `₹${(randNum(800, 4500) * 1000).toLocaleString("en-IN")}`,
        password: `P@ss${randNum(1000, 9999)}!Xy`,
        website: `https://${first.toLowerCase()}${last.toLowerCase()}.dev`,
        twitter: `@${first.toLowerCase()}${randNum(1, 99)}`,
    };
}

const FIELD_GROUPS = [
    { label: "Identity", color: "violet", fields: ["id", "name", "username", "dob", "uuid"] },
    { label: "Contact", color: "sky", fields: ["email", "phone", "website", "twitter"] },
    { label: "Location", color: "emerald", fields: ["address"] },
    { label: "Work", color: "amber", fields: ["company", "job", "salary"] },
    { label: "Network", color: "rose", fields: ["ip"] },
    { label: "Finance", color: "cyan", fields: ["creditCard", "cvv", "cardExpiry"] },
    { label: "Security", color: "fuchsia", fields: ["password"] },
];

const FIELD_LABELS = {
    id: "Record ID", name: "Full Name", initials: "Initials", email: "Email", phone: "Phone",
    dob: "Date of Birth", address: "Address", company: "Company", job: "Job Title",
    username: "Username", uuid: "UUID", ip: "IP Address", creditCard: "Credit Card",
    cvv: "CVV", cardExpiry: "Expiry Date", salary: "Annual Salary", password: "Password",
    website: "Website", twitter: "Twitter",
};

const colorMap = {
    violet: { badge: "bg-violet-50 text-violet-600 border-violet-200", dot: "bg-violet-400" },
    sky: { badge: "bg-sky-50 text-sky-600 border-sky-200", dot: "bg-sky-400" },
    emerald: { badge: "bg-emerald-50 text-emerald-600 border-emerald-200", dot: "bg-emerald-400" },
    amber: { badge: "bg-amber-50 text-amber-600 border-amber-200", dot: "bg-amber-400" },
    rose: { badge: "bg-rose-50 text-rose-600 border-rose-200", dot: "bg-rose-400" },
    cyan: { badge: "bg-cyan-50 text-cyan-600 border-cyan-200", dot: "bg-cyan-400" },
    fuchsia: { badge: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200", dot: "bg-fuchsia-400" },
};

function CopyBtn({ value }) {
    const [copied, setCopied] = useState(false);
    const copy = () => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };
    return (
        <button onClick={copy} title="Copy"
            className="ml-auto flex-shrink-0 px-2 py-0.5 rounded text-xs font-mono transition-all"
            style={{ background: copied ? "#dcfce7" : "#f3f4f6", color: copied ? "#16a34a" : "#6b7280", border: "1px solid", borderColor: copied ? "#bbf7d0" : "#e5e7eb" }}>
            {copied ? "✓" : "copy"}
        </button>
    );
}

function FieldRow({ label, value, color }) {
    const isSensitive = label === "Password" || label === "CVV";
    return (
        <div className="flex items-start gap-3 py-2.5 border-b last:border-b-0" style={{ borderColor: "#f3f4f6" }}>
            <span className="text-xs pt-0.5 w-28 flex-shrink-0" style={{ color: "#9ca3af", fontFamily: "monospace" }}>{label}</span>
            <span className={`text-xs flex-1 break-all font-mono ${isSensitive ? "tracking-widest select-none" : ""}`} style={{ color: "#374151" }}>
                {isSensitive ? "•".repeat(value.length) : value}
            </span>
            <CopyBtn value={value} />
        </div>
    );
}

function PersonCard({ person, isSelected, onClick }) {
    return (
        <button onClick={onClick}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all mb-1 ${isSelected ? "bg-violet-50 text-black" : "hover:bg-gray-50 text-white hover:text-black"}`}
            style={{ border: isSelected ? "1px solid #ddd6fe" : "1px solid transparent" }}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${person.avatar}`}>
                {person.initials}
            </div>
            <div className="min-w-0">
                <p className="text-sm font-medium  truncate" >{person.name}</p>
                <p className="text-xs truncate" style={{ color: "#9ca3af", fontFamily: "monospace" }}>{person.email}</p>
            </div>
            <span className="ml-auto text-xs flex-shrink-0 font-mono px-1.5 py-0.5 rounded" style={{ background: "#f3f4f6", color: "#6b7280" }}>#{person.id}</span>
        </button>
    );
}

export default function FakeDataGen() {
    const [records, setRecords] = useState(() => Array.from({ length: 5 }, generatePerson));
    const [selected, setSelected] = useState(0);
    const [count, setCount] = useState(5);
    const [activeGroup, setActiveGroup] = useState(null);
    const [copiedAll, setCopiedAll] = useState(false);

    const regenerate = useCallback(() => {
        setRecords(Array.from({ length: count }, generatePerson));
        setSelected(0);
    }, [count]);

    const addOne = () => {
        setRecords(prev => [...prev, generatePerson()]);
        setSelected(records.length);
    };

    const person = records[selected];

    const copyAll = () => {
        const text = JSON.stringify(person, null, 2);
        navigator.clipboard.writeText(text).then(() => {
            setCopiedAll(true);
            setTimeout(() => setCopiedAll(false), 1800);
        });
    };

    const visibleGroups = activeGroup ? FIELD_GROUPS.filter(g => g.label === activeGroup) : FIELD_GROUPS;

    return (
        <div className=" bg-surface-alt">
            {/* Header */}
            <div className=" sticky top-[60px] bg-surface-alt p-3 ml-auto">


                <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
                    <select value={count} onChange={e => setCount(Number(e.target.value))}
                        style={{ background: "#1f2937", border: "1px solid #374151", color: "#e5e7eb", borderRadius: 6, padding: "4px 8px", fontSize: 12, fontFamily: "monospace" }}>
                        {[1, 3, 5, 10, 20].map(n => <option key={n} value={n}>{n} records</option>)}
                    </select>
                    <button onClick={regenerate}
                        style={{ background: "#6d28d9", color: "#fff", border: "none", borderRadius: 6, padding: "5px 14px", fontSize: 12, fontFamily: "monospace", cursor: "pointer", fontWeight: 600 }}>
                        ↻ Generate
                    </button>
                </div>
            </div>

            <div className="h-[calc(100vh-155px)]" style={{ display: "flex", flex: 1, minHeight: 0 }}>
                {/* Sidebar */}
               

                    {/* Sidebar */}
                    <div className="relative w-[240px]">
                        <div
                            className="bg-surface-alt fixed h-[calc(100vh-155px)] w-[240px] flex flex-col border-r"
                            style={{ borderRight: "1px solid #e5e7eb" }}
                        >

                            {/* Header */}
                            <div className="p-3 border-b">
                                <p className="text-[11px] text-gray-400 font-mono mb-1 uppercase tracking-wider">
                                    {records.length} person{records.length !== 1 ? "s" : ""}
                                </p>
                            </div>

                            {/* Scrollable List */}
                            <div className="flex-1 overflow-y-auto px-3" style={{ scrollbarWidth: "none" }}>
                                {records.map((p, i) => (
                                    <PersonCard
                                        key={p.id}
                                        person={p}
                                        isSelected={i === selected}
                                        onClick={() => setSelected(i)}
                                    />
                                ))}
                            </div>

                            {/* Add Button */}
                            <div className="p-3">
                                <button
                                    onClick={addOne}
                                    className="w-full border border-dashed border-gray-300 rounded-lg p-2 text-xs text-gray-500 font-mono"
                                >
                                    + add one more
                                </button>
                            </div>

                            {/* Filter Groups */}
                            <div className="p-3 mt-auto">
                                <p className="text-[11px] text-gray-400 font-mono mb-2 uppercase tracking-wider">
                                    Filter fields
                                </p>

                                <div className="flex flex-wrap gap-1">
                                    {FIELD_GROUPS.map(g => {
                                        const c = colorMap[g.color];
                                        const active = activeGroup === g.label;

                                        return (
                                            <button
                                                key={g.label}
                                                onClick={() => setActiveGroup(active ? null : g.label)}
                                                className={`text-xs px-2 py-0.5 rounded-full border font-mono transition ${active ? c.badge : "bg-gray-50 text-gray-500 border-gray-200"
                                                    }`}
                                            >
                                                {g.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                

                {/* Main detail panel */}
                {person && (
                    <div style={{ flex: 1, overflow: "auto", background: "#fff" }}>
                        {/* Person header */}
                        <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 16 }}>
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 ${person.avatar}`}>
                                {person.initials}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h2 style={{ fontSize: 18, fontWeight: 600, color: "#111827", margin: 0 }}>{person.name}</h2>
                                <p style={{ fontSize: 13, color: "#6b7280", margin: "2px 0 0", fontFamily: "monospace" }}>{person.job} · {person.company}</p>
                            </div>
                            <button onClick={copyAll}
                                style={{ background: copiedAll ? "#dcfce7" : "#f9fafb", color: copiedAll ? "#16a34a" : "#374151", border: "1px solid", borderColor: copiedAll ? "#bbf7d0" : "#e5e7eb", borderRadius: 8, padding: "7px 14px", fontSize: 12, fontFamily: "monospace", cursor: "pointer", fontWeight: 500 }}>
                                {copiedAll ? "✓ Copied JSON" : "{ } Copy JSON"}
                            </button>
                        </div>

                        

                        {/* Field groups */}
                        <div style={{ padding: "16px 24px" }}>
                            {visibleGroups.map(group => {
                                const c = colorMap[group.color];
                                return (
                                    <div key={group.label} style={{ marginBottom: 20, background: "#fafafa", borderRadius: 10, border: "1px solid #f3f4f6", overflow: "hidden" }}>
                                        <div style={{ padding: "8px 14px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: 8 }}>
                                            <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                                            <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-full border ${c.badge}`}>{group.label}</span>
                                        </div>
                                        <div style={{ padding: "4px 14px" }}>
                                            {group.fields.map(f => person[f] ? (
                                                <FieldRow key={f} label={FIELD_LABELS[f] || f} value={String(person[f])} color={group.color} />
                                            ) : null)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* ads Secetion  */}
                        <AdBanner />

                        {/* Raw JSON section */}
                        {!activeGroup && (
                            <div style={{ margin: "0 24px 24px", background: "#111827", borderRadius: 10, overflow: "hidden" }}>
                                <div style={{ padding: "8px 14px", borderBottom: "1px solid #1f2937", display: "flex", alignItems: "center", gap: 8 }}>
                                    <span style={{ fontSize: 11, color: "#6b7280", fontFamily: "monospace" }}>raw output · JSON</span>
                                    <CopyBtn value={JSON.stringify(person, null, 2)} />
                                </div>
                                <pre style={{ margin: 0, padding: "14px 16px", fontSize: 11, color: "#a3e635", fontFamily: "monospace", overflowX: "auto", lineHeight: 1.7 }}>
                                    {JSON.stringify({ id: person.id, name: person.name, email: person.email, phone: person.phone, dob: person.dob, company: person.company, job: person.job, address: person.address, uuid: person.uuid, ip: person.ip }, null, 2)}
                                </pre>
                            </div>
                        )}
                    </div>
                )}
            </div>

        </div>
    );
}