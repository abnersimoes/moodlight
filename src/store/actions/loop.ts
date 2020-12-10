import {Control, ControlActions, SET_LOOP} from '../types'

export function setLoop(control: Control): ControlActions {
  return {
    type: SET_LOOP,
    payload: control,
  }
}
