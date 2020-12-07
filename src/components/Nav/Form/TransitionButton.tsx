import React from 'react'
import PlayIcon from '@static/svg/icon/play.svg'
import * as S from './styled'

type TransitionButtonProps = S.ColorButtonProps

const TransitionButton = ({color}: TransitionButtonProps) => {
  return (
    <S.ColorButton color={color}>
      <PlayIcon />
    </S.ColorButton>
  )
}

export default TransitionButton
