import {useContext, useEffect, useState} from 'react'
import {useSaturate} from '../saturate/hooks'
import {useBlackout} from '../blackout/hooks'
import {useLoop} from '../loop/hooks'
import {ColorState, SetColorState} from './types'
import {colors, colorsContrastWithBlack} from './constants'
import ColorContext from '.'

export function useColor(): [ColorState, SetColorState] {
  const {colorState, setColorState} = useContext(ColorContext)
  const [loopState, setLoopState] = useLoop()
  const [{isBlackoutEnabled}] = useBlackout()
  const [{lvl: saturateLvl}] = useSaturate()
  const [alphaWhite] = useState('rgba(255, 255, 255 ,0.35)')
  const [alphaBlack] = useState('rgba(0, 0, 0, 0.3)')

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
      const [palette] = colors
      setColorState({palette, current: 'black', contrastColor: alphaWhite})
    }
  }, [isBlackoutEnabled])

  useEffect(() => {
    if (!isBlackoutEnabled) {
      const nextColor = colorState.palette[loopState.indexPalette]
      const [colorContrastWithBlack] = colorsContrastWithBlack.filter(color => color === nextColor)
      const contrastColor = colorContrastWithBlack ? alphaBlack : alphaWhite

      if (colorState.current !== nextColor) {
        setColorState({...colorState, current: nextColor, contrastColor})
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
