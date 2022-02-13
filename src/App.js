import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme/default";
import RouteFC from "./components/Routes/RouteFC";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <RouteFC />
      </ThemeProvider>
    </div>
  );
}

export default App;
