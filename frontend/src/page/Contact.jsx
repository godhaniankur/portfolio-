import { useState } from "react";

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.262 5.638 5.9-5.638Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const contactInfo = [
  {
    label: "Email",
    value: "support.testmode@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 63554 34799",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  // {
  //   label: "Office",
  //   value: "Subhash Chowk, Ahmedabad, Gujarat",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  //     </svg>
  //   ),
  // },
];

const hours = [
  ["Monday – Friday", "9:00 AM – 6:00 PM"],
  ["Saturday", "10:00 AM – 3:00 PM"],
  ["Sunday", "Closed"],
];

const inputBase = {
  background: "#0d0c0a",
  border: "1px solid #2d2a25",
  outline: "none",
  // fontFamily: "'DM Sans', sans-serif", 
  color: "#f0ece4",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1800);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-base"
   
    >
     
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{ width:600, height:600, top:-200, right:-150, background:"rgba(181,129,53,0.12)", filter:"blur(100px)" }}
      />
      <div
        className="fixed rounded-full pointer-events-none z-0"
        style={{ width:400, height:400, bottom:-100, left:-100, background:"rgba(212,160,84,0.07)", filter:"blur(100px)" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 pb-24">

        {/* Eyebrow */}
        <div className="fu flex items-center gap-3 mb-5">
          <span className="block w-8 h-px bg-primary-500" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary-500">
            Get In Touch
          </span>
        </div>

        {/* Title */}
        <h1
          className="fu fu1 leading-[1.05] mb-6 tracking-tight text-[#f5f0e8]"
          style={{ fontSize:"clamp(3rem,6vw,5.5rem)", fontWeight:700 }}
        >
          Let's start a<br />
          <em className="text-primary-500">conversation.</em>
        </h1>

        {/* Subtitle */}
        <p className="font-light text-[#9e9a92] leading-relaxed max-w-2xl mb-14">
          Have a project in mind or just want to say hello? We'd love to hear from you. Our team usually responds within 24 hours.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* ── Left: Info panel ── */}
          <div >

            {/* Contact items */}
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 mb-6">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-[10px] text-primary-500"
                  style={{ background:"#1a1815", border:"1px solid #2d2a25" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#545e5e] mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-light text-[#c0c8cc] leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Divider */}
            <div
              className="my-8 h-px"
              style={{ background:"linear-gradient(to right,#2d2a25,#3e3a33,#2d2a25)" }}
            />

            {/* Hours */}
            <div className="rounded-2xl p-6" style={{  border:"1px solid #232019" }}>
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#5e5a54] mb-4">
                Business Hours
              </p>
              {hours.map(([day, time], i) => (
                <div
                  key={day}
                  className="flex justify-between text-[13px] font-light text-[#9e9a92] py-1.5"
                  style={{ borderBottom: i < hours.length - 1 ? "1px solid #1c1a17" : "none" }}
                >
                  <span className="text-[#ccc8c0]">{day}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            {/* <div className="flex gap-2.5 mt-7">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  className="social-icon flex items-center justify-center w-10 h-10 rounded-[10px] text-[#6e6a62] transition-all duration-200"
                  style={{ background:"#131210", border:"1px solid #2d2a25" }}
                >
                  {s.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* ── Right: Form card ── */}
          <div
            className="fu fu4 relative rounded-3xl p-10 overflow-hidden bg-white"
            style={{ border:"1px solid #232019" }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
            />

            {status === "sent" ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center text-center py-12 px-6">
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full mb-5 bg-primary-800 text-white"
                  style={{ border:"1px solid rgba(201,146,58,0.25)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <p
                  className="text-2xl font-medium text-primary-500 mb-2.5"
                  
                >
                  Message Received!
                </p>
                <p className="text-sm font-light text-black">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-2xl font-medium text-balance mb-2"
                 
                >
                  Send us a message
                </p>
                <p className="text-[13px] font-light text-[#5e5a54] mb-8">
                  Fill in the form and we'll be in touch.
                </p>

                <form onSubmit={handleSubmit}>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {[
                      { name:"name",  type:"text",  label:"Name",  placeholder:"Jane Smith" },
                      { name:"email", type:"email", label:"Email", placeholder:"jane@example.com" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-[#5e5a54] mb-2">
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          placeholder={f.placeholder}
                          value={form[f.name]}
                          onChange={handleChange}
                          required
                          className="w-full text-sm border outline-none font-light rounded-[10px] px-4 py-3.5 transition-all duration-200"
                          // style={inputBase} 
                        />
                      </div>
                    ))}
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-[#5e5a54] mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full text-sm font-light outline-none border rounded-[10px] px-4 py-3.5 appearance-none transition-all duration-200"
                      
                    >
                      <option value="" disabled>Select a topic…</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Technical Support</option>
                      <option value="press">Press &amp; Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-[#5e5a54] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us what's on your mind…"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full text-sm resize-none outline-none border font-light rounded-[10px] px-4 py-3.5 transition-all duration-200"
                      style={{lineHeight:"1.6" }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="submit-btn mt-6 w-full flex items-center justify-center gap-2 rounded-[10px] py-4 px-6 text-sm font-medium tracking-wide bg-primary-500 text-primary-50 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="spinner w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" d="M12 3a9 9 0 1 0 9 9" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}