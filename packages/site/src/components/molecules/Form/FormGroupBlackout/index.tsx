import React, {useState, useCallback} from 'react'
import {useColor} from '@contexts/color/hooks'
import {useLoop} from '@contexts/loop/hooks'
import {useBlackout} from '@contexts/blackout/hooks'
import {Col} from '@components/atoms/Grid'
import FormFieldNumber from '@components/atoms/FormFieldNumber'
import * as Styled from '../styled'
import * as Helpers from '../helpers'
import ButtonBlackout from './ButtonBlackout'

export const fieldEnabledName = 'blackout-enabled-time'
export const fieldDisabledName = 'blackout-disabled-time'

const FormGroupBlackout = () => {
  const [blackoutState, setBlackoutState] = useBlackout()
  const [{isActive: isActiveLoop, transition}] = useLoop()
  const [{current: color, contrastColor}] = useColor()
  const {isActive, timeToEnabled, timeToDisabled} = blackoutState
  const [minValue] = useState(0.25)

  const onToggleIsActive = useCallback(() => setBlackoutState({...blackoutState, isActive: !blackoutState.isActive}), [blackoutState])

  const onSetTimeToEnabled = useCallback(
    props => {
      const timeToEnabled = Helpers.getFieldValueOrMin({min: minValue, ...props})
      setBlackoutState({...blackoutState, timeToEnabled})
    },
    [blackoutState]
  )

  const onSetTimeToDisabled = useCallback(
    props => {
      const timeToDisabled = Helpers.getFieldValueOrMin({min: minValue, ...props})
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
          min={minValue}
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
          min={minValue}
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
