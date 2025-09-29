import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  TextField,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    background: { default: "#0d1117", paper: "#161b22" },
    text: { primary: "#e6edf3", secondary: "#8b949e" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    h2: { fontWeight: 800, fontSize: "3rem" },
    h3: { fontWeight: 700, fontSize: "2rem" },
    body1: { fontSize: "1.1rem" },
  },
});

const projects = [
  { title: "Generative Art Playground", desc: "Interactive NFT-based art platform" },
  { title: "Cafe Ordering Kiosk", desc: "On-premise digital ordering system" },
  { title: "Resource Allocation Research", desc: "Optimization with AI & ML" },
];
const skills = ["Java", "Spring Boot", "React.js", "Node.js", "SQL", "Docker", "GitHub", "AWS"];

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
  const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };

  // EmailJS send function
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          alert("Message sent successfully!");
      }, (error) => {
          alert("Error sending message, try again!");
      });
    e.target.reset();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          "&::-webkit-scrollbar": { width: "8px" },
          "&::-webkit-scrollbar-track": { background: "#0d1117" },
          "&::-webkit-scrollbar-thumb": { background: "#90caf9", borderRadius: "4px" },
        }}
      >

        {/* Navbar */}
        <AppBar position="sticky" color="transparent" elevation={0} sx={{ zIndex: 2 }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
                Aryan.dev
              </Typography>
            </motion.div>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {["Projects", "Skills", "Contact"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.2, textShadow: "0 0 8px #90caf9" }}
                >
                  <Button color="inherit">{item}</Button>
                </motion.div>
              ))}
            </Box>

            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 200, p: 2 }} role="presentation">
            <List>
              {["Projects", "Skills", "Contact"].map((text) => (
                <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Hero Section */}
        <Container
          sx={{
            minHeight: "90vh",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            textAlign: { xs: "center", md: "left" },
            position: "relative",
            zIndex: 1,
            gap: 6,
          }}
        >
    

          {/* Graphic + Avatar */}
          <Box sx={{ position: "relative", width: 200, height: 200 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: 240,
                height: 240,
                border: "4px solid #90caf9",
                borderRadius: "50%",
                opacity: 0.2,
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                width: 220,
                height: 220,
                border: "4px dashed #f48fb1",
                borderRadius: "50%",
                opacity: 0.3,
              }}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              style={{ position: "relative", zIndex: 1 }}
            >
              <Avatar
                src="/ResumeProfile.png" // Use public folder image
                alt="Aryan Mangrule"
                sx={{ width: 200, height: 200, boxShadow: "0 0 20px #90caf9" }}
              />
            </motion.div>
          </Box>

          {/* Hero Text */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} style={{ fontSize: "3rem", margin: 0 }}>
              Hi, I'm <span style={{ color: "#90caf9" }}>Aryan</span>
            </motion.h2>
            <motion.h5 variants={fadeInUp} style={{ marginTop: 16, fontWeight: 400, fontSize: "1.4rem" }}>
              A Web Developer crafting extraordinary experiences 🚀
            </motion.h5>

            {/* Buttons */}
            <motion.div variants={fadeInUp} style={{ marginTop: 24 }}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px #90caf9",
                  background: "linear-gradient(45deg, #90caf9, #f48fb1)"
                }}
                style={{ display: "inline-block", marginRight: 12 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="/Resume.pdf"
                  download="Aryan_Mangrule_Resume.pdf"
                >
                  Download Resume
                </Button>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 15px #f48fb1",
                  background: "linear-gradient(45deg, #f48fb1, #90caf9)"
                }}
                style={{ display: "inline-block" }}
              >
                <Button variant="outlined" color="secondary" href="#contact">
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>

        {/* Projects Section */}
        <Container sx={{ py: 10, position: "relative", zIndex: 1 }}>
          <Typography variant="h3" align="center" gutterBottom>🚀 Projects</Typography>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((p, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px #90caf9" }}
                >
                  <Card sx={{ bgcolor: "background.paper" }}>
                    <CardContent>
                      <Typography variant="h5" color="primary">{p.title}</Typography>
                      <Typography variant="body1" color="text.secondary">{p.desc}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>

       {/* Skills Section */}
<Container sx={{ py: 10, textAlign: "center", position: "relative", zIndex: 1 }}>
  <Typography variant="h3" gutterBottom>🛠 Skills</Typography>

  {/* Scrolling Container */}
 <Box
  sx={{
    overflow: "hidden",
    width: "100%",
    mt: 4,
    position: "relative",
    height: 60,
  }}
>
  <motion.div
    style={{ display: "flex", gap: "16px" }}
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
  >
    {[...skills, ...skills].map((s, i) => (
      <Chip
        key={i}
        label={s}
        color="primary"
        variant="outlined"
        sx={{ minWidth: 100 }}
      />
    ))}
  </motion.div>
</Box>

</Container>


        {/* Contact Section */}
        <Container id="contact" sx={{ py: 10, textAlign: "center", position: "relative", zIndex: 1 }}>
          <Typography variant="h3" gutterBottom>📩 Contact Me</Typography>
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <Box
              component="form"
              onSubmit={sendEmail}
              sx={{ maxWidth: 500, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField label="Your Name" name="user_name" variant="outlined" fullWidth required />
              <TextField label="Your Email" name="user_email" variant="outlined" fullWidth required />
              <TextField label="Message" name="message" variant="outlined" fullWidth multiline rows={4} required />
              <Button type="submit" variant="contained" color="secondary">Send</Button>
            </Box>
          </motion.div>
        </Container>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Box sx={{ py: 3, textAlign: "center", borderTop: "1px solid #30363d", position: "relative", zIndex: 1 }}>
            <Typography variant="body1" color="text.secondary">
              © {new Date().getFullYear()} Aryan Mangrule | Built with React + MUI + Framer Motion
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </ThemeProvider>
  );
}
