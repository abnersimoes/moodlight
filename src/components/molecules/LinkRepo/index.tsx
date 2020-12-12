import React from 'react'
import * as Styled from './styled'
import Logo from '../../atoms/Logo'

function LinkRepo() {
  return (
    <Styled.LinkRepo href="https://github.com/abnersimoes/moodlight" title="Repositório do projeto Moodlight" target="_black">
      <Logo />
    </Styled.LinkRepo>
  )
}

export default LinkRepo
