import {lighten, darken, saturate} from 'polished'

export interface ColorState {
  current: string
  palette: string[]
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

const blackAlpha = 'rgba(0, 0, 0, 0.07)'
const whiteAlpha = 'rgba(255, 255, 255, 0.07)'

function builderFaceConvex() {
  return `
    :before {
      background: linear-gradient(145deg, transparent, ${blackAlpha});
    }
    :after {
      background: linear-gradient(145deg, ${whiteAlpha}, transparent);
    }
  `
}

function builderFaceConcave() {
  return `
    :before {
      background: linear-gradient(145deg, ${blackAlpha}, transparent);
    }
    :after {
      background: linear-gradient(145deg, transparent, ${whiteAlpha});
    }
  `
}

export function builderDropShadow({colorState: {current: color}, blur = 12}: BuilderDropShadowProps) {
  const distance = `${blur / 2}px`
  const saturated = saturate(0.075, color)
  const light = lighten(0.075, saturated)
  const dark = darken(0.075, color)

  return `${distance} ${distance} ${blur}px ${dark}, -${distance} -${distance} ${blur}px ${light}`
}

export function builderFaceEffect({isActive, disabled}: ButtonProps) {
  if (disabled) {
    return 'none'
  }

  return isActive ? builderFaceConcave() : builderFaceConvex()
}

export function builderShadow({isActive, disabled, colorState, blur = 12}: BuilderDropShadowProps) {
  return isActive || disabled ? builderDropShadow({colorState, blur: 2}) : builderDropShadow({colorState, blur})
}
