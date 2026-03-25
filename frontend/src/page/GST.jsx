import { useState } from "react";
import { Helmet } from 'react-helmet-async'
// GST Regex Pattern
const GST_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

const SAMPLE_GST_NUMBERS = [
    { number: "27AAPFU0939F1ZV", state: "Maharashtra", valid: true },
    { number: "29GGGGG1314R9Z6", state: "Karnataka", valid: true },
    { number: "24AAACC1206D1ZM", state: "Gujarat", valid: true },
    { number: "07AABCT3518Q1ZV", state: "Delhi", valid: true },
    { number: "INVALID12345678X", state: "—", valid: false },
];

const STATE_CODES = {
    "01": "Jammu & Kashmir", "02": "Himachal Pradesh", "03": "Punjab",
    "04": "Chandigarh", "05": "Uttarakhand", "06": "Haryana",
    "07": "Delhi", "08": "Rajasthan", "09": "Uttar Pradesh",
    "10": "Bihar", "11": "Sikkim", "12": "Arunachal Pradesh",
    "13": "Nagaland", "14": "Manipur", "15": "Mizoram",
    "16": "Tripura", "17": "Meghalaya", "18": "Assam",
    "19": "West Bengal", "20": "Jharkhand", "21": "Odisha",
    "22": "Chhattisgarh", "23": "Madhya Pradesh", "24": "Gujarat",
    "26": "Dadra & Nagar Haveli and Daman & Diu", "27": "Maharashtra",
    "28": "Andhra Pradesh", "29": "Karnataka", "30": "Goa",
    "31": "Lakshadweep", "32": "Kerala", "33": "Tamil Nadu",
    "34": "Puducherry", "35": "Andaman & Nicobar Islands",
    "36": "Telangana", "37": "Andhra Pradesh (New)",
};

const STEPS = [
    { icon: "📋", title: "Register on GST Portal", desc: "Visit gst.gov.in and click on 'Register Now' under the Taxpayers section." },
    { icon: "📄", title: "Fill Application Form", desc: "Complete Form GST REG-01 with your business details, PAN, and contact info." },
    { icon: "📎", title: "Upload Documents", desc: "Submit PAN card, Aadhaar, business proof, bank statement, and address proof." },
    { icon: "✅", title: "Verification & ARN", desc: "After submission, an Application Reference Number (ARN) is generated." },
    { icon: "🎉", title: "GST Certificate Issued", desc: "Upon approval (3–7 working days), your GSTIN is issued on Form GST REG-06." },
];

const REGEX_PARTS = [
    { pattern: "^[0-9]{2}", color: "#f97316", label: "State Code", desc: "2-digit state code (01–37)" },
    { pattern: "[A-Z]{5}", color: "#8b5cf6", label: "PAN Letters", desc: "First 5 letters of PAN card" },
    { pattern: "[0-9]{4}", color: "#06b6d4", label: "PAN Numbers", desc: "4 numeric digits of PAN" },
    { pattern: "[A-Z]{1}", color: "#10b981", label: "PAN Check", desc: "Last letter of PAN card" },
    { pattern: "[1-9A-Z]{1}", color: "#f59e0b", label: "Entity Type", desc: "Registration number (1–9 or A–Z)" },
    { pattern: "Z", color: "#ec4899", label: "Default 'Z'", desc: "Always the letter Z" },
    { pattern: "[0-9A-Z]{1}$", color: "#ef4444", label: "Check Digit", desc: "Checksum digit or letter" },
];

function parseGST(gst) {
    if (!GST_REGEX.test(gst)) return null;
    return {
        stateCode: gst.substring(0, 2),
        stateName: STATE_CODES[gst.substring(0, 2)] || "Unknown",
        pan: gst.substring(2, 12),
        entityType: gst.substring(12, 13),
        defaultZ: gst.substring(13, 14),
        checkDigit: gst.substring(14, 15),
    };
}

