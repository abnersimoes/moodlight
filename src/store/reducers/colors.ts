import {Colors, ColorsActions, FETCH_COLORS, SET_COLORS} from '../types'

const initialState = {
  current: '#efa21b',
}

const reducer = (state = initialState, action: ColorsActions): Colors => {
  switch (action.type) {
    case FETCH_COLORS:
      return {...action.payload}
    case SET_COLORS:
      return {...action.payload}
    default:
      return state
  }
}

export default reducer
