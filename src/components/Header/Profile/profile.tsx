import { Avatar } from "../Avatar"
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

export type ProfileProps = {
  open: boolean
  onClose: () => void
}

export function Profile({ open, onClose }: ProfileProps) {
  const { score } = useDataStates()

  return (
    <Modal open={open} onClose={onClose} closeIcon>
      <Container>
        <ContentPerson>
          <PersonBox>
            <Avatar />
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
          onClick={() => console.log("teste")}
        />
      </Container>
    </Modal>
  )
}
