import { Logo } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"

describe("<Logo />", () => {
  test(`should by render a Logo`, () => {
    renderWithTheme(<Logo size={12} subTitle="Subtitle" />)
    const logo = screen.getByLabelText(/logo/i)
    expect(logo).toBeInTheDocument()
  })
})
