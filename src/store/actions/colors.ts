import {Colors, FETCH_COLORS, ColorsActions} from '../types'

export function fetchColors(colors: Colors): ColorsActions {
  return {
    type: FETCH_COLORS,
    payload: colors,
  }
}

export function setColors(colors: Colors): ColorsActions {
  return {
    type: FETCH_COLORS,
    payload: colors,
  }
}
