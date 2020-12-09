import {Control, ControlActions, SET_FADE_OUT} from '../types'

const initialState = {
  isActive: false,
  time: 10,
}

const reducer = (state = initialState, action: ControlActions): Control => {
  switch (action.type) {
    case SET_FADE_OUT:
      return {...action.payload}
    default:
      return state
  }
}

export default reducer
