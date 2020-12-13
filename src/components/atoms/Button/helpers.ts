import {lighten, darken, saturate} from 'polished'

interface ButtonProps {
  color: string
  disabled?: boolean
  isActive?: boolean
}

interface BuilderDropShadowProps extends ButtonProps {
  blur?: number
}

function builderBgConvex({color}: ButtonProps) {
  const saturated = saturate(0.15, color)
  const light = lighten(0.05, saturated)
  const dark = darken(0.07, color)

  return `linear-gradient(145deg, ${light}, ${dark})`
}

function builderBgConcave({color}: ButtonProps) {
  const saturated = saturate(0.15, color)
  const light = lighten(0.05, saturated)
  const dark = darken(0.08, color)

  return `linear-gradient(145deg, ${dark}, ${light})`
}

export function builderDropShadow({color, blur = 12}: BuilderDropShadowProps) {
  const distance = `${blur / 2}px`
  const saturated = saturate(0.15, color)
  const light = lighten(0.125, saturated)
  const dark = darken(0.095, color)

  return `${distance} ${distance} ${blur}px ${dark}, -${distance} -${distance} ${blur}px ${light}`
}

export function builderBackground({isActive, disabled, color}: ButtonProps) {
  return isActive || disabled ? builderBgConcave({color}) : builderBgConvex({color})
}

export function builderShadow({isActive, disabled, color, blur = 12}: BuilderDropShadowProps) {
  return isActive || disabled ? builderDropShadow({color, blur: 2}) : builderDropShadow({color, blur})
}
