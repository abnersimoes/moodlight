import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export interface LayoutWrapperProps {
  color: string
}

export const LayoutWrapper = styled.main<LayoutWrapperProps>`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};

  ${breakpoint('desktop')`
    justify-content: flex-end;
  `}
`
