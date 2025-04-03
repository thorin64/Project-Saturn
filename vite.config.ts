import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sqlzTest } from "./src/config/database.ts";
sqlzTest();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
