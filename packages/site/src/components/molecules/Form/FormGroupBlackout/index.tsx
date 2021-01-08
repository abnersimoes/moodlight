import React, {useState, useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@store/reducers'
import {setIsActiveBlackout, setTimeToEnabledBlackout, setTimeToDisabledBlackout} from '@store/actions'
import {BLACKOUT_IS_ACTIVE, BLACKOUT_TIME_TO_ENABLED, BLACKOUT_TIME_TO_DISABLED} from '@store/constants/storage'
import {getIsBrowser} from '@store/helpers'
import {Col} from '@components/atoms/Grid'
import FormFieldNumber from '@components/atoms/FormFieldNumber'
import * as Styled from '../styled'
import * as Helpers from '../helpers'
import ButtonBlackout from './ButtonBlackout'

export const fieldEnabledName = 'blackout-enabled-time'
export const fieldDisabledName = 'blackout-disabled-time'

const FormGroupBlackout = () => {
  const {
    colors: {current: color, contrast},
    loop: {isActive: isActiveLoop, transition},
    blackout: {isActive, timeToEnabled, timeToDisabled},
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const [minValue] = useState(0.25)
  const [isBrowser] = useState(getIsBrowser())

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem(BLACKOUT_IS_ACTIVE, `${isActive}`)
      localStorage.setItem(BLACKOUT_TIME_TO_ENABLED, timeToEnabled)
      localStorage.setItem(BLACKOUT_TIME_TO_DISABLED, timeToDisabled)
    }
  }, [isActive, timeToEnabled, timeToDisabled])

  const onToggleIsActive = useCallback(() => dispatch(setIsActiveBlackout(!isActive)), [isActive])

  const onSetTimeToEnabled = useCallback(props => {
    const timeToEnabled = Helpers.getFieldValueOrMin({min: minValue, ...props})
    dispatch(setTimeToEnabledBlackout(timeToEnabled))
  }, [])

  const onSetTimeToDisabled = useCallback(props => {
    const timeToDisabled = Helpers.getFieldValueOrMin({min: minValue, ...props})
    dispatch(setTimeToDisabledBlackout(timeToDisabled))
  }, [])

  return (
    <Styled.Grid>
      <Col>
        <ButtonBlackout
          color={color}
          contrastColor={contrast}
          transition={transition}
          isActive={isActive}
          isDisabled={!isActiveLoop}
          onClick={onToggleIsActive}
          tabIndex={5}
        />
      </Col>
      <Col flex={1}>
        <FormFieldNumber
          min={minValue}
          name={fieldEnabledName}
          color={color}
          contrastColor={contrast}
          transition={transition}
          value={timeToEnabled}
          isDisabled={!isActive}
          onChange={onSetTimeToEnabled}
          tabIndex={6}
        />
      </Col>
      <Col flex={1}>
        <FormFieldNumber
          min={minValue}
          name={fieldDisabledName}
          color={color}
          contrastColor={contrast}
          transition={transition}
          value={timeToDisabled}
          isDisabled={!isActive}
          onChange={onSetTimeToDisabled}
          tabIndex={9}
        />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupBlackout
