import { useState } from "react";
import { C } from "../../constants";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { Reveal } from "../ui/Reveal";
import { SHead } from "../ui/SHead";
import { Btn } from "../ui/Btn";

/* ── CONTACT ── */
export const Contact = () => {
  const { isTab } = useBreakpoint();
  const [sent, setSent] = useState(false);
  const inp = { width:"100%", background:C.off, border:"2px solid transparent", borderRadius:10, padding:"11px 14px", fontFamily:"'Inter',sans-serif", fontSize:"0.87rem", color:C.navy, outline:"none", transition:"border-color .2s, background .2s" };
  const lbl = { display:"block", fontSize:"0.74rem", fontWeight:700, color:C.navy, marginBottom:6 };
  const focus = e => { e.target.style.borderColor=C.orange; e.target.style.background="#fff"; };
  const blur  = e => { e.target.style.borderColor="transparent"; e.target.style.background=C.off; };
  return (
    <section id="contact" style={{ padding:`80px ${isTab?"20px":"56px"}`, background:C.off, display:"grid", gridTemplateColumns:isTab?"1fr":"1fr 1fr", gap:isTab?48:64, alignItems:"start" }}>
      <div>
        <SHead eyebrow="Contact" title={`Let's build <span style="font-style:italic;font-family:'Instrument Serif',serif;font-weight:400;color:${C.orange}">with you.</span>`} sub="Whether you need software, branding, wellness coaching, or partnership opportunities, we'd love to hear from you."/>
        <div style={{ marginTop:32, display:"flex", flexDirection:"column", gap:16 }}>
          {[["✉️","Email","peter@hooom.org"],["📍","Location","Lagos, Nigeria"],["💬","Social","Instagram · LinkedIn · Twitter/X"]].map(([ico,label,val])=>(
            <div key={label} style={{ display:"flex", alignItems:"center", gap:14 }}>
              <div style={{ width:40, height:40, borderRadius:10, background:C.white, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0, boxShadow:"0 2px 8px rgba(14,19,34,.07)" }}>{ico}</div>
              <div>
                <div style={{ fontSize:"0.68rem", fontWeight:700, color:C.mid, textTransform:"uppercase", letterSpacing:"0.1em" }}>{label}</div>
                <div style={{ fontSize:"0.87rem", fontWeight:600, color:C.navy }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Reveal>
        <div style={{ background:C.white, borderRadius:20, padding: isTab?"24px":"40px", boxShadow:"0 8px 36px rgba(14,19,34,.07)" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:16 }}>
            {[["First Name","Peter"],["Last Name","Oshinowo"]].map(([l,p])=>(
              <div key={l}><label style={lbl}>{l}</label><input placeholder={p} style={inp} onFocus={focus} onBlur={blur}/></div>
            ))}
          </div>
          <div style={{ marginBottom:16 }}><label style={lbl}>Email Address</label><input type="email" placeholder="your@email.com" style={inp} onFocus={focus} onBlur={blur}/></div>
          <div style={{ marginBottom:16 }}>
            <label style={lbl}>I'm interested in</label>
            <select style={{...inp, appearance:"none"}} onFocus={focus} onBlur={blur}>
              <option value="">Select a company or topic</option>
              {["Tech by HoooM — Software & Websites","Orbbit by HoooM — Branding & Marketing","Physifit by HoooM — Wellness Coaching","Auto Pay — Budgeting App","Partnership / Investment","General Inquiry"].map(o=><option key={o}>{o}</option>)}
            </select>
          </div>
          <div style={{ marginBottom:16 }}><label style={lbl}>Message</label><textarea placeholder="Tell us about your project, goal, or question…" rows={4} style={{...inp, resize:"none"}} onFocus={focus} onBlur={blur}/></div>
          <Btn onClick={()=>{setSent(true);setTimeout(()=>setSent(false),3000)}} variant="solid" full style={{ background:sent?"#1a7a3f":undefined }}>
            {sent?"Message Sent ✓":"Start a Conversation →"}
          </Btn>
        </div>
      </Reveal>
    </section>
  );
};
