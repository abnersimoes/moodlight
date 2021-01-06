import {SaturateActions, SET_MIN_SATURATE, SET_MAX_SATURATE, SET_LVL_SATURATE} from '../types/saturate'

export function setMinSaturate(payload: number): SaturateActions {
  return {
    type: SET_MIN_SATURATE,
    payload: payload,
  }
}

export function setMaxSaturate(payload: number): SaturateActions {
  return {
    type: SET_MAX_SATURATE,
    payload,
  }
}

export function setLvlSaturate(payload: number): SaturateActions {
  return {
    type: SET_LVL_SATURATE,
    payload,
  }
}
