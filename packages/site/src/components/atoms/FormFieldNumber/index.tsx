import React, {useCallback} from 'react'
import ArrowUpIcon from '@static/svg/icon/arrow-up.svg'
import ArrowDownIcon from '@static/svg/icon/arrow-down.svg'
import FormField from '../FormField'
import {FormFieldProps} from '../FormField/types'
import Grid, {Col} from '../Grid'
import ButtonNumberControl from './ButtonNumberControl'
import * as Helpers from './helpers'

function FormFieldNumber({name, value, min = 1, max = 120, ...props}: FormFieldProps) {
  const onSetDown = useCallback(() => {
    const field = Helpers.getFieldElement(name)

    field.stepDown()
    Helpers.triggerOnChange(field)
  }, [])

  const onSetUp = useCallback(() => {
    const field = Helpers.getFieldElement(name)

    field.stepUp()
    Helpers.triggerOnChange(field)
  }, [])

  return (
    <Grid counterFlowAlign="center">
      <FormField type="number" name={name} min={min} value={value} {...props} />
      <Col>
        <ButtonNumberControl isDisabled={parseInt(value) === max} onClick={onSetUp}>
          <ArrowUpIcon />
        </ButtonNumberControl>
        <ButtonNumberControl isDisabled={parseInt(value) === min} onClick={onSetDown}>
          <ArrowDownIcon />
        </ButtonNumberControl>
      </Col>
    </Grid>
  )
}

export default FormFieldNumber
