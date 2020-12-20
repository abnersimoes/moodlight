import styled, {css} from 'styled-components'

interface NavWrapperProps {
  isActive: boolean
}

export const NavWrapper = styled.nav<NavWrapperProps>`
  width: 18rem;
  margin: 1rem;
  padding: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-out 0s;

  ${({isActive}) =>
    isActive &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`
