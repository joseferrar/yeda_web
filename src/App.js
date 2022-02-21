import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme/default";
import RouteFC from "./components/Routes/RouteFC";
import store from "./redux/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouteFC />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
