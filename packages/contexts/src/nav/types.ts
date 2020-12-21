import {Dispatch, SetStateAction} from 'react'

export interface NavState {
  isActive: boolean
  isActiveTrigged: boolean
}

export type SetNavState = Dispatch<SetStateAction<NavState>>

export interface NavContextProps {
  navState: NavState
  setNavState: SetNavState
}
