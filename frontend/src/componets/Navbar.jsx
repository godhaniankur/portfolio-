import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700;800&display=swap');

      .header-root{
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index:1000;
        font-family:'JetBrains Mono', monospace;
        transition:all .3s ease;
      }

      .header-root.scrolled{
        box-shadow:0 4px 32px rgba(0,230,118,0.08);
      }

      .header-inner{
        display:flex;
        align-items:center;
        padding:0 40px;
        height:62px;
        background:rgba(8,11,16,0.97);
        border-bottom:1px solid #1a2030;
        backdrop-filter:blur(16px);
        gap:24px;
      }

      .header-logo{
        display:flex;
        align-items:center;
        gap:10px;
        flex:1;
        text-decoration:none;
      }

      /* Desktop Nav */

      .header-nav{
        display:flex;
        align-items:center;
        gap:12px;
      }

      .nav-link{
        color:#7a8a9a;
        font-size:13px;
        padding:6px 14px;
        border-radius:6px;
        text-decoration:none;
        transition:.2s;
      }

      .nav-link:hover{
        color:#c5d0de;
        background:#0d1520;
      }

      .nav-link.active{
        color:#00e676;
        background:#0d2b1e;
      }

      /* Hamburger */

      .hamburger{
        display:none;
        flex-direction:column;
        gap:5px;
        cursor:pointer;
        background:none;
        border:none;
      }

      .ham-line{
        width:22px;
        height:2px;
        background:#7a8a9a;
      }

      /* Mobile Drawer */

      .mobile-menu{
        position:fixed;
        top:0;
        right:0;
        height:100vh;
        width:260px;
        background:rgba(8,11,16,0.99);
        border-left:1px solid #1e2a3a;
        padding:80px 20px 20px;
        display:flex;
        flex-direction:column;
        gap:10px;
        z-index:999;

        transform:translateX(100%);
        transition:transform .3s ease;
      }

      .mobile-menu.open{
        transform:translateX(0);
      }

      .mobile-nav-link{
        color:#7a8a9a;
        font-size:13px;
        padding:10px 14px;
        border-radius:6px;
        border:1px solid transparent;
        background:transparent;
        text-align:left;
        transition:.2s;
      }

      .mobile-nav-link:hover{
        color:#00e676;
        background:#0d2b1e;
      }

      /* Responsive */

      @media (max-width:768px){

        .header-nav{
          display:none;
        }

        .hamburger{
          display:flex;
        }

        .header-inner{
          padding:0 20px;
        }

      }

      `}</style>

      <header className={`header-root ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">

          {/* Logo */}
          <Link to="/home" className="header-logo">
            <span style={{color:"#00e676"}}>⬡</span>
            <span style={{color:"#00e676"}}>Test Mode</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="header-nav">

            {[
              {
                label:"Developer Test",
                link:"/",
                active:location.pathname === "/"
              },
              {
                label:"GST Information",
                link:"/GST-Information",
                active:location.pathname === "/GST-Information"
              }
            ].map(({label,link,active}) => (

              <Link
                key={label}
                to={link}
                className={`nav-link ${active ? "active":""}`}
              >
                {label}
              </Link>

            ))}

          </nav>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={()=>setMenuOpen(!menuOpen)}
          >
            <span className="ham-line"/>
            <span className="ham-line"/>
            <span className="ham-line"/>
          </button>

        </div>

        {/* Mobile Drawer */}
        <div className={`mobile-menu ${menuOpen ? "open":""}`}>

          {[
            {name:"Developer Test",link:"/"},
            {name:"GST Information",link:"/GST-Information"},
            {name:"Docs",link:"/documentation/GET-Method"},
            {name:"Privacy",link:"/privacy"},
            {name:"Contact Us",link:"/contact"},
            {name:"About Us",link:"/About"},
            {name:"Terms & Conditions",link:"/termsandcondition"}
          ].map((item)=>(
            
            item.link ?

            <Link
              key={item.name}
              to={item.link}
              className="mobile-nav-link"
              onClick={()=>setMenuOpen(false)}
            >
              {item.name}
            </Link>

            :

            <button
              key={item.name}
              className="mobile-nav-link"
            >
              {item.name}
            </button>

          ))}

          {/* <button
            style={{
              marginTop:10,
              color:"#00e676",
              background:"transparent",
              border:"none"
            }}
          >
            Get API Key
          </button> */}

        </div>

      </header>
    </>
  );
}