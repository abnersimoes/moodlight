import styled from 'styled-components'

interface GridProps {
  flow?: string
}

interface ColProps {
  flex?: number | number
}

export const Grid = styled.div<GridProps>(({flow = 'row'}) => ({
  display: 'flex',
  flexFlow: flow,
}))

export const Col = styled.div<ColProps>(({flex = 0}) => ({
  flex,
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  ':first-of-type': {
    paddingLeft: 0,
  },
  ':last-of-type': {
    paddingRight: 0,
  },
}))
