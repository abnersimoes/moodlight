import React from 'react'
import SatureLowIcon from '@static/svg/icon/saturate-low.svg'
import Button, {ButtonProps} from '../../Button'

const ButtonSaturateLow = ({...props}: ButtonProps) => {
  return (
    <Button isActive {...props}>
      <SatureLowIcon />
    </Button>
  )
}

export default ButtonSaturateLow
