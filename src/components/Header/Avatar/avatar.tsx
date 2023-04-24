import { useState } from "react"
import { CircleButton, Icon } from "./styles"
import { Profile } from "@/components"

export function Avatar() {
  const [open, setOpen] = useState(false)

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <CircleButton onClick={() => openModal()} aria-label="avatar">
        <Icon />
      </CircleButton>
      <Profile open={open} onClose={() => closeModal()} />
    </>
  )
}
