export const SET_IS_ACTIVE_NAV = 'NAV/SET_IS_ACTIVE'
export const SET_IS_TRIGGED_NAV = 'NAV/SET_IS_TRIGGED'

export interface Nav {
  isActive: boolean
  isTrigged: boolean
}

interface SetIsActiveNavAction {
  type: typeof SET_IS_ACTIVE_NAV
  payload: boolean
}

interface SetIsTriggedNavAction {
  type: typeof SET_IS_TRIGGED_NAV
  payload: boolean
}

export type NavActions = SetIsActiveNavAction | SetIsTriggedNavAction
