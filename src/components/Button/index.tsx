import React, {ReactNode} from 'react'
import * as Styled from './styled'

export interface ButtonProps extends Styled.ButtonProps {
  onClick?: () => void
}

export interface ButtonWrapperProps extends ButtonProps {
  children: ReactNode
}

const Button = ({children, type = 'button', ...props}: ButtonWrapperProps) => {
  return (
    <Styled.Button type={type} {...props}>
      {children}
    </Styled.Button>
  )
}

export default Button
