import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { createProxyMiddleware } from "http-proxy-middleware";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/ruu_cinema": {
        target: "https://ruucinema.online",
        changeOrigin: true,
        secure: false, // Set to false if your target server uses HTTP instead of HTTPS
      },
    },
  },
});
