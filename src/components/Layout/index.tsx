import React, {ReactNode} from 'react'
import * as S from './styled'

interface LayoutProps extends S.LayoutWrapperProps {
  children: ReactNode
}

function Layout({children, color}: LayoutProps) {
  return <S.LayoutWrapper color={color}>{children}</S.LayoutWrapper>
}

export default Layout
