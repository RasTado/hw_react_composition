import { defineConfig } from "vite";
import { name } from "./package.json";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: `/${name}/`,
  };

  // if (command !== "serve") {
  //   config.base = "/hw_react_composition/";
  // }

  return config;
});
