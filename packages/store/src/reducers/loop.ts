import {Loop, LoopActions, SET_IS_ACTIVE_LOOP, SET_TIME_LOOP, SET_INDEX_PALETTE_LOOP, SET_TRANSITION_LOOP} from '../types/loop'
import {LOOP_IS_ACTIVE, LOOP_TIME} from '../constants/storage'
import * as StorageHelpers from '../helpers'

const storageIsActive = StorageHelpers.getItem(LOOP_IS_ACTIVE)
const storageTime = StorageHelpers.getItem(LOOP_TIME)

const initialState = {
  isActive: storageIsActive ? JSON.parse(storageIsActive) : true,
  time: storageTime ? storageTime : '36',
  indexPalette: 0,
  transition: 1,
}

const reducer = (state = initialState, action: LoopActions): Loop => {
  switch (action.type) {
    case SET_IS_ACTIVE_LOOP:
      return {...state, isActive: action.payload}
    case SET_TIME_LOOP:
      return {...state, time: action.payload}
    case SET_INDEX_PALETTE_LOOP:
      return {...state, indexPalette: action.payload}
    case SET_TRANSITION_LOOP:
      return {...state, transition: action.payload}
    default:
      return state
  }
}

export default reducer
