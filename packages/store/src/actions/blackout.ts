import {
  BlackoutActions,
  SET_IS_ACTIVE_BLACKOUT,
  SET_IS_ENABLED_BLACKOUT,
  SET_TIME_TO_ENABLED_BLACKOUT,
  SET_TIME_TO_DISABLED_BLACKOUT,
} from '../types/blackout'

export function setIsActive(payload: boolean): BlackoutActions {
  return {
    type: SET_IS_ACTIVE_BLACKOUT,
    payload: payload,
  }
}

export function setIsEnabled(payload: boolean): BlackoutActions {
  return {
    type: SET_IS_ENABLED_BLACKOUT,
    payload,
  }
}

export function setTimeToEnabled(payload: string): BlackoutActions {
  return {
    type: SET_TIME_TO_ENABLED_BLACKOUT,
    payload,
  }
}

export function setTimeToDisabled(payload: string): BlackoutActions {
  return {
    type: SET_TIME_TO_DISABLED_BLACKOUT,
    payload,
  }
}
