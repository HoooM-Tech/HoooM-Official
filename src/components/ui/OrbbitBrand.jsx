import { motion } from "framer-motion";
import { C } from "../../constants";

export const OrbbitBrand = ({ style }) => {
  return (
    <div style={{ 
      width: "100%", 
      aspectRatio: "1/1", 
      background: "#0E1322", 
      borderRadius: 24, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      position: "relative", 
      overflow: "hidden",
      ...style 
    }}>
      {/* Background Glow */}
      <div style={{ 
        position: "absolute", 
        width: "60%", 
        height: "60%", 
        background: `radial-gradient(circle, ${C.cyan}22 0%, transparent 70%)`,
        borderRadius: "50%"
      }} />

      {/* Animated Orbit Rings */}
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            width: 220 + i * 40,
            height: 220 + i * 40,
            border: `1px dashed ${C.cyan}${i === 1 ? "44" : "22"}`,
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Content */}
      <div style={{ textAlign: "center", zIndex: 2, position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            fontFamily: "'Poppins', sans-serif", 
            fontSize: "3.2rem", 
            fontWeight: 800, 
            color: "#fff", 
            letterSpacing: "-0.03em",
            display: "flex",
            alignItems: "center",
            gap: 4
          }}
        >
          Orbbit
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ color: C.cyan }}
          >.</motion.span>
        </motion.div>
        <div style={{ 
          fontSize: "0.75rem", 
          fontWeight: 700, 
          color: "rgba(255,255,255,0.4)", 
          textTransform: "uppercase", 
          letterSpacing: "0.3em", 
          marginTop: 8 
        }}>
          Branding & Marketing
        </div>
      </div>

      {/* Floating Particle */}
      <motion.div
        animate={{ 
          x: [100, -100, 100], 
          y: [-100, 100, -100],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          width: 4,
          height: 4,
          background: C.cyan,
          borderRadius: "50%",
          boxShadow: `0 0 10px ${C.cyan}`
        }}
      />
    </div>
  );
};
