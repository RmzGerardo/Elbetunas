import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Header } from "./headers/header.jsx";
import "./headers/headers.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { About } from "./portafolio/About.jsx";
import "./portafolio/about.css";

// global
import "./app.css";

import { Life } from "./about_main/life.jsx";
import "./about_main/life.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <About />
    <Life />
  </StrictMode>
);
