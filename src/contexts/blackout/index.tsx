import React, {createContext, useState} from 'react'
import {BlackoutContextProps} from './types'

const DEFAULT_VALUE = {
  blackoutState: {
    isActive: true,
    timeToEnabled: '6',
    timeToDisabled: '1',
  },
  setBlackoutState: () => null,
}

const BlackoutContext = createContext<BlackoutContextProps>(DEFAULT_VALUE)

function BlackoutContextProvider({children}) {
  const [blackoutState, setBlackoutState] = useState(DEFAULT_VALUE.blackoutState)

  return (
    <BlackoutContext.Provider
      value={{
        blackoutState,
        setBlackoutState,
      }}>
      {children}
    </BlackoutContext.Provider>
  )
}

export {BlackoutContextProvider}
export default BlackoutContext
