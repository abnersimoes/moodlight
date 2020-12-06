import React, {ReactNode} from 'react'
import styled from 'styled-components'
interface LayoutProps {
  children: ReactNode
}

const Wrapper = styled.main`
  min-height: 100%;
  background-color: #efa21b;
`

const Layout = ({children}: LayoutProps) => {
  return <Wrapper>{children}</Wrapper>
}

export default Layout
