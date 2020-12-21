import {useContext} from 'react'
import {SaturateState, SetSaturateState} from './types'
import SaturateContext from '.'

export function useSaturate(): [SaturateState, SetSaturateState] {
  const {saturateState, setSaturateState} = useContext(SaturateContext)

  return [saturateState, setSaturateState]
}
