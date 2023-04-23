import { ScoreCircle } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"

describe("<ScoreCircle />", () => {
  test(`should by render a Score Circle`, () => {
    renderWithTheme(<ScoreCircle score={25} scale={1} />)
    const score = screen.getByLabelText(/score/i)
    expect(score).toBeInTheDocument()
    const scorePoint = screen.getByText(/25/i)
    expect(scorePoint).toBeInTheDocument()
  })
})
