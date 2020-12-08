import React from 'react'
import {FormGroupProps} from '../../FormGroup'
import * as Styled from './styled'

const NullComponent = () => null

function FormField(props: FormGroupProps) {
  return <Styled.FormGroup LabelComponent={NullComponent} ErrorComponent={NullComponent} {...props} />
}

export default FormField
