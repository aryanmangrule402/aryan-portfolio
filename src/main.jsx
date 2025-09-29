import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },   // light blue
    secondary: { main: "#f48fb1" }, // pink
    background: { default: "#0d1117", paper: "#161b22" },
    text: { primary: "#e6edf3", secondary: "#8b949e" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
