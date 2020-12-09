import {Colors, FETCH_COLORS, ColorsActions} from '../types'

export function fetchColors(sectors: Colors): ColorsActions {
  return {
    type: FETCH_COLORS,
    payload: sectors,
  }
}
