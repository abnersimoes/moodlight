import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useControl} from '@hooks/control'
import {setFadeOut} from '@store/actions'
import {Col} from '../../../Grid'
import * as Styled from '../../styled'
import FormField from '../FormField'
import {FormGroupProps} from '../types'
import ButtonFadeOut from './ButtonFadeOut'

export const fieldName = 'fadeOut'
export const minValue = 1

const FormGroupFadeOut = ({color, control, value}: FormGroupProps) => {
  const [controlState, onSetFadeOut] = useControl(control)
  const dispatch = useDispatch()

  useEffect(() => {
    if (control !== controlState) {
      dispatch(setFadeOut({...controlState, time: value}))
    }
  }, [value, controlState])

  return (
    <Styled.Grid>
      <Col>
        <ButtonFadeOut color={color} isActive={controlState.isActive} onClick={onSetFadeOut} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} color={color} isDisabled={!controlState.isActive} />
      </Col>
      {/* <Col flex={1}>
        <FormField name={fieldName} color={color} isDisabled={!isActive} />
      </Col> */}
    </Styled.Grid>
  )
}

export default FormGroupFadeOut
