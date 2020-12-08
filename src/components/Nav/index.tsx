import React, {useState} from 'react'
import Logo from '@static/svg/logo.svg'
import * as Styled from './styled'
import TransitionButton from './Form/TransitionButton'

interface NavProps {
  color: string
}

function Nav({color}: NavProps) {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <Styled.NavWrapper>
      <div>
        <TransitionButton color={color} isActive={isPlaying} onClick={() => setIsPlaying(!isPlaying)} />
      </div>
      <Logo />
    </Styled.NavWrapper>
  )
}

export default Nav
