import React, {ReactNode} from 'react'
import * as Styled from './styled'

export interface ButtonProps extends Styled.ButtonProps {
  onClick?: () => void
  isDisabled?: boolean
}

export interface ButtonWrapperProps extends ButtonProps {
  children: ReactNode
}

function Button({children, type = 'button', isDisabled = false, ...props}: ButtonWrapperProps) {
  return (
    <Styled.Button type={type} disabled={isDisabled} {...props}>
      {children}
    </Styled.Button>
  )
}

export default Button
