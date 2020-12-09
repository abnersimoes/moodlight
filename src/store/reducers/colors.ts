import {Colors, FETCH_COLORS, ColorsActions} from '../types'

const initialState = {
  current: '#efa21b',
}

const reducer = (state = initialState, action: ColorsActions): Colors => {
  switch (action.type) {
    case FETCH_COLORS:
      return {...action.payload}

    default:
      return state
  }
}

export default reducer
