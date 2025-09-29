import { Grid, Card, CardContent, Typography } from "@mui/material";

const skills = [
  { name: "Java", level: "Advanced" },
  { name: "Spring Boot", level: "Intermediate" },
  { name: "React.js", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "SQL", level: "Advanced" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ marginTop: "80px" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6">{skill.name}</Typography>
                <Typography color="text.secondary">{skill.level}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}
