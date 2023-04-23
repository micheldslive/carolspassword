import { Container, Title } from "./styles"

export type LogoProps = {
  size: number
  subTitle: string
}

export function Logo({ size, subTitle }: LogoProps) {
  return (
    <Container size={size} aria-label="logo">
      <Title>{`Carol's`}</Title>
      <h1>{subTitle}</h1>
    </Container>
  )
}
