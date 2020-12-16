import {useContext, useState, useEffect} from 'react'
import {useColor} from '@contexts/color/hooks'
import {LoopState, SetLoopState} from './types'
import LoopContext from '.'

export function useLoop(): [LoopState, SetLoopState] {
  const {loopState, setLoopState} = useContext(LoopContext)
  const [indexPalette, setIndexPalette] = useState<number>(0)
  const [timeByPalette, setTimeByPalette] = useState<number>(0)
  const [color, setColor] = useColor()
  const paletteLength = color.palette.length
  const lastIndexOfPalette = paletteLength - 1

  useEffect(() => {
    const {time} = loopState
    const transition = parseInt(time) / paletteLength

    setTimeByPalette(transition)
    setColor({...color, transition})
  }, [loopState.time])

  useEffect(() => {
    let loopTimeout: number

    if (loopState.isActive) {
      loopTimeout = setTimeout(() => {
        const nextIndexPalette = indexPalette < lastIndexOfPalette ? indexPalette + 1 : 0

        setIndexPalette(nextIndexPalette)
        setColor({...color, current: color.palette[nextIndexPalette]})
      }, timeByPalette * 1000)
    }

    return () => {
      if (loopTimeout) clearTimeout(loopTimeout)
    }
  }, [loopState.isActive, color, timeByPalette, indexPalette])

  return [loopState, setLoopState]
}
