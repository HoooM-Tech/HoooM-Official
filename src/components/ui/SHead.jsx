import { C } from "../../constants";
import { Reveal } from "./Reveal";

/* ── EYEBROW + SECTION TITLE ── */
export const SHead = ({ eyebrow, title, sub, center=false }) => (
  <div style={{ textAlign:center?"center":"left" }}>
    <Reveal><p style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:C.orange, marginBottom:12 }}>{eyebrow}</p></Reveal>
    <Reveal delay={60}><h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,4vw,3rem)", fontWeight:800, lineHeight:1.1, letterSpacing:"-0.025em", color:C.navy, maxWidth:center?"none":640 }} dangerouslySetInnerHTML={{__html:title}}/></Reveal>
    {sub && <Reveal delay={120}><p style={{ marginTop:14, fontSize:"0.93rem", color:C.mid, lineHeight:1.75, maxWidth:center?560:480, margin: center?"14px auto 0":"14px 0 0" }}>{sub}</p></Reveal>}
  </div>
);
