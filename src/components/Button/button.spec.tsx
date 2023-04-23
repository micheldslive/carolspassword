import { Button } from "."
import { screen } from "@testing-library/react"
import { renderWithTheme } from "@/core/helpers"
import { describe, expect, test } from "vitest"

const icons = ["power", "arrowBack", "house"] as const

describe("<Button />", () => {
  icons.forEach((icon) => {
    test(`should by render a Button ${icon}`, () => {
      renderWithTheme(
        <Button type="button" variant={1} text="Button" icon={icon} />,
      )
      const avatar = screen.getByLabelText(icon)

      expect(avatar).toBeInTheDocument()
      expect(avatar).toHaveAttribute("data-name", icon)
      expect(avatar).toHaveAttribute("data-variant", "1")
    })
  })
})
