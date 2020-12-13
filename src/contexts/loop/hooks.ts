import {useContext, useState, useEffect, useMemo} from 'react'
import {useSaturate} from '@contexts/saturate/hooks'
import {useColor} from '@contexts/color/hooks'
import {colors} from '@contexts/color/constants'
import {LoopState, SetLoopState} from './types'
import LoopContext from '.'

function builderColors(lvl: number) {
  const lvlNormalized = lvl - 1
  return colors[lvlNormalized]
}

export function useLoop(): [LoopState, SetLoopState] {
  const {loopState, setLoopState} = useContext(LoopContext)
  const [saturate] = useSaturate()
  const [color, setColor] = useColor()
  const [colorPalette, setColorPalette] = useState(builderColors(saturate.lvl))
  const [indexPalette, setIndexPalette] = useState<number>(0)
  const [timeByPalette, setTimeByPalette] = useState<number>(0)

  useEffect(() => {
    const {time} = loopState
    const transition = parseInt(time) / colorPalette.length

    setTimeByPalette(transition)
    setColor({...color, transition})
  }, [loopState.time])

  useMemo(() => {
    const colorsBuilded = builderColors(saturate.lvl)
    setColorPalette(colorsBuilded)
  }, [saturate.lvl])

  useEffect(() => {
    const {isActive} = loopState
    const lastIndexColor = colorPalette.length - 1
    let interval: number

    if (isActive) {
      interval = setInterval(() => {
        if (indexPalette < lastIndexColor) {
          return setIndexPalette(indexPalette + 1)
        }
        return setIndexPalette(0)
      }, timeByPalette * 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [loopState.isActive, timeByPalette, indexPalette, colorPalette])

  useEffect(() => {
    setColor({...color, current: colorPalette[indexPalette]})
  }, [colorPalette, indexPalette])

  return [loopState, setLoopState]
}
