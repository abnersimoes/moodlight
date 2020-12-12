import React from 'react'
import SatureLowIcon from '@static/svg/icon/saturate-low.svg'
import Button, {ButtonProps} from '@components/atoms/Button'

const ButtonSaturateLow = ({...props}: ButtonProps) => {
  return (
    <Button {...props}>
      <SatureLowIcon />
    </Button>
  )
}

export default ButtonSaturateLow
