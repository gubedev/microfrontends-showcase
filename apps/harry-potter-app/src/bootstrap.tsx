import App from "./app";
import React from "react";
import { createRoot } from "react-dom/client";
import "./i18n";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
