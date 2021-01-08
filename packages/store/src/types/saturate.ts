export const SET_MIN_SATURATE = 'SATURATE/SET_MIN'
export const SET_MAX_SATURATE = 'SATURATE/SET_MAX'
export const SET_LVL_SATURATE = 'SATURATE/SET_LVL'

export interface Saturate {
  min: number
  max: number
  lvl: number
}

interface SetMinSaturateAction {
  type: typeof SET_MIN_SATURATE
  payload: number
}

interface SetMaxSaturateAction {
  type: typeof SET_MAX_SATURATE
  payload: number
}

interface SetLvlSaturateAction {
  type: typeof SET_LVL_SATURATE
  payload: number
}

export type SaturateActions = SetMinSaturateAction | SetMaxSaturateAction | SetLvlSaturateAction
