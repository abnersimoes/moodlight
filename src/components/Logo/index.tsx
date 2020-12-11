import React from 'react'
import LogoImg from '@static/svg/logo.svg'
import * as Styled from './styled'

const Logo: React.FC = () => {
  return (
    <Styled.LinkLogo href="https://github.com/abnersimoes/moodlight" title="Repositório do projeto Moodlight" target="_black">
      <LogoImg />
    </Styled.LinkLogo>
  )
}

export default Logo
