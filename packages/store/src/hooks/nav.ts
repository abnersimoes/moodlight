import {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../reducers'
import {setNavVisibility} from '../actions'

export function useNav() {
  const {isActive, isTrigged} = useSelector(({nav}: RootState) => nav)
  const dispatch = useDispatch()
  const [navTimeout, setNavTimeout] = useState<NodeJS.Timeout>()
  const timeToDisabled = 10000

  const onClearTimeout = useCallback(() => {
    if (navTimeout) {
      clearTimeout(navTimeout)
      setNavTimeout(null)
    }
  }, [navTimeout])

  useEffect(() => {
    if (isActive && !navTimeout) {
      const timeout = setTimeout(() => dispatch(setNavVisibility({isActive: false, isTrigged: false})), timeToDisabled)
      setNavTimeout(timeout)
    }

    return () => onClearTimeout()
  }, [isActive, navTimeout])

  useEffect(() => {
    if (isTrigged) {
      onClearTimeout()
      dispatch(setNavVisibility({isActive: true, isTrigged: false}))
    }
  }, [isTrigged, navTimeout])
}
