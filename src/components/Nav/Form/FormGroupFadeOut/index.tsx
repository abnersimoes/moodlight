import React, {useEffect, useState} from 'react'
import {Col} from '../../../Grid'
import * as Styled from '../../styled'
import FormField from '../FormField'
import {FormGroupProps} from '../types'
import TransitionButton from './TransitionButton'

export const fieldName = 'fadeOut'
export const minValue = 1

const FormGroupFadeOut = ({color, value}: FormGroupProps) => {
  const [isFadeOut, setIsFadeOut] = useState(false)
  const [intervalFadeOut, setIntervalFadeOut] = useState(null)

  useEffect(() => {
    const fadeOutValue = parseInt(value)

    if (fadeOutValue >= minValue && isFadeOut) {
      const interval = setInterval(() => console.log('INTERVAL'), fadeOutValue * 1000)
      setIntervalFadeOut(interval)
    } else {
      clearInterval(intervalFadeOut)
      setIntervalFadeOut(null)
    }
  }, [value, isFadeOut])

  return (
    <Styled.Grid>
      <Col>
        <TransitionButton color={color} isActive={isFadeOut} onClick={() => setIsFadeOut(!isFadeOut)} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} color={color} isDisabled={!isFadeOut} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupFadeOut
