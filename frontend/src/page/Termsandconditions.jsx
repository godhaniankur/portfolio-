import { useState, useEffect, useRef } from "react";

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: "✦",
    content: [
      {
        type: "para",
        text: "By accessing or using our platform, website, or any associated services (collectively, the 'Service'), you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, you must discontinue use of the Service immediately.",
      },
      {
        type: "para",
        text: "These Terms constitute a legally binding agreement between you ('User') and Test Mode. ('Company', 'we', 'us, or 'our'). Your continued use of the Service following any updates to these Terms signifies your acceptance of the revised terms.",
      },
      {
        type: "highlight",
        text: "You must be at least 18 years of age to use this Service. By agreeing to these Terms, you represent that you meet this age requirement.",
      },
    ],
  },
//   {
//     id: "accounts",
//     title: "User Accounts",
//     icon: "◈",
//     content: [
//       {
//         type: "para",
//         text: "To access certain features of the Service, you may be required to register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
//       },
//       {
//         type: "list",
//         items: [
//           "Provide accurate, current, and complete information during registration.",
//           "Keep your password secure and do not share it with third parties.",
//           "Notify us immediately of any unauthorized access or suspected breach.",
//           "You are solely responsible for all activity that occurs under your account.",
//           "We reserve the right to suspend or terminate accounts that violate these Terms.",
//         ],
//       },
//     ],
//   },
  {
    id: "intellectual",
    title: "Intellectual Property",
    icon: "◇",
    content: [
      {
        type: "para",
        text: "All content, features, and functionality available through the Service — including but not limited to text, graphics, logos, icons, images, audio clips, and software — are the exclusive property of the Company or its licensors and are protected by applicable intellectual property laws.",
      },
      {
        type: "para",
        text: "You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service strictly in accordance with these Terms. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from the Service without our prior written consent.",
      },
      {
        type: "highlight",
        text: "Any feedback, suggestions, or ideas you provide regarding the Service may be used by us without obligation or compensation to you.",
      },
    ],
  },
