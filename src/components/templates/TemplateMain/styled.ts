import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export interface TemplateMainWrapperProps {
  color: string
}

export const TemplateMainWrapper = styled.main<TemplateMainWrapperProps>`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};

  ${breakpoint('desktop')`
    justify-content: flex-end;
  `}
`
