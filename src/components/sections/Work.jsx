import { useState } from "react";
import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { SHead } from "../ui/SHead";
import { Ph } from "../ui/Ph";

// Assets
import w1 from "../../assets/IMG_2529.webp";
import w2 from "../../assets/logicchurch.png";
import w3 from "../../assets/lizza.png";
import w4 from "../../assets/IMG_2525.webp";
import w5 from "../../assets/IMG_2530.webp";
import w6 from "../../assets/IMG_2536.webp";
import w7 from "../../assets/trueconnect.png";

/* ── WORK CARD ── */
const WorkCard = ({ tag, name, type, src, url }) => {
  const [hov, setHov] = useState(false);
  const card = (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ borderRadius: 16, overflow: "hidden", background: C.white, transform: hov ? "translateY(-4px)" : "none", boxShadow: hov ? "0 16px 44px rgba(14,19,34,.1)" : "none", transition: "all .28s", height: "100%" }}>
      <Ph src={src} label={`${name} Screenshot`} height={180} />
      <div style={{ padding: "18px 20px" }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.66rem", fontWeight: 700, color: C.cyan, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>{tag}</div>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "1.05rem", fontWeight: 800, color: C.navy, marginBottom: 2 }}>{name}</div>
        <div style={{ fontSize: "0.78rem", color: C.mid }}>{type}</div>
      </div>
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
        {card}
      </a>
    );
  }
  return card;
};

/* ── WORK ── */
const works = [
  { tag: "Tech by HoooM", name: "Karsto", type: "Digital Product", src: w1, url: "#" },
  { tag: "Tech by HoooM", name: "Logic Church", type: "Web Platform", src: w2, url: "https://thelogicchurch.org/" },
  { tag: "Tech by HoooM", name: "Lizza Atelier", type: "Luxury Fashion House", src: w3, url: "https://www.lizzaatelier.com/" },
  { tag: "Orbbit by HoooM", name: "RevIq", type: "Brand Identity", src: w4, url: "#" },
  { tag: "Orbbit by HoooM", name: "GAH Awards", type: "Campaign Strategy", src: w5, url: "#" },
  { tag: "Orbbit by HoooM", name: "Dice Africa", type: "Creative Direction", src: w6, url: "#" },
  { tag: "Tech by HoooM", name: "True Connect", type: "Mobile & Web App", src: w7, url: "https://trueapp.trueconnectllc.com/" },
];

export const Work = () => {
  const { isMob, isTab } = useBreakpoint();
  const cols = isMob?"1fr":isTab?"1fr 1fr":"repeat(3,1fr)";
  return (
    <section id="work" style={{ padding:`80px ${isTab?"20px":"56px"}`, background:C.off }}>
      <SHead eyebrow="Our Work" title={`Proof through <span style="font-style:italic;font-family:'Instrument Serif',serif;font-weight:400;color:${C.orange}">execution.</span>`} sub="Across industries, our companies have delivered meaningful results for clients and communities."/>
      <div style={{ display:"grid", gridTemplateColumns:cols, gap:16, marginTop:48 }}>
        {works.map((w,i)=>(
          <Reveal key={w.name} delay={i*60}><WorkCard {...w}/></Reveal>
        ))}
      </div>
    </section>
  );
};
