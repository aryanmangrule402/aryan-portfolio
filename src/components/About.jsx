import { Typography, Paper } from "@mui/material";

export default function About() {
  return (
    <section id="about" style={{ marginTop: "80px" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        About Me
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="body1">
          I'm a final-year B.Tech Computer Science student with expertise in{" "}
          <strong>Java, Spring Boot, React.js</strong>, and full-stack development.  
          I enjoy solving real-world problems and building impactful projects.
        </Typography>
      </Paper>
    </section>
  );
}
