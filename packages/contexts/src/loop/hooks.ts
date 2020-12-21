import {useContext, useEffect, useState} from 'react'
import {LoopState, SetLoopState} from './types'
import LoopContext from '.'

export function useLoop(): [LoopState, SetLoopState] {
  const {loopState, setLoopState} = useContext(LoopContext)
  const [nextIndexPalette, setNextIndexPalette] = useState(1)
  const lastIndexOfPalette = 11

  useEffect(() => {
    setLoopState({...loopState, indexPalette: nextIndexPalette})
  }, [])

  useEffect(() => {
    const {isActive, transition, indexPalette} = loopState
    const loopTime = transition * 1000
    let loopTimeout: number

    if (isActive) {
      const nextIndex = indexPalette < lastIndexOfPalette ? indexPalette + 1 : 0

      if (nextIndex !== nextIndexPalette) {
        loopTimeout = setTimeout(() => {
          setLoopState({...loopState, indexPalette: nextIndex})
          setNextIndexPalette(nextIndex)
        }, loopTime)
      }
    }

    return () => {
      if (loopTimeout) clearTimeout(loopTimeout)
    }
  }, [loopState, nextIndexPalette])

  return [loopState, setLoopState]
}
