import { AvatarAnimation, Logo } from "@/components"
import { Container, Content, IconLoading, TextFooter } from "./styles"
import Loading from "@/assets/images/loading.svg"

export function Load() {
  return (
    <Container aria-label="load">
      <AvatarAnimation variantAnimation="jumpRun" />
      <Content>
        <Logo subTitle="Password" size={18} />
        <IconLoading src={Loading} />
        <TextFooter>
          by
          <TextFooter withPurple> aleffreittas</TextFooter>
        </TextFooter>
      </Content>
    </Container>
  )
}
