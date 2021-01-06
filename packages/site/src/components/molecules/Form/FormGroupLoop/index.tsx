import React, {useCallback, useEffect, useState} from 'react'
import {LOOP_IS_ACTIVE, LOOP_TIME} from '@store/constants/storage'
import {useLoop} from '@contexts/contexts/loop/hooks'
import {useColor} from '@contexts/contexts/color/hooks'
import {getIsBrowser} from '@store/helpers'
import {Col} from '@components/atoms/Grid'
import FormFieldNumber from '@components/atoms/FormFieldNumber'
import * as Styled from '../styled'
import * as Helpers from '../helpers'
import ButtonLoop from './ButtonLoop'

export const fieldName = 'play-time'

const FormGroupLoop = () => {
  const [loopState, setLoopState] = useLoop()
  const [{current: color, contrastColor}] = useColor()
  const {isActive, time} = loopState
  const [minValue] = useState(3)
  const [isBrowser] = useState(getIsBrowser())

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem(LOOP_IS_ACTIVE, `${loopState.isActive}`)
      localStorage.setItem(LOOP_TIME, loopState.time)
    }
  }, [loopState.isActive, loopState.time])

  const onToggleIsActive = useCallback(() => setLoopState({...loopState, isActive: !loopState.isActive}), [loopState])

  const onSetTime = useCallback(
    props => {
      const time = Helpers.getFieldValueOrMin({min: minValue, ...props})
      setLoopState({...loopState, time})
    },
    [loopState]
  )

  return (
    <Styled.Grid>
      <Col>
        <ButtonLoop
          color={color}
          contrastColor={contrastColor}
          transition={loopState.transition}
          isActive={isActive}
          onClick={onToggleIsActive}
        />
      </Col>
      <Col flex={1}>
        <FormFieldNumber
          name={fieldName}
          color={color}
          contrastColor={contrastColor}
          transition={loopState.transition}
          value={time}
          min={minValue}
          isDisabled={!isActive}
          onChange={onSetTime}
        />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupLoop
