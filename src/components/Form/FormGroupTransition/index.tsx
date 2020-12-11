import React, {useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {Col} from '../../Grid'
import * as Styled from '../styled'
import FormField from '../../FormField'
import ButtonTransition from './ButtonTransition'

export const fieldName = 'loop'

const FormGroupTransition = () => {
  const [colorState, setColorState] = useColor()

  const onToggleIsPlaying = useCallback(() => setColorState({...colorState, isPlaying: !colorState.isPlaying}), [colorState])

  const onSetTime = useCallback(
    ({target: {value: time}}) => {
      setColorState({...colorState, time})
    },
    [colorState]
  )

  return (
    <Styled.Grid>
      <Col>
        <ButtonTransition color={colorState.color} isActive={colorState.isPlaying} onClick={onToggleIsPlaying} />
      </Col>
      <Col flex={1}>
        <FormField color={colorState.color} value={colorState.time} onChange={onSetTime} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupTransition
