import {ChangeEvent} from 'react'

export interface FormFieldCommonProps {
  color: string
  isDisabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown
  tabIndex?: number
}

export interface FormFieldProps extends FormFieldCommonProps {
  name: string
  transition: number
  contrastColor: string
  type?: string
  value?: string
  min?: number
  max?: number
  step?: number
}

export interface FormFieldStyledProps extends FormFieldCommonProps {
  transition: number
  contrastColor: string
}
