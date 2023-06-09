import { Meta, StoryFn } from "@storybook/react"
import { Profile, ProfileProps } from "."
import { useArgs } from "@storybook/client-api"
import { withRouter } from "storybook-addon-react-router-v6"

export default {
  title: "Components/Profile",
  component: Profile,
  argTypes: {
    open: {
      control: { type: "boolean" },
    },
    onClose: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
} as Meta<typeof Profile>

const Template: StoryFn<typeof Profile> = () => {
  const [args, updateArgs] = useArgs<ProfileProps>()
  const onClose = () => {
    updateArgs({ open: false })
  }

  const newArgs = { ...args, onClose }

  return <Profile {...newArgs} />
}

export const Default = Template.bind({})

Default.args = {
  open: true,
  onClose: () => true,
}
