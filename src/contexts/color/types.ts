import {Dispatch, SetStateAction} from 'react'

export interface ColorState {
  isPlaying: boolean
  color: string
  time: string
}

export type SetColorState = Dispatch<SetStateAction<ColorState>>

export interface ColorContextProps {
  colorState: ColorState
  setColorState: SetColorState
}
