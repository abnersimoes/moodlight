import React, {createContext, useState} from 'react'
import {ColorContextProps} from './types'
import {colors} from './constants'

const initialColor = colors[1][0]

const DEFAULT_VALUE = {
  colorState: {
    current: initialColor,
    transition: 1,
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
