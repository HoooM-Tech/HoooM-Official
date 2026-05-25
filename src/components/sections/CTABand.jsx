import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { Btn } from "../ui/Btn";

/* ── CTA BAND ── */
export const CTABand = () => {
  const { isTab } = useBreakpoint();
  return (
    <section id="cta-band" style={{ padding:`80px ${isTab?"20px":"56px"}`, background:C.navy, textAlign:"center", position:"relative", overflow:"hidden" }}>
      {[520,340].map(s=>(
        <div key={s} style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:s, height:s, borderRadius:"50%", border:"1px solid rgba(255,255,255,.06)", pointerEvents:"none" }}/>
      ))}
      <Reveal>
        <h2 style={{ fontFamily:"'Poppins',sans-serif", fontSize:`clamp(1.8rem,${isTab?"6vw":"5vw"},4rem)`, fontWeight:800, color:"#fff", lineHeight:1.05, letterSpacing:"-0.03em", position:"relative", zIndex:1 }}>
          Let's build something<br/><span style={{ fontStyle:"italic", fontFamily:"'Poppins',sans-serif", fontWeight:400, color:C.orange }}>valuable together.</span>
        </h2>
      </Reveal>
      <Reveal delay={80}><p style={{ color:"rgba(255,255,255,.5)", fontSize:"0.95rem", marginTop:14, position:"relative", zIndex:1 }}>Whether you need software, branding, wellness coaching, or a partnership — we'd love to hear from you.</p></Reveal>
      <Reveal delay={160}>
        <div style={{ marginTop:34, display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap", position:"relative", zIndex:1 }}>
          <Btn href="#contact" variant="white">Start a Conversation</Btn>
          <Btn href="#companies" variant="wout">Explore Our Companies</Btn>
        </div>
      </Reveal>
    </section>
  );
};
