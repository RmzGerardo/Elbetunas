import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/header.jsx";
import "./assets/css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/js/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
