import {LoopActions, SET_IS_ACTIVE_LOOP, SET_TIME_LOOP, SET_INDEX_PALETTE_LOOP, SET_TRANSITION_LOOP} from '../types/loop'

export function setIsActiveLoop(payload: boolean): LoopActions {
  return {
    type: SET_IS_ACTIVE_LOOP,
    payload,
  }
}

export function setTimeLoop(payload: string): LoopActions {
  return {
    type: SET_TIME_LOOP,
    payload,
  }
}

export function setIndexPaletteLoop(payload: number): LoopActions {
  return {
    type: SET_INDEX_PALETTE_LOOP,
    payload,
  }
}

export function setTransitionLoop(payload: number): LoopActions {
  return {
    type: SET_TRANSITION_LOOP,
    payload,
  }
}
