import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./headers/header.jsx";
import "./headers/headers.css";

import { About } from "./portafolio/About.jsx";
import "./portafolio/about.css";

import { Portafolio } from "./about_main/Portafolio.jsx";
import "./about_main/life.css";

import { Foteer } from "./footer/Foteer.jsx";
import "./footer/footer.css";

// global
import "./app.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portafolio" element={<Portafolio />} />
      </Routes>
      <Foteer />
    </BrowserRouter>
  </StrictMode>
);
