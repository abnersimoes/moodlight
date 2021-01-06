export const SET_IS_ACTIVE_LOOP = 'LOOP/SET_IS_ACTIVE'
export const SET_TIME_LOOP = 'LOOP/SET_TIME'
export const SET_INDEX_PALETTE_LOOP = 'LOOP/SET_INDEX_PALETTE'
export const SET_TRANSITION_LOOP = 'LOOP/SET_TRANSITION'

export interface Loop {
  isActive: boolean
  time: string
  indexPalette: number
  transition: number
}

interface SetIsActiveLoopAction {
  type: typeof SET_IS_ACTIVE_LOOP
  payload: boolean
}

interface SetTimeLoopAction {
  type: typeof SET_TIME_LOOP
  payload: string
}

interface SetIndexPaletteLoopAction {
  type: typeof SET_INDEX_PALETTE_LOOP
  payload: number
}

interface SetTransitionLoopAction {
  type: typeof SET_TRANSITION_LOOP
  payload: number
}

export type LoopActions = SetIsActiveLoopAction | SetTimeLoopAction | SetIndexPaletteLoopAction | SetTransitionLoopAction
