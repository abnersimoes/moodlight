import React from 'react'
import {FormGroupProps} from '../../FormGroup'
import * as Styled from './styled'

function FormField({...props}: FormGroupProps) {
  return <Styled.FormField {...props} />
}

export default FormField
