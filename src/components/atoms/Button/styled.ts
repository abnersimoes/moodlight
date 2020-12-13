import styled from 'styled-components'
import * as Helpers from './helpers'

export interface ButtonProps {
  colorState: Helpers.ColorState
  type?: 'button' | 'submit' | 'reset'
  isActive?: boolean
}

export const Button = styled.button<ButtonProps>`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  outline: none;
  cursor: pointer;
  background: ${Helpers.builderBackground};
  box-shadow: ${Helpers.builderShadow};
  transition: ${({colorState: {transition}}) => `${transition}s all linear 0s`};
  position: relative;

  :active {
    box-shadow: ${({colorState}) => Helpers.builderDropShadow({colorState, blur: 2})};
  }

  :disabled {
    * {
      opacity: 0.5;
    }
  }
`
