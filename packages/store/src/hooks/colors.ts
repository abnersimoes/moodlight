import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../reducers'
import {setColors, setPaletteColors, setTransitionLoop} from '../actions'
import {colors, colorsContrastWithBlack} from '../constants/colors'

export function useColors() {
  const {
    colors: {current, palette},
    blackout: {isEnabled: isBlackoutEnabled},
    loop: {transition, time, indexPalette},
    saturate: {lvl: saturateLvl},
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const [alphaWhite] = useState('rgba(255, 255, 255 ,0.35)')
  const [alphaBlack] = useState('rgba(0, 0, 0, 0.3)')

  const paletteLength = 12

  useEffect(() => {
    const transitionLoop = parseInt(time) / paletteLength

    dispatch(setTransitionLoop(transitionLoop))
  }, [time])

  useEffect(() => {
    if (isBlackoutEnabled) {
      dispatch(setColors({current: 'black', contrast: alphaWhite}))
    }
  }, [isBlackoutEnabled])

  useEffect(() => {
    if (!isBlackoutEnabled) {
      const nextColor = palette[indexPalette]
      const [colorContrastWithBlack] = colorsContrastWithBlack.filter(color => color === nextColor)
      const contrast = colorContrastWithBlack ? alphaBlack : alphaWhite

      if (current !== nextColor) {
        dispatch(setColors({current: nextColor, contrast}))
      }
    }
  }, [current, palette, indexPalette, isBlackoutEnabled])
}
