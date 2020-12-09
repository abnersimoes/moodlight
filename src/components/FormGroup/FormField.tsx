import React, {ReactElement, RefObject} from 'react'
import {Field, FieldProps} from 'formik'
import * as Styled from './styled'

export interface FormFieldProps {
  name: string
  color: string
  placeholder?: string
  id?: string
  type?: string
  forwardRef?: RefObject<HTMLInputElement>
  autoFocus?: boolean
  isDisabled?: boolean
}

function FormField({isDisabled, forwardRef: ref, ...props}: FormFieldProps): ReactElement {
  return (
    <Field {...props}>
      {({field, form: {isSubmitting}}: FieldProps) => (
        <Styled.Input {...props} {...field} ref={ref} isDisabled={isDisabled} disabled={isDisabled || isSubmitting} />
      )}
    </Field>
  )
}

export default FormField
