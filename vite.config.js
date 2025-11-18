import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "usercard_remote",
      filename: "remoteEntry.js",   // 远程暴露入口
      exposes: {
        "./UserCard": "./src/UserCard.jsx",  // 暴露 UserCard 组件
      },
      shared: ["react", "react-dom"],       // 必须共享 React
    }),
  ],
  build: {
    target: "esnext",
    minify: false,           // 必须，否则 remoteEntry 会被压缩导致 MF 失效
    cssCodeSplit: true,
  },
});

