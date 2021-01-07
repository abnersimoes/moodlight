import {Nav, NavActions, SET_VISIBILITY_NAV} from '../types/nav'

export function setNavVisibility(payload: Nav): NavActions {
  return {
    type: SET_VISIBILITY_NAV,
    payload,
  }
}
