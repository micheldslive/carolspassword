import { Meta, StoryFn } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Code, CodeProps } from './code'

export default {
  title: 'Form/Code',
  component: Code,
  argTypes: {
    setCount: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<CodeProps>

const Template: StoryFn<CodeProps> = (args) => {
  const [{ count }, updateArgs] = useArgs()
  const setCount = () => updateArgs({ count: count + 1 })

  const newArgs = { ...args, setCount }

  return <Code {...newArgs} />
}

export const Default = Template.bind({})

Default.args = {
  count: 0,
  setCount: () => 0,
}
