import {Nav, NavActions, SET_VISIBILITY_NAV} from '../types/nav'

const initialState = {
  isActive: true,
  isTrigged: false,
}

const reducer = (state = initialState, action: NavActions): Nav => {
  switch (action.type) {
    case SET_VISIBILITY_NAV:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default reducer
