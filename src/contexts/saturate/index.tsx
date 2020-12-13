import React, {createContext, useState} from 'react'
import {SaturateContextProps, SaturateState} from './types'

const DEFAULT_VALUE = {
  saturateState: {
    min: 1,
    max: 4,
    lvl: 2,
  },
  setSaturateState: (state: SaturateState) => state,
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
