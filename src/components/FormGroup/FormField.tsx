import React, {ReactElement, RefObject} from 'react'
import {Field, FieldProps} from 'formik'
import * as Styled from './styled'

export interface FormFieldProps {
  name: string
  placeholder?: string
  id?: string
  type?: string
  autoFocus?: boolean
  innerRef?: RefObject<HTMLInputElement>
}

function FormField(props: FormFieldProps): ReactElement {
  return (
    <Field {...props}>
      {({field, form: {isSubmitting}}: FieldProps) => <Styled.Input {...props} {...field} disabled={isSubmitting} />}
    </Field>
  )
}

export default FormField
