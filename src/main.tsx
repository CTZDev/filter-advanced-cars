import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FilterApp from "./FilterApp.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FilterApp />
  </StrictMode>
);
