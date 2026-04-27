import { motion } from "framer-motion";
import { C } from "../../constants";

export const TechBrand = ({ style }) => {
  return (
    <div style={{ 
      width: "100%", 
      aspectRatio: "1/1", 
      background: "#080B14", 
      borderRadius: 24, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      position: "relative", 
      overflow: "hidden",
      ...style 
    }}>
      {/* Matrix Grid */}
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        backgroundImage: `linear-gradient(${C.cyan}08 1px, transparent 1px), linear-gradient(90deg, ${C.cyan}08 1px, transparent 1px)`,
        backgroundSize: "30px 30px",
        opacity: 0.5
      }} />

      {/* Pulsing Core */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: "absolute",
          width: "80%",
          height: "80%",
          background: `radial-gradient(circle, ${C.cyan}18 0%, transparent 70%)`,
          borderRadius: "50%"
        }}
      />

      {/* Floating Data Blocks */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 5 + i * 2, repeat: Infinity, delay: i * 0.5 }}
          style={{
            position: "absolute",
            width: 40 + i * 20,
            height: 2,
            background: C.cyan,
            left: `${15 + i * 15}%`,
            top: `${20 + i * 12}%`,
            borderRadius: 2,
            boxShadow: `0 0 8px ${C.cyan}`
          }}
        />
      ))}

      {/* Brand Label */}
      <div style={{ textAlign: "center", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ 
            fontFamily: "'Syne', sans-serif", 
            fontSize: "3.5rem", 
            fontWeight: 800, 
            color: "#fff", 
            letterSpacing: "-0.04em",
            lineHeight: 0.9
          }}
        >
          Tech<span style={{ color: C.orange }}>.</span>
        </motion.div>
        <div style={{ 
          fontSize: "0.7rem", 
          fontWeight: 700, 
          color: "rgba(255,255,255,0.4)", 
          textTransform: "uppercase", 
          letterSpacing: "0.4em", 
          marginTop: 12 
        }}>
          Software & Infrastructure
        </div>
      </div>
      
      {/* Corner Accents */}
      <div style={{ position: "absolute", top: 30, left: 30, width: 20, height: 20, borderTop: `2px solid ${C.cyan}`, borderLeft: `2px solid ${C.cyan}`, opacity: 0.3 }} />
      <div style={{ position: "absolute", bottom: 30, right: 30, width: 20, height: 20, borderBottom: `2px solid ${C.cyan}`, borderRight: `2px solid ${C.cyan}`, opacity: 0.3 }} />
    </div>
  );
};
