import { Meta, StoryFn } from "@storybook/react"
import { Modal, ModalProps } from "."
import { useArgs } from "@storybook/client-api"
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
} from "@/components/Header/Profile/styles"

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    open: {
      control: { type: "boolean" },
    },
    closeIcon: {
      control: { type: "boolean" },
    },
  },
} as Meta<ModalProps>

const Template: StoryFn<ModalProps> = () => {
  const [args, updateArgs] = useArgs()
  const onClose = () => updateArgs({ open: false })

  const newArgs = { ...args, onClose }

  return (
    <Modal {...newArgs}>
      <Container>
        <ContentPerson>
          <PersonBox>
            <DataPersonBox>
              <Name>Carol</Name>
              <Email>carol@gmail.com</Email>
            </DataPersonBox>
          </PersonBox>
          <ScoreBox>
            <Score>25</Score>
            <Text>pts</Text>
          </ScoreBox>
        </ContentPerson>

        <ContainerAvatar></ContainerAvatar>
      </Container>
    </Modal>
  )
}

export const Default = Template.bind({})

Default.args = {
  open: true,
  closeIcon: false,
  onClose: () => true,
}
