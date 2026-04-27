import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";

/* ── STATS ── */
const stats = [["4","Active Companies"],["500+","Clients Trained"],["6+","Years of Execution"],["12+","Projects Delivered"]];
export const Stats = () => {
  const { isMob } = useBreakpoint();
  return (
    <section id="stats" style={{ background:C.navy, padding: isMob?"56px 20px":"68px 56px", display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap: isMob?"32px 16px":"32px" }}>
      {stats.map(([n,l],i)=>(
        <Reveal key={l} delay={i*70}>
          <div style={{ textAlign:"center" }}>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize: isMob?"2.6rem":"3.2rem", fontWeight:800, color:C.orange, lineHeight:1, letterSpacing:"-0.03em" }}>{n}</div>
            <div style={{ fontSize:"0.82rem", color:"rgba(255,255,255,.5)", marginTop:8, fontWeight:500 }}>{l}</div>
          </div>
        </Reveal>
      ))}
    </section>
  );
};
