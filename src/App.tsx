import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/global"
import { Header, Load } from "./components"
import {
  Container,
  Content,
  GlobalContainer,
} from "./components/ContainerGlobal/styles"
import { MyRoutes } from "./routes"
import { useEffect, useState } from "react"
import { useDataStates } from "./contexts"
import { useLocation } from "react-router-dom"

export function App() {
  const [loading, setLoading] = useState(false)
  const { initialLoading } = useDataStates()
  const { pathname } = useLocation()

  async function getStart() {
    if (
      (pathname && pathname === "") ||
      (pathname === "/" && initialLoading === true)
    ) {
      setLoading(true)
    }

    const timer = setTimeout(async () => {
      setLoading(false)
    }, 5000)

    return clearTimeout(timer)
  }

  useEffect(() => {
    getStart()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <GlobalContainer>
          {loading ? (
            <Load />
          ) : (
            <div>
              <Header />
              <Content>
                <MyRoutes />
              </Content>
            </div>
          )}
        </GlobalContainer>
      </Container>
    </ThemeProvider>
  )
}
