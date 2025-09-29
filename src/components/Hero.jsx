import { motion } from "framer-motion";
import { Typography, Button, Stack } from "@mui/material";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Hi, I'm <span style={{ color: "#1976d2" }}>Aryan</span>
      </Typography>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        A Passionate Java Developer & Tech Enthusiast 🚀
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
        <Button variant="contained">View Resume</Button>
        <Button variant="outlined">Contact Me</Button>
      </Stack>
    </motion.section>
  );
}
