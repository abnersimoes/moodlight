import styled from 'styled-components'
import {Grid as GridComponent} from '../Grid'

export const NavWrapper = styled.nav`
  width: 15.5rem;
  margin: 1rem;
  padding: 1rem;
  // background-color: rgba(0, 0, 0, 0.2);
`

export const Grid = styled(GridComponent)`
  padding-bottom: 1rem;

  :last-of-type {
    padding-bottom: 0;
  }
`
