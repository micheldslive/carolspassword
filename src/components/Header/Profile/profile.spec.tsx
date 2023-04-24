import { Profile } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { createMemoryHistory } from "history"
import { renderWithTheme } from "@/core/helpers"
import { Router } from "react-router-dom"

describe("<Profile />", () => {
  test(`should by render a Profile`, () => {
    const history = createMemoryHistory({ initialEntries: ["/"] })
    renderWithTheme(
      <Router navigator={history} location={"/"}>
        <Profile open={true} onClose={() => {}} />
      </Router>,
    )
    const load = screen.getByRole("dialog")
    expect(load).toBeInTheDocument()
  })
})
