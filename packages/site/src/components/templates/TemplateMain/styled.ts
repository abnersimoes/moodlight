import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

export interface TemplateMainWrapperProps {
  color: string
  transition: number
}

export const TemplateMainWrapper = styled.main<TemplateMainWrapperProps>`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
  transition: ${({transition}) => `all ${transition}s ease-in-out 0s`};

  ${breakpoint('desktop')`
    justify-content: flex-end;
  `}
`
