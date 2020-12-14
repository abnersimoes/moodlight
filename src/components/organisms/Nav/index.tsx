import React from 'react'
import * as Styled from './styled'
import Form from '@components/molecules/Form'
import NavFooter from '@components/molecules/NavFooter'

function Nav() {
  return (
    <Styled.NavWrapper>
      <Form />
      <NavFooter />
    </Styled.NavWrapper>
  )
}

export default Nav
