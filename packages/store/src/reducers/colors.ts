import {Colors, ColorsActions, SET_CURRENT_COLOR, SET_CONTRAST_COLOR, SET_PALETTE_COLOR} from '../types/colors'
import {colors} from '../constants/colors'

const [, initialPalette] = colors
const [initialColor] = initialPalette

const initialState = {
  current: initialColor,
  contrast: 'rgba(255, 255, 255 ,0.35)',
  palette: initialPalette,
}

const reducer = (state = initialState, action: ColorsActions): Colors => {
  switch (action.type) {
    case SET_CURRENT_COLOR:
      return {...state, current: action.payload}
    case SET_CONTRAST_COLOR:
      return {...state, contrast: action.payload}
    case SET_PALETTE_COLOR:
      return {...state, palette: action.payload}
    default:
      return state
  }
}

export default reducer
