import {
  BlackoutActions,
  SET_IS_ACTIVE_BLACKOUT,
  SET_IS_ENABLED_BLACKOUT,
  SET_TIME_TO_ENABLED_BLACKOUT,
  SET_TIME_TO_DISABLED_BLACKOUT,
} from '../types/blackout'

export function setIsActiveBlackout(payload: boolean): BlackoutActions {
  return {
    type: SET_IS_ACTIVE_BLACKOUT,
    payload,
  }
}

export function setIsEnabledBlackout(payload: boolean): BlackoutActions {
  return {
    type: SET_IS_ENABLED_BLACKOUT,
    payload,
  }
}

export function setTimeToEnabledBlackout(payload: string): BlackoutActions {
  return {
    type: SET_TIME_TO_ENABLED_BLACKOUT,
    payload,
  }
}

export function setTimeToDisabledBlackout(payload: string): BlackoutActions {
  return {
    type: SET_TIME_TO_DISABLED_BLACKOUT,
    payload,
  }
}
