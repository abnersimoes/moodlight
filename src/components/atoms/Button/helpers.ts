import {lighten, darken, saturate} from 'polished'

export interface ColorState {
  current: string
  transition: number
}

interface ButtonProps {
  colorState: ColorState
  disabled?: boolean
  isActive?: boolean
}

interface BuilderDropShadowProps extends ButtonProps {
  blur?: number
}

function builderBgConvex({colorState: {current: color}}: ButtonProps) {
  const saturated = saturate(0.15, color)
  const light = lighten(0.05, saturated)
  const dark = darken(0.07, color)

  return `linear-gradient(145deg, ${light}, ${dark})`
}

function builderBgConcave({colorState: {current: color}}: ButtonProps) {
  const saturated = saturate(0.15, color)
  const light = lighten(0.05, saturated)
  const dark = darken(0.08, color)

  return `linear-gradient(145deg, ${dark}, ${light})`
}

export function builderDropShadow({colorState: {current: color}, blur = 12}: BuilderDropShadowProps) {
  const distance = `${blur / 2}px`
  const saturated = saturate(0.15, color)
  const light = lighten(0.125, saturated)
  const dark = darken(0.095, color)

  return `${distance} ${distance} ${blur}px ${dark}, -${distance} -${distance} ${blur}px ${light}`
}

export function builderBackground({isActive, disabled, colorState}: ButtonProps) {
  return isActive || disabled ? builderBgConcave({colorState}) : builderBgConvex({colorState})
}

export function builderShadow({isActive, disabled, colorState, blur = 12}: BuilderDropShadowProps) {
  return isActive || disabled ? builderDropShadow({colorState, blur: 2}) : builderDropShadow({colorState, blur})
}
