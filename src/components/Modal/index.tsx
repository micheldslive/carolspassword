import { PropsWithChildren } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { ButtonClose, Content, Icon, Overlay } from "./styles"

type ModalProps = {
  open?: boolean
  onClose: () => void
  closeIcon?: boolean
} & PropsWithChildren

export function Modal({ open, onClose, children, closeIcon }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Overlay>
          <Content>
            {closeIcon && (
              <ButtonClose onClick={onClose}>
                <Icon />
              </ButtonClose>
            )}
            {children}
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
