import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { SHead } from "../ui/SHead";
import { Ph } from "../ui/Ph";

/* ── TESTIMONIALS ── */
const testis = [
  { q:"HoooM delivered a digital product that transformed how we operate. Professional, creative, and deeply committed to getting it right.", name:"Lizza Atelier . Elizabeth", role:"CEO · Tech by HoooM client" },
  { q:"Orbbit gave our brand a completely new identity. The strategy was sharp, the execution flawless. We saw real growth from day one.", name:"Valore Consulting/Reviq . Ayomide Akodu", role:"Founder · Orbbit by HoooM" },
  { q:"Physifit changed how I think about my health entirely. The coaching is specialized, patient, and genuinely transformative.", name:"Sen. Ikeyina", role:"Client · Physifit by HoooM" },
];

export const Testimonials = () => {
  const { isMob, isTab } = useBreakpoint();
  const cols = isMob?"1fr":isTab?"1fr 1fr":"repeat(3,1fr)";
  return (
    <section id="testimonials" style={{ padding:`80px ${isTab?"20px":"56px"}`, background:C.white }}>
      <SHead eyebrow="Testimonials" title={`What clients <span style="font-style:italic;font-family:'Instrument Serif',serif;font-weight:400;color:${C.orange}">say.</span>`}/>
      <div style={{ display:"grid", gridTemplateColumns:cols, gap:18, marginTop:48 }}>
        {testis.map((t,i)=>(
          <Reveal key={i} delay={i*70}>
            <div style={{ background:C.off, borderRadius:18, padding:"28px 26px" }}>
              <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"2.2rem", color:C.orange, lineHeight:1, marginBottom:12 }}>"</div>
              <p style={{ fontSize:"0.88rem", color:C.mid, lineHeight:1.75, marginBottom:22 }}>{t.q}</p>
              <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                <div style={{ width:40, height:40, borderRadius:"50%", overflow:"hidden", flexShrink:0 }}><Ph label="" height={40}/></div>
                <div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontSize:"0.84rem", fontWeight:700, color:C.navy }}>{t.name}</div>
                  <div style={{ fontSize:"0.72rem", color:C.mid }}>{t.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
