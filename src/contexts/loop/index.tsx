import React, {createContext, useState} from 'react'
import {LoopContextProps} from './types'

const DEFAULT_VALUE = {
  loopState: {
    isActive: true,
    time: '12',
  },
  setLoopState: () => null,
}

const LoopContext = createContext<LoopContextProps>(DEFAULT_VALUE)

function LoopContextProvider({children}) {
  const [loopState, setLoopState] = useState(DEFAULT_VALUE.loopState)

  return (
    <LoopContext.Provider
      value={{
        loopState,
        setLoopState,
      }}>
      {children}
    </LoopContext.Provider>
  )
}

export {LoopContextProvider}
export default LoopContext
