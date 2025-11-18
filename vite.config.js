import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "userCardRemote",
      filename: "remoteEntry.js",
      exposes: {
        "./UserCard": "./src/components/UserCard.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: true,
  },
  server: {
    port: 5173,
  },
});
