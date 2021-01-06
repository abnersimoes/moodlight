import {Nav, NavActions, SET_IS_ACTIVE_NAV, SET_IS_TRIGGED_NAV} from '../types/nav'

const initialState = {
  isActive: true,
  isTrigged: false,
}

const reducer = (state = initialState, action: NavActions): Nav => {
  switch (action.type) {
    case SET_IS_ACTIVE_NAV:
      return {...state, isActive: action.payload}
    case SET_IS_TRIGGED_NAV:
      return {...state, isTrigged: action.payload}
    default:
      return state
  }
}

export default reducer
