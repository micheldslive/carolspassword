import { PropsWithChildren } from "react"
import { Container } from "./styles"

export function ContainerGlobal({ children }: PropsWithChildren) {
  return <Container>{children}</Container>
}
