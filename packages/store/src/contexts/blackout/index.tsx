import React, {createContext, useState} from 'react'
import {BLACKOUT_IS_ACTIVE, BLACKOUT_TIME_TO_ENABLED, BLACKOUT_TIME_TO_DISABLED} from '../../constants/storage'
import * as StorageHelpers from '../../helpers'
import {BlackoutContextProps} from './types'

const DEFAULT_VALUE = {
  blackoutState: {
    isActive: false,
    isBlackoutEnabled: false,
    timeToEnabled: '2',
    timeToDisabled: '1',
  },
  setBlackoutState: () => null,
}

const BlackoutContext = createContext<BlackoutContextProps>(DEFAULT_VALUE)

function BlackoutContextProvider({children}) {
  const blackoutIsActive = StorageHelpers.getItem(BLACKOUT_IS_ACTIVE)
  const isActive = JSON.parse(blackoutIsActive) || DEFAULT_VALUE.blackoutState.isActive
  const timeToEnabled = StorageHelpers.getItem(BLACKOUT_TIME_TO_ENABLED) || DEFAULT_VALUE.blackoutState.timeToEnabled
  const timeToDisabled = StorageHelpers.getItem(BLACKOUT_TIME_TO_DISABLED) || DEFAULT_VALUE.blackoutState.timeToDisabled

  const [blackoutState, setBlackoutState] = useState({...DEFAULT_VALUE.blackoutState, isActive, timeToEnabled, timeToDisabled})

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
