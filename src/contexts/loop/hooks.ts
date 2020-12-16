import {useContext, useState, useEffect} from 'react'
import {useColor} from '@contexts/color/hooks'
import {LoopState, SetLoopState} from './types'
import LoopContext from '.'

export function useLoop(): [LoopState, SetLoopState] {
  const {loopState, setLoopState} = useContext(LoopContext)
  const [color, setColor] = useColor()
  const [indexPalette, setIndexPalette] = useState<number>(0)
  const [timeByPalette, setTimeByPalette] = useState<number>(0)

  useEffect(() => {
    const {time} = loopState
    const transition = parseInt(time) / color.palette.length

    setTimeByPalette(transition)
    setColor({...color, transition})
  }, [loopState.time, color.palette])

  useEffect(() => {
    const lastIndexColor = color.palette.length - 1
    let loopTimeout: number

    if (loopState.isActive) {
      loopTimeout = setTimeout(() => {
        indexPalette < lastIndexColor ? setIndexPalette(indexPalette + 1) : setIndexPalette(0)
      }, timeByPalette * 1000)
    }

    return () => {
      if (loopTimeout) clearTimeout(loopTimeout)
    }
  }, [loopState.isActive, timeByPalette, indexPalette, color.palette])

  useEffect(() => {
    setColor({...color, current: color.palette[indexPalette]})
  }, [color.palette, indexPalette])

  return [loopState, setLoopState]
}
