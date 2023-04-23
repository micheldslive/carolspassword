import { Avatar } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"

describe("<Avatar />", () => {
  test(`should by render a Avatar`, () => {
    renderWithTheme(<Avatar />)
    const avatar = screen.getByLabelText(/avatar/i)
    expect(avatar).toBeInTheDocument()
  })
})
