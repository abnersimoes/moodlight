import React from 'react'
import * as Styled from './styled'
import Logo from '../../atoms/Logo'

function LinkRepo({...props}: Styled.LinkRepoProps) {
  return (
    <Styled.LinkRepo href="https://github.com/abnersimoes/moodlight" title="Repositório do projeto Moodlight" target="_black" {...props}>
      <Logo />
    </Styled.LinkRepo>
  )
}

export default LinkRepo
