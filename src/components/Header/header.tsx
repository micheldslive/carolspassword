import { useEffect, useState } from "react"
import { useDataStates } from "@/contexts"
import { Logo } from "@/components"
import { Avatar } from "./Avatar"
import {
  BoxValueQuestion,
  Container,
  ContentLogo,
  Text,
  ValueQuestion,
} from "./styles"

export function Header() {
  const [withScore, setWithScore] = useState(false)
  const { score } = useDataStates()

  useEffect(() => {
    const url = window?.location?.pathname

    if (!(url === "/" || url === "/dashboard")) {
      setWithScore(true)
      return
    }
    setWithScore(false)
  }, [window.location.pathname])

  return (
    <Container>
      <ContentLogo onClick={() => (window.location.href = "/")}>
        <Logo size={12} subTitle="Password" />
      </ContentLogo>
      {withScore && (
        <BoxValueQuestion>
          <Text>Score</Text>
          <ValueQuestion>{score}</ValueQuestion>
          <Text>pts</Text>
        </BoxValueQuestion>
      )}
      <Avatar />
    </Container>
  )
}
