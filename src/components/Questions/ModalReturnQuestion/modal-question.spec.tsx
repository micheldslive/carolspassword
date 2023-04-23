import { ModalReturnQuestion } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"

describe("<ModalReturnQuestion />", () => {
  test(`should by render a ModalReturnQuestion`, () => {
    renderWithTheme(
      <ModalReturnQuestion open={true} icon={"ok"} onClose={() => {}} />,
    )
    const modalQuestion = screen.getByRole("dialog")
    expect(modalQuestion).toBeInTheDocument()
  })
})
