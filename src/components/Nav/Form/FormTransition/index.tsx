import React, {useState} from 'react'
import {Col} from '../../../Grid'
import * as Styled from '../../styled'
import FormField from '../FormField'
import TransitionButton from './TransitionButton'

interface FormTransitionProps {
  color: string
}

export const fieldName = 'loop'

const FormTransition = ({color}: FormTransitionProps) => {
  const [isPlaying, setIsPlaying] = useState(true)

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

export default FormTransition
