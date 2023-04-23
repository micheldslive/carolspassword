import { Meta, StoryFn } from "@storybook/react"
import { Password } from "."
import { userDataStore } from "@/contexts"

interface PasswordProps {
  winner: boolean
}

export default {
  title: "Components/Password",
  component: Password,
  argTypes: {
    winner: {
      control: { type: "boolean" },
    },
  },
} as Meta<PasswordProps>

const Template: StoryFn<PasswordProps> = (args) => {
  userDataStore.setState({ winner: args.winner })
  return <Password />
}

export const Default = Template.bind({})

Default.args = {
  winner: true,
}
