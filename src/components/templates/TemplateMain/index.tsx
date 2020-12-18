import React, {ReactNode} from 'react'
import {useColor} from '@contexts/color/hooks'
import {useLoop} from '@contexts/loop/hooks'
import * as Styled from './styled'

interface TemplateMainProps {
  children: ReactNode
}

function TemplateMain({children}: TemplateMainProps) {
  const [{current: color}] = useColor()
  const [{transition}] = useLoop()

  return (
    <Styled.TemplateMainWrapper color={color} transition={transition}>
      {children}
    </Styled.TemplateMainWrapper>
  )
}

export default TemplateMain
