import { useDataStates } from "@/contexts"
import { AvatarAnimation, Button, Modal } from "@/components"
import {
  Container,
  ContainerAvatar,
  ContentPerson,
  DataPersonBox,
  Email,
  Name,
  PersonBox,
  Score,
  ScoreBox,
  Text,
} from "./styles"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

export type ProfileProps = {
  open: boolean
  onClose: () => void
}

export function Profile({ open, onClose }: ProfileProps) {
  const { score, resetData } = useDataStates()
  const navigate = useNavigate()

  const Logout = useCallback(() => {
    resetData()
    onClose()
    navigate("/")
  }, [])

  return (
    <Modal open={open} onClose={onClose} closeIcon>
      <Container>
        <ContentPerson>
          <PersonBox>
            <DataPersonBox>
              <Name>Carol</Name>
              <Email>carol@gmail.com</Email>
            </DataPersonBox>
          </PersonBox>
          <ScoreBox>
            <Score>{score}</Score>
            <Text>pts</Text>
          </ScoreBox>
        </ContentPerson>

        <ContainerAvatar>
          <AvatarAnimation variantAnimation="dancing" />
        </ContainerAvatar>

        <Button
          type="button"
          variant={1}
          text="Logout"
          icon="power"
          onClick={Logout}
        />
      </Container>
    </Modal>
  )
}
