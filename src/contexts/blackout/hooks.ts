import {useContext, useEffect} from 'react'
import {BlackoutState, SetBlackoutState} from './types'
import BlackoutContext from '.'

// useEffect(() => {
//   const fadeOutValue = parseInt(value)

//   if (fadeOutValue >= minValue && isFadeOut) {
//     const interval = setInterval(() => console.log('te'), fadeOutValue * 1000)
//     setIntervalFadeOut(interval)
//   } else {
//     clearInterval(intervalFadeOut)
//     setIntervalFadeOut(null)
//   }
// }, [value, isFadeOut])

export function useBlackout(): [BlackoutState, SetBlackoutState] {
  const {blackoutState, setBlackoutState} = useContext(BlackoutContext)

  useEffect(() => {
    // console.log({blackoutState})
  }, [blackoutState])

  return [blackoutState, setBlackoutState]
}
