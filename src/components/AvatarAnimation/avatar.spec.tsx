import { animation, AvatarAnimation } from "."
import { screen } from "@testing-library/react"
import { renderWithTheme } from "@/core/helpers"
import { describe, expect, test } from "vitest"

const variants = [
  "dancing",
  "dancingTwo",
  "jump",
  "jumpRun",
  "walking",
] as const

describe("<AvatarAnimation />", () => {
  variants.forEach((variant) => {
    test(`should by render a AvatarAnimation ${variant}`, () => {
      renderWithTheme(<AvatarAnimation variantAnimation={variant} />)
      const avatar = screen.getByLabelText(variant)

      expect(avatar).toBeInTheDocument()
      expect(avatar).toHaveAttribute("data-name", variant)
      expect(avatar).toHaveAttribute("src", animation[variant])
    })
  })
})
