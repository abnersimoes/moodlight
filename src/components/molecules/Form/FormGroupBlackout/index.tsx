import React, {useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {useBlackout} from '@contexts/blackout/hooks'
import {Col} from '@components/atoms/Grid'
import FormField from '@components/atoms/FormField'
import * as Styled from '../styled'
import ButtonBlackout from './ButtonBlackout'

export const fieldName = 'blackout-time'

const FormGroupBlackout = () => {
  const [colorState] = useColor()
  const [blackoutState, setBlackoutState] = useBlackout()

  const onToggleIsActive = useCallback(() => setBlackoutState({...blackoutState, isActive: !blackoutState.isActive}), [blackoutState])

  const onSetTime = useCallback(
    ({target: {value: time}}) => {
      setBlackoutState({...blackoutState, time})
    },
    [blackoutState]
  )

  return (
    <Styled.Grid>
      <Col>
        <ButtonBlackout colorState={colorState} isActive={blackoutState.isActive} onClick={onToggleIsActive} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} colorState={colorState} value={blackoutState.time} onChange={onSetTime} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupBlackout
