import { ReactNode } from "react"
import { Corner, Root, Scrollbar, Thumb, Viewport } from "./styles"

export type ScrollBoxProps = {
  text: ReactNode
}

export function ScrollBox({ text }: ScrollBoxProps) {
  return (
    <Root aria-label="scrollbox">
      <Viewport>{text}</Viewport>

      <Scrollbar orientation="horizontal">
        <Thumb />
      </Scrollbar>
      <Scrollbar orientation="vertical">
        <Thumb />
      </Scrollbar>
      <Corner />
    </Root>
  )
}
