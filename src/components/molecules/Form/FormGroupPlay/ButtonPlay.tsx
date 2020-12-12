import React from 'react'
import PlayIcon from '@static/svg/icon/play.svg'
import PauseIcon from '@static/svg/icon/pause.svg'
import Button, {ButtonProps} from '@components/atoms/Button'

const ButtonPlay = ({isActive, ...props}: ButtonProps) => {
  return (
    <Button isActive={isActive} {...props}>
      {isActive ? <PauseIcon /> : <PlayIcon />}
    </Button>
  )
}

export default ButtonPlay
