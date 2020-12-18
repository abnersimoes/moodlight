import {ChangeEvent} from 'react'

export interface FormFieldCommonProps {
  color: string
  isDisabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown
}

export interface FormFieldProps extends FormFieldCommonProps {
  name: string
  transition: number
  type?: string
  value?: string
}

export interface FormFieldStyledProps extends FormFieldCommonProps {
  transition: number
}
