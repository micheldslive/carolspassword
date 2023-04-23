import { Meta, StoryFn } from "@storybook/react"
import { Load } from "."

export default {
  title: "Components/Load",
  component: Load,
} as Meta<typeof Load>

const Template: StoryFn<typeof Load> = () => {
  return <Load />
}

export const Default = Template.bind({})

Default.args = {}
