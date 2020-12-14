import {lighten, darken, saturate} from 'polished'
import {FormFieldCommonProps} from './types'

interface BuilderProps extends FormFieldCommonProps {
  blur?: number
}

function builderInnerShadow({colorState: {current: color}, blur = 12}: BuilderProps) {
  const distance = `${blur / 2}px`
  const saturated = saturate(0.075, color)
  const light = lighten(0.075, saturated)
  const dark = darken(0.075, color)

  return `inset ${distance} ${distance} ${blur}px ${dark}, inset -${distance} -${distance} ${blur}px ${light}`
}

export function builderShadow({isDisabled, colorState, blur = 12}: BuilderProps) {
  return isDisabled ? builderInnerShadow({colorState, blur: 4}) : builderInnerShadow({colorState, blur})
}

export function builderBackground({isDisabled, colorState: {current: color}}: BuilderProps) {
  return isDisabled ? darken(0.05, color) : color
}