export default function GST() {
    const [gstInput, setGstInput] = useState("");
    const [validationResult, setValidationResult] = useState(null);
    const [activeTab, setActiveTab] = useState("validator");

    const handleValidate = () => {
        const upper = gstInput.toUpperCase().trim();
        const isValid = GST_REGEX.test(upper);
        const parsed = parseGST(upper);
        setValidationResult({ isValid, parsed, input: upper });
    };

    const handleSample = (num) => {
        setGstInput(num);
        setValidationResult(null);
    };

    const tabs = [
        { id: "validator", label: "🔍 Validator" },
        { id: "info", label: "ℹ️ About GST" },
        { id: "apply", label: "📝 How to Apply" },
        { id: "regex", label: "🧩 Regex Guide" },
    ];

    return (
        <>
            <Helmet>
                <title>GST Information | Free Online GST Number Validator | Verify GSTIN Instantly</title>
                <meta name="description" content="Validate any Indian GST number instantly. Check GSTIN structure, PAN details, and state codes with our fast React-powered tool." />
                <meta name="keywords" content="GST Validator, GST Number Check, GSTIN Search, India Tax Tool, GST Information, Fake GST Number, dummy GST Number, GSTIN Validator, GST Number Format, GST Registration, GST Regex" />
                <link rel="canonical" href="https://test-mode.com/gst-validator" />
            </Helmet>
            <div className="min-h-screen mt-15 bg-gradient-to-br from-green-950 via-green-950 to-green-950 text-white font-sans">
                {/* Google Font */}


                {/* Header */}
                <div className="text-center pt-12 pb-6 px-4">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 mb-4">
                        <span className="badge-animate w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                        <span className="text-sm text-white tracking-widest uppercase">India GST Guide</span>
                    </div>
                    <h1 className="font-display text-5xl font-extrabold text-gray-300  mb-2">
                        GST Number Explorer
                    </h1>
                    <p className="text-slate-400 text-base max-w-xl mx-auto">
                        A complete GSTIN validation tool that helps you check GST numbers, understand the GSTIN format, learn the registration process, and view the regex pattern used for validation.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-2 flex-wrap px-4 mb-8">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeTab === tab.id ? " text-white" : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto px-4 pb-16">

                    {/* VALIDATOR TAB */}
                    {activeTab === "validator" && (
                        <div className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 glow">
                                <h2 className="font-display text-xl font-bold mb-4 text-white">Validate GSTIN</h2>
                                <div className="flex gap-3 mb-4">
                                    <input
                                        type="text"
                                        value={gstInput}
                                        onChange={e => setGstInput(e.target.value.toUpperCase())}
                                        placeholder="Enter GST Number (e.g. 27AAPFU0939F1ZV)"
                                        maxLength={15}
                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono text-sm tracking-widest"
                                    />
                                    <button
                                        onClick={handleValidate}
                                        className="bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                                    >
                                        Validate
                                    </button>
                                </div>

                                {/* Sample numbers */}
                                <div>
                                    <p className="text-xs text-slate-500 mb-2 uppercase tracking-widest">Sample GST Numbers</p>
                                    <div className="flex flex-wrap gap-2">
                                        {SAMPLE_GST_NUMBERS.map(s => (
                                            <button
                                                key={s.number}
                                                onClick={() => handleSample(s.number)}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${s.valid ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20" : "border-red-500/30 bg-red-500/10 text-red-300 hover:bg-red-500/20"}`}
                                            >
                                                {s.number}
                                                <span className="ml-1.5 opacity-60">{s.valid ? "✓" : "✗"}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Result */}
                            {validationResult && (
                                <div className={`rounded-2xl p-6 border ${validationResult.isValid ? "bg-emerald-500/10 border-emerald-500/30" : "bg-red-500/10 border-red-500/30"}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl">{validationResult.isValid ? "✅" : "❌"}</span>
                                        <div>
                                            <p className={`font-display text-xl font-bold ${validationResult.isValid ? "text-emerald-300" : "text-red-300"}`}>
                                                {validationResult.isValid ? "Valid GSTIN" : "Invalid GSTIN"}
                                            </p>
                                            <p className="text-slate-400 text-sm font-mono">{validationResult.input}</p>
                                        </div>
                                    </div>
                                    {validationResult.isValid && validationResult.parsed && (
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {[
                                                { label: "State Code", value: validationResult.parsed.stateCode },
                                                { label: "State", value: validationResult.parsed.stateName },
                                                { label: "PAN Number", value: validationResult.parsed.pan },
                                                { label: "Entity Type", value: validationResult.parsed.entityType },
                                                { label: "Default 'Z'", value: validationResult.parsed.defaultZ },
                                                { label: "Check Digit", value: validationResult.parsed.checkDigit },
                                            ].map(item => (
                                                <div key={item.label} className="bg-white/5 rounded-xl p-3">
                                                    <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                                                    <p className="text-white font-mono font-semibold">{item.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {/* INFO TAB */}
                    {activeTab === "info" && (
                        <div className="space-y-5">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h2 className="font-display text-2xl font-bold mb-3">What is GST?</h2>
                                <p className="text-slate-300 leading-relaxed">
                                    <strong className="text-gray-200">Goods and Services Tax (GST)</strong> is a unified indirect tax levied in India on the supply of goods and services. It replaced multiple cascading taxes and came into effect on <strong className="text-green-300">1st July 2017</strong>.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h2 className="font-display text-xl font-bold mb-4">GST Number (GSTIN) Structure</h2>
                                <div className="font-mono text-2xl tracking-widest text-center mb-6 bg-black/20 rounded-xl py-4 px-2 break-all">
                                    <span className="text-orange-400">27</span>
                                    <span className="text-violet-400">AAPFU</span>
                                    <span className="text-cyan-400">0939</span>
                                    <span className="text-emerald-400">F</span>
                                    <span className="text-yellow-400">1</span>
                                    <span className="text-pink-400">Z</span>
                                    <span className="text-red-400">V</span>
                                </div>
                                <div className="space-y-3">
                                    {REGEX_PARTS.map(p => (
                                        <div key={p.label} className="flex items-start gap-3">
                                            <span className="font-mono text-sm px-2 py-1 rounded-lg font-bold shrink-0" style={{ background: p.color + "22", color: p.color }}>{p.pattern}</span>
                                            <div>
                                                <p className="text-white font-semibold text-sm">{p.label}</p>
                                                <p className="text-slate-400 text-xs">{p.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: "🏪", title: "Who needs GST?", items: ["Annual turnover > ₹20 lakh (₹10L for NE)", "Interstate suppliers", "E-commerce operators", "Casual taxable persons"] },
                                    { icon: "💡", title: "Benefits of GST", items: ["Single unified tax system", "Eliminates cascading effect", "Input Tax Credit (ITC)", "Simplified compliance"] },
                                ].map(card => (
                                    <div key={card.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 card-hover">
                                        <h3 className="font-display text-lg font-bold mb-3">{card.icon} {card.title}</h3>
                                        <ul className="space-y-1.5">
                                            {card.items.map(i => (
                                                <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                                                    <span className="text-indigo-400 mt-0.5">▸</span>{i}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* APPLY TAB */}
                    {activeTab === "apply" && (
                        <div className="space-y-5">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h2 className="font-display text-2xl font-bold mb-2">How to Apply for GST</h2>
                                <p className="text-slate-400 text-sm mb-6">Follow these steps to register your business on the GST portal. - <a className="text-whit font-medium underline underline-offset-2 text-white" href="https://www.gst.gov.in/">https://www.gst.gov.in/</a></p>
                                <div className="space-y-4">
                                    {STEPS.map((step, i) => (
                                        <div key={i} className="flex gap-4 card-hover bg-white/3 rounded-xl p-4 border border-white/5">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-lg">
                                                {step.icon}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white text-sm">{`Step ${i + 1}: ${step.title}`}</p>
                                                <p className="text-slate-400 text-sm mt-0.5">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h3 className="font-display text-lg font-bold mb-4 text-indigo-300">📁 Documents Required</h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {["PAN Card of Business", "Aadhaar of Proprietor/Partners", "Business Registration Certificate", "Bank Account Statement / Cancelled Cheque", "Address Proof of Business", "Digital Signature Certificate (DSC)", "Photos of Owner/Partners", "Letter of Authorization"].map(doc => (
                                        <div key={doc} className="flex items-center gap-2 text-slate-300 text-sm bg-white/3 rounded-lg px-3 py-2">
                                            <span className="text-indigo-400">📌</span>{doc}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5">
                                <p className="text-amber-300 font-semibold text-sm">⚠️ Penalty for not registering</p>
                                <p className="text-slate-400 text-sm mt-1">Failure to register under GST when required can attract a penalty of <strong className="text-white">10% of the tax due</strong> or <strong className="text-white">₹10,000</strong>, whichever is higher.</p>
                            </div>
                        </div>
                    )}

                    {/* REGEX TAB */}
                    {activeTab === "regex" && (
                        <div className="space-y-5">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h2 className="font-display text-2xl font-bold mb-2 ">GST Regex Pattern</h2>
                                <p className="text-slate-400 text-sm mb-4">Copy and use this regex to validate GSTIN in any language.</p>
                                <div className="bg-black/40 rounded-xl p-4 font-mono text-sm text-emerald-300 break-all border border-emerald-500/20 select-all">
                                    /^[0-9]{"{2}"}[A-Z]{"{5}"}[0-9]{"{4}"}[A-Z]{"{1}"}[1-9A-Z]{"{1}"}Z[0-9A-Z]{"{1}"}$/
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h3 className="font-display text-lg font-bold mb-4">🧩 Pattern Breakdown</h3>
                                <div className="space-y-3">
                                    {REGEX_PARTS.map(p => (
                                        <div key={p.label} className="rounded-xl overflow-hidden border border-white/5">
                                            <div className="flex items-center gap-3 p-3" style={{ background: p.color + "11" }}>
                                                <code className="text-sm font-bold px-3 py-1 rounded-lg" style={{ background: p.color + "22", color: p.color }}>{p.pattern}</code>
                                                <span className="font-semibold text-white">{p.label}</span>
                                            </div>
                                            <div className="px-4 py-2 text-slate-400 text-sm bg-black/20">{p.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <h3 className="font-display text-lg font-bold mb-4">💻 Usage in JavaScript</h3>
                                <pre className="bg-black/40 rounded-xl p-4 text-sm text-cyan-300 overflow-x-auto border border-cyan-500/10">
                                    {`const GST_REGEX = 
    /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

    function validateGST(gstin) {
    return GST_REGEX.test(gstin.toUpperCase().trim());
    }

    // Usage
    validateGST("27AAPFU0939F1ZV"); // true
    validateGST("INVALID12345");    // false`}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}