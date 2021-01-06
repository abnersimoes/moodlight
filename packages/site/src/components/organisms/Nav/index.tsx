import React from 'react'
import {useNav} from '@contexts/contexts/nav/hooks'
import Form from '@components/molecules/Form'
import NavFooter from '@components/molecules/NavFooter'
import * as Styled from './styled'

function Nav() {
  const [{isActive}] = useNav()

  return (
    <Styled.NavWrapper isActive={isActive}>
      <Form />
      <NavFooter />
    </Styled.NavWrapper>
  )
}

export default Nav
