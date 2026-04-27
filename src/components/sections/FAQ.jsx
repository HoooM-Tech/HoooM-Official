import { useState } from "react";
import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { SHead } from "../ui/SHead";
import { Btn } from "../ui/Btn";

/* ── FAQ ── */
const faqs = [
  { q:"What industries does HoooM operate in?", a:"HoooM operates across four sectors: technology (software & web), marketing and branding, wellness and fitness, and fintech. Each company is focused, but benefits from shared HoooM infrastructure." },
  { q:"Can I work with more than one HoooM company?", a:"Absolutely. Many clients engage multiple companies — for example, Tech by HoooM for their website and Orbbit for brand strategy. We coordinate internally so the experience is seamless." },
  { q:"Do you work with clients outside Nigeria?", a:"Yes. While headquartered in Lagos, we work with clients across Africa and internationally. Our digital services are fully remote-compatible." },
  { q:"How long does a typical project take?", a:"A branding project typically runs 3–6 weeks. Software builds range from 6 to 16 weeks depending on complexity. We scope every project individually and give a clear timeline upfront." },
  { q:"Is Physifit available for corporate wellness programs?", a:"Yes. Physifit offers tailored corporate wellness programs in addition to individual coaching. We specialize in senior and postpartum clients but can build programs for specific organizational needs." },
  { q:"How do I get started?", a:"Fill out the contact form, email it@hooom.org, or reach out via WhatsApp. We'll schedule a discovery call and recommend the right HoooM company or combination for you." },
];

export const FAQ = () => {
  const { isTab } = useBreakpoint();
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding:`80px ${isTab?"20px":"56px"}`, background:C.off, display:"grid", gridTemplateColumns:isTab?"1fr":"1fr 1.4fr", gap:isTab?48:64, alignItems:"start" }}>
      <div style={isTab?{}:{ position:"sticky", top:96 }}>
        <SHead eyebrow="FAQ" title={`Common <span style="font-style:italic;font-family:'Instrument Serif',serif;font-weight:400;color:${C.orange}">questions.</span>`} sub="Can't find what you need? Reach out — we reply within 24 hours."/>
        <div style={{ marginTop:24 }}><Btn href="#contact" variant="solid">Ask a Question</Btn></div>
      </div>
      <Reveal>
        <div>
          {faqs.map((f,i)=>(
            <div key={i} style={{ borderTop:`1px solid ${C.faint}`, ...(i===faqs.length-1?{borderBottom:`1px solid ${C.faint}`}:{}) }}>
              <button onClick={()=>setOpen(open===i?-1:i)}
                style={{ width:"100%", background:"none", border:"none", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 0", fontFamily:"'Syne',sans-serif", fontSize:"0.92rem", fontWeight:700, color:open===i?C.orange:C.navy, cursor:"pointer", textAlign:"left", gap:14, transition:"color .2s" }}>
                {f.q}
                <div style={{ width:26, height:26, borderRadius:"50%", background:open===i?C.orange:C.navy, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.95rem", flexShrink:0, transform:open===i?"rotate(45deg)":"none", transition:"all .25s" }}>+</div>
              </button>
              {open===i && <p style={{ fontSize:"0.84rem", color:C.mid, lineHeight:1.75, paddingBottom:18 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};
