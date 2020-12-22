import styled from 'styled-components'

export interface LinkRepoProps {
  transition: number
  contrastColor: string
}

export const LinkRepo = styled.a<LinkRepoProps>`
  float: right;
  display: inline-flex;

  * {
    transition: ${({transition}) => `all ${transition}s ease-in-out 0s`};
    color: ${({contrastColor}) => contrastColor};
    fill: ${({contrastColor}) => contrastColor};
  }
`
