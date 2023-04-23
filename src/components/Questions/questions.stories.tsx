import { Meta, StoryFn } from "@storybook/react"
import { Questions } from "."
import { withRouter } from "storybook-addon-react-router-v6"

export default {
  title: "Components/Questions",
  component: Questions,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
} as Meta<typeof Questions>

const Template: StoryFn<typeof Questions> = () => {
  return <Questions />
}

export const Default = Template.bind({})

Default.args = {
  winner: true,
}
