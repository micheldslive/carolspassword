import { BrowserRouter } from "react-router-dom"
import { PropsWithChildren } from "react"

export function MainRoutes({ children }: PropsWithChildren) {
  return <BrowserRouter>{children}</BrowserRouter>
}
