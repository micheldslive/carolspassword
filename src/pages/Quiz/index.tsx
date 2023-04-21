import { useEffect, useState } from "react"
import { Questions, Loading } from "@/components"
import { Container } from "./styles"

export function Quiz() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {/* <ScoreCircle score={pontuation} scale={0.4}/> */}
          <Questions />
        </Container>
      )}
    </>
  )
}
