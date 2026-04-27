import { C } from "../../constants";

/* ── IMAGE COMPONENT ── */
export const Ph = ({ label, src, height = 220, alt = "", priority = false }) => {
  return (
    <div style={{ width: "100%", height, background: `linear-gradient(135deg,${C.off} 0%,${C.off2} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      {src ? (
        <img 
          src={src} 
          alt={alt || label} 
          loading={priority ? "eager" : "lazy"}
          fetchpriority={priority ? "high" : "low"}
          onLoad={(e) => e.target.style.opacity = 1}
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            display: "block",
            opacity: 0,
            transition: "opacity 0.6s ease-in-out"
          }} 
        />
      ) : (
        <>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: C.faint, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.mid} strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          {label && <span style={{ fontSize: "0.72rem", color: C.mid, textAlign: "center", padding: "0 16px", lineHeight: 1.5, whiteSpace: "pre-line" }}>{label}</span>}
        </>
      )}
    </div>
  );
};
