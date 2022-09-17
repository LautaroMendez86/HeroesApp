import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PortContextProvider } from "./components/content/PortContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortContextProvider>
      <App />
    </PortContextProvider>
  </React.StrictMode>
);
