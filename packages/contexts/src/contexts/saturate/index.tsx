import React, {createContext, useState} from 'react'
import {SATURATE_LVL} from '../../constants/storage'
import * as StorageHelpers from '../../helpers'
import {SaturateContextProps, SaturateState} from './types'

const storageSaturateLvl = StorageHelpers.getItem(SATURATE_LVL)

const DEFAULT_VALUE = {
  saturateState: {
    min: 1,
    max: 4,
    lvl: storageSaturateLvl ? parseInt(storageSaturateLvl) : 2,
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
