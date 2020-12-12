import React, {createContext, useState} from 'react'
import {SaturateContextProps} from './types'

const DEFAULT_VALUE = {
  saturateState: {
    lvl: 2,
    min: 1,
    max: 4,
  },
  setSaturateState: () => null,
}

const SaturateContext = createContext<SaturateContextProps>(DEFAULT_VALUE)

function SaturateContextProvider({children}) {
  const [saturateState, setSaturateState] = useState(DEFAULT_VALUE.saturateState)

  return (
    <SaturateContext.Provider
      value={{
        saturateState,
        setSaturateState,
      }}>
      {children}
    </SaturateContext.Provider>
  )
}

export {SaturateContextProvider}
export default SaturateContext
