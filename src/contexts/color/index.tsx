import React, {createContext, useState} from 'react'
import {ColorContextProps} from './types'

const DEFAULT_VALUE = {
  colorState: {
    current: '#690c5a',
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
