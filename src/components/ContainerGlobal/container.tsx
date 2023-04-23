import { PropsWithChildren } from "react"
import { Container } from "./styles"

export function ContainerGlobal({ children }: PropsWithChildren) {
  return <Container aria-label="container">{children}</Container>
}
