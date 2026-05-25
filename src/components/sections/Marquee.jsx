import { C } from "../../constants";

/* ── MARQUEE ── */
export const Marquee = () => {
  const items = ["Tech by HoooM","✦","Orbbit by HoooM","✦","Physifit by HoooM","✦","Auto Pay by HoooM","✦","Lagos, Nigeria","✦","Built for Impact","✦"];
  return (
    <div style={{ background:C.navy, padding:"15px 0", overflow:"hidden", display:"flex" }} aria-hidden="true">
      <div className="mq-track">
        {[...items,...items].map((t,i)=>(
          <span key={i} style={{ fontFamily:"'Poppins',sans-serif", fontSize:"0.76rem", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", color: t==="✦"?C.orange:"rgba(255,255,255,.45)" }}>{t}</span>
        ))}
      </div>
    </div>
  );
};
