import { Meta, StoryFn } from "@storybook/react"
import { Avatar } from "."

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta<typeof Avatar>

const Template: StoryFn<typeof Avatar> = () => {
  return <Avatar />
}

export const Default = Template.bind({})

Default.args = {}
