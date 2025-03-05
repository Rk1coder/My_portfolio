import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@/providers/theme-provider";
import "./styles/theme.css";
import "./styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error('Could not find root element with id "root"');
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}