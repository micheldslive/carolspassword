import { Meta, StoryFn } from "@storybook/react"
import { Input } from "."

export default {
  title: "Components/Input",
  component: Input,
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => {
  return <Input {...args} />
}

export const Default = Template.bind({})

Default.args = {}
