import styled from 'styled-components'
import * as Helpers from './helpers'

export interface ButtonProps {
  color: string
  contrastColor: string
  transition: number
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
  background-color: ${({color}) => color};
  transition: ${({transition}) => `all ${transition}s ease-in-out 0s`};
  position: relative;

  * {
    position: relative;
    z-index: 1;
    transition: ${({transition}) => `all ${transition / 3}s ease-in-out 0s`};
    color: ${({contrastColor}) => contrastColor};
    fill: ${({contrastColor}) => contrastColor};
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

  :active {
    box-shadow: ${({color}) => Helpers.builderDropShadow({color, blur: 2})};
  }

  :disabled {
    cursor: default;

    * {
      opacity: 0.5;
    }
  }

  ${props => Helpers.builderFaceEffect(props)}
`
