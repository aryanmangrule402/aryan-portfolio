import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          MyPortfolio
        </Typography>
        <div>
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <Button
              key={item}
              color="inherit"
              onClick={() =>
                document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: "smooth" })
              }
            >
              {item}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
