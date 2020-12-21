import React, {ReactNode} from 'react'
import * as Styled from './styled'

interface ButtonNumberControlProps {
  children: ReactNode
  onClick: () => void
  isDisabled?: boolean
}

function ButtonNumberControl({isDisabled, ...props}: ButtonNumberControlProps) {
  return <Styled.ButtonNumberControl disabled={isDisabled} type="button" {...props} />
}

export default ButtonNumberControl
