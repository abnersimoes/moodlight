import React, {ReactNode} from 'react'
import {useColor} from '@contexts/color/hooks'
import * as Styled from './styled'

interface TemplateMainProps {
  children: ReactNode
}

function TemplateMain({children}: TemplateMainProps) {
  const [color] = useColor()

  return <Styled.TemplateMainWrapper color={color.current}>{children}</Styled.TemplateMainWrapper>
}

export default TemplateMain
