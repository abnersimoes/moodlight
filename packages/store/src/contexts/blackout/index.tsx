import React, {createContext, useState} from 'react'
import {BLACKOUT_IS_ACTIVE, BLACKOUT_TIME_TO_ENABLED, BLACKOUT_TIME_TO_DISABLED} from '../../constants/storage'
import * as StorageHelpers from '../../helpers'
import {BlackoutContextProps} from './types'

const storageIsActive = StorageHelpers.getItem(BLACKOUT_IS_ACTIVE)
const storageTimeToEnabled = StorageHelpers.getItem(BLACKOUT_TIME_TO_ENABLED)
const storageTimeToDisabled = StorageHelpers.getItem(BLACKOUT_TIME_TO_DISABLED)

const DEFAULT_VALUE = {
  blackoutState: {
    isActive: storageIsActive ? JSON.parse(storageIsActive) : false,
    isBlackoutEnabled: false,
    timeToEnabled: storageTimeToEnabled ? storageTimeToEnabled : '12',
    timeToDisabled: storageTimeToDisabled ? storageTimeToDisabled : '1',
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
