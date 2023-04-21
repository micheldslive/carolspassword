import { Button, Logo, Modal } from "@/components"
import { Container, Emphasis, Text, Title } from "./styles"
import { useDataStates } from "@/contexts/UserDataStore"
import { useCallback } from "react"

export function ModalBonus() {
  const { bonusModal, handleData } = useDataStates()

  const closeModal = useCallback(() => {
    handleData({ bonusModal: false })
  }, [])

  return (
    <Modal open={bonusModal} onClose={() => closeModal()}>
      <Container>
        <Title>Bonus</Title>
        <Logo size={12} subTitle="Animations" />
        <Text>
          Você completou o quiz com sucesso e desbloqueou a sessão de bônus do
          game. Aqui você irá encontrar algumas animações da{" "}
          <Emphasis> Carol</Emphasis>, utilizadas ou não no game. Se divirta!
        </Text>
        <Button
          type="button"
          variant={0}
          text="Let's go!"
          onClick={() => closeModal()}
        />
      </Container>
    </Modal>
  )
}
