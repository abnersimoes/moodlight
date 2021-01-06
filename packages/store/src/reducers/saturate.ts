import {Saturate, SaturateActions, SET_MIN_SATURATE, SET_MAX_SATURATE, SET_LVL_SATURATE} from '../types/saturate'
import {SATURATE_LVL} from '../constants/storage'
import * as StorageHelpers from '../helpers'

const storageSaturateLvl = StorageHelpers.getItem(SATURATE_LVL)

const initialState = {
  min: 1,
  max: 4,
  lvl: storageSaturateLvl ? parseInt(storageSaturateLvl) : 2,
}

const reducer = (state = initialState, action: SaturateActions): Saturate => {
  switch (action.type) {
    case SET_MIN_SATURATE:
      return {...state, min: action.payload}
    case SET_MAX_SATURATE:
      return {...state, max: action.payload}
    case SET_LVL_SATURATE:
      return {...state, lvl: action.payload}
    default:
      return state
  }
}

export default reducer
