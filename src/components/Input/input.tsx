import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react"
import { Container, InputStyled, TitleInput } from "./styles"
import { Controller, useFormContext } from "react-hook-form"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  label: string
  name: string
  error: string
  type: HTMLInputTypeAttribute
}

export function Input({
  label,
  placeholder,
  type,
  name,
  error,
  ...rest
}: InputProps) {
  const { control } = useFormContext()
  return (
    <Container>
      <TitleInput>{label}</TitleInput>
      <Controller
        name={name}
        aria-label={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputStyled
            value={value}
            aria-label={name}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            {...rest}
          />
        )}
      />
    </Container>
  )
}
