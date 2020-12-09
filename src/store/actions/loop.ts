import {Control, ControlActions, SET_LOOP} from '../types'

export function setLoop(colors: Control): ControlActions {
  return {
    type: SET_LOOP,
    payload: colors,
  }
}
