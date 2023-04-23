import { Profile } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"

describe("<Profile />", () => {
  test(`should by render a Profile`, () => {
    renderWithTheme(<Profile open={true} onClose={() => {}} />)
    const load = screen.getByRole("dialog")
    expect(load).toBeInTheDocument()
  })
})
