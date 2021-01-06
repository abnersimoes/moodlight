import React, {useState, useEffect, useCallback} from 'react'
import {BLACKOUT_IS_ACTIVE, BLACKOUT_TIME_TO_ENABLED, BLACKOUT_TIME_TO_DISABLED} from '@store/constants/storage'
import {useColor} from '@contexts/contexts/color/hooks'
import {useLoop} from '@contexts/contexts/loop/hooks'
import {useBlackout} from '@contexts/contexts/blackout/hooks'
import {getIsBrowser} from '@store/helpers'
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
  const [isBrowser] = useState(getIsBrowser())

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem(BLACKOUT_IS_ACTIVE, `${blackoutState.isActive}`)
      localStorage.setItem(BLACKOUT_TIME_TO_ENABLED, blackoutState.timeToEnabled)
      localStorage.setItem(BLACKOUT_TIME_TO_DISABLED, blackoutState.timeToDisabled)
    }
  }, [blackoutState.isActive, blackoutState.timeToEnabled, blackoutState.timeToDisabled])

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
