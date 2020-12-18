import React, {createContext, useState} from 'react'
import {ColorContextProps} from './types'
import {colors} from './constants'

const [, initialPalette] = colors
const [initialColor] = initialPalette

const DEFAULT_VALUE = {
  colorState: {
    current: initialColor,
    palette: initialPalette,
  },
  setColorState: () => null,
}

const ColorContext = createContext<ColorContextProps>(DEFAULT_VALUE)

function ColorContextProvider({children}) {
  const [colorState, setColorState] = useState(DEFAULT_VALUE.colorState)

  return (
    <ColorContext.Provider
      value={{
        colorState,
        setColorState,
      }}>
      {children}
    </ColorContext.Provider>
  )
}

export {ColorContextProvider}
export default ColorContext
