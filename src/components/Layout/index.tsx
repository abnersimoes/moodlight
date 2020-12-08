import React, {ReactNode} from 'react'
import * as Styled from './styled'

interface LayoutProps extends Styled.LayoutWrapperProps {
  children: ReactNode
}

function Layout({children, color}: LayoutProps) {
  return <Styled.LayoutWrapper color={color}>{children}</Styled.LayoutWrapper>
}

export default Layout
