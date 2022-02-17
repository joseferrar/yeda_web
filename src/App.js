import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./components/theme/default";
import RouteFC from "./components/Routes/RouteFC";
import store from "./redux/store/store";
// import { REACT_URL } from "./api";

function App() {
  // const fetchdata = () => {
  //   REACT_URL.get(`/allproducts`).then((response) => {
  //     console.log(response.data);
  //   });
  // };

  // React.useEffect(() => {
  //   fetchdata();
  // }, []);
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
