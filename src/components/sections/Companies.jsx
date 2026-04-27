import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { SHead } from "../ui/SHead";
import { Ph } from "../ui/Ph";
import { Chip } from "../ui/Chip";
import { OrbbitBrand } from "../ui/OrbbitBrand";
import { TechBrand } from "../ui/TechBrand";
import { AutoPayBrand } from "../ui/AutoPayBrand";

// Assets
import imgTech from "../../assets/IMG_2519.webp";
import imgOrbbit from "../../assets/IMG_2525.webp";
import imgPhysi from "../../assets/PHYSIFIT16.jpg";
import imgAuto from "../../assets/IMG_2532.webp";

/* ── CO ROW ── */
const CoRow = ({ n, name, tag, intro, svcs, chips, clabel, src, Component, isTab }) => (
  <div style={{ display: "grid", gridTemplateColumns: isTab ? "1fr" : "180px 1fr 240px", gap: isTab ? "16px" : "40px", padding: "44px 0", borderTop: `1px solid ${C.faint}` }}>
    <div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "0.66rem", fontWeight: 700, color: C.cyan, letterSpacing: "0.1em", marginBottom: 8 }}>{n}</div>
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: isTab ? "1.1rem" : "1.25rem", fontWeight: 800, color: C.navy, lineHeight: 1.2, marginBottom: 8 }}>{name}</div>
      <span style={{ background: C.off, borderRadius: 100, fontSize: "0.68rem", fontWeight: 600, color: C.mid, padding: "3px 11px", display: "inline-block" }}>{tag}</span>
    </div>
    <div>
      <p style={{ fontSize: "0.9rem", color: C.mid, lineHeight: 1.75, marginBottom: 20 }}>{intro}</p>
      {svcs.map(s => (
        <div key={s} style={{ fontSize: "0.84rem", color: C.navy, fontWeight: 500, padding: "8px 0", borderBottom: `1px solid ${C.faint}`, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: C.orange, fontSize: "0.76rem" }}>→</span>{s}
        </div>
      ))}
      {chips.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <div style={{ fontSize: "0.68rem", fontWeight: 700, color: C.mid, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{clabel}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {chips.map(c => <Chip key={c}>{c}</Chip>)}
          </div>
        </div>
      )}
    </div>
    {!isTab && (
      <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.06)", alignSelf: "start", width: "100%" }}>
        {Component ? <Component /> : <Ph src={src} label={name} height={200} />}
      </div>
    )}
  </div>
);

/* ── COMPANIES ── */
const companies = [
  { n: "01", name: "Tech by HoooM", tag: "Technology", intro: "Technology solutions for ambitious businesses. We design and build the digital infrastructure modern companies need to compete and grow.", svcs: ["Custom Software Development", "Websites & Web Applications", "UI/UX Design", "Mobile Apps", "Business Systems & Automation"], chips: ["Karsto", "Logic Church", "Lizza Atelier"], clabel: "Selected Work", Component: TechBrand },
  { n: "02", name: "Orbbit by HoooM", tag: "Marketing & Brand", intro: "Brand growth through creativity and strategy. We help businesses build identities that attract, campaigns that convert, and systems that scale.", svcs: ["Brand Identity & Strategy", "Marketing Strategy", "Campaign Execution", "Social Media Systems", "Creative Direction"], chips: ["RevIq", "Matopeda Atelier", "GAH Awards", "NCIC", "Dice Africa"], clabel: "Selected Work", Component: OrbbitBrand },
  { n: "03", name: "Physifit by HoooM", tag: "Wellness", intro: "Wellness coaching for results, longevity, and recovery. Specialized programs for seniors and postpartum clients — 500+ trained over 10+ years.", svcs: ["Senior Wellness & Longevity", "Postpartum Recovery & Fitness", "Specialized Rehabilitation", "Personalized Coaching Programs"], chips: ["Senator Ikeyina", "Prof Ogunsola"], clabel: "Notable Clients", src: imgPhysi },
  { n: "04", name: "Auto Pay by HoooM", tag: "Fintech", intro: "A budgeting app helping users spend wisely, save consistently, and manage money confidently. Simple tools that build healthier financial habits.", svcs: ["Expense Tracking", "Monthly Budget Setting", "Spending Visibility Dashboard", "Financial Habit Building"], chips: [], clabel: "", Component: AutoPayBrand },
];

export const Companies = () => {
  const { isTab } = useBreakpoint();
  return (
    <section id="companies" style={{ padding:`80px ${isTab?"20px":"56px"}`, background:C.white }}>
      <SHead eyebrow="Our Companies" title={`Specialized. <span style="font-style:italic;font-family:'Instrument Serif',serif;font-weight:400;color:${C.orange}">Interconnected.</span>`}/>
      <div style={{ marginTop:56 }}>
        {companies.map((c,i)=>(
          <Reveal key={c.n} delay={60}><CoRow {...c} isTab={isTab}/></Reveal>
        ))}
      </div>
    </section>
  );
};
