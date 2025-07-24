import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // Asegúrate de que la ruta sea correcta
import { About } from "./About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <About />
  </StrictMode>
);
