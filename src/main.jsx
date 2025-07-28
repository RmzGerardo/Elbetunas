import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./headers/header.jsx";
import "./headers/headers.css";

import { About } from "./portafolio/About.jsx";
import "./portafolio/about.css";

import { Life } from "./about_main/life.jsx";
import "./about_main/life.css";

import { Footer } from "./footer/footer.jsx";
import "./footer/footer.css";

// global
import "./app.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <About />
    <Life />
    <Footer />
  </StrictMode>
);
