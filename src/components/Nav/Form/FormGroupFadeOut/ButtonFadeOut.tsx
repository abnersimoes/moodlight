import React from 'react'
import PowerIcon from '@static/svg/icon/power.svg'
import Button, {ButtonProps} from '../../../Button'

const ButtonFadeOut = ({isActive, ...props}: ButtonProps) => {
  return (
    <Button isActive={isActive} {...props}>
      <PowerIcon />
    </Button>
  )
}

export default ButtonFadeOut
