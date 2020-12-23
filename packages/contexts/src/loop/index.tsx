import React, {createContext, useState} from 'react'
import {LOOP_IS_ACTIVE, LOOP_TIME} from '../constants/storage'
import {LoopContextProps} from './types'

const DEFAULT_VALUE = {
  loopState: {
    isActive: true,
    time: '36',
    indexPalette: 0,
    transition: 1,
  },
  setLoopState: () => null,
}

const LoopContext = createContext<LoopContextProps>(DEFAULT_VALUE)

function LoopContextProvider({children}) {
  const isBrowser = typeof window !== 'undefined'
  const loopIsActive = isBrowser ? JSON.parse(localStorage.getItem(LOOP_IS_ACTIVE)) : null
  const isActive = loopIsActive !== null ? loopIsActive : DEFAULT_VALUE.loopState.isActive
  const time = isBrowser ? localStorage.getItem(LOOP_TIME) : DEFAULT_VALUE.loopState.time

  const [loopState, setLoopState] = useState({...DEFAULT_VALUE.loopState, isActive, time})

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
