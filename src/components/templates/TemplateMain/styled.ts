import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

interface ColorState {
  current: string
  palette: string[]
  transition: number
}

export interface TemplateMainWrapperProps {
  colorState: ColorState
}

export const TemplateMainWrapper = styled.main<TemplateMainWrapperProps>`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({colorState: {current}}) => current};
  transition: ${({colorState: {transition}}) => `all ${transition * 2}s linear 0s`};

  ${breakpoint('desktop')`
    justify-content: flex-end;
  `}
`
