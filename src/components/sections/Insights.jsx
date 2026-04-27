import { useState } from "react";
import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { SHead } from "../ui/SHead";
import { Ph } from "../ui/Ph";

// Assets
import ins1 from "../../assets/IMG_2528.webp";
import ins2 from "../../assets/IMG_2529.webp";
import ins3 from "../../assets/IMG_2521.webp";

/* ── INS CARD ── */
const InsCard = ({ tag, title, prev, meta, src }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${C.faint}`, transform: hov ? "translateY(-3px)" : "none", boxShadow: hov ? "0 12px 40px rgba(14,19,34,.08)" : "none", transition: "all .28s" }}>
      <Ph src={src} label="Article Cover Image" height={160} />
      <div style={{ padding: "20px" }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.66rem", fontWeight: 700, color: C.orange, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{tag}</div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1rem", fontWeight: 700, color: C.navy, lineHeight: 1.3, marginBottom: 8 }}>{title}</div>
        <p style={{ fontSize: "0.8rem", color: C.mid, lineHeight: 1.65 }}>{prev}</p>
        <div style={{ marginTop: 14, fontSize: "0.7rem", color: C.mid, display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 16, height: 1, background: C.faint }} />{meta}
        </div>
      </div>
    </div>
  );
};

/* ── INSIGHTS ── */
const insights = [
  { tag: "Strategy", title: "Why Venture Studios Are the Future of African Business Building", prev: "The venture studio model creates compounding advantages that single-company founders rarely access.", meta: "HoooM Team · Coming Soon", src: ins1 },
  { tag: "Technology", title: "What African Businesses Get Wrong About Their Digital Presence", prev: "Most businesses treat websites as digital brochures. The ones winning treat them as revenue infrastructure.", meta: "Tech by HoooM · Coming Soon", src: ins2 },
  { tag: "Wellness", title: "Why Niche Fitness Coaching Outperforms General Training", prev: "Specialization isn't a limitation — it's a superpower. Here's why Physifit focuses on clients others overlook.", meta: "Physifit by HoooM · Coming Soon", src: ins3 },
];

export const Insights = () => {
  const { isMob, isTab } = useBreakpoint();
  const cols = isMob?"1fr":isTab?"1fr 1fr":"repeat(3,1fr)";
  return (
    <section id="insights" style={{ padding:`80px ${isTab?"20px":"56px"}`, background:C.white }}>
      <SHead eyebrow="Insights" title={`Thinking out <span style="font-style:italic;font-family:'Instrument Serif',serif;font-weight:400;color:${C.orange}">loud.</span>`}/>
      <div style={{ display:"grid", gridTemplateColumns:cols, gap:18, marginTop:48 }}>
        {insights.map((ins,i)=>(
          <Reveal key={i} delay={i*70}><InsCard {...ins}/></Reveal>
        ))}
      </div>
    </section>
  );
};
