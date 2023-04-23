import { ScrollBox } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"

describe("<ScrollBox />", () => {
  test(`should by render a ScrollBox`, () => {
    renderWithTheme(<ScrollBox text={"Texto"} />)
    const scrollbox = screen.getByLabelText(/scrollbox/i)
    expect(scrollbox).toBeInTheDocument()
  })
})
