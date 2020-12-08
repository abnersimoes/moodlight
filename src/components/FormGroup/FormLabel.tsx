import React, {ReactElement, ReactNode} from 'react'
import * as Styled from './styled'

export interface FormLabelProps {
  name: string
  children: ReactNode
}

function FormLabel({name, children}: FormLabelProps): ReactElement {
  return <Styled.FormLabel htmlFor={name}>{children}</Styled.FormLabel>
}

export default FormLabel
