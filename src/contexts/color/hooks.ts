import {useContext} from 'react'
import {ColorState, SetColorState} from './types'
import ColorContext from '.'

export function useColor(): [ColorState, SetColorState] {
  const {colorState, setColorState} = useContext(ColorContext)

  return [colorState, setColorState]
}
