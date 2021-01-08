import {
  Blackout,
  BlackoutActions,
  SET_IS_ACTIVE_BLACKOUT,
  SET_IS_ENABLED_BLACKOUT,
  SET_TIME_TO_ENABLED_BLACKOUT,
  SET_TIME_TO_DISABLED_BLACKOUT,
} from '../types/blackout'
import {BLACKOUT_IS_ACTIVE, BLACKOUT_TIME_TO_ENABLED, BLACKOUT_TIME_TO_DISABLED} from '../constants/storage'
import * as StorageHelpers from '../helpers'

const storageIsActive = StorageHelpers.getItem(BLACKOUT_IS_ACTIVE)
const storageTimeToEnabled = StorageHelpers.getItem(BLACKOUT_TIME_TO_ENABLED)
const storageTimeToDisabled = StorageHelpers.getItem(BLACKOUT_TIME_TO_DISABLED)

const initialState = {
  isActive: storageIsActive ? JSON.parse(storageIsActive) : false,
  isEnabled: false,
  timeToEnabled: storageTimeToEnabled ? storageTimeToEnabled : '12',
  timeToDisabled: storageTimeToDisabled ? storageTimeToDisabled : '1',
}

const reducer = (state = initialState, action: BlackoutActions): Blackout => {
  switch (action.type) {
    case SET_IS_ACTIVE_BLACKOUT:
      return {...state, isActive: action.payload}
    case SET_IS_ENABLED_BLACKOUT:
      return {...state, isEnabled: action.payload}
    case SET_TIME_TO_ENABLED_BLACKOUT:
      return {...state, timeToEnabled: action.payload}
    case SET_TIME_TO_DISABLED_BLACKOUT:
      return {...state, timeToDisabled: action.payload}
    default:
      return state
  }
}

export default reducer
