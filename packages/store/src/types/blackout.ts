export const SET_IS_ACTIVE_BLACKOUT = 'BLACKOUT/SET_IS_ACTIVE'
export const SET_IS_ENABLED_BLACKOUT = 'BLACKOUT/SET_IS_ENABLED'
export const SET_TIME_TO_ENABLED_BLACKOUT = 'BLACKOUT/SET_TIME_TO_ENABLED'
export const SET_TIME_TO_DISABLED_BLACKOUT = 'BLACKOUT/SET_TIME_TO_DISABLED'

export interface Blackout {
  isActive: boolean
  isEnabled: boolean
  timeToEnabled: string
  timeToDisabled: string
}

interface SetIsActiveAction {
  type: typeof SET_IS_ACTIVE_BLACKOUT
  payload: boolean
}

interface SetIsEnabledAction {
  type: typeof SET_IS_ENABLED_BLACKOUT
  payload: boolean
}

interface SetTimeToEnabledAction {
  type: typeof SET_TIME_TO_ENABLED_BLACKOUT
  payload: string
}

interface SetTimeToDisabledAction {
  type: typeof SET_TIME_TO_DISABLED_BLACKOUT
  payload: string
}

export type BlackoutActions = SetIsActiveAction | SetIsEnabledAction | SetTimeToEnabledAction | SetTimeToDisabledAction
