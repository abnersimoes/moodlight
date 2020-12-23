import React, {createContext, useState} from 'react'
import {SATURATE_LVL} from '../../constants/storage'
import * as StorageHelpers from '../../helpers'
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
  const saturateLvl = StorageHelpers.getItem(SATURATE_LVL)
  const lvl = saturateLvl ? parseInt(saturateLvl) : DEFAULT_VALUE.saturateState.lvl

  const [saturateState, setSaturateState] = useState({...DEFAULT_VALUE.saturateState, lvl})

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
