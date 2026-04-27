import { useState } from "react";
import { Monitor, Orbit, HeartPulse, Wallet } from "lucide-react";
import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { SHead } from "../ui/SHead";

/* ── ECO CARD ── */
const EcoCard = ({ n, icon: Icon, name, desc, bg, dark, img }) => {
  const { isMob } = useBreakpoint();
  const [hov, setHov] = useState(false);
  const tc = dark ? C.navy : "#fff";
  const dim = dark ? C.mid : "rgba(255,255,255,.65)";
  const iconBg = dark ? "rgba(14,19,34,.07)" : "rgba(255,255,255,.15)";
  const numC = dark ? "rgba(14,19,34,.3)" : "rgba(255,255,255,.4)";
  
  return (
    <div onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ 
        borderRadius:18, 
        padding: isMob?"24px 20px 52px":"32px 24px 56px", 
        background: bg,
        position:"relative", 
        overflow:"hidden", 
        transform:hov?"translateY(-5px)":"none", 
        boxShadow:hov?"0 18px 44px rgba(14,19,34,.2)":"none", 
        transition:"all .35s cubic-bezier(0.4, 0, 0.2, 1)" 
      }}>
      
      {/* Background Image with Overlay */}
      <div style={{ 
        position:"absolute", 
        inset:0, 
        zIndex:0,
        opacity: hov ? 0.9 : 0.45,
        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hov ? "scale(1.1)" : "scale(1)",
      }}>
        <img src={img} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter: hov ? "none" : "brightness(0.85)" }} />
        <div style={{ 
          position:"absolute", 
          inset:0, 
          background: dark 
            ? `linear-gradient(to bottom, rgba(247,246,242,0.2), ${bg} 90%)` 
            : `linear-gradient(to bottom, rgba(14,19,34,0.2), ${bg} 90%)` 
        }} />
      </div>

      <div style={{ position:"relative", zIndex:1 }}>
        <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.12em", color:numC, marginBottom: isMob?32:44 }}>{n}</div>
        <div style={{ width:44, height:44, borderRadius:12, background:iconBg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14, backdropFilter:"blur(8px)" }}>
          <Icon size={20} color={tc} strokeWidth={2.5} />
        </div>
        <div style={{ fontFamily:"'Syne',sans-serif", fontSize: isMob?"0.95rem":"1.05rem", fontWeight:700, color:tc, marginBottom:8, lineHeight:1.2 }}>{name}</div>
        <p style={{ fontSize:"0.8rem", lineHeight:1.6, color:dim, maxWidth:"90%", fontWeight:500 }}>{desc}</p>
        <div style={{ position:"absolute", bottom:-24, right:0, width:28, height:28, borderRadius:"50%", background:hov?C.orange:iconBg, color:hov?"#fff":tc, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.8rem", transition:"all .3s", transform:hov?"rotate(45deg) scale(1.1)":"none" }}>↗</div>
      </div>
    </div>
  );
};

/* ── ECOSYSTEM ── */
const ecoCards = [
  { 
    n:"01", icon:Monitor, name:"Tech by HoooM", bg:C.navy, dark:false,
    desc:"Digital products, websites, software systems, and modern business tools.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
  },
  { 
    n:"02", icon:Orbit, name:"Orbbit by HoooM", bg:C.off, dark:true,
    desc:"Brand identity, creative strategy, campaigns, and growth execution.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
  },
  { 
    n:"03", icon:HeartPulse, name:"Physifit by HoooM", bg:C.cyan, dark:true,
    desc:"Specialized wellness coaching for seniors and postpartum clients.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
  },
  { 
    n:"04", icon:Wallet, name:"Auto Pay by HoooM", bg:C.off2, dark:true,
    desc:"Simple tools that help people budget smarter and build healthier money habits.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
  },
];

export const Ecosystem = () => {
  const { isMob, isTab } = useBreakpoint();
  const cols = isMob ? "1fr" : isTab ? "1fr 1fr" : "repeat(4,1fr)";
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


