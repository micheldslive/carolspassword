import { Meta, StoryFn } from "@storybook/react"
import { Avatar } from "."
import { withRouter } from "storybook-addon-react-router-v6"

export default {
  title: "Components/Avatar",
  component: Avatar,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
} as Meta<typeof Avatar>

const Template: StoryFn<typeof Avatar> = () => {
  return <Avatar />
}

export const Default = Template.bind({})

Default.args = {}
