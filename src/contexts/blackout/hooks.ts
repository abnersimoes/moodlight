import {useContext} from 'react'
import {BlackoutState, SetBlackoutState} from './types'
import BlackoutContext from '.'

export function useBlackout(): [BlackoutState, SetBlackoutState] {
  const {blackoutState, setBlackoutState} = useContext(BlackoutContext)

  return [blackoutState, setBlackoutState]
}
