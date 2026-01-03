import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CardChange, { CardContext } from "./context/CardChange.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <CardChange>
        <App />
      </CardChange>
  </StrictMode>
);
