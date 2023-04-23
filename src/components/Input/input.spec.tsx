import { Input } from "."
import { renderHook, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"
import { FormProvider, useForm } from "react-hook-form"

describe("<Input />", () => {
  test(`should by render a Input`, () => {
    const { result } = renderHook(() => useForm())
    renderWithTheme(
      <FormProvider {...result.current}>
        <Input
          name="password"
          error=""
          label="Insert the code here"
          placeholder="********"
          type="password"
        />
      </FormProvider>,
    )
    const input = screen.getByLabelText(/password/i)
    expect(input).toBeInTheDocument()
  })
})
