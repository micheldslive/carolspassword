import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyle } from "./styles/global"
import { Header, Load } from "./components"
import {
  Container,
  Content,
  GlobalContainer,
} from "./components/ContainerGlobal/styles"
import { MyRoutes } from "./routes"
import { useEffect, useState } from "react"
import { useDataStates } from "./contexts"

export function App() {
  const [loading, setLoading] = useState(false)
  const { initialLoading } = useDataStates()
  const pathname = window?.location?.pathname

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
      <GlobalStyle />
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
