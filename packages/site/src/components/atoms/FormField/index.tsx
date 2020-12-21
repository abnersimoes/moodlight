import React from 'react'
import * as Styled from './styled'
import {FormFieldProps} from './types'

export const prefixId = 'field-'

function FormField({value, name, type = 'text', ...props}: FormFieldProps) {
  return <Styled.FormInput type={type} defaultValue={value} name={name} id={`${prefixId}${name}`} {...props} />
}

export default FormField
