import { Meta, StoryFn } from "@storybook/react"
import { FormProvider, useForm } from "react-hook-form"
import { Input } from "."

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    error: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <Input {...args} />
    </FormProvider>
  )
}

export const Default = Template.bind({})

Default.args = {
  name: "password",
  label: "Insert the code here",
  placeholder: "********",
  type: "password",
}
