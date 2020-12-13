import styled from 'styled-components'

type Align = AlignSetting | 'flex-start' | 'flex-end'

interface GridProps {
  flow?: 'row' | 'column'
  flowAlign?: Align
  counterFlowAlign?: Align
}

interface ColProps {
  flex?: number | number
  alignSelf?: Align
}

export const Grid = styled.div<GridProps>(({flow = 'row', flowAlign = 'initial', counterFlowAlign = 'initial'}) => {
  const aligns =
    flow === 'row' ? {justifyContent: flowAlign, alignItems: counterFlowAlign} : {justifyContent: counterFlowAlign, alignItems: flowAlign}

  return {
    display: 'flex',
    flexFlow: flow,
    ...aligns,
  }
})

export const Col = styled.div<ColProps>(({flex = 0, alignSelf = 'initial'}) => ({
  flex,
  alignSelf,
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  ':first-of-type': {
    paddingLeft: 0,
  },
  ':last-of-type': {
    paddingRight: 0,
  },
}))
