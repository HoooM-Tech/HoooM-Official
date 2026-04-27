import { useState } from "react";
import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";

import logo from "../../assets/hooomlogo.png";

/* ── FOOTER LINK ── */
const FtLink = ({ href, children }) => {
  const [hov, setHov] = useState(false);
  return <a href={href} style={{ fontSize: "0.78rem", color: hov ? "#fff" : "rgba(255,255,255,.38)", textDecoration: "none", transition: "color .2s" }} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>{children}</a>;
};

/* ── FOOTER ── */
export const Footer = () => {
  const { isMob, isTab } = useBreakpoint();
  return (
    <footer style={{ background: C.navy, padding: isMob ? "44px 20px 28px" : isTab ? "44px 20px 28px" : "52px 56px 28px" }}>
      <div style={{ display: "grid", gridTemplateColumns: isMob ? "1fr" : "1.6fr 1fr 1fr 1fr", gap: isMob ? "32px" : "40px", paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <div>
          <a href="#home" style={{ display: "inline-block", marginBottom: 12 }}>
            <img src={logo} alt="HoooM Logo" style={{ height: 26, width: "auto", filter: "brightness(0) invert(1)" }} />
          </a>
          <p style={{ fontSize:"0.82rem", color:"rgba(255,255,255,.4)", lineHeight:1.7 }}>A multi-industry company building focused companies around everyday needs. Lagos, Nigeria.</p>
        </div>
        {[
          ["Companies",  ["Tech by HoooM","Orbbit by HoooM","Physifit by HoooM","Auto Pay by HoooM"], ["#companies","#companies","#companies","#companies"]],
          ["Navigate",   ["Home","About","Work","Insights","Contact"], ["#home","#ecosystem","#work","#insights","#contact"]],
          ["Connect",    ["Instagram","LinkedIn","Twitter / X","admin@hooom.org", "it@hooom.org"], ["#","#","#","mailto:admin@hooom.org", "mailto:it@hooom.org" ]],
        ].map(([title,links,hrefs])=>(
          <div key={title}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:C.cyan, marginBottom:14 }}>{title}</div>
            <ul style={{ listStyle:"none" }}>
              {links.map((l,i)=>(
                <li key={l} style={{ marginBottom:9 }}>
                  <FtLink href={hrefs[i]}>{l}</FtLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:22, flexWrap:"wrap", gap:10 }}>
        <div style={{ fontSize:"0.74rem", color:"rgba(255,255,255,.28)" }}>© 2025 HoooM Technologies. All rights reserved.</div>
        <div style={{ display:"flex", gap:20 }}>
          {["Privacy Policy","Terms of Use"].map(l=><FtLink key={l} href="#">{l}</FtLink>)}
        </div>
      </div>
    </footer>
  );
};
