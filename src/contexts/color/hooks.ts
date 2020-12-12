import {useContext, useState, useEffect} from 'react'
import {useLoop} from '@contexts/loop/hooks'
import {useSaturate} from '@contexts/saturate/hooks'
import {ColorState, SetColorState, Colors} from './types'
import {colors} from './constants'
import ColorContext from '.'

function builderColors(lvl: number) {
  const lvlNormalized = lvl - 1
  return colors[lvlNormalized]
}

export function useColor(): [ColorState, SetColorState] {
  const {colorState, setColorState} = useContext(ColorContext)
  const [{isActive, time}] = useLoop()
  const [{lvl}] = useSaturate()
  const [colorPalette, setColorPalette] = useState<Colors>(builderColors(lvl))

  // useEffect(() => {

  // }, [])

  // useEffect(() => {
  //   const timeInterval = parseInt(time) * 1000
  //   let interval

  //   if (isActive) {
  //     interval = setInterval(() => {
  //       console.log('tei')
  //     }, timeInterval)
  //   }

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval)
  //     }
  //   }
  // }, [isActive, time])

  useEffect(() => {
    const colorsBuilded = builderColors(lvl)

    setColorPalette(colorsBuilded)
  }, [colorState, lvl])

  useEffect(() => {
    setColorState({current: colorPalette[0]})
  }, [colorPalette])

  return [colorState, setColorState]
}
