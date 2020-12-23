import {useContext, useEffect} from 'react'
import {useLoop} from '../loop/hooks'
import {BlackoutState, SetBlackoutState} from './types'
import BlackoutContext from '.'

function builderBlackoutTime(blackoutState: BlackoutState) {
  const {timeToEnabled, timeToDisabled, isBlackoutEnabled} = blackoutState
  const blackoutTimeDispatch = {
    false: parseFloat(timeToEnabled.split(',').join('.')) * 1000,
    true: parseFloat(timeToDisabled.split(',').join('.')) * 1000,
  }

  return blackoutTimeDispatch[isBlackoutEnabled.toString()]
}

export function useBlackout(): [BlackoutState, SetBlackoutState] {
  const {blackoutState, setBlackoutState} = useContext(BlackoutContext)
  const [loop] = useLoop()

  useEffect(() => {
    let blackoutTimeout: number

    if (blackoutState.isActive) {
      const {isBlackoutEnabled} = blackoutState
      const blackoutTime = builderBlackoutTime(blackoutState)

      blackoutTimeout = setTimeout(() => {
        setBlackoutState({...blackoutState, isBlackoutEnabled: !isBlackoutEnabled})
      }, blackoutTime)
    }

    return () => {
      if (blackoutTimeout) clearTimeout(blackoutTimeout)
    }
  }, [blackoutState])

  useEffect(() => {
    if (!loop.isActive && blackoutState.isActive) {
      setBlackoutState({...blackoutState, isActive: false})
    }
  }, [loop.isActive, blackoutState])

  return [blackoutState, setBlackoutState]
}
