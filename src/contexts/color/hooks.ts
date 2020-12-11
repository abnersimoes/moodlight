import {useContext, useEffect} from 'react'
import {ColorState, SetColorState} from './types'
import ColorContext from '.'

export function useColor(): [ColorState, SetColorState] {
  const {colorState, setColorState} = useContext(ColorContext)

  useEffect(() => {
    // console.log({colorState})
  }, [colorState])

  return [colorState, setColorState]
}
