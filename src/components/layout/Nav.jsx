import { useState, useEffect } from "react";
import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Btn } from "../ui/Btn";

import logo from "../../assets/hooomlogo.png";

/* ── NAV LINK ── */
const NavLink = ({ href, children }) => {
  const [hov, setHov] = useState(false);
  return <a href={href} style={{ fontSize: "0.86rem", fontWeight: 500, color: hov ? C.navy : C.mid, textDecoration: "none", transition: "color .2s" }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</a>;
};

/* ── NAV ── */
export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isTab } = useBreakpoint();
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [["Home", "#home"], ["About", "#ecosystem"], ["Companies", "#companies"], ["Work", "#work"], ["Insights", "#insights"], ["Contact", "#contact"]];
  const px = isTab ? "20px" : "56px";
  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "space-between", padding: `${scrolled ? "13px" : "20px"} ${px}`, background: "rgba(255,255,255,0.94)", backdropFilter: "blur(14px)", borderBottom: `1px solid ${C.faint}`, transition: "padding .3s" }}>
        <a href="#home" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="HoooM Logo" style={{ height: scrolled ? 20 : 22, width: "auto", transition: "height .3s" }} />
        </a>

        {/* Desktop links */}
        {!isTab && (
          <ul style={{ display:"flex", gap:30, listStyle:"none" }}>
            {links.map(([l,h])=>(
              <li key={l}><NavLink href={h}>{l}</NavLink></li>
            ))}
          </ul>
        )}

        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          {!isTab && <Btn href="#contact" variant="solid" style={{fontSize:"0.82rem",padding:"9px 20px"}}>Work With Us</Btn>}
          {/* Hamburger always visible */}
          <button onClick={()=>setOpen(true)} style={{ display:"flex", flexDirection:"column", gap:5, background:"none", border:"none", padding:4 }}>
            {[0,1,2].map(i=><span key={i} style={{ width:22, height:2, background:C.navy, borderRadius:2, display:"block" }}/>)}
          </button>
        </div>
      </nav>

      {/* Full-screen menu */}
      {open && (
        <div style={{ position:"fixed", inset:0, background:"#fff", zIndex:500, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:24 }}>
          <button onClick={()=>setOpen(false)} style={{ position:"absolute", top:20, right:24, fontSize:"1.5rem", background:"none", border:"none", color:C.navy }}>✕</button>
          {links.map(([l,h])=>(
            <a key={l} href={h} onClick={()=>setOpen(false)}
              style={{ fontFamily:"'Poppins',sans-serif", fontSize:"clamp(1.6rem,6vw,2.2rem)", fontWeight:800, color:C.navy, textDecoration:"none" }}>{l}</a>
          ))}
          <div style={{ marginTop:16 }}><Btn href="#contact" variant="solid" onClick={()=>setOpen(false)}>Work With Us</Btn></div>
        </div>
      )}
    </>
  );
};
