import { Modal } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { renderWithTheme } from "@/core/helpers"

describe("<Modal />", () => {
  test(`should by render a Modal`, () => {
    const onClose = () => {}

    renderWithTheme(<Modal open={true} closeIcon onClose={onClose} />)
    const modal = screen.getByRole("dialog")
    expect(modal).toBeInTheDocument()
  })
})
