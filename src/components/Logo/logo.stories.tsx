import { Meta, StoryFn } from "@storybook/react"
import { Logo, LogoProps } from "."

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {},
} as Meta<LogoProps>

const Template: StoryFn<LogoProps> = (args) => {
  return <Logo {...args}></Logo>
}

export const Default = Template.bind({})

Default.args = {
  size: 12,
  subTitle: "Password",
}
