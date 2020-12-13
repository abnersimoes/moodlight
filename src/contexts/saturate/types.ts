import {Dispatch, SetStateAction} from 'react'

export interface SaturateState {
  min: number
  max: number
  lvl: number
}

export type SetSaturateState = Dispatch<SetStateAction<SaturateState>>

export interface SaturateContextProps {
  saturateState: SaturateState
  setSaturateState: SetSaturateState
}
