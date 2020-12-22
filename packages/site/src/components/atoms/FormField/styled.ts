import styled from 'styled-components'
import {FormFieldStyledProps} from './types'
import * as Helpers from './helpers'

export const FormInput = styled.input<FormFieldStyledProps>`
  width: 100%;
  height: 3.75rem;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  color: ${({contrastColor}) => contrastColor};
  background: ${Helpers.builderBackground};
  box-shadow: ${Helpers.builderShadow};
  transition: ${({transition}) => `all ${transition}s ease-in-out 0s`};

  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: Oswald Light;
    vertical-align: middle;
    color: black
    opacity: 0.5;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 3rem white inset;
  }

  :-webkit-autofill::first-line {
    font-family: Oswald Regular;
    font-size: 1.5rem;
  }
`
