import React from 'react'
import * as Styled from './styled'
import Logo from '../Logo'
import FormGroupPlay from '../Form/FormGroupPlay'
import FormGroupBlackout from '../Form/FormGroupBlackout'
import FormGroupFullscreen from '../Form/FormGroupFullscreen'
import FormGroupSaturate from '../Form/FormGroupSaturate'

function Nav() {
  return (
    <Styled.NavWrapper>
      <FormGroupPlay />
      <FormGroupBlackout />
      <FormGroupSaturate />
      <FormGroupFullscreen>
        <Logo />
      </FormGroupFullscreen>
    </Styled.NavWrapper>
  )
}

export default Nav
