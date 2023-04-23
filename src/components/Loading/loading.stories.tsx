import { Meta, StoryFn } from "@storybook/react"
import { Loading } from "."

export default {
  title: "Components/Loading",
  component: Loading,
} as Meta<typeof Loading>

const Template: StoryFn<typeof Loading> = () => {
  return <Loading />
}

export const Default = Template.bind({})

Default.args = {}
