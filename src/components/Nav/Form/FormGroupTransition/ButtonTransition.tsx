import React from 'react'
import PlayIcon from '@static/svg/icon/play.svg'
import PauseIcon from '@static/svg/icon/pause.svg'
import Button, {ButtonProps} from '../../../Button'

const ButtonTransition = ({isActive, ...props}: ButtonProps) => {
  return (
    <Button isActive={isActive} {...props}>
      {isActive ? <PauseIcon /> : <PlayIcon />}
    </Button>
  )
}

export default ButtonTransition
