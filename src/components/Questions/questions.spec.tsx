import { Questions } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { createMemoryHistory } from "history"
import { renderWithTheme } from "@/core/helpers"
import { Router } from "react-router-dom"

describe("<Questions />", () => {
  test(`should by render a Questions`, () => {
    const history = createMemoryHistory({ initialEntries: ["/"] })
    renderWithTheme(
      <Router navigator={history} location={"/"}>
        <Questions />
      </Router>,
    )
    const password = screen.getByLabelText(/questions/i)
    expect(password).toBeInTheDocument()
  })
})
