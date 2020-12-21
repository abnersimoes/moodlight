import React, {ReactNode} from 'react'
import {useNav} from '@contexts/nav/hooks'
import {useColor} from '@contexts/color/hooks'
import {useLoop} from '@contexts/loop/hooks'
import * as Styled from './styled'

interface TemplateMainProps {
  children: ReactNode
}

function TemplateMain({children}: TemplateMainProps) {
  const [nav, setNav] = useNav()
  const [{current: color}] = useColor()
  const [{transition}] = useLoop()

  return (
    <Styled.TemplateMainWrapper color={color} transition={transition} onClick={() => setNav({...nav, isActiveTrigged: true})}>
      {children}
    </Styled.TemplateMainWrapper>
  )
}

export default TemplateMain
