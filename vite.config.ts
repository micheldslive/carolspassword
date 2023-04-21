import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import EnvironmentPlugin from "vite-plugin-environment"
import tsConfigPaths from "vite-tsconfig-paths"
import svgrPlugin from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react(), EnvironmentPlugin("all"), tsConfigPaths(), svgrPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ".vitest/setup.ts",
    css: true,
  },
}))
