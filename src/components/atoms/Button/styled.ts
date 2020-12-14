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
  box-shadow: ${Helpers.builderShadow};
  background-color: ${({colorState: {current}}) => current};
  transition: ${({colorState: {transition}}) => `all ${transition * 2}s linear 0s`};
  position: relative;

  :active {
    box-shadow: ${({colorState}) => Helpers.builderDropShadow({colorState, blur: 2})};
  }

  :disabled {
    * {
      opacity: 0.5;
    }
  }

  * {
    position: relative;
    z-index: 1;
  }

  :before,
  :after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
  }

  ${props => Helpers.builderFaceEffect(props)}
`
