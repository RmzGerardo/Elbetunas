import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Elbetunas/", // Cambia '/React-RTP/' por el nombre exacto de tu repositorio de GitHub si es diferente.
});
