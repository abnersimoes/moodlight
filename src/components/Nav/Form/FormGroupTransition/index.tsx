import React, {useState, useEffect} from 'react'
import {Col} from '../../../Grid'
import * as Styled from '../../styled'
import FormField from '../FormField'
import TransitionButton from './TransitionButton'
import {FormGroupProps} from '../types'

export const fieldName = 'loop'

const FormGroupTransition = ({color, value}: FormGroupProps) => {
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const playingValue = parseInt(value)

    console.log(playingValue)
  }, [value])

  return (
    <Styled.Grid>
      <Col>
        <TransitionButton color={color} isActive={isPlaying} onClick={() => setIsPlaying(!isPlaying)} />
      </Col>
      <Col flex={1}>
        <FormField name={fieldName} color={color} isDisabled={!isPlaying} />
      </Col>
    </Styled.Grid>
  )
}

export default FormGroupTransition
