import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const root = process.cwd();

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(root, "src"),
            "@assets": path.resolve(root, "src/assets"),
            "@context": path.resolve(root, "src/context"),
            "@features": path.resolve(root, "src/features"),
            "@hooks": path.resolve(root, "src/hooks"),
            "@layouts": path.resolve(root, "src/layouts"),
            "@pages": path.resolve(root, "src/pages"),
            "@routes": path.resolve(root, "src/routes"),
            "@shared": path.resolve(root, "src/shared"),
            "@variables": path.resolve(root, "src/variables"),
        },
    },
    plugins: [react()],
});
