import { Typography, Box } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        sx={{
          py: 3,
          textAlign: "center",
          borderTop: "1px solid #30363d",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography variant="body1" color="text.secondary">
          © {new Date().getFullYear()} Aryan Mangrule | Web Developer
        </Typography>
      </Box>
    </motion.div>
  );
}
