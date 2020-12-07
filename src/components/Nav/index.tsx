import React from 'react'
import Logo from '@static/svg/logo.svg'
import * as S from './styled'
import TransitionButton from './Form/TransitionButton'

interface NavProps {
  color: string
}

function Nav({color}: NavProps) {
  return (
    <S.NavWrapper>
      <div>
        <TransitionButton color={color} />
      </div>
      <Logo />
    </S.NavWrapper>
  )
}

export default Nav
