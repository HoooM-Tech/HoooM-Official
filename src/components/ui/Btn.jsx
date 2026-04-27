import { useState } from "react";
import { C } from "../../constants";

/* ── BUTTON ── */
export const Btn = ({ href, onClick, children, variant="solid", full=false, style:s }) => {
  const [hov, setHov] = useState(false);
  const base = { fontFamily:"'Syne',sans-serif", fontSize:"0.86rem", fontWeight:700, padding:"12px 26px", borderRadius:100, textDecoration:"none", display:"inline-block", transition:"all .18s", border:"2px solid transparent", width: full?"100%":"auto", textAlign:"center", ...s };
  const vs = {
    solid:  { bg:C.navy,   hbg:C.orange, color:"#fff",   hc:"#fff",  border:"transparent" },
    ghost:  { bg:"transparent", hbg:C.orange, color:C.navy, hc:"#fff", border:C.navy },
    white:  { bg:"#fff",   hbg:C.orange, color:C.navy,  hc:"#fff",  border:"transparent" },
    wout:   { bg:"transparent", hbg:"rgba(255,255,255,.15)", color:"#fff", hc:"#fff", border:"rgba(255,255,255,.35)" },
  };
  const v = vs[variant];
  const st = { ...base, background: hov?v.hbg:v.bg, color: hov?v.hc:v.color, borderColor: hov?v.hbg:v.border, transform: hov?"translateY(-2px)":"none" };
  if (onClick) return <button onClick={onClick} style={st} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>{children}</button>;
  return <a href={href} style={st} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>{children}</a>;
};
