import React, {createContext, useState} from 'react'
import {LOOP_IS_ACTIVE, LOOP_TIME} from '../../constants/storage'
import * as StorageHelpers from '../../helpers'
import {LoopContextProps} from './types'

const storageIsActive = StorageHelpers.getItem(LOOP_IS_ACTIVE)
const storageTime = StorageHelpers.getItem(LOOP_TIME)

const DEFAULT_VALUE = {
  loopState: {
    isActive: storageIsActive ? JSON.parse(storageIsActive) : true,
    time: storageTime ? storageTime : '36',
    indexPalette: 0,
    transition: 1,
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
