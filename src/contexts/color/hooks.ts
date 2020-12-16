import {useContext, useEffect} from 'react'
import {useSaturate} from '@contexts/saturate/hooks'
import {ColorState, SetColorState} from './types'
import {colors} from './constants'
import ColorContext from '.'

export function useColor(): [ColorState, SetColorState] {
  const {colorState, setColorState} = useContext(ColorContext)
  const [saturate] = useSaturate()

  useEffect(() => {
    const {lvl} = saturate
    const lvlNormalized = lvl - 1
    const palette = colors[lvlNormalized]

    setColorState({...colorState, palette})
  }, [saturate.lvl])

  return [colorState, setColorState]
}
