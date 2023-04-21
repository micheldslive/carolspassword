import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard, Quiz, Bonus } from "@/pages"

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/bonus" element={<Bonus />} />
      </Routes>
    </BrowserRouter>
  )
}
