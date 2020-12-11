import React, {useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {useBlackout} from '@contexts/blackout/hooks'
import {Col} from '../../Grid'
import * as Styled from '../styled'
import FormField from '../../FormField'
import ButtonBlackout from './ButtonBlackout'

export const fieldName = 'blackout-time'

const FormGroupBlackout = () => {
  const [colorState] = useColor()
  const [blackoutState, setBlackoutState] = useBlackout()

  const onToggleIsPlaying = useCallback(() => setBlackoutState({...blackoutState, isActive: !blackoutState.isActive}), [blackoutState])

  const onSetTime = useCallback(
    ({target: {value: time}}) => {
      setBlackoutState({...blackoutState, time})
    },
    [blackoutState]
  )

  return (
    <Styled.Grid>
      <Col>
        <ButtonBlackout color={colorState.color} isActive={blackoutState.isActive} onClick={onToggleIsPlaying} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} color={colorState.color} value={blackoutState.time} onChange={onSetTime} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupBlackout
