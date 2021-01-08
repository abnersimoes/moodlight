import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@store/reducers'
import {setTimeLoop, setIsActiveLoop} from '@store/actions'
import {LOOP_IS_ACTIVE, LOOP_TIME} from '@store/constants/storage'
import {getIsBrowser} from '@store/helpers'
import {Col} from '@components/atoms/Grid'
import FormFieldNumber from '@components/atoms/FormFieldNumber'
import * as Styled from '../styled'
import * as Helpers from '../helpers'
import ButtonLoop from './ButtonLoop'

export const fieldName = 'play-time'

const FormGroupLoop = () => {
  const {
    colors: {current: color, contrast},
    loop: {isActive, time, transition},
  } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const [minValue] = useState(3)
  const [isBrowser] = useState(getIsBrowser())

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem(LOOP_IS_ACTIVE, `${isActive}`)
      localStorage.setItem(LOOP_TIME, time)
    }
  }, [isActive, time])

  const onToggleIsActive = useCallback(() => dispatch(setIsActiveLoop(!isActive)), [isActive])

  const onSetTime = useCallback(props => {
    const nextTime = Helpers.getFieldValueOrMin({min: minValue, ...props})
    dispatch(setTimeLoop(nextTime))
  }, [])

  return (
    <Styled.Grid>
      <Col>
        <ButtonLoop
          color={color}
          contrastColor={contrast}
          transition={transition}
          isActive={isActive}
          onClick={onToggleIsActive}
          tabIndex={1}
        />
      </Col>
      <Col flex={1}>
        <FormFieldNumber
          name={fieldName}
          color={color}
          contrastColor={contrast}
          transition={transition}
          value={time}
          min={minValue}
          isDisabled={!isActive}
          onChange={onSetTime}
          tabIndex={2}
        />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupLoop
