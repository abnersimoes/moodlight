import {lighten, darken, saturate} from 'polished'

interface FieldProps {
  color: string
  isDisabled?: boolean
}

interface BuilderInnerShadowProps extends FieldProps {
  blur?: number
}

function builderInnerShadow({color, blur = 12}: BuilderInnerShadowProps) {
  const distance = `${blur / 2}px`
  const saturated = saturate(0.15, color)
  const light = lighten(0.125, saturated)
  const dark = darken(0.095, color)

  return `inset ${distance} ${distance} ${blur}px ${dark}, inset -${distance} -${distance} ${blur}px ${light}`
}

export function builderShadow({isDisabled, color, blur = 12}: BuilderInnerShadowProps) {
  return isDisabled ? builderInnerShadow({color, blur: 4}) : builderInnerShadow({color, blur})
}

export function builderBackground({isDisabled, color}: FieldProps) {
  return isDisabled ? darken(0.05, color) : color
}
