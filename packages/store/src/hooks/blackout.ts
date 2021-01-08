import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../reducers'
import {Blackout} from '../types/blackout'
import {setIsActiveBlackout, setIsEnabledBlackout} from '../actions'

function builderBlackoutTime(blackoutState: Blackout) {
  const {timeToEnabled, timeToDisabled, isEnabled} = blackoutState
  const blackoutTimeDispatch = {
    false: parseFloat(timeToEnabled.split(',').join('.')) * 1000,
    true: parseFloat(timeToDisabled.split(',').join('.')) * 1000,
  }

  return blackoutTimeDispatch[isEnabled.toString()]
}

export function useBlackout() {
  const {blackout, loop} = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    let blackoutTimeout: number

    if (blackout.isActive) {
      const blackoutTime = builderBlackoutTime(blackout)

      blackoutTimeout = setTimeout(() => {
        dispatch(setIsEnabledBlackout(!blackout.isEnabled))
      }, blackoutTime)
    }

    return () => {
      if (blackoutTimeout) clearTimeout(blackoutTimeout)
    }
  }, [blackout])

  useEffect(() => {
    if (!loop.isActive && blackout.isActive) {
      dispatch(setIsActiveBlackout(false))
    }
  }, [loop.isActive, blackout.isActive])
}
