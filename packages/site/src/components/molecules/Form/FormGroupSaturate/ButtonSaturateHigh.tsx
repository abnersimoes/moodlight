import React from 'react'
import SatureHighIcon from '@static/svg/icon/saturate-high.svg'
import Button, {ButtonProps} from '@components/atoms/Button'

const ButtonSaturateHigh = ({...props}: ButtonProps) => {
  return (
    <Button {...props}>
      <SatureHighIcon />
    </Button>
  )
}

export default ButtonSaturateHigh
