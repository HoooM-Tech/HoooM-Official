import { useState } from "react";
import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { SHead } from "../ui/SHead";
import { Ph } from "../ui/Ph";

// Assets
import whyImg from "../../assets/IMG_2528.webp";

/* ── PILLAR ── */
const Pillar = ({ n, t, d }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ padding: "18px 0", borderBottom: `1px solid ${C.faint}`, display: "grid", gridTemplateColumns: "34px 1fr", gap: 14, paddingLeft: hov ? 8 : 0, transition: "padding-left .2s" }}>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: "0.66rem", fontWeight: 700, color: C.orange, paddingTop: 3 }}>{n}</div>
      <div>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: "0.93rem", fontWeight: 700, color: C.navy, marginBottom: 4 }}>{t}</div>
        <p style={{ fontSize: "0.82rem", color: C.mid, lineHeight: 1.65 }}>{d}</p>
      </div>
    </div>
  );
};

/* ── WHY ── */
const pillars = [
  { n: "01", t: "Ecosystem Design", d: "Our companies share infrastructure and strategy — making each one stronger than it would be alone." },
  { n: "02", t: "Execution First", d: "We build, run, and deliver. Every HoooM company is operational and generating real results." },
  { n: "03", t: "Built for Africa, Scaled for World", d: "Deep local market understanding paired with global standards of design and technology." },
  { n: "04", t: "Long-Term Thinking", d: "Every decision is made with durability in mind. We build companies meant to last." },
];

export const Why = () => {
  const { isTab } = useBreakpoint();
  return (
    <section id="why" style={{ padding: `80px ${isTab ? "20px" : "56px"}`, background: C.off, display: "grid", gridTemplateColumns: isTab ? "1fr" : "1fr 1fr", gap: isTab ? 48 : 64, alignItems: "center" }}>
      <Reveal>
        <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}>
          <Ph src={whyImg} height={isTab ? 280 : 460} />
          <div style={{ position: "absolute", bottom: 18, left: 18, right: 18, background: "rgba(255,255,255,.95)", backdropFilter: "blur(8px)", borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, boxShadow: "0 6px 20px rgba(14,19,34,.1)" }}>
            <div style={{ width:38, height:38, borderRadius:10, background:C.orange, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0 }}>🏆</div>
            <div>
              <div style={{ fontSize:"0.78rem", fontWeight:700, color:C.navy }}>Built from Africa</div>
              <div style={{ fontSize:"0.68rem", color:C.mid }}>Global standards · Local insight</div>
            </div>
          </div>
        </div>
      </Reveal>
      <div>
        <SHead eyebrow="Why HoooM" title={`Focused on what <span style="font-style:italic;font-family:'Poppins',sans-serif;font-weight:400;color:${C.orange}">actually matters.</span>`} sub="We build focused companies around everyday needs. Our brands are designed to create measurable value across business, health, and finance."/>
        <div style={{ marginTop:36 }}>
          {pillars.map((p,i)=>(
            <Reveal key={p.n} delay={i*60}><Pillar {...p}/></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