//   {
//     id: "prohibited",
//     title: "Prohibited Activities",
//     icon: "⊗",
//     content: [
//       {
//         type: "para",
//         text: "You agree not to engage in any of the following activities while using the Service. Violation of these restrictions may result in immediate termination of your account and potential legal action.",
//       },
//       {
//         type: "list",
//         items: [
//           "Use the Service for any unlawful purpose or in violation of applicable laws.",
//           "Transmit spam, chain letters, or unsolicited commercial communications.",
//           "Attempt to gain unauthorized access to any part of the Service or its systems.",
//           "Introduce malware, viruses, or other harmful or disruptive code.",
//           "Harvest or collect personal data of other users without consent.",
//           "Impersonate any person or entity, or misrepresent your affiliation.",
//           "Interfere with or disrupt the integrity or performance of the Service.",
//           "Reverse-engineer, decompile, or disassemble any part of the Service.",
//         ],
//       },
//     ],
//   },
  {
    id: "privacy",
    title: "Privacy & Data",
    icon: "◎",
    content: [
      {
        type: "para",
        text: "Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy.",
      },
      {
        type: "para",
        text: "We implement industry-standard security measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
      },
      {
        type: "highlight",
        text: "We do not sell your personal data to third parties. We may share data with trusted partners solely to operate and improve the Service.",
      },
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers & Liability",
    icon: "△",
    content: [
      {
        type: "para",
        text: 'The Service is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components.',
      },
      {
        type: "para",
        text: "To the maximum extent permitted by applicable law, the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of, or inability to use, the Service.",
      },
      {
        type: "list",
        items: [
          "Loss of data, profits, or business opportunities.",
          "Unauthorized access to or alteration of your data.",
          "Statements or conduct of any third party on the Service.",
          "Any bugs, viruses, or other harmful code transmitted through the Service.",
        ],
      },
    ],
  },
  {
    id: "termination",
    title: "Termination",
    icon: "◻",
    content: [
      {
        type: "para",
        text: "We reserve the right to suspend or permanently terminate your access to the Service at our sole discretion, without notice or liability, for any reason — including if you breach these Terms.",
      },
      {
        type: "para",
        text: "Upon termination, your right to use the Service will immediately cease. Provisions of these Terms that by their nature should survive termination — including ownership, warranty disclaimers, indemnity, and limitations of liability — shall survive.",
      },
    ],
  },
  {
    id: "changes",
    title: "Changes to Terms",
    icon: "↻",
    content: [
      {
        type: "para",
        text: "We reserve the right to modify these Terms at any time. When we make material changes, we will update the 'Last Updated' date at the top of this page and, where appropriate, notify you via email or a prominent notice on the Service.",
      },
      {
        type: "highlight",
        text: "It is your responsibility to review these Terms periodically. Your continued use of the Service after any changes constitutes acceptance of the updated Terms.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: "✉",
    content: [
      {
        type: "para",
        text: "If you have any questions, concerns, or requests regarding these Terms and Conditions, please reach out to our legal team. We aim to respond to all inquiries within 5 business days.",
      },
      {
        type: "contact",
        items: [
          { label: "Email", value: "support.testmode@gmail.com" },
        //   { label: "Address", value: "DevLab Inc., 400 Market St, Suite 900, San Francisco, CA 94105" },
          { label: "Phone", value: "+91 63554 34799" },
        ],
      },
    ],
  },
];

function ContentBlock({ block }) {
  switch (block.type) {
    case "para":
      return (
        <p className="text-slate-600 leading-relaxed text-[15px] mb-4 last:mb-0">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul className="mb-4 last:mb-0 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-slate-600 text-[15px] leading-relaxed">
              <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <div className="my-4 border-l-2 border-indigo-400 pl-4 py-1 bg-indigo-50 rounded-r-lg">
          <p className="text-indigo-700 text-[14px] leading-relaxed font-medium italic">
            {block.text}
          </p>
        </div>
      );
    case "contact":
      return (
        <div className="mt-3 divide-y divide-slate-100 border border-slate-100 rounded-xl overflow-hidden">
          {block.items.map((item, i) => (
            <div key={i} className="flex gap-4 px-4 py-3 bg-white">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold w-20 shrink-0 mt-0.5">{item.label}</span>
              <span className="text-slate-700 text-sm break-all">{item.value}</span>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default function TermsAndConditions() {
  const [activeId, setActiveId] = useState("acceptance");
  const [readProgress, setReadProgress] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const mainRef = useRef(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const pct = Math.min(100, Math.round((scrollTop / (scrollHeight - clientHeight)) * 100));
      setReadProgress(pct);
      if (pct >= 80) setShowBanner(true);

      let current = "acceptance";
      for (const id of SECTIONS.map(s => s.id)) {
        const ref = sectionRefs.current[id];
        if (ref && ref.getBoundingClientRect().top - 120 <= 0) current = id;
      }
      setActiveId(current);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className=" bg-slate-50 flex flex-col" style={{ fontFamily: "'Georgia', serif" }}>

     

    

      <div className="max-w-6xl mx-auto w-full flex flex-1 px-4 md:px-6 gap-8 py-10">

        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-60 shrink-0">
          <div className="sticky top-24">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-4 font-semibold" style={{ fontFamily: "system-ui" }}>
              Contents
            </p>
            <nav className="flex flex-col gap-0.5">
              {SECTIONS.map(s => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                    activeId === s.id
                      ? "bg-indigo-50 text-indigo-700 font-semibold"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                  style={{ fontFamily: "system-ui" }}
                >
                  <span className={`text-[10px] ${activeId === s.id ? "text-indigo-500" : "text-slate-300"}`}>
                    {s.icon}
                  </span>
                  {s.title}
                </button>
              ))}
            </nav>

           
          </div>
        </aside>

        {/* Main Content */}
        <main
          ref={mainRef}
          className="flex-1 min-w-0 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 200px)" , scrollbarWidth:"none"}}
        >
          {/* Hero */}
          <div className="mb-10 pb-8 border-b border-slate-200">
           
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-3">
              Terms & Conditions
            </h1>
            <p className="text-slate-500 text-[15px] leading-relaxed max-w-xl" style={{ fontFamily: "system-ui" }}>
              Please read these terms carefully before using our platform. These terms govern your use of our services and outline your rights and responsibilities.
            </p>
            <div className="flex flex-wrap gap-4 mt-5" style={{ fontFamily: "system-ui" }}>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                 Last Update : 05 April 2026
              </span>
             
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {SECTIONS.map((section, idx) => (
              <div
                key={section.id}
                ref={el => (sectionRefs.current[section.id] = el)}
                id={section.id}
                className="scroll-mt-24"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-400 text-sm">
                    {section.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1" style={{ fontFamily: "system-ui" }}>
                      Section {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-bold text-slate-800">{section.title}</h2>
                  </div>
                </div>

                <div className="pl-14">
                  {section.content.map((block, bi) => (
                    <ContentBlock key={bi} block={block} />
                  ))}
                </div>

                {idx < SECTIONS.length - 1 && (
                  <div className="mt-10 border-b border-dashed border-slate-200" />
                )}
              </div>
            ))}
          </div>

       
        </main>
      </div>
    </div>
  );
}