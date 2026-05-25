import { motion } from "framer-motion";
import { C } from "../../constants";

export const AutoPayBrand = ({ style }) => {
  return (
    <div style={{ 
      width: "100%", 
      aspectRatio: "1/1", 
      background: "#0A1F1A", // Deep Emerald/Navy
      borderRadius: 24, 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      position: "relative", 
      overflow: "hidden",
      ...style 
    }}>
      {/* Soft Green Glow */}
      <div style={{ 
        position: "absolute", 
        width: "100%", 
        height: "100%", 
        background: `radial-gradient(circle at 70% 30%, #10B98115 0%, transparent 60%)`,
      }} />

      {/* Animated Flowing Wave (Growth) */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "50%", opacity: 0.2 }}>
        <motion.path
          d="M0 50 Q 250 10 500 50 T 1000 50"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          animate={{ x: [-500, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Stacking Budget Blocks */}
      <div style={{ position: "absolute", right: 40, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 8, opacity: 0.4 }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              width: [40, 60, 40],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
            style={{
              height: 4,
              background: "#10B981",
              borderRadius: 2,
              boxShadow: `0 0 10px #10B98188`
            }}
          />
        ))}
      </div>

      {/* Brand Content */}
      <div style={{ textAlign: "center", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            fontFamily: "'Poppins', sans-serif", 
            fontSize: "3.2rem", 
            fontWeight: 800, 
            color: "#fff", 
            letterSpacing: "-0.04em",
            lineHeight: 1
          }}
        >
          Auto<br />
          <span style={{ color: "#10B981" }}>Pay.</span>
        </motion.div>
        <div style={{ 
          fontSize: "0.7rem", 
          fontWeight: 700, 
          color: "rgba(255,255,255,0.4)", 
          textTransform: "uppercase", 
          letterSpacing: "0.4em", 
          marginTop: 16 
        }}>
          Smart Budgeting & Flow
        </div>
      </div>

      {/* Moving Sparkle (Transaction Flow) */}
      <motion.div
        animate={{ 
          offsetDistance: ["0%", "100%"]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          background: "#fff",
          borderRadius: "50%",
          boxShadow: "0 0 15px #fff",
          offsetPath: "path('M-20,150 Q250,50 520,150')",
        }}
      />
    </div>
  );
};
