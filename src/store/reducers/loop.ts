import {Control, ControlActions, SET_LOOP} from '../types'

const initialState = {
  isActive: false,
  time: 20,
}

const reducer = (state = initialState, action: ControlActions): Control => {
  switch (action.type) {
    case SET_LOOP:
      return {...action.payload}
    default:
      return state
  }
}

export default reducer
