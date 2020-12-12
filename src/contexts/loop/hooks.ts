import {useContext} from 'react'
import {LoopState, SetLoopState} from './types'
import LoopContext from '.'

export function useLoop(): [LoopState, SetLoopState] {
  const {loopState, setLoopState} = useContext(LoopContext)

  return [loopState, setLoopState]
}
