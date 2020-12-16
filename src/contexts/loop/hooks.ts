import {useContext, useState, useEffect} from 'react'
import {useColor} from '@contexts/color/hooks'
import {useBlackout} from '@contexts/blackout/hooks'
import {LoopState, SetLoopState} from './types'
import LoopContext from '.'

export function useLoop(): [LoopState, SetLoopState] {
  const {loopState, setLoopState} = useContext(LoopContext)
  const [color, setColor] = useColor()
  const [{isBlackoutEnabled}] = useBlackout()
  const paletteLength = color.palette.length
  const lastIndexOfPalette = paletteLength - 1
  const [indexPalette, setIndexPalette] = useState<number>(0)
  const [timeByPalette, setTimeByPalette] = useState<number>(color.transition)

  useEffect(() => {
    const {time} = loopState
    const transition = parseInt(time) / paletteLength

    if (transition !== timeByPalette) {
      setTimeByPalette(transition)
      setColor({...color, transition})
    }
  }, [loopState.time, color, timeByPalette])

  useEffect(() => {
    const loopTime = timeByPalette * 1000
    let loopTimeout: number

    if (loopState.isActive && !isBlackoutEnabled) {
      loopTimeout = setTimeout(() => {
        const nextIndexPalette = indexPalette < lastIndexOfPalette ? indexPalette + 1 : 0

        setIndexPalette(nextIndexPalette)
        setColor({...color, current: color.palette[nextIndexPalette]})
      }, loopTime)
    }

    return () => {
      if (loopTimeout) clearTimeout(loopTimeout)
    }
  }, [loopState.isActive, isBlackoutEnabled, color, timeByPalette, indexPalette])

  return [loopState, setLoopState]
}
