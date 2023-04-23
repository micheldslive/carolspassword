import { Meta, StoryFn } from "@storybook/react"
import { ScoreCircle, ScoreCircleProps } from "."

export default {
  title: "Components/Score Circle",
  component: ScoreCircle,
  argTypes: {
    score: {
      control: {
        type: "number",
      },
    },
    scale: {
      control: {
        type: "number",
      },
    },
  },
} as Meta<ScoreCircleProps>

const Template: StoryFn<ScoreCircleProps> = (args) => {
  return <ScoreCircle {...args} />
}

export const Default = Template.bind({})

Default.args = {
  score: 12,
  scale: 1,
}
