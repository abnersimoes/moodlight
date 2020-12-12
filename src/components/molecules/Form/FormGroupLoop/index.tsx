import React, {useCallback} from 'react'
import {useLoop} from '@contexts/loop/hooks'
import {useColor} from '@contexts/color/hooks'
import {Col} from '@components/atoms/Grid'
import FormField from '@components/atoms/FormField'
import * as Styled from '../styled'
import ButtonLoop from './ButtonLoop'

export const fieldName = 'play-time'

const FormGroupPlay = () => {
  const [loopState, setLoopState] = useLoop()
  const [color] = useColor()

  const onToggleIsActive = useCallback(() => setLoopState({...loopState, isActive: !loopState.isActive}), [loopState])

  const onSetTime = useCallback(
    ({target: {value: time}}) => {
      setLoopState({...loopState, time})
    },
    [loopState]
  )

  return (
    <Styled.Grid>
      <Col>
        <ButtonLoop color={color.current} isActive={loopState.isActive} onClick={onToggleIsActive} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} color={color.current} value={loopState.time} onChange={onSetTime} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupPlay
