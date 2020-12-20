import {useCallback, useContext, useEffect, useState} from 'react'
import {NavState, SetNavState} from './types'
import NavContext from '.'

export function useNav(): [NavState, SetNavState] {
  const {navState, setNavState} = useContext(NavContext)
  const [navTimeout, setNavTimeout] = useState<number>()
  const timeToDisabled = 10000

  const onClearTimeout = useCallback(() => {
    if (navTimeout) {
      clearTimeout(navTimeout)
      setNavTimeout(null)
    }
  }, [navTimeout])

  useEffect(() => {
    if (navState.isActive && !navTimeout) {
      const timeout = setTimeout(() => setNavState({isActive: false, isActiveTrigged: false}), timeToDisabled)

      setNavTimeout(timeout)
    }

    return () => onClearTimeout()
  }, [navState.isActive, navTimeout])

  useEffect(() => {
    if (navState.isActiveTrigged) {
      onClearTimeout()
      setNavState({isActive: true, isActiveTrigged: false})
    }
  }, [navState.isActiveTrigged, navTimeout])

  return [navState, setNavState]
}
