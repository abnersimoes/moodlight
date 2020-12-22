import React, {useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {useLoop} from '@contexts/loop/hooks'
import {useBlackout} from '@contexts/blackout/hooks'
import {Col} from '@components/atoms/Grid'
import FormFieldNumber from '@components/atoms/FormFieldNumber'
import * as Styled from '../styled'
import ButtonBlackout from './ButtonBlackout'

export const fieldEnabledName = 'blackout-enabled-time'
export const fieldDisabledName = 'blackout-disabled-time'

const FormGroupBlackout = () => {
  const [blackoutState, setBlackoutState] = useBlackout()
  const [{isActive: isActiveLoop, transition}] = useLoop()
  const [{current: color, contrastColor}] = useColor()
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
          contrastColor={contrastColor}
          transition={transition}
          isActive={blackoutState.isActive}
          isDisabled={!isActiveLoop}
          onClick={onToggleIsActive}
        />
      </Col>
      <Col flex={1}>
        <FormFieldNumber
          step={0.5}
          min={0.5}
          name={fieldEnabledName}
          color={color}
          contrastColor={contrastColor}
          transition={transition}
          value={timeToEnabled}
          isDisabled={!isActive}
          onChange={onSetTimeToEnabled}
        />
      </Col>
      <Col flex={1}>
        <FormFieldNumber
          step={0.5}
          min={0.5}
          name={fieldDisabledName}
          color={color}
          contrastColor={contrastColor}
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
