import {Dispatch, SetStateAction} from 'react'

export type Colors = string[]
export interface ColorState {
  current: string
}

export type SetColorState = Dispatch<SetStateAction<ColorState>>

export interface ColorContextProps {
  colorState: ColorState
  setColorState: SetColorState
}
