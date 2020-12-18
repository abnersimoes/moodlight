import React, {useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {useLoop} from '@contexts/loop/hooks'
import {useBlackout} from '@contexts/blackout/hooks'
import {Col} from '@components/atoms/Grid'
import FormField from '@components/atoms/FormField'
import * as Styled from '../styled'
import ButtonBlackout from './ButtonBlackout'

export const fieldName = 'blackout-time'

const FormGroupBlackout = () => {
  const [blackoutState, setBlackoutState] = useBlackout()
  const [{isActive: isActiveLoop, transition}] = useLoop()
  const [{current: color}] = useColor()
  const {isActive, timeToEnabled, timeToDisabled} = blackoutState

  const onToggleIsActive = useCallback(() => setBlackoutState({...blackoutState, isActive: !blackoutState.isActive}), [blackoutState])

  const onSetTimeToEnabled = useCallback(
    ({target: {value: timeToEnabled}}) => {
      setBlackoutState({...blackoutState, timeToEnabled})
    },
    [blackoutState]
  )

  const onSetTimeToDisabled = useCallback(
    ({target: {value: timeToDisabled}}) => {
      setBlackoutState({...blackoutState, timeToDisabled})
    },
    [blackoutState]
  )

  return (
    <Styled.Grid>
      <Col>
        <ButtonBlackout
          color={color}
          transition={transition}
          isActive={blackoutState.isActive}
          isDisabled={!isActiveLoop}
          onClick={onToggleIsActive}
        />
      </Col>
      <Col flex={1}>
        <FormField
          name={fieldName}
          color={color}
          transition={transition}
          value={timeToEnabled}
          isDisabled={!isActive}
          onChange={onSetTimeToEnabled}
        />
      </Col>
      <Col flex={1}>
        <FormField
          name={fieldName}
          color={color}
          transition={transition}
          value={timeToDisabled}
          isDisabled={!isActive}
          onChange={onSetTimeToDisabled}
        />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupBlackout
