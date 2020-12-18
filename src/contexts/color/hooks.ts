import {useContext, useEffect, useState} from 'react'
import {useSaturate} from '@contexts/saturate/hooks'
import {useBlackout} from '@contexts/blackout/hooks'
import {useLoop} from '@contexts/loop/hooks'
import {ColorState, SetColorState} from './types'
import {colors} from './constants'
import ColorContext from '.'

export function useColor(): [ColorState, SetColorState] {
  const {colorState, setColorState} = useContext(ColorContext)
  const [loopState, setLoopState] = useLoop()
  const [{isBlackoutEnabled}] = useBlackout()
  const [{lvl: saturateLvl}] = useSaturate()

  const [timeByPalette, setTimeByPalette] = useState<number>(loopState.transition)
  const paletteLength = 12

  useEffect(() => {
    const transition = parseInt(loopState.time) / paletteLength

    if (transition !== timeByPalette) {
      setTimeByPalette(transition)
      setLoopState({...loopState, transition})
    }
  }, [loopState, timeByPalette])

  useEffect(() => {
    if (isBlackoutEnabled) {
      console.log({isBlackoutEnabled})
      setColorState({...colorState, current: 'black'})
    } else {
      const nextColor = colorState.palette[loopState.indexPalette]

      if (colorState.current !== nextColor) {
        setColorState({...colorState, current: nextColor})
      }
    }
  }, [colorState, loopState.indexPalette, isBlackoutEnabled])

  useEffect(() => {
    const lvlNormalized = saturateLvl - 1
    const palette = colors[lvlNormalized]

    setColorState({...colorState, palette})
  }, [saturateLvl])

  return [colorState, setColorState]
}
