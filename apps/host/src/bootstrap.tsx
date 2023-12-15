import App from "./app";
import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, defaultTheme } from "ui-lib";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
