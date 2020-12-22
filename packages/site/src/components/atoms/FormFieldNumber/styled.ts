import styled from 'styled-components'

export interface ButtonNumberControlProps {
  transition: number
  contrastColor: string
}

export const ButtonNumberControl = styled.button<ButtonNumberControlProps>`
  width: 1.875rem;
  height: 1.875rem;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  cursor: pointer;

  * {
    transition: ${({transition}) => `all ${transition}s ease-in-out 0s`};
    color: ${({contrastColor}) => contrastColor};
    fill: ${({contrastColor}) => contrastColor};
  }

  :disabled {
    opacity: 0.4;
    cursor: default;
  }
`
