import { Meta, StoryFn } from "@storybook/react"
import { ScrollBox, ScrollBoxProps } from "."
import { questions } from "../questionsAnswers"

export default {
  title: "Components/ScrollBox",
  component: ScrollBox,
} as Meta<ScrollBoxProps>

const Template: StoryFn<ScrollBoxProps> = (args) => {
  return <ScrollBox {...args} />
}

export const Default = Template.bind({})

Default.args = {
  text: questions[0].text,
}
