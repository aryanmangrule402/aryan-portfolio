import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ mt: 10, py: 3, textAlign: "center", bgcolor: "grey.200" }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Aryan Mangrule | Built with React, MUI & Framer Motion
      </Typography>
    </Box>
  );
}
