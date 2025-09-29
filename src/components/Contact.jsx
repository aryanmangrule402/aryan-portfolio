import { TextField, Button, Stack, Typography, Paper } from "@mui/material";

export default function Contact() {
  return (
    <section id="contact" style={{ marginTop: "80px" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Contact Me
      </Typography>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 600, margin: "auto" }}>
        <Stack spacing={2}>
          <TextField label="Name" fullWidth required />
          <TextField label="Email" fullWidth required type="email" />
          <TextField label="Message" fullWidth multiline rows={4} required />
          <Button variant="contained" color="primary">Send</Button>
        </Stack>
      </Paper>
    </section>
  );
}
