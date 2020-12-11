import styled from 'styled-components'
import {Grid as GridComponent} from '../Grid'

export const Grid = styled(GridComponent)`
  padding-bottom: 1rem;

  :last-of-type {
    padding-bottom: 0;
  }
`
