import React from 'react'
import PlayIcon from '@static/svg/icon/play.svg'
import Button, {ButtonProps} from '../../Button'

const TransitionButton = (props: ButtonProps) => {
  return (
    <Button {...props}>
      <PlayIcon />
    </Button>
  )
}

export default TransitionButton
