import {Control, ControlActions, SET_FADE_OUT} from '../types'

export function setFadeOut(colors: Control): ControlActions {
  return {
    type: SET_FADE_OUT,
    payload: colors,
  }
}
