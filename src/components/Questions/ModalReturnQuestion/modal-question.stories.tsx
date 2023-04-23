import { Meta, StoryFn } from "@storybook/react"
import { ModalReturnQuestion, ModalReturnQuestionProps } from "."
import { useArgs } from "@storybook/client-api"

export default {
  title: "Components/Modal Return Question",
  component: ModalReturnQuestion,
  argTypes: {
    open: {
      control: { type: "boolean" },
    },
    icon: { control: { type: "radio" } },
    onClose: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<ModalReturnQuestionProps>

const Template: StoryFn<ModalReturnQuestionProps> = (args) => {
  const [, updateArgs] = useArgs<ModalReturnQuestionProps>()
  const onClose = () => updateArgs({ open: false })

  const newArgs = { ...args, onClose }

  return <ModalReturnQuestion {...newArgs} />
}

export const Default = Template.bind({})

Default.args = {
  open: true,
  icon: "ok",
  onClose: () => true,
  finishQuestions: false,
}
