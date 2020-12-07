import React, {ReactNode} from 'react'
import * as S from './styled'

export interface ButtonProps extends S.ButtonStyledProps {
  onClick?: () => void
}

export interface ButtonWrapperProps extends ButtonProps {
  children: ReactNode
}

const Button = ({children, ...props}: ButtonWrapperProps) => {
  return <S.ButtonWrapper {...props}>{children}</S.ButtonWrapper>
}

export default Button
