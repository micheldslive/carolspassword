import { Gif } from "./styles"

import Dancing from "@/assets/gif/dancing.gif"
import DancingTwo from "@/assets/gif/dancingTwo.gif"
import Jump from "@/assets/gif/jump.gif"
import JumpRun from "@/assets/gif/jumpRun.gif"
import Walking from "@/assets/gif/walking.gif"

export type AvatarAnimationProps = {
  variantAnimation: "dancing" | "dancingTwo" | "jump" | "jumpRun" | "walking"
}
export const animation = {
  dancing: Dancing,
  dancingTwo: DancingTwo,
  jump: Jump,
  jumpRun: JumpRun,
  walking: Walking,
}

export function AvatarAnimation({ variantAnimation }: AvatarAnimationProps) {
  return <Gif src={animation[variantAnimation]} aria-label='avatar' />
}
