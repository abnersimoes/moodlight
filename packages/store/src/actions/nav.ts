import {NavActions, SET_IS_ACTIVE_NAV, SET_IS_TRIGGED_NAV} from '../types/nav'

export function setIsActiveNav(payload: boolean): NavActions {
  return {
    type: SET_IS_ACTIVE_NAV,
    payload,
  }
}

export function setIsTriggedNav(payload: boolean): NavActions {
  return {
    type: SET_IS_TRIGGED_NAV,
    payload,
  }
}
