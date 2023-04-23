import { Meta, StoryFn } from "@storybook/react"
import { Button, ButtonProps } from "."

export default {
  title: "Components/Button",
  component: Button,
} as Meta<ButtonProps>

const Template: StoryFn<ButtonProps> = (args) => {
  return <Button {...args} />
}

export const Default = Template.bind({})

Default.args = {
  text: "Button",
  variant: 1,
  type: "button",
  icon: "power",
  arrow: false,
}
