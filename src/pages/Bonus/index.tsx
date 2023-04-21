import { Button, Logo, AvatarAnimation, Loading } from "@/components"
import { Card, Container, ContainerAvatar, Text, TitleCard } from "./styles"
import { useNavigate } from "react-router-dom"
import Carousel from "react-multi-carousel"
import { ModalBonus } from "./ModalBonus"
import { Fragment, useEffect, useState } from "react"

type AnimationProps = {
  id: number
  title: string
  animation: "dancing" | "dancingTwo" | "jump" | "jumpRun" | "walking"
}

export function Bonus() {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const animations: AnimationProps[] = [
    {
      id: 0,
      title: "Jump",
      animation: "jump",
    },
    {
      id: 1,
      title: "Jump & Run",
      animation: "jumpRun",
    },
    {
      id: 2,
      title: "Dancing",
      animation: "dancing",
    },
    {
      id: 3,
      title: "Dancing Two",
      animation: "dancingTwo",
    },
    {
      id: 4,
      title: "Walking",
      animation: "walking",
    },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <Text>Bonus</Text>
            <Logo subTitle="Animations" size={12} />
            <Carousel responsive={responsive}>
              <Fragment>
                {animations.map((animation) => (
                  <Card key={animation.id}>
                    <TitleCard>{animation.title}</TitleCard>
                    <ContainerAvatar>
                      <AvatarAnimation variantAnimation={animation.animation} />
                    </ContainerAvatar>
                  </Card>
                ))}
              </Fragment>
            </Carousel>

            <Button
              type="button"
              icon="house"
              text="Home"
              variant={1}
              onClick={() => navigate("/")}
            />
          </Container>
          <ModalBonus />
        </>
      )}
    </>
  )
}
