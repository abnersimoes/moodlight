import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../reducers'
import {setIndexPaletteLoop} from '../actions'

export function useLoop() {
  const {isActive, transition, indexPalette} = useSelector(({loop}: RootState) => loop)
  const dispatch = useDispatch()

  const [nextIndexPalette, setNextIndexPalette] = useState(1)
  const lastIndexOfPalette = 11

  useEffect(() => {
    dispatch(setIndexPaletteLoop(nextIndexPalette))
  }, [])

  useEffect(() => {
    const loopTime = transition * 1000
    let loopTimeout: NodeJS.Timeout

    if (isActive) {
      const nextIndex = indexPalette < lastIndexOfPalette ? indexPalette + 1 : 0

      if (nextIndex !== nextIndexPalette) {
        loopTimeout = setTimeout(() => {
          dispatch(setIndexPaletteLoop(nextIndex))
          setNextIndexPalette(nextIndex)
        }, loopTime)
      }
    }

    return () => {
      if (loopTimeout) clearTimeout(loopTimeout)
    }
  }, [isActive, transition, indexPalette, nextIndexPalette])
}
