import React, {ReactNode} from 'react'
import * as S from './styled'

interface ButtonProps {
  children: ReactNode
}

const Button = ({children, ...props}: ButtonProps) => {
  return <S.ButtonWrapper {...props}>{children}</S.ButtonWrapper>
}

export default Button
