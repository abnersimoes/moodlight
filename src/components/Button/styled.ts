import styled from 'styled-components'
import * as Helpers from './helpers'

export interface ButtonProps {
  color: string
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
  transition: 0.1s all ease 0s;
  position: relative;

  :hover {
    box-shadow: ${({color}) => Helpers.builderDropShadow({color, blur: 6})};
  }

  :active {
    box-shadow: ${({color}) => Helpers.builderDropShadow({color, blur: 2})};
  }
`
