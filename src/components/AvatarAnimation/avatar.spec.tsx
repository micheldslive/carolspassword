import { AvatarAnimation } from "./avatar"
import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

describe("<AvatarAnimation />", () => {
  test("should by render a AvatarAnimation", () => {
    render(<AvatarAnimation variantAnimation={"dancing"} />)
    const avatarAnimation = screen.getByLabelText(/avatar/i)
    expect(avatarAnimation).toBeInTheDocument()
  })
})
