import {useContext, useEffect} from 'react'
import {useSaturate} from '@contexts/saturate/hooks'
import {useBlackout} from '@contexts/blackout/hooks'
import {ColorState, SetColorState} from './types'
import {colors} from './constants'
import ColorContext from '.'

export function useColor(): [ColorState, SetColorState] {
  const {colorState, setColorState} = useContext(ColorContext)
  const [{isBlackoutEnabled}] = useBlackout()
  const [{lvl: saturateLvl}] = useSaturate()

  useEffect(() => {
    const lvlNormalized = saturateLvl - 1
    const palette = colors[lvlNormalized]

    setColorState({...colorState, palette})
  }, [saturateLvl])

  useEffect(() => {
    if (isBlackoutEnabled) {
      setColorState({...colorState, current: 'black'})
    }
  }, [isBlackoutEnabled])

  return [colorState, setColorState]
}
