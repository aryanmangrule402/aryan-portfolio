import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

const projects = [
  { title: "Café Kiosk System", desc: "On-premise ordering app with React & Node.js" },
  { title: "Generative Art Playground", desc: "NFT-style art generator using React & Canvas" },
  { title: "Resource Allocation Research", desc: "Optimization project for scheduling" },
];

export default function Projects() {
  return (
    <section id="projects" style={{ marginTop: "80px" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((proj) => (
          <Grid item xs={12} md={4} key={proj.title}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6">{proj.title}</Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {proj.desc}
                </Typography>
                <Button size="small">View Details</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
