import {useContext, useEffect} from 'react'
import {useLoop} from '@contexts/loop/hooks'
import {useColor} from '@contexts/color/hooks'
import {BlackoutState, SetBlackoutState} from './types'
import BlackoutContext from '.'

export function useBlackout(): [BlackoutState, SetBlackoutState] {
  const {blackoutState, setBlackoutState} = useContext(BlackoutContext)
  const [loop, setLoop] = useLoop()
  const [, setColor] = useColor()

  // useEffect(() => {
  //   let blackoutTimeout: number

  //   if (blackoutState.isActive) {
  //     if (loop.isActive) {
  //       const {timeToEnabled} = blackoutState
  //       const blackoutTimeToEnabled = parseInt(timeToEnabled) * 1000

  //       blackoutTimeout = setTimeout(() => {
  //         setLoop({...loop, isActive: false})
  //         setColor({transition: 1, current: 'black'})
  //       }, blackoutTimeToEnabled)
  //     }

  //     if (!loop.isActive) {
  //       const {timeToDisabled} = blackoutState
  //       const blackoutTimeToDisabled = parseInt(timeToDisabled) * 1000

  //       blackoutTimeout = setTimeout(() => {
  //         setLoop({...loop, isActive: true})
  //       }, blackoutTimeToDisabled)
  //     }
  //   }

  //   return () => {
  //     if (blackoutTimeout) clearTimeout(blackoutTimeout)
  //   }
  // }, [blackoutState, loop])

  return [blackoutState, setBlackoutState]
}
