import React, {ReactElement, FunctionComponent} from 'react'
import {ErrorMessage} from 'formik'
import FormLabel, {FormLabelProps} from './FormLabel'
import FormField, {FormFieldProps} from './FormField'
import * as Styled from './styled'

export interface FormGroupProps extends FormFieldProps {
  label?: string
  LabelComponent?: FunctionComponent<FormLabelProps>
  FieldComponent?: FunctionComponent<FormFieldProps>
  ErrorComponent?: FunctionComponent
}

function FormGroup({
  name,
  label,
  color,
  FieldComponent = FormField,
  LabelComponent = FormLabel,
  ErrorComponent = Styled.FormError,
  type = 'text',
  ...props
}: FormGroupProps): ReactElement {
  const fieldName = `field-${name}`

  return (
    <Styled.FormGroup>
      <LabelComponent name={fieldName}>{label}</LabelComponent>
      <FieldComponent type={type} name={fieldName} id={fieldName} color={color} {...props} />
      <ErrorMessage name={fieldName} component={ErrorComponent} />
    </Styled.FormGroup>
  )
}

export default FormGroup
