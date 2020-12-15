import React, {useCallback} from 'react'
import {useLoop} from '@contexts/loop/hooks'
import {useBlackout} from '@contexts/blackout/hooks'
import {useColor} from '@contexts/color/hooks'
import {Col} from '@components/atoms/Grid'
import FormField from '@components/atoms/FormField'
import * as Styled from '../styled'
import ButtonLoop from './ButtonLoop'

export const fieldName = 'play-time'

const FormGroupPlay = () => {
  const [loopState, setLoopState] = useLoop()
  const [blackout, setBlackout] = useBlackout()
  const [color] = useColor()
  const {isActive, time} = loopState

  const onToggleIsActive = useCallback(() => {
    if (loopState.isActive) {
      setBlackout({...blackout, isActive: false})
    }
    setLoopState({...loopState, isActive: !loopState.isActive})
  }, [loopState, blackout])

  const onSetTime = useCallback(
    ({target: {value: time}}) => {
      setLoopState({...loopState, time})
    },
    [loopState]
  )

  return (
    <Styled.Grid>
      <Col>
        <ButtonLoop colorState={color} isActive={isActive} onClick={onToggleIsActive} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} colorState={color} value={time} isDisabled={!isActive} onChange={onSetTime} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupPlay
