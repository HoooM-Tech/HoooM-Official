import { useState } from "react";
import { C } from "../../constants";

export const Chip = ({ children }) => {
  const [hov, setHov] = useState(false);
  return <span onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{ background:hov?C.navy:C.off, color:hov?"#fff":C.navy, borderRadius:100, fontSize:"0.72rem", fontWeight:500, padding:"4px 12px", transition:"all .18s", display:"inline-block" }}>{children}</span>;
};
