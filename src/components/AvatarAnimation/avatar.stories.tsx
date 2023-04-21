import { Meta, StoryFn } from "@storybook/react"
import { AvatarAnimation, AvatarAnimationProps } from "./avatar"

export default {
  title: "Avatar/Animation",
  component: AvatarAnimation,
} as Meta<AvatarAnimationProps>

const Template: StoryFn<AvatarAnimationProps> = (args) => {
  return <AvatarAnimation {...args} />
}

export const Default = Template.bind({})

Default.args = {
  variantAnimation: "dancing",
}
