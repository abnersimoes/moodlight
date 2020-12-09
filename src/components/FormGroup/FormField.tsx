import React, {ReactElement, RefObject} from 'react'
import {Field, FieldProps} from 'formik'
import * as Styled from './styled'

export interface FormFieldProps {
  name: string
  color: string
  placeholder?: string
  id?: string
  type?: string
  autoFocus?: boolean
  isDisabled?: boolean
  innerRef?: RefObject<HTMLInputElement>
}

function FormField({isDisabled, ...props}: FormFieldProps): ReactElement {
  return (
    <Field {...props}>
      {({field, form: {isSubmitting}}: FieldProps) => (
        <Styled.Input {...props} {...field} isDisabled={isDisabled} disabled={isDisabled || isSubmitting} />
      )}
    </Field>
  )
}

export default FormField
