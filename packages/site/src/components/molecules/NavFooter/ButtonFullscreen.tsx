import React from 'react'
import EnableFullscreenIcon from '@static/svg/icon/enable-fullscreen.svg'
import DisableFullscreenIcon from '@static/svg/icon/disable-fullscreen.svg'
import Button, {ButtonProps} from '@components/atoms/Button'

const ButtonFullscreen = ({isActive, ...props}: ButtonProps) => {
  return (
    <Button isActive={isActive} {...props}>
      {isActive ? <DisableFullscreenIcon /> : <EnableFullscreenIcon />}
    </Button>
  )
}

export default ButtonFullscreen
