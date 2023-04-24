import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { MainRoutes } from "./routes"

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <MainRoutes>
      <App />
    </MainRoutes>
  </StrictMode>,
)
