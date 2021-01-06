import {ColorsActions, SET_CURRENT_COLOR, SET_CONTRAST_COLOR, SET_PALETTE_COLOR} from '../types/colors'

export function setCurrentColor(payload: string): ColorsActions {
  return {
    type: SET_CURRENT_COLOR,
    payload,
  }
}

export function setContrastColor(payload: string): ColorsActions {
  return {
    type: SET_CONTRAST_COLOR,
    payload,
  }
}

export function setPaletteColors(payload: string[]): ColorsActions {
  return {
    type: SET_PALETTE_COLOR,
    payload,
  }
}
