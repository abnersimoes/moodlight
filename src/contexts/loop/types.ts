import {Dispatch, SetStateAction} from 'react'

export interface LoopState {
  isActive: boolean
  time: string
}

export type SetLoopState = Dispatch<SetStateAction<LoopState>>

export interface LoopContextProps {
  loopState: LoopState
  setLoopState: SetLoopState
}
