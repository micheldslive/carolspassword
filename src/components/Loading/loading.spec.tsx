import { Loading } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"

describe("<Loading />", () => {
  test(`should by render a Loading`, () => {
    renderWithTheme(<Loading />)
    const loading = screen.getByLabelText(/loading/i)
    expect(loading).toBeInTheDocument()
  })
})
