import React from 'react'
import * as Styled from './styled'
import {FormFieldProps} from './types'

function FormField({value, type = 'text', ...props}: FormFieldProps) {
  return <Styled.FormInput type={type} defaultValue={value} {...props} />
}

export default FormField
