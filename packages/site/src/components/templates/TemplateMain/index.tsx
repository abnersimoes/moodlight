import React, {useCallback, ReactNode} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@store/reducers'
import {setNavVisibility} from '@store/actions'
import * as Styled from './styled'

interface TemplateMainProps {
  children: ReactNode
}

function TemplateMain({children}: TemplateMainProps) {
  const {
    colors: {current: color},
    loop: {transition},
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const onSetIstriggedNav = useCallback(() => dispatch(setNavVisibility({isTrigged: true})), [])

  return (
    <Styled.TemplateMainWrapper color={color} transition={transition} onClick={onSetIstriggedNav}>
      {children}
    </Styled.TemplateMainWrapper>
  )
}

export default TemplateMain
