import React, {ReactElement} from 'react'
import * as Styled from './styled'
import {FormFieldProps} from './types'

function FormField({value, ...props}: FormFieldProps): ReactElement {
  return <Styled.FormInput defaultValue={value} {...props} />
}

export default FormField
