// Loader.jsx
import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#121212", // dark background
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      {/* Outer glowing circle */}
      <motion.div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "6px solid #90caf9",
          borderTopColor: "#f48fb1",
          marginBottom: 20,
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      />

      {/* Inner bouncing dots */}
      <Box sx={{ display: "flex", gap: 2 }}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              backgroundColor: "#90caf9",
            }}
            animate={{ y: ["0%", "-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </Box>

      <Typography
        sx={{ mt: 3, color: "#90caf9", letterSpacing: 2 }}
        variant="subtitle1"
      >
        Loading...
      </Typography>
    </Box>
  );
};

export default Loader;
