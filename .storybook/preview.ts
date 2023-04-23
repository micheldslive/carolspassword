import type { Preview } from "@storybook/react"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { GlobalStyles } from "../src/styles/global"
import { theme } from "../src/styles/theme"
import { ThemeProvider } from "styled-components"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        theme,
      },
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
}

export default preview
