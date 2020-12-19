import React, {ReactNode} from 'react'
import * as Styled from './styled'

interface ButtonNumberControlProps {
  children: ReactNode
  onClick: () => void
}

function ButtonNumberControl({...props}: ButtonNumberControlProps) {
  return <Styled.ButtonNumberControl type="button" {...props} />
}

export default ButtonNumberControl
