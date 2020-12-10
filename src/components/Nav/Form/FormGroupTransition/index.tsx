import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useControl} from '@hooks/control'
import {setLoop} from '@store/actions'
import {Col} from '../../../Grid'
import * as Styled from '../../styled'
import FormField from '../FormField'
import ButtonTransition from './ButtonTransition'
import {FormGroupProps} from '../types'

export const fieldName = 'loop'

const FormGroupTransition = ({color, control, value}: FormGroupProps) => {
  const [controlState, onSetLoop] = useControl(control)
  const dispatch = useDispatch()

  useEffect(() => {
    if (control !== controlState) {
      dispatch(setLoop({...controlState, time: value}))
    }
  }, [value, controlState])

  return (
    <Styled.Grid>
      <Col>
        <ButtonTransition color={color} isActive={controlState.isActive} onClick={onSetLoop} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} color={color} isDisabled={!controlState.isActive} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupTransition
