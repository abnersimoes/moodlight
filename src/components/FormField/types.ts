import {ChangeEvent} from 'react'

export interface FormFieldCommonProps {
  color: string
  isDisabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown
}

export interface FormFieldProps extends FormFieldCommonProps {
  value?: string
}

export type FormFieldStyledProps = FormFieldCommonProps
