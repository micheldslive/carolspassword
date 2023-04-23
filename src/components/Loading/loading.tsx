import { Container, Content, IconLoading, Text } from "./styles"
import LoadingIcon from "@/assets/images/loading.svg"

export function Loading() {
  return (
    <Container aria-label="loading">
      <Content>
        <IconLoading src={LoadingIcon} />
        <Text>Loading</Text>
      </Content>
    </Container>
  )
}
