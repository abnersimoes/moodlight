import React, {ReactNode} from 'react'
import {useColor} from '@contexts/color/hooks'
import * as Styled from './styled'

interface LayoutProps {
  children: ReactNode
}

function Layout({children}: LayoutProps) {
  const [colorState] = useColor()

  return <Styled.LayoutWrapper color={colorState.color}>{children}</Styled.LayoutWrapper>
}

export default Layout
