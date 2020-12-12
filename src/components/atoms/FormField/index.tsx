import React from 'react'
import * as Styled from './styled'
import {FormFieldProps} from './types'

function FormField({value, ...props}: FormFieldProps) {
  return <Styled.FormInput defaultValue={value} {...props} />
}

export default FormField
