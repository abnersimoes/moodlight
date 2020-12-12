import React, {useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {Col} from '@components/atoms/Grid'
import FormField from '@components/atoms/FormField'
import * as Styled from '../styled'
import ButtonPlay from './ButtonPlay'

export const fieldName = 'play-time'

const FormGroupPlay = () => {
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
        <ButtonPlay color={colorState.color} isActive={colorState.isPlaying} onClick={onToggleIsPlaying} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} color={colorState.color} value={colorState.time} onChange={onSetTime} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupPlay
