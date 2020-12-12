import {Dispatch, SetStateAction} from 'react'

export interface SaturateState {
  lvl: number
  min: number
  max: number
}

export type SetSaturateState = Dispatch<SetStateAction<SaturateState>>

export interface SaturateContextProps {
  saturateState: SaturateState
  setSaturateState: SetSaturateState
}
