import React from 'react'
import SatureHighIcon from '@static/svg/icon/saturate-high.svg'
import Button, {ButtonProps} from '../../Button'

const ButtonSaturateHigh = ({...props}: ButtonProps) => {
  return (
    <Button isActive {...props}>
      <SatureHighIcon />
    </Button>
  )
}

export default ButtonSaturateHigh
