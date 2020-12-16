import {Dispatch, SetStateAction} from 'react'

export interface BlackoutState {
  isActive: boolean
  isBlackoutEnabled: boolean
  timeToEnabled: string
  timeToDisabled: string
}

export type SetBlackoutState = Dispatch<SetStateAction<BlackoutState>>

export interface BlackoutContextProps {
  blackoutState: BlackoutState
  setBlackoutState: SetBlackoutState
}
