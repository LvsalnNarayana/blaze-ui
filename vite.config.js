import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Fallback for local dev
    host: "0.0.0.0", // Allow external access
  },
  preview: {
    port: process.env.PORT || 3000, // Use Render’s assigned PORT
    host: "0.0.0.0",
    allowedHosts: ["all", "blaze-algo-ui.onrender.com"], // ✅ Add Render's domain here
  },
});
