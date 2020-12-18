import {Dispatch, SetStateAction} from 'react'
export interface ColorState {
  current: string
  palette: string[]
}

export type SetColorState = Dispatch<SetStateAction<ColorState>>

export interface ColorContextProps {
  colorState: ColorState
  setColorState: SetColorState
}
