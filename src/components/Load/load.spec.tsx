import { Load } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"

describe("<Load />", () => {
  test(`should by render a Load`, () => {
    renderWithTheme(<Load />)
    const load = screen.getByLabelText(/load/i)
    expect(load).toBeInTheDocument()
  })
})
