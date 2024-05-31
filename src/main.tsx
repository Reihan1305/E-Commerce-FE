import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import "./index.css"
import { Provider } from "react-redux";
import store from "./store";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#ffffff", // Latar belakang putih
    },
    text: {
      primary: "#000000", // Teks hitam
    },
  },
  typography: {
    allVariants: {
      color: "#000000", // Atur semua varian Typography agar berwarna hitam
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);