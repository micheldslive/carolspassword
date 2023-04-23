import { ContainerGlobal } from "."
import { screen } from "@testing-library/react"
import { renderWithTheme } from "@/core/helpers"
import { describe, expect, test } from "vitest"

describe("<ContainerGlobal />", () => {
  test(`should by render a ContainerGlobal`, () => {
    renderWithTheme(<ContainerGlobal />)
    const container = screen.getByLabelText(/container/i)

    expect(container).toBeInTheDocument()
  })
})
