import { Avatar } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { createMemoryHistory } from "history"
import { renderWithTheme } from "@/core/helpers"
import { Router } from "react-router-dom"

describe("<Avatar />", () => {
  test(`should by render a Avatar`, () => {
    const history = createMemoryHistory({ initialEntries: ["/"] })
    renderWithTheme(
      <Router navigator={history} location={"/"}>
        <Avatar />
      </Router>,
    )
    const avatar = screen.getByLabelText(/avatar/i)
    expect(avatar).toBeInTheDocument()
  })
})
