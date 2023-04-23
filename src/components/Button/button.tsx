import { ButtonHTMLAttributes } from "react"
import { ButtonAction, Icon } from "./styles"
import {
  BsArrowCounterclockwise,
  BsArrowRight,
  BsHouse,
  BsPower,
} from "react-icons/bs"

export interface ButtonProps extends ButtonHTMLAttributes<ButtonProps> {
  text?: string
  onClick?: () => void
  variant?: 0 | 1
  icon?: "power" | "arrowBack" | "house"
  arrow?: boolean
}

export function Button({ text, onClick, variant, icon, arrow }: ButtonProps) {
  const iconButton = {
    power: <BsPower />,
    arrowBack: <BsArrowCounterclockwise />,
    house: <BsHouse />,
  }

  return (
    <ButtonAction
      onClick={onClick}
      variant={variant}
      aria-label={icon}
      data-name={icon}
      data-variant={variant}
    >
      {variant === 1 && <Icon>{icon && iconButton[icon]}</Icon>}
      {text && text}
      {arrow && <BsArrowRight />}
    </ButtonAction>
  )
}
