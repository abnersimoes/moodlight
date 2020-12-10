export interface Colors {
  current: string
  next?: string
}

export interface Control {
  isActive: boolean
  time: string
}

export const FETCH_COLORS = 'FETCH_COLORS'
export const SET_COLORS = 'SET_COLORS'
export const SET_FADE_OUT = 'SET_FADE_OUT'
export const SET_LOOP = 'SET_LOOP'

interface FetchColorsAction {
  type: typeof FETCH_COLORS
  payload: Colors
}

interface SetColorsAction {
  type: typeof SET_COLORS
  payload: Colors
}

interface SetFadeOutAction {
  type: typeof SET_FADE_OUT
  payload: Control
}

interface SetLoopAction {
  type: typeof SET_LOOP
  payload: Control
}

export type ColorsActions = FetchColorsAction | SetColorsAction
export type ControlActions = SetFadeOutAction | SetLoopAction
export type Actions = ColorsActions | ControlActions
