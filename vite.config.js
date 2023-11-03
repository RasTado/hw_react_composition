import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/hw_react_composition/",
  };

  // if (command !== "serve") {
  //   config.base = "/hw_react_composition/";
  // }

  return config;
});
