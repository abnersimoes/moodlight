export const SET_COLORS = 'COLORS/SET_COLORS'
export const SET_CURRENT_COLOR = 'COLORS/SET_CURRENT'
export const SET_CONTRAST_COLOR = 'COLORS/SET_CONTRAST'
export const SET_PALETTE_COLOR = 'COLORS/SET_PALETTE'

export interface Colors {
  current: string
  contrast: string
  palette?: string[]
}

interface SetColorsAction {
  type: typeof SET_COLORS
  payload: Colors
}

interface SetCurrentColorAction {
  type: typeof SET_CURRENT_COLOR
  payload: string
}

interface SetContrastColorAction {
  type: typeof SET_CONTRAST_COLOR
  payload: string
}

interface SetPaletteColorAction {
  type: typeof SET_PALETTE_COLOR
  payload: string[]
}

export type ColorsActions = SetColorsAction | SetCurrentColorAction | SetContrastColorAction | SetPaletteColorAction
