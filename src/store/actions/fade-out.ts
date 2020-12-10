import {Control, ControlActions, SET_FADE_OUT} from '../types'

export function setFadeOut(control: Control): ControlActions {
  return {
    type: SET_FADE_OUT,
    payload: control,
  }
}
