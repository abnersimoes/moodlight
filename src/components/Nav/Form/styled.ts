import styled from 'styled-components'
import Button from '../../Button'

export interface ColorButtonProps {
  color: string
}

export const ColorButton = styled(Button)<ColorButtonProps>`
  background-color: ${({color}) => color};
`
