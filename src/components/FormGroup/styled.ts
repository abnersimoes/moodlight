import styled from 'styled-components'

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FormLabel = styled.label`
  font-size: 1.4rem;
  padding: 1rem 0 1rem 2rem;
  color: black;
  text-transform: lowercase;
`

export const Input = styled.input.attrs({size: 1})`
  font-size: 1.5rem;
  height: 4rem;
  background-color: white;
  border-radius: 2.5rem;
  border: none;
  outline: none;
  padding-left: 2rem;
  color: black

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

export const FormError = styled.span`
  display: block;
  color: red;
  position: absolute;
  bottom: 0;
  left: 0;
`
