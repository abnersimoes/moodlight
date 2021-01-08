export const SET_VISIBILITY_NAV = 'NAV/SET_VISIBILITY'

export interface Nav {
  isActive?: boolean
  isTrigged?: boolean
}

interface SetNavAction {
  type: typeof SET_VISIBILITY_NAV
  payload: Nav
}

export type NavActions = SetNavAction
