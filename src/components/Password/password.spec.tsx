import { password, Password } from "."
import { screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { userDataStore } from "@/contexts"
import { renderWithTheme } from "@/core/helpers"

describe("<Password />", () => {
  password.forEach((char) => {
    test(`should by render a Password number ${char}`, () => {
      userDataStore.setState({ winner: true })
      renderWithTheme(<Password />)
      const password = screen.getByText(char)
      expect(password).toBeInTheDocument()
    })
  })
})
