import {Dispatch, SetStateAction} from 'react'
export interface ColorState {
  current: string
  palette: string[]
  transition: number
}

export type SetColorState = Dispatch<SetStateAction<ColorState>>

export interface ColorContextProps {
  colorState: ColorState
  setColorState: SetColorState
}
