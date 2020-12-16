import {useContext, useEffect} from 'react'
import {BlackoutState, SetBlackoutState} from './types'
import BlackoutContext from '.'

export function useBlackout(): [BlackoutState, SetBlackoutState] {
  const {blackoutState, setBlackoutState} = useContext(BlackoutContext)

  useEffect(() => {
    let blackoutTimeout: number

    if (blackoutState.isActive) {
      const {timeToEnabled, timeToDisabled, isBlackoutEnabled} = blackoutState
      const blackoutTimeDispatch = {
        false: parseInt(timeToEnabled) * 1000,
        true: parseInt(timeToDisabled) * 1000,
      }
      const blackoutTime = blackoutTimeDispatch[isBlackoutEnabled.toString()]

      blackoutTimeout = setTimeout(() => {
        setBlackoutState({...blackoutState, isBlackoutEnabled: !isBlackoutEnabled})
      }, blackoutTime)
    }

    return () => {
      if (blackoutTimeout) clearTimeout(blackoutTimeout)
    }
  }, [blackoutState])

  return [blackoutState, setBlackoutState]
}
