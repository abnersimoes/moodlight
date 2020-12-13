import {ChangeEvent} from 'react'

export interface ColorState {
  current: string
  transition: number
}

export interface FormFieldCommonProps {
  colorState: ColorState
  isDisabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => unknown
}

export interface FormFieldProps extends FormFieldCommonProps {
  name: string
  type?: string
  value?: string
}

export type FormFieldStyledProps = FormFieldCommonProps
