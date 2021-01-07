import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '@store/reducers'
import Form from '@components/molecules/Form'
import NavFooter from '@components/molecules/NavFooter'
import * as Styled from './styled'

function Nav() {
  const {isActive} = useSelector(({nav}: RootState) => nav)

  return (
    <Styled.NavWrapper isActive={isActive}>
      <Form />
      <NavFooter />
    </Styled.NavWrapper>
  )
}

export default Nav
