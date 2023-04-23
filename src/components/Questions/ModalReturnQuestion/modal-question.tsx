import { BsCheck2Circle, BsEmojiFrown } from "react-icons/bs"
import { Button, Modal } from "@/components"
import { Container, Icon, Text } from "./styles"

export type ModalReturnQuestionProps = {
  open: boolean
  onClose: () => void
  icon: "ok" | "wrong"
  finishQuestions?: boolean
}

export function ModalReturnQuestion({
  open,
  onClose,
  icon,
  finishQuestions,
}: ModalReturnQuestionProps) {
  const selectedIcon = {
    ok: <BsCheck2Circle />,
    wrong: <BsEmojiFrown />,
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <Icon icon={icon}>{selectedIcon[icon]}</Icon>
        <Text>{icon === "ok" ? "Correct!" : "Vishhh Wrong!"}</Text>
        <Button
          variant={0}
          text={
            icon === "ok"
              ? finishQuestions === true
                ? "Finish"
                : "Next Question"
              : "Try Again"
          }
          onClick={() => onClose()}
        />
      </Container>
    </Modal>
  )
}
