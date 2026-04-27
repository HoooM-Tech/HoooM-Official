import { useState } from "react";
import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { SHead } from "../ui/SHead";

/* ── ECO CARD ── */
const EcoCard = ({ n, icon, name, desc, bg, dark }) => {
  const { isMob } = useBreakpoint();
  const [hov, setHov] = useState(false);
  const tc = dark ? C.navy : "#fff";
  const dim = dark ? C.mid : "rgba(255,255,255,.55)";
  const iconBg = dark ? "rgba(14,19,34,.07)" : "rgba(255,255,255,.1)";
  const numC = dark ? "rgba(14,19,34,.3)" : "rgba(255,255,255,.3)";
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ borderRadius:18, padding: isMob?"24px 20px 52px":"32px 24px 56px", background:bg, position:"relative", overflow:"hidden", transform:hov?"translateY(-5px)":"none", boxShadow:hov?"0 18px 44px rgba(14,19,34,.1)":"none", transition:"all .28s" }}>
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.12em", color:numC, marginBottom: isMob?32:44 }}>{n}</div>
      <div style={{ width:44, height:44, borderRadius:12, background:iconBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.25rem", marginBottom:14 }}>{icon}</div>
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize: isMob?"0.95rem":"1.05rem", fontWeight:700, color:tc, marginBottom:8, lineHeight:1.2 }}>{name}</div>
      <p style={{ fontSize:"0.8rem", lineHeight:1.6, color:dim }}>{desc}</p>
      <div style={{ position:"absolute", bottom:18, right:18, width:28, height:28, borderRadius:"50%", background:hov?C.orange:iconBg, color:hov?"#fff":tc, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.8rem", transition:"all .2s", transform:hov?"rotate(45deg)":"none" }}>↗</div>
    </div>
  );
};

/* ── ECOSYSTEM ── */
const ecoCards = [
  { n:"01", icon:"💻", name:"Tech by HoooM",    desc:"Digital products, websites, software systems, and modern business tools.",              bg:C.navy,  dark:false },
  { n:"02", icon:"🎯", name:"Orbbit by HoooM",   desc:"Brand identity, creative strategy, campaigns, and growth execution.",                   bg:C.off,   dark:true  },
  { n:"03", icon:"💪", name:"Physifit by HoooM", desc:"Specialized wellness coaching for seniors and postpartum clients.",                      bg:C.cyan,  dark:true  },
  { n:"04", icon:"💰", name:"Auto Pay by HoooM", desc:"Simple tools that help people budget smarter and build healthier money habits.",          bg:C.off2,  dark:true  },
];

export const Ecosystem = () => {
  const { isMob, isTab } = useBreakpoint();
  const cols = isMob ? "1fr 1fr" : isTab ? "1fr 1fr" : "repeat(4,1fr)";
  return (
    <section id="ecosystem" style={{ padding:`80px ${isTab?"20px":"56px"}`, background:C.white }}>
      <SHead eyebrow="Our Ecosystem" title={`Four companies. <span style="font-style:italic;font-family:'Instrument Serif',serif;font-weight:400;color:${C.orange}">One vision.</span>`} sub="We build focused companies around everyday needs — from software to wellness to financial tools."/>
      <div style={{ display:"grid", gridTemplateColumns:cols, gap:14, marginTop:48 }}>
        {ecoCards.map((c,i)=>(
          <Reveal key={c.n} delay={i*70}><EcoCard {...c}/></Reveal>
        ))}
      </div>
    </section>
  );
};
