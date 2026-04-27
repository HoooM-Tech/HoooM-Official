import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Btn } from "../ui/Btn";
import { Ph } from "../ui/Ph";

// Assets
import heroImg from "../../assets/IMG_2527.webp";
import av1 from "../../assets/IMG_2520.webp";
import av2 from "../../assets/IMG_2521.webp";
import av3 from "../../assets/IMG_2522.webp";

/* ── HERO ── */
export const Hero = () => {
  const { isMob, isTab } = useBreakpoint();
  const avatars = [av1, av2, av3];

  return (
    <section id="home" style={{ minHeight: "100vh", padding: `${isTab ? "110px 20px 64px" : "130px 56px 80px"}`, display: "grid", gridTemplateColumns: isTab ? "1fr" : "1fr 1fr", gap: isTab ? 40 : 56, alignItems: "center", background: C.off, position: "relative", overflow: "hidden" }}>
      {/* Blobs */}
      <div style={{ position: "absolute", top: -140, right: -80, width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle,rgba(208,103,20,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -40, width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(98,192,195,.12) 0%,transparent 70%)", pointerEvents: "none" }} />

      {/* Left col */}
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.orange, color: "#fff", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 13px", borderRadius: 100, marginBottom: 22, animation: "fadeUp .7s .2s both" }}>
          🌍 Lagos, Nigeria · Est. 2020
        </div>
        <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: `clamp(2.2rem,${isTab ? "7vw" : "5.2vw"}, 5rem)`, fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.03em", color: C.navy, animation: "fadeUp .8s .35s both" }}>
          Building<br />Companies<br />That Solve<br />
          <span style={{ color: C.orange, fontStyle: "italic", fontFamily: "'Instrument Serif',serif", fontWeight: 400 }}>Real Problems.</span>
        </h1>
        <p style={{ marginTop: 20, fontSize: isMob ? "0.93rem" : "1rem", color: C.mid, lineHeight: 1.75, maxWidth: 460, animation: "fadeUp .8s .5s both" }}>
          HoooM is a multi-industry company creating impact through technology, branding, wellness, and smarter financial tools.
        </p>
        <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", animation: "fadeUp .8s .65s both" }}>
          <Btn href="#companies" variant="solid">Explore Our Companies</Btn>
          <Btn href="#contact" variant="ghost">Work With Us</Btn>
        </div>
        <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 12, animation: "fadeUp .8s .8s both" }}>
          <div style={{ display: "flex" }}>
            {avatars.map((img, i) => (
              <div key={i} style={{ width: 32, height: 32, borderRadius: "50%", border: "2px solid #fff", marginRight: -8, background: C.off2, overflow: "hidden", position: "relative" }}>
                <Ph src={img} height={32} />
              </div>
            ))}
          </div>
          <span style={{ fontSize: "0.8rem", color: C.mid }}><strong style={{ color: C.navy }}>500+ clients</strong> · 6+ years</span>
        </div>
      </div>

      {/* Right col — hidden on mobile/tablet */}
      {!isTab && (
        <div style={{ position: "relative", animation: "fadeUp .9s .4s both" }}>
          <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
            <Ph src={heroImg} height={400} alt="HoooM Tech Workspace" priority={true} />
          </div>
          <div style={{ position: "absolute", bottom: -16, left: -16, background: "#fff", borderRadius: 14, padding: "13px 16px", boxShadow: "0 8px 28px rgba(14,19,34,.12)", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: C.cyan, animation: "pulse 2s infinite", flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 700, color: C.navy }}>Active & Growing</div>
              <div style={{ fontSize: "0.68rem", color: C.mid }}>4 companies · multiple industries</div>
            </div>
          </div>
          <div style={{ position: "absolute", top: -16, right: -16, background: C.orange, color: "#fff", borderRadius: 12, padding: "12px 15px", fontFamily: "'Syne',sans-serif", fontSize: "1.3rem", fontWeight: 800, lineHeight: 1, boxShadow: "0 8px 22px rgba(208,103,20,.32)" }}>
            4<div style={{ fontSize: "0.65rem", fontWeight: 500, fontFamily: "'Inter',sans-serif", opacity: .85, marginTop: 2 }}>Companies</div>
          </div>
        </div>
      )}
    </section>
  );
};
